var button;
var x = 540;
var y = 300;
var capture;
var x = 100;

function setup() {
  createCanvas(1400, 700);
  background(255);
  textAlign(CENTER, CENTER);
}


function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();
  
    background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');

  var total = 0;
  var choice1 = getCookie('index_page1=');
  var choice2 = getCookie('index_page2=');
  var choice3 = getCookie('index_page3=');
  var choice4 = getCookie('index_page4=');
  var choice5 = getCookie('index_page5=');
  var choice6 = getCookie('index_page6=');
  print(choice1);
  print(choice2);
  print(choice3);
  print(choice4);
  print(choice5);
  print(choice6);
  total += parseInt(choice1);
  total += parseInt(choice2);
  total += parseInt(choice3);
  total += parseInt(choice4);
  total += parseInt(choice5);
  total += parseInt(choice6);
  text(total, 240, 120);

  // Title, instructions, answers, activity space
textSize(40);
text("What type of student are you?", 700, 40);
textSize(20);
text("Result Page", 700, 180);
}

//https://www.w3schools.com/js/js_cookies.asp
function getCookie(name) {
  /*var name = "index_page1=";
  var name = "index_page2=";
  var name = "index_page3=";
  var name = "index_page4=";
  var name = "index_page5=";
  var name = "index_page6=";*/
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
