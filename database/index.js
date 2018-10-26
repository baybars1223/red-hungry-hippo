require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  version: '10',
  connection: {
    host: '127.0.0.1',
    user: 'mikemacbookar',
    port: '5432',
    // password : 'your_database_password',
    database: 'job-server-engine',
  },
});
