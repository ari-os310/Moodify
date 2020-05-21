// REQUIRED
require('dotenv').config();
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const express = require('express');
const path = require('path');
const cache = require('express-redis-cache')({ expire: 172800 });
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

cache.on('message', function (message) {
  console.log('cache', message);
});
cache.on('error', function (error) {
  console.error('cache', error);
});

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

// POST AFFIRMATION
app.post('/moods/mood/affirmations', (req, res) => {
  db.addAffirmation({
    affirmation: req.body.affirmation,
    mood: req.body.mood,
  })
    .then((affirmation) => res.json(affirmation))
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .type('json')
        .send({ message: err.message, stack: err.stack.split('\n') });
    });
});

// DELETE AFFIRMATION
app.delete('/affirmations/:id', (req, res) => {
  const id = req.params.id;
  db.deleteAffirmation(id).then((rowcount) => {
    if (rowcount === 1) {
      res.status(200).json({
        result: 'ok',
        message: `Affirmation with id ${id} was deleted.`,
      });
    } else {
      res.status(404).json({
        result: 'error',
        message: `Affirmation with id ${id} not found.`,
      });
    }
  });
});

/* TEXT TO SPEECH */

// PLAY TEXT TO SPEECH BY AFFIRMATION
app.get('/affirmations/:id.mp3', cache.route({ binary: true }), (req, res) => {
  console.log(res.use_express_redis_cache);
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
      .catch((err) => {
        console.log('error:', err);
        res.sendStatus(500);
      })
  );
});

// GET ALL VOICES
app.get('/voicelist', cache.route(), (__, res) => {
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

/* *Next thing to implement, changing voice selection* */
// GET VOICE BY NAME
app.get('/voices/:voice', cache.route(), (req, res) => {
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
