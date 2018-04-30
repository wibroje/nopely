var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt');
var Schema   = mongoose.Schema;

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

UserSchema.methods.checkPassword = function (password) {
  
  return bcrypt.compareSync(password, this.passwordDigest);
};

UserSchema.statics.authenticate = function (email, password, callback) {
  
  this.findOne({email: email}, function (err, foundUser) {
    console.log(foundUser);

    
    if (!foundUser) {
      console.log('No user with email ' + email);
      callback("Error: no user found", null);  
    
    } else if (foundUser.checkPassword(password)) {
      callback(null, foundUser);
    } else {
      callback("Error: incorrect password", null);
    }
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;

