const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

const bodyParser = require('body-parser');

const port =  process.env.PORT || 3000

const app = express();

const routeRouter = require('./routes/route');

app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use('/', routeRouter);

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(port);


