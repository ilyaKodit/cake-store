const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');
const port =  process.env.PORT || 3000
const app = express();

const routeRouter = require('./routes/route');

app.use('/', routeRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render("index", {new: 555});
});

app.listen(port);

