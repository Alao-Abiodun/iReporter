const incidentServices = require("../services/incident.services");
const responseHandler = require("../utils/responseHandlers");
const customError = require("../utils/customError");

const incidentController = {
  async fetchAllRedFlags(req, res, next) {
    const data = await incidentServices.fetchRedFlags();
    return responseHandler(
      res,
      200,
      "red-flags retrieved successfully...",
      data
    );
  },

  async fetchSingleFlags(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(new customError(404, "Id is not found!"));
    }
    const data = await incidentServices.retrieveSingleRedFlag(id);
    return responseHandler(
      res,
      200,
      "single flag fetched successfully...",
      data
    );
  },

  async createARedFlag(req, res, next) {
    try {
      const newflag = req.body;
      if (!newflag) {
        return next(
          new customError(404, "please fill in the required field...")
        );
      }
      const data = await incidentServices.addRedFlag(newflag);
      console.log(data);
      return responseHandler(
        res,
        201,
        "A new red-flag is created successfully...",
        data
      );
    } catch (error) {
      console.log(error);
    }
  },

  async updateFlagLocation(req, res, next) {
    const { id } = req.params;
    const { location } = req.body;
    if (!id) {
      return next(new customError(404, "Id is not found!"));
    }
    const data = await incidentServices.updateRedFlagLocation(id, location);
    // console.log(data);
    return responseHandler(res, 200, "Update successfully", data);
  },

  async updateFlagComment(req, res, next) {
    const { id } = req.params;
    const { comment } = req.body;
    if (!id) {
      return next(new customError(404, "Id is not found!"));
    }
    const data = await incidentServices.updateRedFlagComment(id, comment);
    return responseHandler(res, 200, "comment updated successfully", data);
  },

  async filterRedFlag(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(new customError(404, "Record Not Found!"));
    }
    const data = await incidentServices.removeARedFlag(id);
    return responseHandler(res, 200, "Record deleted successfully", data);
  },
};

module.exports = incidentController;
