const incidentServices = require("../services/incident.services");
const responseHandler = require("../utils/responseHandlers");
const customError = require("../utils/customError");

const incidentController = {
  async fetchAllRedFlags(req, res, next) {
    const data = await incidentServices.fetchRedFlags();
    console.log(data);
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

  updateFlagLocation(req, res, next) {
    const { id } = req.params;
    const { location } = req.body;
    if (!id) {
      return next(new customError(404, "Id is not found!"));
    }
    const data = incidentServices.updateRedFlagLocation(id, location);
    return responseHandler(res, 200, "Update successfully", data);
  },

  updateFlagComment(req, res, next) {
    const { id } = req.params;
    const { comment } = req.body;
    if (!id) {
      return next(new customError(404, "Id is not found!"));
    }
    const data = incidentServices.updateRedFlagComment(id, comment);
    return responseHandler(res, 200, "comment updated successfully", data);
  },

  filterRedFlag(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(new customError(404, "Record Not Found!"));
    }
    const data = incidentServices.removeARedFlag(id);
    return responseHandler(res, 200, "Record deleted successfully", data);
  },
};

module.exports = incidentController;
