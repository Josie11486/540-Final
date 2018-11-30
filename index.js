var button;
var x = 540;
var y = 300;
var emoji;


function preload() {
  emoji = loadImage('emoji.png');
}

function setup() {
  createCanvas(1400, 700);
  background(255);
  textAlign(CENTER, CENTER);

  button = createButton('Start Quiz!');
  button.position(600, 500);
  button.mousePressed(nextPage);
  button.size(200, 100);
  button.style('font-size', '30px');
}


function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();

  // Title, instructions, answers, activity space
textSize(80);
text("Personality Quiz:", 700, 75);
textSize(40);
text("What type of student are you?", 700, 200);

image(emoji, 650, 350);
}

function nextPage() {
  window.location = 'page1.html';
}
