const pgp = require('pg-promise')();

class MoodifyDatabase {
  constructor(name) {
    const connectionString = `postgres://localhost:5432/${name}`;
    console.log('Postgres DB => ', connectionString);
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
}

module.exports = MoodifyDatabase;
