const mysql = require('mysql');
require('dotenv').config({ path: 'server/.env' });

const { JAWSDB_URL } = process.env;

// const connection = mysql.createConnection(JAWSDB_URL);

// connection.connect();

// connection.query('SELECT * FROM covid_daily_cases LIMIT 5;', (err, rows) => {
//   if (err) throw err;
//   // console.log(rows);
//   return (rows);
// });

// connection.end();

const pool = mysql.createPool(JAWSDB_URL);

// connection.query('SELECT * FROM covid_daily_cases LIMIT 5', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = pool;

