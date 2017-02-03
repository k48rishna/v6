var serveStatic = require('serve-static');
var express = require('express');
var app = express();

console.log(__dirname);
app.use(serveStatic(__dirname + '/www'))
app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on 3000');
})
