class Ground{
    constructor(x,y,width,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; 
      this.height = this.height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };