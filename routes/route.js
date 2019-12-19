const express = require('express');
const mongoose = require('mongoose');
const Cake = require('../models/cakeSchema');
const Pie = require('../models/pieSchema');

mongoose.connect('mongodb://localhost/cakestore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/pie');
});

router.get('/pie', async (req, res) => {
    let allPies = await Pie.find();
    res.render('index', {product: allPies});
});

router.get('/cake', async (req, res) => {
    let allCakes = await Cake.find();
    res.render('index', {product: allCakes});
});

module.exports = router;
