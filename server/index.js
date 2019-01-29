var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
const {API_KEY} = require('../config.js');
// console.log(API_KEY)

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
