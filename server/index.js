const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const mysql = require('mysql');

dotenv.config()


const connection = mysql.createConnection('mysql://o95a4nmci714ah9m:oscncg12hf55adaz@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xwgtp3ipgqrphvlk');

connection.connect();

connection.query('SELECT * FROM covid_daily_cases LIMIT 100;', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows);
});

connection.end();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/test', (_req, res) => {
  test
  res.status(200).json({message: 'Fullstack Challenge 2022 🏅 - Covid Daily Cases'});
});

// app.get('*', (_req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// app.get('/cases/:date/count', (_req, res) => {})
// app.get('/cases/:date/cumulative', (_req, res) => {})
// app.get('/dates', (_req, res) => {})

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));