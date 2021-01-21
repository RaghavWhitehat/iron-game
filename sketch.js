
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}



function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(1200,550);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  drawSprites();
 
}



