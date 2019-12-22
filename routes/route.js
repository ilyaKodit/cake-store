const express = require('express');
const mongoose = require('mongoose');
const Cake = require('../models/cakeSchema');
const Pie = require('../models/pieSchema');

mongoose.connect('mongodb+srv://ilya:ilya-gluk@cake-store-yo7tf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const router = express.Router();

let newOrder = {
    num: 0,
    list: [],
};

router.get('/', (req, res) => {
    res.redirect('/pie');
});

router.get('/pie', async (req, res) => {
    let allPies = await Pie.find();
    let allIngr = await Pie.find({}, {ingridient: []});
    res.render('index', {product: allPies, ingridient: allIngr, kind: allPies[0].kind});
});

router.get('/cake', async (req, res) => {
    let allCakes = await Cake.find();
    res.render('index', {product: allCakes, kind: allCakes[0].kind});
});

router.post('/new', (req, res) => {
    res.end();
});

router.get('/buy', async (req, res) => {
    // console.log(req.body);
    res.render('buy');
});

module.exports = router;
