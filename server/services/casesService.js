const casesModel = require('../models/casesModel');
const datesModel = require('../models/datesModel');

const getByDate = async (date) => {
  const cases = await casesModel.getByDate(date);
  return cases;
};

const getCumulativeUntilDate = async (date) => {
  const [firstDate] = await datesModel.getAll();
  const cases = await casesModel.getCumulativeUntilDate(date, firstDate.date);
  return cases;
};

module.exports = {
  getByDate,
  getCumulativeUntilDate,
};
