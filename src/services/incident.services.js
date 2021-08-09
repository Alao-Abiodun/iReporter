const { incidents } = require('../utils/dummyData');
const Incident = require('../models/incident.model');
const customError = require('../utils/customError');

const incidentServices = {

    //@describe fetch all red-flags
    //@public api/v1/red-flags

    fetchRedFlags() {
        const allFlags = incidents.map(incident => incident)
        return allFlags;
    },

    // // @describe fetch a specific red-flag
    // // @public api/v1/

    retrieveSingleRedFlag(id) {
        const foundFlag = incidents.find(incident => incident.id === parseInt(id));
        return foundFlag || {};
    },

    // @describe create a red-flag
    // @public api/v1/red-flag

    addRegFlag(incident) {
        const incidentLenght = incidents.length;
        const lastIncidentId = incidents[incidentLenght - 1].id;
        const newIncidentId = lastIncidentId + 1;
        incident.id = newIncidentId;
        incidents.push(incident);
        return incident;
    },

    // @describe update a red-flag location
    // @public api/v1/red-flag/:id/location
    updateRedFlagLocation(id, location) {
        const redFlag = incidents.find(incident => incident.id === +id);
        if (!redFlag) {
            return new customError(401, 'The record does not exist');
        }
        redFlag.location = location
        return redFlag || {};
    },

    // @describe upate a red-flag comment 
    // @public api/v1/red-flag/:id/comments/
    updateRedFlagComment(id, comment) {
        const redFlagComment = incidents.find(incident => incident.id === +id);
        if (!redFlagComment) {
            return new customError(401, 'Red flag comment not found!');
        }
        redFlagComment.comment = comment;
        return redFlagComment || {};
    }

}

module.exports = incidentServices;