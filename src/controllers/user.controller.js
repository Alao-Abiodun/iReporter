const userServices = require('../services/user.services');
const responseHandler = require('../utils/responseHandlers');
const errorHandler = require('../utils/errorHandlers')
const customError = require('../utils/customError');


const userController = {
    async fetchUsers(req, res) {
        try {
            const data = await userServices.fetchUsers();
        return responseHandler(res, 200, 'user fetched successfully', data);
        } catch (error) {
            console.log(error);
            // return errorHandler(res, 500, 'Server Error');
        }
    },

     async createUser (req, res) {
       try {
        const newUser = req.body;
        if (!newUser) {
            return new customError(401, 'Please fill in the required field');
        }
        const data = await userServices.signUp(newUser);
        return responseHandler(res, 201, 'user successfully created', data);
       } catch (error) {
           console.log(error);
        //    return errorHandler(res,500, 'Server Error');
       }
    },

    async findExistingUser (req, res) {
        try {
            const {email} = req.body;
        if (!email) {
            return new customError(401, 'User does not exist');
        }
        const data = await userServices.login(email);
        return responseHandler(res, 200, 'User login successfully', data);
        } catch (error) {
            console.log(error);
            // return errorHandler(res, 500, 'Server Error');
        }
    }
}

module.exports = userController;