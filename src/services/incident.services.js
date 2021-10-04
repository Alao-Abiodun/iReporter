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

  // @describe update a red-flag location
  // @public api/v1/red-flag/:id/location
  async updateRedFlagLocation(id, location) {
    const [result, fields] = await db.execute(
      "UPDATE incidents SET location = ? WHERE id = ?",
      [location, id]
    );
    return result || {};
  },

  // @describe upate a red-flag comment
  // @public api/v1/red-flag/:id/comments/
  async updateRedFlagComment(id, comment) {
    const [result, fields] = await db.execute(
      "UPDATE incidents SET comment = ? WHERE id = ?",
      [comment, id]
    );
    return result || {};
  },

  // // @describe delete a red-flag record
  // // @public api/v1/red-flags/:id
  async removeARedFlag(id) {
    const [result, fields] = await db.execute(
      "DELETE FROM incidents WHERE id = ?",
      [id]
    );
    if (!result) {
      return new customError(401, "This Record does not exist");
    }
    return result;
  },
};

module.exports = incidentServices;
