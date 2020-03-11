'use strict'

var artDeco = ['true', 'true', 'true'];
var classic = ['true', 'true', 'false'];
var contemporary = ['true', 'false', 'true'];
var industrial = ['true', 'false', 'false'];

var boho = ['false', 'true', 'true'];
var scandinavian = ['false', 'true', 'false'];
var costal = ['false', 'false', 'true'];
var zen = ['false', 'false', 'false'];


var styles = [];



  var container = document.getElementById("output");
  var pl = document.createElement("p");
  container.appendChild(pl);
  var img1 = document.getElementById("outputimage");

function render(){
 
  
  if(yourStyle$.toString()==artDeco.toString()){
  pl.textContent = 'your style is Art-Deco,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/artdeco.jpg');
}
else if(yourStyle$.toString()==classic.toString()){
  pl.textContent = 'your style is Classic,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/Classic.jpg');
}
else if(yourStyle$.toString()==contemporary.toString()){
  pl.textContent = 'your style is Contemporary,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/Contemporary.jpg');
}
else if(yourStyle$.toString()==industrial.toString()){
  pl.textContent = 'your style is Industrial,,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/industrial.jpg');
}
else if(yourStyle$.toString()==boho.toString()){
  pl.textContent = 'your style is BOHEMIAN,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/boho.png');
}
else if(yourStyle$.toString()==scandinavian.toString()){
  pl.textContent = 'your style is Scandinavian,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/Skandinavisches.jpg');
}
else if(yourStyle$.toString()==costal.toString()){
  pl.textContent = 'your style is Costal,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/costal.jpg');
}
else if(yourStyle$.toString()==zen.toString()){
  pl.textContent = 'your style is Zen,in our store you will find a lot of colors and products which suit this style';
  img1.setAttribute("src",'img/zen.jpg');
}



};




//Event listener__________________________________________
var yourStyle$;
var myForm = document.getElementById('quiz');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var formal$ = event.target.formalll.checked;
  console.log(formal$);
  var ornamentation$ = event.target.WithOrnamentation.checked;
  console.log(ornamentation$);
  var colorful$ = event.target.colorful.checked;
  console.log(colorful$);
  yourStyle$=[formal$,ornamentation$,colorful$];
  console.log('hhhhhhhhh',yourStyle$);

  
 render();
  myForm.reset();
  
})
console.log(yourStyle$);

