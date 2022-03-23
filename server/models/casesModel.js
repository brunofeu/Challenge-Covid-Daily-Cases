const connection = require('./connection');

const getByDate = async (date) => {
  const query = 'SELECT location, date, variant, num_sequences AS day_quantity FROM covid_daily_cases WHERE date=? GROUP BY location, variant';
  const [result] = await connection.execute(query, [date]);
  return result;
};

const getCumulativeUntilDate = async (date) => {
  const query = 'SELECT location, date, variant, num_sequences_total AS total FROM covid_daily_cases WHERE date=? GROUP BY location, variant';
  const [result] = await connection.execute(query, [date]);
  return result;
};

module.exports = {
  getByDate,
  getCumulativeUntilDate,
};
