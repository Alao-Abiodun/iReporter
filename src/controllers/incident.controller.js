const incidentServices = require('../services/incident.services');
const responseHandler = require('../utils/responseHandlers');
const customError = require('../utils/customError');


const incidentController = {

    fetchAllRedFlags (req, res, next) {
            const data = incidentServices.fetchRedFlags();
            return responseHandler(res, 200, 'red-flags retrieved successfully...', data); 
    },
}

module.exports = incidentController;