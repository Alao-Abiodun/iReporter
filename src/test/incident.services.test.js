const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const db = require("../databases/db");

const { incidents } = require("../utils/dummyData");

let should = chai.should();

chai.use(chaiHttp);

describe("Incidents", () => {
  //   describe("GET fetch all red-flags", () => {
  //     it("user should be able to fetch all red-flag", (done) => {
  //       chai
  //         .request(app)
  //         .get("/api/v1/red-flags")
  //         .send(incidents)
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           res.should.have.status(200);
  //         });
  //       done();
  //     });
  //   });

  //   describe("GET fetch single red-flags", () => {
  //     it("should retrieve only a single red-flags", (done) => {
  //       const id = incidents[incidents.length - 1].id;
  //       const foundFlag = incidents.find(
  //         (incident) => incident.id === parseInt(id)
  //       );
  //       chai
  //         .request(app)
  //         .get("/api/v1/red-flags/" + id)
  //         .send(foundFlag)
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           res.should.have.status(200);
  //         });
  //       done();
  //     });
  //   });

  describe("POST red-flag or intervention record", () => {
    //   const id = incidents[incidents.length - 1].id;
    //   let newId = id + 1;
    it("should create a reg-flag or intervention", (done) => {
      let incident = {
        createdOn: "2021-08-02",
        createdBy: "salaudeen",
        type: ["red-flag"],
        location: ["2.35", "1.90"],
        status: ["rejected"],
        images: "road.jpg",
        vidoes: "dirty.mp4",
        comment: "This road is littered with dirt, and can cause flood",
        userId: 3,
      };
      const newRecord = db.execute(
        "INSERT INTO incidents (createdBy, createdOn, type, location, status, images, videos, comment, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          incidentDetails.createdBy,
          incidentDetails.createdOn,
          incidentDetails.type,
          incidentDetails.location,
          incidentDetails.status,
          incidentDetails.images,
          incidentDetails.videos,
          incidentDetails.comment,
          incidentDetails.userId,
        ]
      );
      chai
        .request(app)
        .post("/api/v1/red-flags")
        .send(newRecord)
        .end((err, res) => {
          if (err) console.log(err);
          res.should.have.status(201);
        });
      done();
    });
  });

  //   describe("UPDATE user should be able to change location record", () => {
  //     it("should update red-flag location", (done) => {
  //       const id = incidents[incidents.length - 1].id;
  //       const updatedFlagLocation = incidents.find(
  //         (incident) => incident.id === parseInt(id)
  //       );
  //       location = ["2.33", "0.19"];
  //       updatedFlagLocation.location = location;
  //       chai
  //         .request(app)
  //         .get("/api/v1/red-flags")
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           chai
  //             .request(app)
  //             .put("/api/v1/red-flags/" + id + "/location")
  //             .send(updatedFlagLocation)
  //             .end((err, res) => {
  //               if (err) console.log(err);
  //               res.should.have.status(200);
  //               done();
  //             });
  //         });
  //     });
  //   });

  //   describe("UPDATE user should be able to change comment record", () => {
  //     it("should update red-flag comment", (done) => {
  //       const id = incidents[incidents.length - 1].id;
  //       const updatedFlagLocation = incidents.find(
  //         (incident) => incident.id === parseInt(id)
  //       );
  //       comment = "Please help find the organization to fix this issue.";
  //       updatedFlagLocation.comment = comment;
  //       chai
  //         .request(app)
  //         .get("/api/v1/red-flags")
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           chai
  //             .request(app)
  //             .put("/api/v1/red-flags/" + id + "/comment")
  //             .send(updatedFlagLocation)
  //             .end((err, res) => {
  //               if (err) console.log(err);
  //               res.should.have.status(200);
  //               done();
  //             });
  //         });
  //     });
  //   });

  //   describe("DELETE /api/v1/red-flags/:id", () => {
  //     it("should remove a red-flag record", (done) => {
  //       const id = incidents[incidents.length - 1].id;
  //       const flag = incidents.find((incident) => incident.id === parseInt(id));
  //       const removeRedFlag = incidents.splice(flag, 1);
  //       chai
  //         .request(app)
  //         .get("/api/v1/red-flags")
  //         .end((err, res) => {
  //           if (err) console.log(err);
  //           chai
  //             .request(app)
  //             .delete("/api/v1/red-flags/" + id)
  //             .send(removeRedFlag)
  //             .end((err, res) => {
  //               if (err) console.log(err);
  //               res.should.have.status(200);
  //               done();
  //             });
  //         });
  //     });
  //   });
});
