
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var polygon
var ground1,ground2,ground3
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16,rect17,rect18,rect19,rect20,rect21,rect22,rect23,rect24,rect25
var slingshot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(405,530,200,10);
	ground2 = new Ground(630,450,150,10);
	ground3 = new Ground(400,698,900,20);

	rect1 = new Rect(345,520,20,40);
	rect2 = new Rect(365,520,20,40);
	rect3 = new Rect(385,520,20,40);
	rect4 = new Rect(405,520,20,40);
	rect5 = new Rect(425,520,20,40);
	rect6 = new Rect(445,520,20,40);
	rect7 = new Rect(465,520,20,40);

	
	rect8 = new Rect(365,480,20,40);
	rect9 = new Rect(385,480,20,40);
	rect10 = new Rect(405,480,20,40);
	rect11 = new Rect(425,480,20,40);
	rect12 = new Rect(445,480,20,40);

	rect13 = new Rect(385,440,20,40);
	rect14 = new Rect(405,440,20,40);
	rect15 = new Rect(425,440,20,40);

	rect16 = new Rect(405,400,20,40);

	rect17 = new Rect(590,440,20,40);
	rect18 = new Rect(610,440,20,40);
	rect19 = new Rect(630,440,20,40);
	rect20 = new Rect(650,440,20,40);
	rect21 = new Rect(670,440,20,40);

	rect22 = new Rect(610,400,20,40);
	rect23 = new Rect(630,400,20,40);
	rect24 = new Rect(650,400,20,40);

	rect25 = new Rect(630,360,20,40);

	polygon = new Polygon(100,360,50,50)

	slingshot = new SlingShot(polygon.body,{x:100,y:400})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  stroke(4)
  fill("red");
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();

  stroke(4)
  fill("blue");
  rect8.display();
  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();

  stroke(4)
  fill("white");
  rect13.display();
  rect14.display();
  rect15.display();

  stroke(4)
  fill("black");
  rect16.display();

  stroke(4)
  fill("yellow");
  rect17.display();
  rect18.display();
  rect19.display();
  rect20.display();
  rect21.display();

  stroke(4)
  fill("green");
  rect22.display();
  rect23.display();
  rect24.display();

  stroke(4)
  fill("red");
  rect25.display();

  polygon.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

