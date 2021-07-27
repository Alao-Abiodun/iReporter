const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const users = require('../utils/dummyData');

let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    describe('create a new User', () => {
        it('should add user into the Arrays of object', done => {
            // let userLength = users.length;
            // let lastUserId = userLength[userLength - 1].id;
            // newId = lastUserId + 1;
            let newUser = {
                firstname: 'fawaz',
                lastname: 'illyas',
                othername: 'ayinla',
                email: 'fawaz@gmail.com',
                phoneNumber: '090232434542',
                username: 'fawily',
                registered: true, 
                isAdmin: false
            };
            chai.request(app)
                .post('/api/v1/user')
                .send(newUser)
                .end((err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('email');
                    res.body.data.email.should.be.equal('fawaz@gmail.com')
                })
                done();
        })

        describe('Existing Users can login successfully', () => {
            it ('user should be able to login successfully if its existed', done => {
                let userEmail = {email: 'fawaz@gmail.com'}
                chai.request(app)
                    .post('/api/v1/user/login')
                    .send(userEmail)
                    .end((err, res) => {
                        if (err) {
                            console.log(err);
                        }
                        res.body.should.be.a('object');
                        res.body.data.should.be.a('object');                        
                    })
                    done();
            })
        })
    })
})

