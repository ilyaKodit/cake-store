const mongoose = require('mongoose');
const Cake = require('./models/cakeSchema');
const Pie = require('./models/pieSchema');

mongoose.connect('mongodb://localhost/cakestore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

function addNewCake() {

    let cake1 = new Cake({
        name: 'Пироженное "Надежда"',
        cost: 300,
        kind: 'cake',
    });
    cake1.save();

    let cake2 = new Cake({
        name: 'Пироженное "Вкусное"',
        cost: 250,
        kind: 'cake',
    });
    cake2.save();

    let cake3 = new Cake({
        name: 'Пироженное "Ваниль"',
        cost: 450,
        kind: 'cake',
    });
    cake3.save();

    let cake4 = new Cake({
        name: 'Пироженное "Трям"',
        cost: 150,
        kind: 'cake',
    });
    cake4.save();

    let cake5 = new Cake({
        name: 'Печенье "Юбилейное"',
        cost: 50,
        kind: 'cake',
    });
    cake5.save();
}

// addNewCake();

function addNewPie() {

    let pie1 = new Pie({
        name: 'Торт "Наполеон"',
        cost: 700,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie1.save();

    let pie2 = new Pie({
        name: 'Торт "Мамин"',
        cost: 850,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie2.save();

    let pie3 = new Pie({
        name: 'Торт "Птичье молоко"',
        cost: 650,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie3.save();

    let pie4 = new Pie({
        name: 'Торт "Прага"',
        cost: 650,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie4.save();

    let pie5 = new Pie({
        name: 'Торт "Москва"',
        cost: 700,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie5.save();

    let pie6 = new Pie({
        name: 'Торт "Шарлотка"',
        cost: 600,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie6.save();

    let pie7 = new Pie({
        name: 'Торт "Зебра"',
        cost: 900,
        kind: 'pie',
        ingridient: [
            {
                name: 'Шоколадная крошка',
                price: 40
            },
            {
                name: 'Малина',
                price: 60,
            },
            {
                name: 'Клубника',
                price: 70,
            },
            {
                name: 'Ананас',
                price: 60,
            },
        ],
    });
    pie7.save();
}

// addNewPie();
