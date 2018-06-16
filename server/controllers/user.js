module.exports = (() => {
    const path = require("path");
    const Models = require(path.resolve(__dirname, '../models/'));
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);

    const getUserByUsername = (username, callback) => {
        Models.user.findOne({username: username}).then((user) => {
            callback(null, user);
        }).catch(err => {
            callback(err, null);
        });
    }
    
    const addUserByUsernamePassword = (user, callback) => {
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        new Models.user(user).save().then(user => {
            callback(null, user);
        }).catch(err => {
            callback(err, null);
        });
    };

    const loginByUsernamePassword = (user, callback) => {
        Models.user.findOne({username: user.username}).then(userData => {
            if(bcrypt.compareSync(user.password, userData.password)) {
                callback(null, userData);
            } else {
                callback(null, null);
            }
        }).catch(err => {
            callback(err, null);
        });
    };

    return {getUserByUsername, addUserByUsernamePassword, loginByUsernamePassword};
  })();