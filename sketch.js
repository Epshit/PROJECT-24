
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(600,height,1200,60);
	stone = new Stone(200,300);
	hammer = new hammer(675,345);



	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bird.display();
  hammer.display();
 
  drawSprites();
}



