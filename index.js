var button;
var x = 540;
var y = 300;
var emoji;
var student2;
var paper;
var paper2;

function preload() {
  student2 = loadImage('student2.png');
  paper = loadImage('paper.jpg')
  paper2 = loadImage('paper2.jpg')
}

function setup() {
  createCanvas(1500, 1400);
  background(205);
  textAlign(CENTER, CENTER);

  button = createButton('Start Quiz!');
  button.position(643, 620);
  button.mousePressed(nextPage);
  button.size(200, 50);
  button.style('font-size', '30px');
  button.style("background-color","#ffffff");
  button.style("border", "2px solid black");
}


function draw() {
  push()
  rect(0, 0, width, height);
  pop();

  image(paper, 0, 0);
  image(paper2, 1000, 0);
  image(student2, 525, 240);

  // Title, instructions, answers, activity space
textSize(80);
text("Personality Quiz:", 730, 75);
textSize(40);
text("What type of student are you?", 730, 175);

}

function nextPage() {
  window.location = 'page1.html';
}
