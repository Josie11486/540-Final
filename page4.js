var button;
var choice = '0';
var x = 300;
var y = 300;
var arrow;
var capture;

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
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}


function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();

     background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');

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
  window.location = 'page5.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page4=" + choice + ";" + expires + ";path=/";
}
