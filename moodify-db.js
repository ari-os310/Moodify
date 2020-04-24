const pgp = require('pg-promise')();

class MoodifyDatabase {
  constructor(name) {
    const connectionString =
      process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;
    this.db = pgp(connectionString);
  }

  dbConnectionCheck() {
    console.log('Testing database connection...');
    return this.getMoodsCount().then((count) =>
      console.log(`Found ${count} moods.`)
    );
  }

  getMoodsCount() {
    return this.db.one('SELECT count(*) FROM moods').then((m) => m.count);
  }

  getAllMoods() {
    return this.db.any(
      `SELECT 
      m.mood_id,
      m.mood_type,
      m.mood_blurb,
      m.mood_avatar
      FROM moods m`
    );
  }

  getAffirmationByMood(mood) {
    return this.db.any(
      `SELECT 
      a.id,
      a.affirmation,
      a.mood_id,
      m.mood_type AS mood 
      FROM affirmations a
      INNER JOIN moods m on m.mood_id = a.mood_id
      WHERE m.mood_type = $1`,
      mood
    );
  }
}

module.exports = MoodifyDatabase;
