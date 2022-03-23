require('dotenv').config({ path: 'server/.env' });
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const casesController = require('./controllers/casesController');

// const { JAWSDB_URL } = process.env;

// const connection = mysql.createConnection(JAWSDB_URL);

// connection.connect();

// connection.query('SELECT * FROM covid_daily_cases LIMIT 5;', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows);
// });

// connection.end();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Fullstack Challenge 2022 🏅 - Covid Daily Cases' });
});

app.get('/cases/:date/count', casesController.getAll);

// app.get('*', (_req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// app.get('/cases/:date/cumulative', (_req, res) => {})
// app.get('/dates', (_req, res) => {})

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
