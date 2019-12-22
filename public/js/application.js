document.querySelector('.ivent_cont').addEventListener('submit', async (event) => {
    event.preventDefault();

    if (event.target.querySelector('.form_quantity').value !== '0' && Number(event.target.querySelector('.form_quantity').value) > 0){
        if (event.target.dataset.kind === 'cake') {
            let newProduct = {
                name: event.target.dataset.nameproduct,
                cost: event.target.dataset.costproduct,
                quantity: event.target.querySelector('.form_quantity').value,
                id: event.target.dataset.id,
                kind: document.querySelector('.container').dataset.kind,
            };

            sessionStorage.setItem(event.target.dataset.id, JSON.stringify(newProduct));
        } else {
            let checkBoxPrice1 = 0;
            let checkBoxName1 = '';
            let checkBox1 = event.target.querySelector('.check1').checked;
            if (checkBox1 === true){
                checkBoxPrice1 = event.target.querySelector('.check1').dataset.price;
                checkBoxName1 = event.target.querySelector('.check1').dataset.name;
            }

            let checkBoxPrice2 = 0;
            let checkBoxName2 = '';
            let checkBox2 = event.target.querySelector('.check2').checked;
            if (checkBox2 === true){
                checkBoxPrice2 = event.target.querySelector('.check2').dataset.price;
                checkBoxName2 = event.target.querySelector('.check2').dataset.name;
            }

            let checkBoxPrice3 = 0;
            let checkBoxName3 = '';
            let checkBox3 = event.target.querySelector('.check3').checked;
            if (checkBox3 === true){
                checkBoxPrice3 = event.target.querySelector('.check3').dataset.price;
                checkBoxName3 = event.target.querySelector('.check3').dataset.name;
            }

            let checkBoxPrice4 = 0;
            let checkBoxName4 = '';
            let checkBox4 = event.target.querySelector('.check4').checked;
            if (checkBox4 === true){
                checkBoxPrice4 = event.target.querySelector('.check4').dataset.price;
                checkBoxName4 = event.target.querySelector('.check4').dataset.name;
            }


            let newProduct = {

                name: event.target.dataset.nameproduct,
                cost: event.target.dataset.costproduct,
                quantity: event.target.querySelector('.form_quantity').value,
                id: event.target.dataset.id,
                kind: document.querySelector('.container').dataset.kind,
                ing1Name1: checkBoxName1,
                ing1Price1: checkBoxPrice1,
                ing1Name2: checkBoxName2,
                ing1Price2: checkBoxPrice2,
                ing1Name3: checkBoxName3,
                ing1Price3: checkBoxPrice3,
                ing1Name4: checkBoxName4,
                ing1Price4: checkBoxPrice4,

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
        count += (Number(q.cost) + (Number(q.ing1Price1) || 0) + (Number(q.ing1Price2) || 0) + (Number(q.ing1Price3) || 0) + (Number(q.ing1Price4) || 0)) * Number(q.quantity);
    }

    document.querySelector('.total_cost').innerHTML = `${count}  р.`;
}

console.log(document.querySelector('.container').dataset.kind);
