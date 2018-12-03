var button;
var x = 540;
var y = 300;
var emoji;
var students;

function preload() {
  emoji = loadImage('emoji.png');
  students = loadImage('students.png');
}

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);

  button = createButton('Start Quiz!');
  button.position(600, 500);
  button.mousePressed(nextPage);
  button.size(200, 100);
  button.style('font-size', '30px');
  button.style("background-color","#c2f6fc");
  button.style("border", "0s");
}


function draw() {
  push()
  stroke(255);
  fill(255);
  rect(0, 0, width, height);


  stroke(0);
  fill(194, 246, 252);
  rect(360, 15, 680, 220);
  pop();

  // Title, instructions, answers, activity space
textSize(80);
text("Personality Quiz:", 700, 75);
textSize(40);
text("What type of student are you?", 700, 175);

image(students, 360, 236);
}

function nextPage() {
  window.location = 'page1.html';
}
