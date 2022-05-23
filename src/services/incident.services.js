const { incidents } = require("../utils/dummyData");
const Incident = require("../models/incident.model");
const customError = require("../utils/customError");

const db = require("../databases/db");

class IncidentService {
  //@describe fetch all red-flags
  //@public api/v1/red-flags
  async fetchRedFlags() {
    const [result, field] = await db.execute("SELECT * FROM incidents");
    return result;
  }

  // // @describe fetch a specific red-flag
  // // @public api/v1/

  async retrieveSingleRedFlag(data) {
    const [result, field] = await db.execute(
      "SELECT * FROM incidents WHERE id = ?",
      [data.id]
    );
    return result;
  }

  // @describe create a red-flag
  // @public api/v1/red-flag
  async createRedFlag(data) {
    if (!data.createdBy) throw new CustomError(400, "createdBy is required");
    if (!data.type) throw new CustomError(400, "type is required");
    if (!data.location) throw new CustomError(400, "location is required");
    if (!data.status) throw new CustomError(400, "status is required");
    if (!data.images) throw new CustomError(400, "images is required");
    if (!data.videos) throw new CustomError(400, "videos is required");
    if (!data.comment) throw new CustomError(400, "comment is required");

    const [result, field] = await db.execute(
      "INSERT INTO incidents (createdBy, type, location, status, images, videos, comment) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        data.createdBy,
        data.type,
        data.location,
        data.status,
        data.images,
        data.videos,
        data.comment,
      ]
    );
    return result;
  }

  // @describe update a red-flag location
  // @public api/v1/red-flag/:id/location
  async updateRedFlagLocation(id, data) {
    if (!data.location) throw new CustomError(400, "location is required");
    const [result, field] = await db.execute(
      "UPDATE incidents SET location = ? WHERE id = ?",
      [data.location, id]
    );
    return result;
  }

  // @describe upate a red-flag comment
  // @public api/v1/red-flag/:id/comments/
  async updateRedFlagComment(id, data) {
    if (!data.comment) throw new CustomError(400, "comment is required");
    const [result, field] = await db.execute(
      "UPDATE incidents SET comment = ? WHERE id = ?",
      [data.comment, id]
    );
    return result;
  }

  // // @describe delete a red-flag record
  // // @public api/v1/red-flags/:id

  async deleteRedFlag(data) {
    const [result, field] = await db.execute(
      "DELETE FROM incidents WHERE id = ?",
      [data.id]
    );
    return result;
  }
}

module.exports = new IncidentService();
