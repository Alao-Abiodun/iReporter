const userData = require('../utils/dummyData');
const User = require('../models/user.model');


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
        return user;
    }
}

module.exports = userServices;