var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view enging', 'ejs');

mongoose.connect(config.getDbConnectionString(), function(err){
    if(err) throw err;
});

setupController(app);
apiController(app);

app.listen(port, (err) => {
    if(err) {
        console.log('Something went wrong in the listen callback');
    }
});