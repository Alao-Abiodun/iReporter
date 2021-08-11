const { Router } = require('express');
const router = Router();

const incidentCtrl = require('../controllers/incident.controller');

// GET  all red-flags, interventions records
router.get('/red-flags', incidentCtrl.fetchAllRedFlags);

// GET  specific red-flags, intervention records
router.get('/red-flags/:id', incidentCtrl.fetchSingleFlags);

// POST create a red-flag record 
router.post('/red-flags', incidentCtrl.createARedFlag);

// UPDATE red-flag location
router.put('/red-flags/:id/location', incidentCtrl.updateFlagLocation);

// UPDATE red-flag location
router.put('/red-flags/:id/comment', incidentCtrl.updateFlagComment);

// DELETE a red-flag record
router.delete('/red-flags/:id', incidentCtrl.filterRedFlag);

module.exports = router;