class User {
    constructor (id, firstname, lastname, othernames, email, phoneNumber, username, registered, isAdmin) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.othernames = othernames;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.registered = registered;
        this.isAdmin = isAdmin; 
    }
}

module.exports = User;