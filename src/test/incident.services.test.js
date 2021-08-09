const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { incidents } = require('../utils/dummyData');

let should = chai.should();

chai.use(chaiHttp);

describe('Incidents', () => {
    describe('GET fetch all red-flags', () => {
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

    describe('GET fetch single red-flags', () => {
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

    describe('POST red-flag or intervention record', () => {
        const id = incidents[incidents.length - 1].id;
        let newId = id + 1;
        it('should create a reg-flag or intervention', done => {
            let newRecord = {
                "id": newId,
                "createdOn": "2021-08-02",
                "createdBy": "salaudeen",
                "type": ["red-flag"],
                "location": ["2.35", "1.90"],
                "status": ["rejected"],
                "images": "road.jpg",
                "vidoes": "dirty.mp4",
                "comment": "This road is littered with dirt, and can cause flood"
            }
            chai.request(app)
                .post('/api/v1/red-flags')
                .send(newRecord)
                .end((err, res) => {
                    if (err) console.log(err);
                    res.should.have.status(201);
                })
            done();
        })
    })

    describe('UPDATE user should be able to change record', () => {
        it('should update red-flag location', done => {
            const id = incidents[incidents.length - 1].id;
            const updatedFlag = incidents.find(incident => incident.id === parseInt(id));
            chai.request(app)
                .get('/api/v1/red-flags')
                .end((err, res) => {
                    if (err) console.log(err);
                    chai.request(app)
                        .put('/api/v1/red-flags/' + id + '/location')
                        .send(updatedFlag)
                        .end((err, res) => {
                            if (err) console.log(err);
                            res.should.have.status(200);
                            done();
                        });
                });
        })
    })
})