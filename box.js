class Box {
    constructor(x, y) {
      var options = {
          restitution:0.0001,
          friction:5,
      }
      this.image = loadImage("ball.png", {options});
      this.Visiblity = 255;
      World.add(world, this.body);
    }
  
    display(){
     
      if(this.body.speed < 3){
        var pos =this.body.position;
        translate(pos.x, pos.y);
        fill("blue");
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      
    }
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++
    }
    
  }

 