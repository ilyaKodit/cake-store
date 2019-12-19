document.querySelector('.container').addEventListener('submit', async (event) => {
    event.preventDefault();

    if (event.target.querySelector('.form_quantity').value !== '0' && Number(event.target.querySelector('.form_quantity').value) > 0){
        if (event.target.dataset.kind === 'cake') {
            let newProduct = {
                name: event.target.dataset.nameproduct,
                cost: event.target.dataset.costproduct,
                quantity: event.target.querySelector('.form_quantity').value,
                id: event.target.dataset.id,
            };

            sessionStorage.setItem(event.target.dataset.id, JSON.stringify(newProduct));
        } else {
            let newProduct = {
                name: event.target.dataset.nameproduct,
                cost: event.target.dataset.costproduct,
                quantity: event.target.querySelector('.form_quantity').value,
                id: event.target.dataset.id,
                plus1: event.target.querySelector('.select1').value,
                plus2: event.target.querySelector('.select2').value,
                plus3: event.target.querySelector('.select3').value,
                plus4: event.target.querySelector('.select4').value,
            };

            sessionStorage.setItem(event.target.dataset.id, JSON.stringify(newProduct));

        }
    }

    document.querySelector('.number').innerHTML = sessionStorage.length;

    totalSum();
});

document.querySelector('.number').innerHTML = sessionStorage.length;


document.querySelector('.deleteStorage').addEventListener('click',(event) => {
    sessionStorage.clear();
    totalSum();
    document.querySelector('.number').innerHTML = sessionStorage.length;
});

totalSum();

function totalSum() {
    let count = 0;

    let keys = Object.keys(sessionStorage);
    for(let key of keys) {
        let temp = sessionStorage.getItem(key);
        let q = JSON.parse(temp);
        count += Number(q.cost) * Number(q.quantity);
    }

    document.querySelector('.total_cost').innerHTML = `${count}  р.`;
}
