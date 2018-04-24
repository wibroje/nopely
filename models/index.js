var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nopely");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
	mongoose.connect("mongodb://localhost/nopely");
}

module.exports.User = require('./user');