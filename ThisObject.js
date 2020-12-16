class ThisObject {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("object.png");
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
  
      if(this.body.speed < 3){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      

      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        //this.ThisObject.destroy();
        //tint(255,this.Visiblity);
        //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }

    }
    score(){
      if(this.Visiblity < 0 && this.Visiblity > -105){
        score+=1;
        console.log(score);
      }
    }
  
  }