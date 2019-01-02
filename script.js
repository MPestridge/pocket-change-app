'use strict';

let express = require('express');
let app = express();

app.use(express.static('public'));
app.get('/api', function(req, res){
  res.send('This is the API');
});

app.listen('3000', function(){
  console.log('Listening on port', 3000);
});
