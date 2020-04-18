// REQUIRED
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MoodifyDB = require('./src/moodify-db');

// DEFAULT CONST
const PORT = process.env.PORT || 3001;
const DEFAULT_DB_NAME = 'moodify_db';
const dbName = process.env.DB_NAME || DEFAULT_DB_NAME;
const db = new MoodifyDB(dbName);

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));

// ROUTES

/* CHECK DATABASE CONNECTION */
db.dbConnectionCheck().then(() => {
  app.listen(PORT, () => {
    console.log(`Moodify express app listening on port ${PORT}`);
  });
});
