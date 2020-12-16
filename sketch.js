
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ob1;
var ground;
var score = 0;
function preload()
{
	
}

function setup() {
	createCanvas(1448, 800);

	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,20);
	platform = new Ground(1150,490,220,10);

	lv0ob1 = new ThisObject(1075,450,50,50);
	lv0ob2 = new ThisObject(1125,450,50,50);
	lv0ob3 = new ThisObject(1175,450,50,50);
	lv0ob4 = new ThisObject(1225,450,50,50);
	

	lv1ob1 = new ThisObject(1100,400,50,50);
	lv1ob2 = new ThisObject(1150,400,50,50);
	lv1ob3 = new ThisObject(1200,400,50,50);

	lv2ob1 = new ThisObject(1125,350,50,50);
	lv2ob2 = new ThisObject(1175,350,50,50);

	lv3ob1 = new ThisObject(1150,300,50,50);
	ball = new Ball(200,409,60);

	slingshot = new SlingShot(ball.body,{x:200, y:400});
	


	Engine.run(engine);
	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  noStroke();
  textSize(35)
  fill("white")
  text("Score: " + score, width-300, 50)
  
  ground.display();
  platform.display()

  lv0ob1.display();
  lv0ob2.display();
  lv0ob3.display();
  lv0ob4.display();
	
  lv1ob1.display();
  lv1ob2.display();
  lv1ob3.display();
  
  lv2ob1.display();
  lv2ob2.display();

  lv3ob1.display();
  lv3ob1.score();

  ball.display();
  slingshot.display();

  

  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, {x:200, y:400});
       slingshot.attach(ball.body);
    }
}