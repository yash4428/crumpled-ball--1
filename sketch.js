const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground;

//var ball; //BUG1 

var dustbin, ballObject,ground	
var world;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1200,20)
  ballObject = new Ball(100,600,30) //renamed ball as ballObject
  dustbin = new Dustbin(680,680,150,20)
  dustbin2 = new Dustbin(600,610,20,150)
  dustbin3 = new Dustbin(760,610,20,150)

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ballObject.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  
  //drawSprites();
 
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:50,y:-30});
  }
  
}


