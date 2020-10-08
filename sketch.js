const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1, block2, block3, block4, block5, block6, block7, block8, block9, base1, base2;
var polygon1, slingshot;

function setup() {
  createCanvas(1000,600);
  
  

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 580, 1000, 20);
  base1 = new Ground(600, 400, 200, 10);

  block1 = new Box(590, 360);
  block2 = new Box(630, 360);
  block3 = new Box(670, 360);
  block4 = new Box(540, 360);
  block5 = new Box(590, 300);
  block6 = new Box(630, 300);
  block7 = new Box(620, 250);

  

  polygon1 = new Polygon(200, 200);

  slingshot = new SlingShot(polygon1.body,{x:200, y:300});
  
  
}

function draw() {
  background("gray");
  Engine.update(engine);

  text("SCORE:" + score, 750, 40);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  polygon1.display();
  slingshot.display();

  base1.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}