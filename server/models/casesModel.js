const connection = require('./connection');

const getByDate = async (date) => {
  const query = 'SELECT location, date, variant, num_sequences AS quantity FROM covid_daily_cases WHERE date=? GROUP BY location, variant';
  const [result] = await connection.execute(query, [date]);
  return result;
};

module.exports = {
  getByDate,
};
