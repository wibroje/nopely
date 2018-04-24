
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
  db = require('./models')

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

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
app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })