const pgp = require('pg-promise')();

class MoodifyDatabase {
  constructor(name) {
    const connectionString =
      process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;
    this.db = pgp(connectionString);
  }

  dbConnectionCheck = () => {
    console.log('Testing database connection...');
    return this.getMoodsCount().then((count) =>
      console.log(`Found ${count} moods.`)
    );
  };

  getMoodsCount = () => {
    return this.db.one('SELECT count(*) FROM moods').then((m) => m.count);
  };

  getAllMoods = () => {
    return this.db.any(
      `SELECT 
      m.id,
      m.name,
      m.blurb,
      m.avatar,
      m.color,
      m.accent,
      m.trim,
      m.taccent
      FROM moods m`
    );
  };

  getAffirmationByMood = (mood) => {
    return this.db.any(
      `SELECT 
      a.id,
      a.affirmation,
      a.mood_id,
      m.name
      FROM affirmations a
      INNER JOIN moods m on m.id = a.mood_id
      WHERE name = $1`,
      mood
    );
  };

  getAffirmationById = (id) => {
    return this.db.one(
      `SELECT *
       FROM affirmations 
       WHERE id = $1`,
      id
    );
  };

  // look up memoization
  // subquery ?
  addAffirmation = ({ affirmation, mood }) => {
    return this.db.one(
      `INSERT INTO affirmations 
      (affirmation, mood_id)
      VALUES ($1, $2)
      RETURNING *`,
      [affirmation, mood]
    );
  };

  deleteAffirmation = (id) => {
    return this.db.result(
      `DELETE 
      FROM affirmations 
      WHERE id = $1`,
      id,
      (a) => a.rowCount
    );
  };
}

module.exports = MoodifyDatabase;
