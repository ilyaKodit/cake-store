const express = require('express');
const logger = require('morgan');


const app = express();
app.use(logger('dev'));
