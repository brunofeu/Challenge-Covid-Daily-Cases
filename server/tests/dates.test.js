const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../models/connection');

const datesModel = require('../models/datesModel');
// const datesService = require('../services/datesService');
// const datesController = require('../controllers/datesController');

const datesMock = [
  { date: '2020-05-11' },
  { date: '2020-05-25' },
  { date: '2020-06-08' },
  { date: '2020-06-22' },
];

describe("Faz uma requisição na rota '/dates por todas as datas'", () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([[datesMock]]);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  it("retorna um array", async () => {
    const response = await datesModel.getAll();

    expect(response).to.be.a('array');
  });

  it('tal objeto possui as informações esperadas', async () => {
    const response = await datesModel.getAll();

    expect(response).to.include.all.keys('date');
  });
});
