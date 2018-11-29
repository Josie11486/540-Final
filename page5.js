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
text("There is a big midterm project that is due on Wednesday, it is Tuesday afternoon and the gang is going out to celebrate your bestie’s birthday! What do you do?", 700, 180);
textAlign(LEFT, LEFT);
text("A. Tell your friends, that you unfortunately have to miss it, cash app her money for a shot and promise to celebrate this weekend.", x, y);
text("B. Attend the 4pm dinner party and 7pm movie, pull an allnighter and wake up early in the morning to finish the loose ends", x, y+50);

}

function nextPage() {
  window.location = 'page6.html';
}
