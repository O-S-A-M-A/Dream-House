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
  pl.textContent = 'your style is artdeco';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==classic.toString()){
  pl.textContent = 'your style is classic';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==contemporary.toString()){
  pl.textContent = 'your style is contemporary';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==industrial.toString()){
  pl.textContent = 'your style is industrial';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==boho.toString()){
  pl.textContent = 'your style is boho';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==scandinavian.toString()){
  pl.textContent = 'your style is scandinavian';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==costal.toString()){
  pl.textContent = 'your style is costal';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
}
else if(yourStyle$.toString()==zen.toString()){
  pl.textContent = 'your style is zen';
  img1.setAttribute("src",'modern-home-design-decoration.jpg');
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

