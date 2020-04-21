// REQUIRED
const express = require('express');
const cors = require('cors');
const path = require('path');
const MoodifyDB = require('./moodify-db');

/* DEFAULT CONST */
const PORT = process.env.PORT || 3001;
const DEFAULT_DB_NAME = 'moodify_db';
const dbName = process.env.DB_NAME || DEFAULT_DB_NAME;
const db = new MoodifyDB(dbName);

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));

/* ROUTES */
app.get('/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      greeting: `Hello ${name}!`,
    })
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'biuld', 'index.html'));
  })
}

/* CHECK DATABASE CONNECTION */
db.dbConnectionCheck().then(() => {
  app.listen(PORT, () => {
    console.log(`Moodify express app listening on port ${PORT}`);
  });
});
