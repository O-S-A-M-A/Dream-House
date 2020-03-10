'use strict'
var billArray = [];
var Bill = localStorage.getItem('products');
billArray = JSON.parse(Bill);
// console.log(billArray);
var total = 0;
var total2 = 0;

var tab1 = document.getElementById('tab');

var tr1 = document.createElement('tr');
tab1.appendChild(tr1);

var th1 = document.createElement('th');
tab1.appendChild(th1);
th1.textContent = `PRODUCT NAME`;

var th2 = document.createElement('th');
tab1.appendChild(th2);
th2.textContent = 'PRODUCT QUANTITY';

var th3 = document.createElement('th');
tab1.appendChild(th3);
th3.textContent = 'PRODUCT PRICE';

for (var i = 0; i < billArray.length; i++) {
    var tr1 = document.createElement('tr');
    tab1.appendChild(tr1);

    var td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = `${billArray[i].name}`;
    tr1.appendChild(td1);

    var td2 = document.createElement('td');
    td2.textContent = `${billArray[i].quantity}`;
    tr1.appendChild(td2);
    total2 = total2 + billArray[i].quantity;

    var td3 = document.createElement('td');
    td3.textContent = `${billArray[i].price}`;
    tr1.appendChild(td3);
    total += billArray[i].price;
}


var tr1 = document.createElement('tr');
tab1.appendChild(tr1);
var td1 = document.createElement('td');
tr1.appendChild(td1);
td1.textContent = `TOTAL`;
tr1.appendChild(td1);
var td3 = document.createElement('td');
td3.textContent = `${total2}`;
tr1.appendChild(td3);

var td2 = document.createElement('td');
tr1.appendChild(td2);
td2.textContent = `${total}`;
console.log(total);