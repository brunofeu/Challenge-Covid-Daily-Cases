const casesModel = require('../models/casesModel');

const getAll = async (startDate, endDate) => {
  const cases = await casesModel.getAll(startDate, endDate);
  return cases;
};

module.exports = {
  getAll,
};
