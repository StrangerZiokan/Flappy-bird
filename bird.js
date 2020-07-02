
function Bird() {
  this.y = height/2;
  this.x = 45;
  
  this.gravity = 0.2;
  this.velocity = 0;
  this.lift = -11;
  
  this.show = function() {  
    fill(250);
    ellipse(this.x,this.y,30,30);
  }
  
  this.up = function() {
    this.velocity += this.lift;
  };
  
  this.update = function () {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    
    this.y = constrain(this.y,0, height);
  }
}