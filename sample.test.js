const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Adjust the path as needed
const should = chai.should();

chai.use(chaiHttp);

describe('Sample Test', () => {
  it('it should GET all the items', (done) => {
    chai.request(server)
        .get('/api/items') // Adjust the endpoint as needed
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
  });
});
