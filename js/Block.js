class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        this.visiblity=255;
        this.visiblity=this.visiblity - 5;
        this.visiblity=this.x;
        this.visiblity=this.body.position.x;

       // World.remove(world,this.body)
        //World.remove(world,this.image)
       // World.add(world,this.body)
        //World.destroy(world,this.body)
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}