const {Router} = require('express');
const router = Router();

const incidentCtrl = require('../controllers/incident.controller');


router.get('/red-flags', incidentCtrl.fetchAllRedFlags);

router.get('/red-flags/:id',incidentCtrl.fetchSingleFlags);
// router.post('/red-flags', incidentCtrl.createdFlag);

module.exports = router;