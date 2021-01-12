
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var ground,ball,box,box1;
function preload(){
   box1=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(900,400);
	box=createSprite(750,300);
	box.addImage(box1);
    box.scale=0.5;
	 
	engine = Engine.create();
	world = engine.world;

	ground=new BOX(450,400,900,40);
	ball=new BALL(200,360);
	
	
	Engine.run(engine);
  
}


function draw() {
  
  background("red");
  ball.present();
  ground.display();
 
drawSprites();
  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body ,ball.body.position,{x:90 ,y:-85 });
	  }
}



