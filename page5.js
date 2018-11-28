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
text("There is a big midterm project that is due on Wednesday, it is Tuesday afternoon and the gang is going out to celebrate your bestie’s birthday! What do you do?", 700, 100);
textSize(20);
text("You have a free weekend, how do you choose to spend it?", 700, 180);
text("A. Tell your friends, that you unfortunately have to miss it, cash app her money for a shot and promise to celebrate this weekend.", x, y);
text("B. Attend the 4pm dinner party and 7pm movie, pull an allnighter and wake up early in the morning to finish the loose ends", x, y+50);
//text("C. Type answer here...", x, y+100);
//text("D. Type answer here...", x, y+150);
text("Next", 1270, 600);
}
