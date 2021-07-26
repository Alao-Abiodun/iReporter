const {Router} = require('express');

const router = Router();

const userCtrl = require('../controllers/user.controller');

// @params req
// @params res
// @params next

router.post('/user', userCtrl.createUser); // create new user 
router.get('/users', userCtrl.fetchUsers);

module.exports = router;

