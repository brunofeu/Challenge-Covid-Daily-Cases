const casesModel = require('../models/casesModel');

const getAll = async () => {
  const cases = await casesModel.getAll();
  return cases;
};

module.exports = {
  getAll,
};
