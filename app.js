/**
 * Created by gayancliyanage on 1/10/15.
 */

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
    res.send(formatAMPM());
});

app.listen(process.env.PORT || 5000);

module.exports = app;