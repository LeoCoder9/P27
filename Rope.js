class rope{
    constructor(bodyA, bodyB, x,y){
        this.x = x
        this.y = y
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.x, y:this.y}
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        stroke("black")
        strokeWeight(2)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x+this.x,this.chain.bodyB.position.y+this.y)
    }
}