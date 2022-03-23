const datesModel = require('../models/datesModel');

const getAll = async () => {
  const dates = await datesModel.getAll();
  return dates;
};

module.exports = {
  getAll,
};
