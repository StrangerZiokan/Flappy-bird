function Score() {
  
  this.check = function(bird,pipe) {
    if(bird.x > pipe.x && bird.x < pipe.x + 15) {
    return true;
    }
    return false;
  }
  
}