var button;
var x = 300;
var y = 300;

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);

  button = createButton('Next');
  button.position(1270, 600);
  button.mousePressed(nextPage);
}


function draw() {
  rect(50, 50, 1300, 600);

  // Title, instructions, answers, activity space
textAlign(CENTER, CENTER);
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("How often do you go to the library and use its services?", 700, 180);
textAlign(LEFT, LEFT);
text("A. Less than twice a week", x, y);
text("B. More than twice a week", x, y+50);
}

function nextPage() {
  window.location = 'page4.html';
}
