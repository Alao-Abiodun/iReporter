const { incidents } = require("../utils/dummyData");
const Incident = require("../models/incident.model");
const customError = require("../utils/customError");

const db = require("../databases/db");

const incidentServices = {
  //@describe fetch all red-flags
  //@public api/v1/red-flags

  async fetchRedFlags() {
    const [result, fields] = await db.execute("SELECT * FROM incidents");
    return result;
  },

  // // @describe fetch a specific red-flag
  // // @public api/v1/

  async retrieveSingleRedFlag(id) {
    const [result, fields] = await db.execute(
      "SELECT * FROM incidents WHERE id=?",
      [id]
    );
    return result;
  },

  // @describe create a red-flag
  // @public api/v1/red-flag

  async addRedFlag(incident) {
    let incidentDetails = {
      createdBy: incident.createdBy,
      createdOn: incident.createdOn,
      type: incident.type,
      location: incident.location,
      status: incident.status,
      images: incident.images,
      videos: incident.videos,
      comment: incident.comment,
      userId: incident.userId,
    };
    try {
      const incident = await db.execute(
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
      console.log(incident);
      return incident;
    } catch (error) {
      console.log(error);
      return new customError(500, "Server Error");
    }
  },

  // // @describe update a red-flag location
  // // @public api/v1/red-flag/:id/location
  // updateRedFlagLocation(id, location) {
  //   const redFlag = incidents.find((incident) => incident.id === +id);
  //   if (!redFlag) {
  //     return new customError(401, "The record does not exist");
  //   }
  //   redFlag.location = location;
  //   return redFlag || {};
  // },

  // // @describe upate a red-flag comment
  // // @public api/v1/red-flag/:id/comments/
  // updateRedFlagComment(id, comment) {
  //   const redFlagComment = incidents.find((incident) => incident.id === +id);
  //   if (!redFlagComment) {
  //     return new customError(401, "Red flag comment not found!");
  //   }
  //   redFlagComment.comment = comment;
  //   return redFlagComment || {};
  // },

  // // @describe delete a red-flag record
  // // @public api/v1/red-flags/:id
  // removeARedFlag(id) {
  //   const flagId = incidents.find((incident) => incident.id === +id);
  //   if (!flagId) {
  //     return new customError(401, "This Record does not exist");
  //   }
  //   const index = incidents.indexOf(flagId);
  //   const removeItem = incidents.splice(index, 1);
  //   console.log(removeItem);
  // },
};

module.exports = incidentServices;
