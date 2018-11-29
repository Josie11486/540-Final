var button;
var x = 540;
var y = 300;

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);
}


function draw() {
  var choice = getCookie();
  text(choice, 240, 120);
  rect(50, 50, 1300, 600);

  // Title, instructions, answers, activity space
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("Result Page", 700, 180);
}

//https://www.w3schools.com/js/js_cookies.asp
function getCookie() {
  var name = "index_page=";
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
