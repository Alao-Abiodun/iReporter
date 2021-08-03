const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {incidents} = require('../utils/dummyData');

let should = chai.should();

chai.use(chaiHttp);

describe('Incidents', () => {
    describe('fetch all red-flags', () => {
        it('user should be able to fetch all red-flag', done => {
            chai.request(app)
                .get('/api/v1/red-flags')
                .send(incidents)
                .end((err, res) => {
                    if (err) console.log(err);
                    res.should.have.status(200);
                })
            done();
        })
    })

    describe('fetch single red-flags', () => {
        it('should retrieve only a single red-flags', done => {
            const id = incidents[incidents.length - 1].id;
            const foundFlag = incidents.find(incident => incident.id === parseInt(id));
            chai.request(app)
                .get('/api/v1/red-flags/' + id)
                .send(foundFlag)
                .end((err, res) => {
                    if (err) console.log(err);
                    res.should.have.status(200);
                })
                done();
        })
    })
})