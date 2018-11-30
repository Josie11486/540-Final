var button;
var choice = '0';
var x = 300;
var y = 300;
var arrow;

function preload() {
  arrow = loadImage('arrow.png');
}

function setup() {
  createCanvas(1400, 700);
  background(255);
  textAlign(CENTER, CENTER);
  button = createButton('Next');
  button.position(650, 600);
  button.mousePressed(nextPage);
  button.size(100,50);
  button.style('font-size', '20px');
}


function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();

    ellipse(307, 300, 30, 30);
    ellipse(307, 350, 30, 30);

  textAlign(CENTER, CENTER);
  textSize(40);
  text("What type of student are you?", 700, 40);
  textAlign(LEFT, LEFT);
  textSize(25);
  text("3. Question", x, y-100);
  textSize(20);
  text("A.  Answer", x, y);
  text("B.  Answer", x, y+50);


if(mouseIsPressed) {
  if(mouseX>=292 && mouseX<=322 && mouseY>=285 && mouseY<=315) {
    choice = '1';
    image(arrow, 230, 275);

  } else if(mouseX>=292 && mouseX<=322 && mouseY>=335 && mouseY<=365) {
      choice = '2';
      image(arrow, 230, 325);
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
  document.cookie = "index_page3=" + choice + ";" + expires + ";path=/";
}
