const userServices = require('../services/user.services');
const responseHandler = require('../utils/responseHandlers');
const errorHandler = require('../utils/errorHandlers')
const customError = require('../utils/customError');


const userController = {
    fetchUsers(req, res) {
        const data = userServices.fetchUsers();
        return responseHandler(res, 200, 'user fetched successfully', data);
    },

     createUser (req, res, next) {
        const newUser = req.body;
        if (!newUser) {
            return new customError(401, 'Please fill in the required field');
        }
    const data = userServices.signUp(newUser);
        return responseHandler(res, 201, 'user successfully created', data);
    },

    async findExistingUser (req, res) {
        const {email} = req.body;
        if (!email) {
            return new customError(401, 'User does not exist');
        }
        const data = userServices.login(email);
        return responseHandler(res, 200, 'User login successfully', data);
    }
}

module.exports = userController;