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
//contractor__________________________________________
// function Style(formal1, Ornamentation, colorful) {
//   this.formal1 = formal1;
//   this.Ornamentation = Ornamentation;
//   this.colorful = colorful;
//   styles.push(this);
// }

// Style.prototype.render = function () {
  function render(){
  var container = document.getElementById("output");
  // create and append article to the container
  if(yourStyle$.toString()==artDeco.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is artdeco';
}
else if(yourStyle$.toString()==classic.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is classic';
}
else if(yourStyle$.toString()==contemporary.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is contemporary';
}
else if(yourStyle$.toString()==industrial.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is industrial';
}
else if(yourStyle$.toString()==boho.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is boho';
}
else if(yourStyle$.toString()==scandinavian.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is scandinavian';
}
else if(yourStyle$.toString()==costal.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is costal';
}
else if(yourStyle$.toString()==zen.toString()){
  var pl = document.createElement("p");
  container.appendChild(pl);
  pl.textContent = 'your style is zen';
}




  // create image and set the src  attribute _____________
  // var imgEl = document.createElement("img");
  // imgEl.setAttribute("src", this.imagePath);
  // container.appendChild(imgEl);

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

  // var yourStyle = new Style(formal$, ornamentation$, colorful$);
  

  // yourStyle.render();
 render();
  myForm.reset();
  
})
console.log(yourStyle$);

