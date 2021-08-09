const { Router } = require('express');
const router = Router();

const incidentCtrl = require('../controllers/incident.controller');

// GET  all red-flags, interventions records
router.get('/red-flags', incidentCtrl.fetchAllRedFlags);

router.get('/red-flags/:id', incidentCtrl.fetchSingleFlags);
router.post('/red-flags', incidentCtrl.createARedFlag);

router.put('/red-flags/:id/location', incidentCtrl.updateFlagLocation);

module.exports = router;