var button;
var choice = 'C';
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

  push()
    fill(244, 65, 65);
    ellipse(307, 300, 30, 30);
    fill(66, 134, 244);
    ellipse(307, 350, 30, 30);
  pop();

textAlign(CENTER, CENTER);
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("How often do you go to the library and use its services?", 700, 180);
textAlign(LEFT, LEFT);
text("A. Less than twice a week", x, y);
text("B. More than twice a week", x, y+50);

if(mouseIsPressed) {
  if(mouseX>=292 && mouseX<=322 && mouseY>=285 && mouseY<=315) {
      background(244, 65, 65);
      choice = 'A';
  } else if(mouseX>=292 && mouseX<=322 && mouseY>=335 && mouseY<=365) {
      background(66, 134, 244);
      choice = 'B';
  }
}
}

function nextPage() {
  saveCookie();
  window.location = 'page4.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page=" + choice + ";" + expires + ";path=/";
}
