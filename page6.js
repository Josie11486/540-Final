var button;
var choice = '0';
var arrow;
var paper;
var paper2;

var s;
var scl = 20;
var food;

function preload() {
  arrow = loadImage('arrow.png');
  paper = loadImage('paper.jpg')
  paper2 = loadImage('paper2.jpg')
  desk = loadImage('desk.jpg');
}

function setup() {
  createCanvas(1500, 1400);
  background(255);
  textAlign(CENTER, CENTER);
  button = createButton('Next');
  button.position(650, 620);
  button.mousePressed(nextPage);
  button.size(100,50);
  button.style('font-size', '20px');
  button.style("background-color","#ffffff");
  button.style("border", "2px solid black");
  
    createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  
background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  ellipse(food.x, food.y, scl, scl);
  
push()
noStroke();
rect(0, 0, width, height);
pop();

image(paper, 0, 0);
image(paper2, 1000, 0);
  

// dir is the function direction
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}


function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 2;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

// directions
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

// if the snake dies - start over
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

// Movement
  this.update = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    } // shift the tail everything down
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    } // -1 = the new location

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

// for every food ate +1 on the tail
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      ellipse(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    ellipse(this.x, this.y, scl, scl);

  }
}




function nextPage() {
  saveCookie();
  window.location = 'results.html';
}

//https://www.w3schools.com/js/js_cookies.asp
function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + 60*60*1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "index_page6=" + choice + ";" + expires + ";path=/";
}
