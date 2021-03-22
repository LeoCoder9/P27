
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var bob1, hanger1, rope1, bob2, rope2, bob3, bob4, bob5, rope3, rope4, rope5
var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();

	world = engine.world;
  hanger1 = new hanger(400, 100, 450, 50)
  bob1 = new bob(150,350,80)
  rope1 = new rope(bob1.body, hanger1.body, -60, 0)
  bob2 = new bob(200, 350, 80)
   bob3 = new bob(250, 350, 80)
  rope2 = new rope(bob2.body, hanger1.body, 0, 0)
  rope3 = new rope(bob3.body, hanger1.body, 60, 0)
  bob4 = new bob(300, 350, 80)
  bob5 = new bob(350, 350, 80)
  rope4 = new rope(bob4.body, hanger1.body, 120, 0)
  rope5 = new rope(bob5.body, hanger1.body, 180, 0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("white")
	Engine.update(engine)
  rectMode(CENTER);
  bob1.display()
  hanger1.display()
  rope1.display()
  bob2.display()
    rope2.display()
    bob3.display()
    rope3.display()
    bob4.display()
    bob5.display()
    rope4.display()
    rope5.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-100, y:-54})
  }
}

