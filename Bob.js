class bob{
    constructor(x,y,radious){

        var options={
            friction:0,
            restitution:1,
            density:0.8
        }
        this.body = Bodies.circle(x,y,radious/2, options)
        this.radious = radious
      World.add(world, this.body)
       
    }
    display(){
        push()
        ellipseMode(CENTER)
        fill("red")
      ellipse(this.body.position.x,this.body.position.y, this.radious, this.radious)
      pop()
    }
}