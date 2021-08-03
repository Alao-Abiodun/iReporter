const {incidents} = require('../utils/dummyData');
const Incident = require('../models/incident.model');
const customError = require('../utils/customError');

const incidentServices = {

    //@describe fetch all red-flags
    //@public api/v1/red-flags

    fetchRedFlags() {
        const allFlags = incidents.map(incident => incident)
        return allFlags;
    },
}

module.exports = incidentServices;