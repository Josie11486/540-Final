var button;
var x = 540;
var y = 300;

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);

  button = createButton('Start Quiz!');
  button.position(600, 500);
  button.mousePressed(nextPage);
  button.size(200,100);
  button.style('font-size', '30px');
}


function draw() {
  rect(50, 50, 1300, 600);

  // Title, instructions, answers, activity space
textSize(80);
text("Personality Quiz:", 700, 150);
textSize(40);
text("What type of student are you?", 700, 280);
}

function nextPage() {
  window.location = 'page1.html';
}
