const IncidentService = require("../services/incident.services");
const responseHandler = require("../utils/responseHandlers");
const customError = require("../utils/customError");

class IncidentController {
  async fetchSingleFlag() {
    const result = await IncidentService.fetchSingleFlag();
    return responseHandler(res, 200, "Incident successfully fetched", result);
  }

  async fetchSingleFlag(req, res) {
    const result = await IncidentService.fetchSingleFlag(req.params.id);
    return responseHandler(res, 200, "Incident successfully fetched", result);
  }

  async createRedFlag(req, res) {
    const result = await IncidentService.createRedFlag(req.body);
    return responseHandler(res, 201, "Incident successfully created", result);
  }

  async updateRedFlagLocation(req, res) {
    const result = await IncidentService.updateRedFlagLocation(
      req.params.id,
      req.body
    );
    return responseHandler(res, 200, "Incident successfully updated", result);
  }

  async deleteRedFlag(req, res) {
    const result = await IncidentService.deleteRedFlag(req.params.id);
    return responseHandler(res, 200, "Incident successfully deleted", result);
  }

  async fetchRedFlags(req, res) {
    const result = await IncidentService.fetchRedFlags();
    return responseHandler(res, 200, "Incidents successfully fetched", result);
  }

  async updateRedFlagComment(req, res) {
    const result = await IncidentService.updateRedFlagComment(
      req.params.id,
      req.body
    );
    return responseHandler(res, 200, "Incident successfully updated", result);
  }
}

module.exports = new IncidentController();
