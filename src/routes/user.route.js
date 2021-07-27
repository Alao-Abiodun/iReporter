const {Router} = require('express');

const router = Router();

const userCtrl = require('../controllers/user.controller');


// @params req
// @params res
// @params next

router.post('/user', userCtrl.createUser); // create new user 
router.get('/users', userCtrl.fetchUsers); // fetch all users
router.post('/user/login', userCtrl.findExistingUser) // login existing user

module.exports = router;

