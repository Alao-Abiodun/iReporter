const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken");
const db = require("../databases/db");
require("dotenv").config();

const { ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET } = process.env;

const { users } = require("../utils/dummyData");

let should = chai.should();

chai.use(chaiHttp);

describe("User", () => {
  describe("create a new User", () => {
    it("should add user into the Arrays of object", (done) => {
      // let userLength = users.length;
      // let lastUserId = users[userLength - 1].id;
      // newId = lastUserId + 1;
      let user = {
        firstname: "fawaz",
        lastname: "illyas",
        othernames: "ayinla",
        email: "fawaz@gmail.com",
        phonenumber: "090232434542",
        username: "fawily",
        registered: true,
        isAdmin: false,
      };
      const newUser = db.execute(
        "INSERT INTO users (firstName, lastName, othernames, email, phonenumber, username, registered, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          user.firstname,
          user.lastname,
          user.othernames,
          user.email,
          user.phonenumber,
          user.username,
          user.registered,
          user.isAdmin,
        ]
      );
      chai
        .request(app)
        .post("/api/v1/user")
        .send(newUser)
        .end((err, res) => {
          if (err) {
            console.log(err);
          }
          // res.body.should.be.a('object');
          res.body.should.have.property("status");
          res.body.should.have.property("message");
          // res.body.should.have.property('data');
          // res.body.data.should.have.property('email');
          // res.body.data.email.should.be.equal('fawaz@gmail.com')
        });
      done();
    });
  });

  //   describe("Existing Users can login successfully", () => {
  //     it("user should be able to login successfully if its existed", (done) => {
  //       const email = "fawaz@gmail.com";
  //       const users = db.execute("SELECT * FROM users");
  //       console.log(users[0]);
  //       const foundUser = users[0].find((user) => user.email == email);
  //       const accessToken = jwt.sign(email, ACCESS_TOKEN_SECRET);

  //       //   const foundUser = users.find((user) => user.email == email);
  //       //   const accessToken = jwt.sign(email, ACCESS_TOKEN_SECRET);
  //       chai
  //         .request(app)
  //         .post("/api/v1/user/login")
  //         .send({ foundUser, token: accessToken })
  //         .end((err, res) => {
  //           if (err) {
  //             console.log(err);
  //           }
  //           res.should.have.status(200);
  //         });
  //       done();
  //     });
  //   });
});
