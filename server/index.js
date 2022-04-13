require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const casesController = require('./controllers/casesController');
const datesController = require('./controllers/datesController');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Fullstack Challenge 2022 🏅 - Covid Daily Cases' });
});

app.get('/cases/:date/count', casesController.getByDate);
app.get('/cases/:date/cumulative', casesController.getCumulativeUntilDate);
app.get('/dates', datesController.getAll);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
