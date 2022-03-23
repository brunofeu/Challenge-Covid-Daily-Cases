const casesModel = require('../models/casesModel');

const getAll = () => {
  const cases = casesModel.getAll();
  return cases;
};

module.exports = {
  getAll,
};
