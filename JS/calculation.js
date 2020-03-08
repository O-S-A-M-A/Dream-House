'use strict'
//connect html
var div = document.getElementById('output');
var rooms = document.getElementById('rooms');
var submit = document.addEventListener('submit', fun);

function fun(event) {
    event.preventDefault();

    var width = parseFloat(document.getElementById('Width').value);
    var height = parseFloat(document.getElementById('Height').value);
    var length = parseFloat(document.getElementById('Length').value);
    var numOfWindows = parseInt(document.getElementById('numOfWindows').value);
    var numOfDoor = parseInt(document.getElementById('numOfDoors').value);

    console.log(event.target.rooms.value);
    //calculations
    var roomVulume = width * height * length;
    var roomArea = width * length;
    var roomAreaTiles = roomArea;
    
    var door = (2*1)*numOfDoor;
    var window = (1.6*1.3)*numOfWindows;
    var paintAmount = ((width+length)*2)*height;
    var totalPaintAmount = paintAmount - (door+window);
// bathroom and kitchen have different output:
    if (event.target.rooms.value === 'Bathroom'){
     
    var paragraph = document.createElement('p');
    div.appendChild(paragraph);
    paragraph.textContent = `You need ${roomAreaTiles} square meters of Tiles , And ${totalPaintAmount} square meters of wall paint , And 2 taps`;
    }
    else if (event.target.rooms.value === 'Kitchen'){
        var paragraph = document.createElement('p');
    div.appendChild(paragraph);
    paragraph.textContent = `You need ${roomAreaTiles} square meters of Tiles , And ${totalPaintAmount} square meters of wall paint , And 1 tap`;
    }
    else{
        var paragraph = document.createElement('p');
    div.appendChild(paragraph);
    paragraph.textContent = `You need ${roomAreaTiles} square meters of Tiles , And ${totalPaintAmount} square meters of wall paint`;
    }

}
