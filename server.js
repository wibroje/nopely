var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/simple-login');

app.get('/', function (req,res) {
	res.render('index');
})


app.get('/signup', function (req, res) {
  res.send('signup coming soon');
});


app.get('/login', function (req, res) {
  res.send('login coming soon');
});

// listen
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});