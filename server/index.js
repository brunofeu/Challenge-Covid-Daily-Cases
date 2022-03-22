const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Fullstack Challenge 2021 🏅 - Covid Daily Cases'});
});

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));