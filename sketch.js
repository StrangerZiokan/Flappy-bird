var bird;
var pipes = [];
var score;
var j=0;
var hitcount =0;
var mode = 1;


function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
  score = new Score();
}

function draw() {
  //clear();
  background(20);
  if(mode == 0) {
      textSize(20);
      text('GAME OVER', 140,200);
      text('ENTER TO RESTART', 110,250);
  }
  if(mode == 1) {
    // if(score.check(bird,pipes) == TRUE) {
    //   textSize(10);
    //   text(j, 5, 15);
    //   j++;
    // }
      textSize(20);
      text("Score: " + j, 10, 18);
      text("Lives:" + (3-(hitcount/2)), 330,20);
     
  if(frameCount % 45 == 0) {
    pipes.push(new Pipe());
      j++;
  }
  
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
      hitcount++;
      if(hitcount >= 6)
      {
        console.log('Game Over');
        mode = 0;
      }
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  
  bird.show();
  bird.update();
  }
  
}

function keyPressed() {
 if(key === ' '){
   bird.up(); 
 }
  if(keyCode === ENTER) {
    mode =1;
    j=0;
    hitcount = 0;
  }
}