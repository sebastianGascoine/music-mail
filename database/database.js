const User = require("./user");

let myDatabase = function () {
    this.users = [];
};
let userIndex = 0;

myDatabase.prototype.newUser = function (user) {
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] && this.users[i].email == user.email) {
            return false;
        }
    }
    this.users[userIndex++] = new User(user.email, user.freq);
    return true;
};
//similar to read
myDatabase.prototype.getUser = function (email) {
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] && email == this.users[i].email) {
            return new User(
                this.users[i].email,
                this.users[i].freq
            );
        }
    }
    return null;
};
//similar to update
myDatabase.prototype.putUser = function (user) {
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] && this.users[i].id == user.email) {
            this.users[i] = new User(user.email, user.freq);
            return true;
        }
    }
    return false;
};
//delete student
myDatabase.prototype.deleteUser = function (email) {
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i] && email == this.users[i].email) {
            let tempPtr = this.users[i];
            this.users[i] = undefined;
            return tempPtr;
        }
    }
    return null;
};

module.exports = myDatabase;
