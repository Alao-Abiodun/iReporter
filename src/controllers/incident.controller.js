const incidentServices = require('../services/incident.services');
const responseHandler = require('../utils/responseHandlers');
const customError = require('../utils/customError');


const incidentController = {

    fetchAllRedFlags(req, res, next) {
        const data = incidentServices.fetchRedFlags();
        return responseHandler(res, 200, 'red-flags retrieved successfully...', data);
    },

    fetchSingleFlags(req, res, next) {
        const { id } = req.params;
        if (!id) {
            return next(new customError(404, 'Id is not found!'));
        }
        const data = incidentServices.retrieveSingleRedFlag(id);
        return responseHandler(res, 200, 'single flag fetched successfully...', data);
    },

    createARedFlag(req, res, next) {
        const newflag = req.body;
        if (!newflag) {
            return next(new customError(404, 'please fill in the required field...'))
        }
        const data = incidentServices.addRegFlag(newflag);
        return responseHandler(res, 201, 'A new red-flag is created successfully...', data);
    },

    updateFlagLocation(req, res, next) {
        const { id } = req.params;
        const { location } = req.body;
        if (!id) {
            return next(new customError(404, 'Id is not found!'));
        }
        const data = incidentServices.updateRedFlagLocation(id, location);
        return responseHandler(res, 200, 'Update successfully', data);
    }
}

module.exports = incidentController;