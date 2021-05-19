const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object;
var ground1;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;
  //object = Bodies.rectangle(200,100,50,50);
  //World.add(world,object);

  box1 = new box(700,340,50,50);
  box2 = new box(920,340,50,50);
  pig1 = new pig(810,340);
  //log1 = new log(810,260,300,PI/2);
  box3 = new box(700,260,50,50);
  box4 = new box(920,260,50,50);
  pig2 = new pig(810,260);
  //log2 = new log(810,180,300,PI/2);
  //log3 = new log(760,120,150,PI/7);
  //log4 = new log(870,120,150,PI/7);
  box5 = new box(810,180,50,50);

  
  ground1  = new ground(600,height,1200,20);



}

function draw() {
  background("blue"); 

  Engine.update(engine);

  //rectMode(CENTER);
  //rect(400,200,50,50);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground1.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();

  drawSprites();
}