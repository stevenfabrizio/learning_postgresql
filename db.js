const Pool = require("pg").Pool;
require('dotenv').config()

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
};
const preConfig = {
  connectionString: process.env.DATABASE_URL //heroku addons
};

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'production' ? preConfig : devConfig,
  ssl: { rejectUnauthorized: false }
});


// const pool = new Pool({
//   user: "postgres",
//   password: "idk",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo"
// });

module.exports = pool;