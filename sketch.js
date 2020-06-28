var helicopterIMG, helicopterSprite, packageSprite,packageIMG,red1,red1sprite,red2,red2sprite,red3,red3sprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	red1sprite=createSprite(400,640,200,20);
	red1sprite.shapeColor="red";

	red2sprite=createSprite(300,550,20,200);
	red2sprite.shapeColor="red";

	red3sprite=createSprite(500,560,20,200);
	red3sprite.shapeColor="red";

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	


	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	// World.add(world, ground);

	 ball=new paper(120,130,30);
	 World.add(world,ball);
	ground=new Ground(800,650,1600,10);
	World.add(world,ground);

	red1=Bodies.rectangle(1200,640,200,20, {isStatic:true} ) 
		 World.add(world, red1);
	red2=Bodies.rectangle(1100,550,20,200,{isStatic:true});
		World.add(world,red2);	 
	red3=Bodies.rectangle(1300,550,20,200,{isStatic:true});
		World.add(world,red3);	

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  red1sprite.y=red1.position.y;
  red1sprite.x=red1.position.x;
  red2sprite.x=red2.position.x;
  red2sprite.y=red2.position.y;
  red3sprite.x=red3.position.x;
  red3sprite.y=red3.position.y;

  ball.display();
  ground.display();
  drawSprites();
//   rectangle(ground.position.x,ground.position.y,width,10);
//keyPressed(); 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
	

	}
//	break
	//ball.Body.gravity=10;
			//ball.Body.velocityY++;
}



