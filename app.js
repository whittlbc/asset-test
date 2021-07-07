var express = require('express')
var bodyParser = require("body-parser");
var compression = require('compression')
var path = require('path')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var comments = require('./comments')

app.post('/api/comments', comments.processComment)

//serving static files from nginx
app.use(express.static(path.join(__dirname, 'public')))

let port = process.env.PORT || 80
app.listen(port, function(){
   console.log(`Server is running on port ${port}...`);
});
