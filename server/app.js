var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// By default, this looks for index.html
app.use(express.static('server/public'));

app.listen(port, function() {
  console.log('Localhost running on port', port);
})
