const mongoose = require('mongoose');
const Cake = require('./models/cakeSchema');
const Pie = require('./models/pieSchema');

mongoose.connect('mongodb://localhost/cakestore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

function addNewCake(){

    let cake1 = new Cake({
        name: 'Пироженное "Надежда"',
        cost: 300
    });
    cake1.save();

    let cake2 = new Cake({
        name: 'Пироженное "Вкусное"',
        cost: 250
    });
    cake2.save();

    let cake3 = new Cake({
        name: 'Пироженное "Ваниль"',
        cost: 450
    });
    cake3.save();

    let cake4 = new Cake({
        name: 'Пироженное "Трям"',
        cost: 150
    });
    cake4.save();

    let cake5 = new Cake({
        name: 'Печенье "Юбилейное"',
        cost: 50
    });
    cake5.save();
}
// addNewCake();


