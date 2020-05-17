class Player {
    constructor(){
      this.name = null;

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(200, 200, 50, 50, options);
        this.width = width;
        this.height = height;
       // this.image =loadImage("2.gif");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       // imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
  
    
  }
  