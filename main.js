let page = document.createElement('DIV');
page.style.height = '100vh';

document.body.appendChild(page); 


let x = 0;
let y = 0;

page.addEventListener('mousemove', function(event) {
  x = event.clientX;
  y = event.clientY;
  
  page.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)'; 
});

let box = document.getElementById('box');

let mousebox = function() {
  box.style.left = x + 'px';
  box.style.top = y + 'px';
  
}  

let rbox = document.getElementById('rbox'); 

let degree = 0;
let rotatebox = function(){
  
  degree = (degree + 2) % 360;
  rbox.style.transform = 'rotate('+degree+'deg)'; 
  rbox.style.left = window.innerWidth / 2 + 'px';
  rbox.style.top = window.innerHeight / 2 + 'px';
}

setInterval(mousebox,100);
setInterval(rotatebox,10);
