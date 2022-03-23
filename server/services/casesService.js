const casesModel = require('../models/casesModel');

const getByDate = async (date) => {
  const cases = await casesModel.getByDate(date);
  return cases;
};

const getCumulativeUntilDate = async (date) => {
  const cases = await casesModel.getCumulativeUntilDate(date);
  return cases;
};

module.exports = {
  getByDate,
  getCumulativeUntilDate,
};
