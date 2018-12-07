var button;
var choice = '0';
var arrow;
var paper;
var paper2;


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
text("5.How often do you go to the library and use its services??", 300, 298);
text("A.  Less than twice a week.", 350, 371);
text("B.  More than twice a week.", 350, 444);

if(mouseIsPressed) {
  if(mouseX>=343 && mouseX<=383 && mouseY>=352 && mouseY<=392) {
    choice = '1';
    image(arrow, 285Question, 347);

  } else if(mouseX>=343 && mouseX<=383 && mouseY>=422 && mouseY<=462) {
      choice = '2';
      image(arrow, 285, 420);
  }
}
}

function nextPage() {
  saveCookie();
  window.location = 'page6.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page5=" + choice + ";" + expires + ";path=/";
}
