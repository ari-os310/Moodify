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
  voice: 'en-US_AllisonV3Voice',
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

// GET AFFIRMATION TEXT
app.get('/affirmations/:id.txt', (req, res) => {
  db.getAffirmationById(req.params.id).then((affirmation) =>
    res.type('txt').send(affirmation.affirmation)
  );
});

/*** leaving here for future PUT/DELETE *** \

// Get Affirmation by Id 
// app.get('/affirmations/:id', (req, res) => {
//   db.getAffirmationById(req.params.id).then((affirmation) =>
//     res.json(affirmation)
//   );
// });

/* TEXT TO SPEECH */

// PLAY TEXT TO SPEECH BY AFFIRMATION
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

// GET ALL VOICES
app.get('/voicelist', (__, res) => {
  textToSpeech
    .listVoices()
    .then((voices) => {
      res.json(voices.result.voices);
    })
    .catch((err) => {
      console.log('error:', err);
      res.sendStatus(500);
    });
});

// GET VOICE BY NAME
app.get('/voices/:voice', (req, res) => {
  const voice = { voice: req.params.voice };
  textToSpeech
    .getVoice(voice)
    .then((voice) => {
      res.json(voice.result);
    })
    .catch((err) => {
      console.log('error:', err);
      res.sendStatus(500);
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
