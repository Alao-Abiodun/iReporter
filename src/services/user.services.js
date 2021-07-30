const userData = require('../utils/dummyData');
const User = require('../models/user.model');
const customError = require('../utils/customError');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET} = process.env;


const userServices = {
    fetchUsers () {
        const validUsers = userData.map(user => {
            const newUser = new User();
            newUser.id = user.id;
            newUser.firstname = user.firstname;
            newUser.lastname = user.lastname;
            newUser.othernames = user.othernames;
            newUser.email = user.email;
            newUser.phoneNumber = user.phoneNumber;
            newUser.username = user.username;
            newUser.registered = user.registered;
            newUser.isAdmin = user.isAdmin;
            return newUser;
        })
        return validUsers;
    },

    signUp (user) {
        const userLength = userData.length;
        const lastId = userData[userLength - 1].id;
        const newId = lastId + 1;
        user.id = newId;
        userData.push(user);
        const accessToken = jwt.sign(user.email, ACCESS_TOKEN_SECRET);
        return {user, accessToken};
    },

    login (email) {
        const foundUser = userData.find(user => user.email === email);
        if (!foundUser) {
            return new customError(401, 'user not found!');
        }
        const accessToken = jwt.sign(foundUser.email, ACCESS_TOKEN_SECRET);
        return {foundUser, accessToken} || {};
    }
}

module.exports = userServices;