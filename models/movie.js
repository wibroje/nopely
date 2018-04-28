var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  		title: String,
  		overview: String,
  		poster_path: String
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;