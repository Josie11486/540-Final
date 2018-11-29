var button;
var x = 540;
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
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("Type question here...", 700, 180);
text("A. Type answer here...", x, y);
text("B. Type answer here...", x, y+50);
text("C. Type answer here...", x, y+100);
text("D. Type answer here...", x, y+150);
}

function nextPage() {
  window.location = 'page2.html';
}
