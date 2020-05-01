// REQUIRED
require('dotenv').config();
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const express = require('express');
const cors = require('cors');
const path = require('path');
const MoodifyDB = require('./moodify-db');

/* DEFAULT CONST */
const app = express();
const PORT = process.env.PORT || 3001;
const DEFAULT_DB_NAME = 'moodify_db';
const dbName = process.env.DB_NAME || DEFAULT_DB_NAME;
const db = new MoodifyDB(dbName);
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TTS_API_KEY,
  }),
  url: process.env.TTS_URL,
});

const synthesizeParams = {
  accept: 'audio/mp3',
  voice: 'en-US_AllisonVoice',
};

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));

/* ROUTES */

// GET ALL MOODS
app.get('/moods', (_unused, res) => {
  db.getAllMoods()
    .then((moods) => res.json(moods))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

//GET AFFIRMATIONS BY MOOD
app.get('/moods/:mood/affirmations', (req, res) => {
  const mood = req.params.mood;
  db.getAffirmationByMood(mood)
    .then((affirmations) => res.json(affirmations))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.get('/affirmations/:id.txt', (req, res) => {
  db.getAffirmationById(req.params.id).then((affirmation) =>
    res.type('txt').send(affirmation.affirmation)
  );
});

app.get('/affirmations/:id.mp3', (req, res) => {
  db.getAffirmationById(req.params.id).then((affirmation) =>
    textToSpeech
      .synthesize({ text: affirmation.affirmation, ...synthesizeParams })
      .then((audio) => {
        const data = [];
        audio.result
          .on('data', (chunk) => {
            data.push(chunk);
          })
          .on('end', () => {
            const buffer = Buffer.concat(data);
            res.type('mp3').send(buffer);
          });
      })
  );
});

// Get Affirmation by Id
app.get('/affirmations/:id', (req, res) => {
  db.getAffirmationById(req.params.id).then((affirmation) =>
    res.json(affirmation)
  );
});

/* Text to Speech */

// Voice List
app.get('/voiceList', (__, res) => {
  textToSpeech
    .listVoices()
    .then((voices) => {
      res.json(voices);
    })
    .catch((err) => {
      console.log('error:', err);
      res.sendStatus(500);
    });
});

// Get Audio File
app.get('/helloWorld', (__, res) => {
  textToSpeech
    .synthesize(synthesizeParams)
    .then((audio) => {
      console.log(audio);
      const data = [];
      console.log(
        'The audio object is of type:',
        typeof audio,
        '--and is:',
        audio
      );

      // res.type('mp3')
      // res.send(audio.result.read())
      audio.result
        .on('data', (chunk) => {
          data.push(chunk);
        })
        .on('end', () => {
          const buffer = Buffer.concat(data);
          res.type('mp3').send(buffer);
          // res.json({ helloWorld: buffer.toString('base64') });
        });
    })
    .catch((err) => {
      console.log('error:', err, err.stack);
    });
});

/* FOR HEROKU-DEPLOYMENT */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/* CHECK DATABASE CONNECTION */
db.dbConnectionCheck().then(() => {
  app.listen(PORT, () => {
    console.log(`Moodify express app listening on port ${PORT}`);
  });
});
