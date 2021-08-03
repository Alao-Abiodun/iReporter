const incidentServices = require('../services/incident.services');
const responseHandler = require('../utils/responseHandlers');
const customError = require('../utils/customError');


const incidentController = {

    fetchAllRedFlags (req, res, next) {
            const data = incidentServices.fetchRedFlags();
            return responseHandler(res, 200, 'red-flags retrieved successfully...', data); 
    },
    
    fetchSingleFlags (req, res, next) {
        const {id} = req.params;
        if (!id) {
            return next(new customError(404, 'Id is not found!'));
        }
        const data = incidentServices.retrieveSingleRedFlag(id);
        return responseHandler(res, 200, 'single flag fetched successfully...', data);
    },
}

module.exports = incidentController;