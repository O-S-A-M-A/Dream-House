'use strict'

var productArray = [];
var numberOfItemsInCart = 0;
var btn1 = document.getElementById('Img1');
var btn2 = document.getElementById('Img2');
var btn3 = document.getElementById('Img3');
var btn4 = document.getElementById('Img4');
var btn5 = document.getElementById('Img5');
var btn6 = document.getElementById('Img6');
var btn7 = document.getElementById('Img7');
var btn8 = document.getElementById('Img8');
var btn9 = document.getElementById('Img9');
var btn10 = document.getElementById('Img10');
var btn11 = document.getElementById('Img11');
var btn12 = document.getElementById('Img12');
var paragraph = document.getElementById('cartQuantity');

var btn13 = document.getElementById('chooseTint');
function product(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;

    productArray.push(this);
}




btn1.addEventListener('click', productOne);
btn2.addEventListener('click', productTwo);
btn3.addEventListener('click', productThree);
btn4.addEventListener('click', productFour);
btn5.addEventListener('click', productFive);
btn6.addEventListener('click', productSix);
btn7.addEventListener('click', productSeven);
btn8.addEventListener('click', productEight);
btn9.addEventListener('click', productNine);
btn10.addEventListener('click', productTen);
btn11.addEventListener('click', productEleven);
btn12.addEventListener('click', productTwelve);


btn13.addEventListener('click', color);

function productOne(event) {
    event.preventDefault();
    var name = 'Tiles1';
    

    if(document.getElementById('Tiles1Quantity').value !== ''){

    var quantity = parseFloat(document.getElementById('Tiles1Quantity').value);
    var price = 3 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productTwo(event) {
    event.preventDefault();
    var name = 'Wood tiles';
    if(document.getElementById('Tiles2Quantity').value !== ''){
    var quantity = parseFloat(document.getElementById('Tiles2Quantity').value);
    var price = 4.5 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productThree(event) {
    event.preventDefault();
    var name = 'Bathroom tiles';
    if(document.getElementById('Tiles3Quantity').value !== ''){
    var quantity = parseFloat(document.getElementById('Tiles3Quantity').value);
    var price = 2.5 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}


function productFour(event) {
    event.preventDefault();
    var name = 'Deckmixer tap';
    if(document.getElementById('tap1Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('tap1Quantity').value);
    var price = 7.99 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productFive(event) {
    event.preventDefault();
    var name = 'Mixer tap';
    if(document.getElementById('tap2Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('tap2Quantity').value);
    var price = 23.99 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productSix(event) {
    event.preventDefault();
    var name = 'Riviera palazzo tap';
    if(document.getElementById('tap3Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('tap3Quantity').value);
    var price = 49.99 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');



}


function productSeven(event) {
    event.preventDefault();
    var name = 'Small shower';
    if(document.getElementById('shower1Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('shower1Quantity').value);
    var price = 21.25 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productEight(event) {
    event.preventDefault();
    var name = 'Square shower';
    if(document.getElementById('shower2Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('shower2Quantity').value);
    var price = 38.25 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productNine(event) {
    event.preventDefault();
    var name = 'Riviera palazzo tap';
    if(document.getElementById('shower3Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('shower3Quantity').value);
    var price = 93.5 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}

function productTen(event) {
    event.preventDefault();
    var name = 'Dulux paints';
    if(document.getElementById('paint1Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('paint1Quantity').value);
    var price = 4.3 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productEleven(event) {
    event.preventDefault();
    var name = 'National paints';
    if(document.getElementById('paint2Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('paint2Quantity').value);
    var price = 6.25 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}
function productTwelve(event) {
    event.preventDefault();
    var name = 'Jotun paints';
    if(document.getElementById('paint3Quantity').value !== ''){
    var quantity = parseInt(document.getElementById('paint3Quantity').value);
    var price = 7.8 * quantity;
    new product(name, quantity, price);
    console.log(productArray);
    numberOfItemsInCart++;
    paragraph.textContent = numberOfItemsInCart;

    var productsItems = JSON.stringify(productArray);
    localStorage.setItem( 'products', productsItems);}
    else
    alert('please enter a value');

}


function color(event){
    event.preventDefault();
    var tint=document.getElementById('paintTint').value;
    console.log(tint);

}
