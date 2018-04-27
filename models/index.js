var mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
	mongoose.connect("mongodb://localhost/nopely");
}

module.exports.User = require('./user');
module.exports.Movie = require('./movie');