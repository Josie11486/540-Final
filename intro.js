var x = 540;
var y = 300;

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);
}


function draw() {
  rect(50, 50, 1300, 600);

  // Title, instructions, answers, activity space
textSize(80);
text("Personality Quiz:", 700, 150);
textSize(40);
text("What type of student are you?", 700, 280);
text("[Do something cool with images/animation/effects here...]", 700, 440);
text("Start Quiz!",700, 600);
}
