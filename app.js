/**
 * Created by gayancliyanage on 1/10/15.
 */

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello Jenkins');
});

app.listen(process.env.PORT || 5000);

module.exports = app;