const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

const app = express();
app.use(logger('dev'));

app.use(express.json());

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render("index", {new: 555});
});

app.listen(3000);

