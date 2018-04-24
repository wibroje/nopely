var mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  email: String,
  passwordDigest: String
});

UserSchema.statics.createSecure = function (username, email, password, callback) {
var UserModel = this;

  bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);
    bcrypt.hash(password, salt, function (err, hash) {

      UserModel.create({
      	username: username,
        email: email,
        passwordDigest: hash
      }, callback);
    });
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;