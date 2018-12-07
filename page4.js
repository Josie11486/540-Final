var button;
var choice = '0';
var arrow;
var paper;
var paper2;
var x = 100;
var y = 0;
var center = 340;
var speed = -1;
//var millisecond = millis();

var count = 0;


function preload() {
  arrow = loadImage('arrow.png');
  paper = loadImage('paper.jpg')
  paper2 = loadImage('paper2.jpg')
}

function setup() {
  createCanvas(1500, 1400);
  background(255);
  textAlign(CENTER, CENTER);
  button = createButton('Next');
  button.position(650, 620);
  button.mousePressed(nextPage);
  button.size(100,50);
  button.style('font-size', '20px');
  button.style("background-color","#ffffff");
  button.style("border", "2px solid black");
}


function draw() {
push()
noStroke();
rect(0, 0, width, height);
pop();

image(paper, 0, 0);
image(paper2, 1000, 0);

push()
noFill();
ellipse(363, 372, 40, 40);
ellipse(363, 442, 40, 40);
pop();

textAlign(CENTER, CENTER);
textSize(40);
text("What type of student are you?", 700, 100);
textAlign(LEFT, LEFT);
textSize(30);
text("4. Question?", 300, 298);

}

  background(34,139,34);
  stroke(255);

  textSize(26);
  textAlign(CENTER);
  text('Use the left and right arrows to move the', 300, 140);
  text('circle back and forth as many times', 300, 190)
  text('as you can before the circle hits the bottom of the screen.', 300, 240);
  var currentTime = millis();

  if(currentTime > 8000) {
  y -= speed;
  ellipse(x,y,x,y+20);
  ellipse(2*x, y-30, 2*x, y+20-30);
  ellipse(3*x, y+50, 3*x, y+20+50);
  ellipse(4*x, y-10, 4*x, y+20-10);
 x= random(0, width);

/*
 currentTime = mills();
 if(currentTime > 2000) {
 y += speed;
 if(y > height) {
   y = 0;
   x = random(0, width);
 }
}
 */

 if(keyIsPressed) {
 if(keyCode == LEFT_ARROW) {
   center = center- 5;
 }

 if(keyCode == RIGHT_ARROW){
   center = center + 5;
  }
 

if(center>250 &&center<450) {
     count += 1;
}

if(center>1 &&center<800) {
     count += 4;
}

fill(255, 165, 0);
ellipse(center, y, 140, 140);

}
}


function nextPage() {
  saveCookie();
  window.location = 'page5.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page4=" + choice + ";" + expires + ";path=/";
}
}
