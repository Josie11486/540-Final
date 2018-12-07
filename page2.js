var button;
var choice = '0';
var arrow;
var paper;
var paper2;

var outline;

var count;
let timer = 20;


function preload() {
  arrow = loadImage('arrow.png')
  paper = loadImage('paper.jpg')
  paper2 = loadImage('paper2.jpg')
  outline = loadImage('uoutline.png')
}

function setup() {
  createCanvas(1250, 700);
  background(255);
  noStroke();
  textAlign(CENTER, CENTER);
  button = createButton('Next');
  button.position(580, 690);
  button.mousePressed(nextPage);
  button.size(100,50);
  button.style('font-size', '20px');
  button.style("background-color","#ffffff");
  button.style("border", "2px solid black");
}


function draw() {
//push()
//noStroke();
//rect(0, 0, width, height);
//pop();

//image(paper, 0, 0);
//image(paper2, 1000, 0);


textAlign(CENTER, CENTER);
textSize(100);
text(timer, width/2, height/2);
if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
timer --;
}
if (timer == 0) {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();

  image(paper, 0, 0);
  image(paper2, 1000, 0);
text("GAME OVER", width/2, height*0.7);
//new part check if correct
if(button.mousePressed(nextPage)&&time<20&&time >0) {
  choice=1;
}
else {
   choice = 2;
}
// personality: if, then save it in a cookie


} else {

image(outline,0,0, 1250, 700);
if(mouseX<620){
fill(255,175,0);
}
else {
  fill(34,139, 34);
}

ellipse(mouseX, mouseY, 100, 100);



}




textAlign(CENTER, CENTER);
textSize(100);
text(timer, width/2, height/2);


}



function nextPage() {
  saveCookie();
  window.location = 'page3.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page2=" + choice + ";" + expires + ";path=/";
}
