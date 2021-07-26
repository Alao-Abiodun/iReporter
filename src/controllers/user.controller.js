const userServices = require('../services/user.services');
const responseHandler = require('../utils/responseHandlers');
const customError = require('../utils/customError');


const userController = {
    fetchUsers(req, res) {
        const data = userServices.fetchUsers();
        return responseHandler(res, 200, 'user fetched successfully', data)
    },

    createUser (req, res) {
        const newUser = req.body;
        if (!newUser) {
            return new customError(401, 'Please fill in the required field');
        }
        const data = userServices.signUp(newUser);
        return responseHandler(res, 201, 'user successfully created', data);
    }
}

module.exports = userController;