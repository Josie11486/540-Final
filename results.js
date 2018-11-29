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
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("Result Page", 700, 180);
}
