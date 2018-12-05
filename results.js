var button;
var x = 540;
var y = 300;
var total;
// var idea;
var paper;
var paper2;
var doodle1;
var lol;
var check;

function preload() {
  paper = loadImage('paper.jpg');
  paper2 = loadImage('paper2.jpg');
  doodle1 = loadImage('doodle1.png');
  lol = loadImage('lol.png');
  check = loadImage('check.png');
}

function setup() {
  createCanvas(1500, 1400);
  background(255);
  textAlign(CENTER, CENTER);
}

function draw() {
  push()
  noStroke();
  rect(0, 0, width, height);
  pop();

  image(paper, 0, 0);
  image(paper2, 1000, 0);

  textSize(80);
  text("Results:", 600, 115);

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
  // text(total, 1050, 100);

  if (total < 9) {
    image(doodle1, 240, 200);
    textAlign(LEFT, LEFT);
    textSize(50);
    text("Procrastinator:", 700, 287)
    text("You always wait until the last", 700, 363)
    text("minute to get things done!", 700, 435)
    text("Try making a deal with yourself: ", 700, 508)
    text("Start the dreaded task but", 700, 580)
    text("promise yourself that you will", 700, 653)
    text("stop in 5 minutes if you still", 700, 726)
    text("don't want to do it. You'll be", 700, 799)
    text("surprised how much easier it", 700, 871)
    text("is to keep going once you", 700, 944)
    text("have already begun!", 700, 1017)
  } else if (total == 9) {
    image(lol, 240, 240);
    textSize(50);
    textAlign(LEFT, LEFT);
    text("Balanced:", 700, 290)
    text("It may not always be easy,", 700, 363)
    text("but you have mastered your", 700, 435)
    text("work-life balance. Keep it up!", 700, 508)
  } else {
    image(check, 240, 250);
    textAlign(LEFT, LEFT);
    textSize(50);
    text("Planner:", 700, 289)
    text("You always plan out your work,", 700, 363)
    text("which is great, but sometimes", 700, 435)
    text("you get so caught up in studying", 700, 508)
    text("that you forget to enjoy life.", 700, 580)
    text("Remember to schedule some", 700, 653)
    text("time for yourself too!", 700, 726)
  }
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
