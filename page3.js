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
text("How often do you go to the library and use its services?", 700, 180);
text("A. Less than twice a week", x, y);
text("B. More than twice a week", x, y+50);
//text("C. Type answer here...", x, y+100);
//text("D. Type answer here...", x, y+150);
text("Next", 1270, 600);
}
