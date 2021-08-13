const {users} = require('../utils/dummyData');
const User = require('../models/user.model');
const customError = require('../utils/customError');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {ACCESS_TOKEN_SECRET, REFREHS_TOKEN_SECRET} = process.env;

// console.log(users);

const userServices = {
    fetchUsers (req, res) {
        const validUsers = users.map(user => user)
        return validUsers;
    },

    signUp (user) {
        const userLength = users.length;
        const lastId = users[userLength - 1].id;
        const newId = lastId + 1;
        user.id = newId;
        users.push(user);
        return user;
    },

    login (email) {
        const foundUser = users.find(user => user.email == email);
        if (!foundUser) {
            return new customError(401, 'user not found!');
        }
        const accessToken = jwt.sign(foundUser.email, ACCESS_TOKEN_SECRET);
        return {foundUser, token: accessToken} || {};
    }
}

module.exports = userServices;