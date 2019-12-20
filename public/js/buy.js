let keys = Object.keys(sessionStorage);
let allObj = [];

for(let key of keys) {
    let obj = JSON.parse(sessionStorage.getItem(key));
    allObj.push(obj);
}


for (let i = 0; i < allObj.length; i++){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', `buy_div div${i}`);
    document.querySelector('.all_product').appendChild(newDiv);

    let newProduct = document.createElement('p');
    newProduct.setAttribute('class', `name${i}`);
    document.querySelector(`.div${i}`).appendChild(newProduct);
    document.querySelector(`.name${i}`).innerHTML = allObj[i].name;

    let newQuantity = document.createElement('p');
    newQuantity.setAttribute('class', `quantity${i}`);
    document.querySelector(`.div${i}`).appendChild(newQuantity);
    document.querySelector(`.quantity${i}`).innerHTML = `Количество: ${allObj[i].quantity}`;

    let newPrice = document.createElement('p');
    newPrice.setAttribute('class', `price${i}`);
    document.querySelector(`.div${i}`).appendChild(newPrice);
    document.querySelector(`.price${i}`).innerHTML = `Цена за шт.: ${allObj[i].cost}`;

    let newIngr = document.createElement('p');
    newIngr.setAttribute('class', `ingr${i}`);
    document.querySelector(`.div${i}`).appendChild(newIngr);
    document.querySelector(`.ingr${i}`).innerHTML = `Дополнительные ингредиенты:`;

    if (allObj[i].ing1Price1 !== 0){
        let newIngr1 = document.createElement('p');
        newIngr1.setAttribute('class', `ingr1${i}`);
        document.querySelector(`.div${i}`).appendChild(newIngr1);
        document.querySelector(`.ingr1${i}`).innerHTML = `${allObj[i].ing1Name1}: ${allObj[i].ing1Price1}`;
    }

    if (allObj[i].ing1Price2 !== 0){
        let newIngr2 = document.createElement('p');
        newIngr2.setAttribute('class', `ingr2${i}`);
        document.querySelector(`.div${i}`).appendChild(newIngr2);
        document.querySelector(`.ingr2${i}`).innerHTML = `${allObj[i].ing1Name2}: ${allObj[i].ing1Price2}`;
    }

    if (allObj[i].ing1Price3 !== 0){
        let newIngr3 = document.createElement('p');
        newIngr3.setAttribute('class', `ingr3${i}`);
        document.querySelector(`.div${i}`).appendChild(newIngr3);
        document.querySelector(`.ingr3${i}`).innerHTML = `${allObj[i].ing1Name3}: ${allObj[i].ing1Price3}`;
    }

    if (allObj[i].ing1Price4 !== 0){
        let newIngr4 = document.createElement('p');
        newIngr4.setAttribute('class', `ingr4${i}`);
        document.querySelector(`.div${i}`).appendChild(newIngr4);
        document.querySelector(`.ingr4${i}`).innerHTML = `${allObj[i].ing1Name4}: ${allObj[i].ing1Price4}`;
    }

}

let result = document.createElement('p');
result.setAttribute('class', `result`);
document.querySelector(`.total_result`).appendChild(result);
document.querySelector(`.result`).innerHTML = `Всего на сумму: ${document.querySelector('.total_cost').innerText}`;


