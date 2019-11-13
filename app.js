var express = require('express');

var app = express();

app.use('/', express.static('./apps/'));

app.listen(3001, function () {
	console.log('Canvas is running at port 3001...');
});