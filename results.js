var button;
var x = 540;
var y = 300;
var total;

function setup() {
  createCanvas(1400, 700);
  background(255);
  textAlign(CENTER, CENTER);
}


function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);

  stroke(0);
  fill(192, 247, 200);
  rect(520, 15, 350, 125);
  pop();

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
  text(total, 700, 300);

  // if (total < 9) {
  //   text("Type A" 700, 400);
  // } else if (total > 9) {
  //   text("Type B" 700, 400);
  // } else if (total == 9) {
  //   text("Balanced" 700, 400);
  // }

  // Title, instructions, answers, activity space
  textSize(80);
  text("Results:", 700, 75);
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
