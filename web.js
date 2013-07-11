var express = require('express');

var app = express.createServer(express.logger());

var content;
    fs.readFile('Index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
