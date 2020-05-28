const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body;

function preload()
{
	
}

function setup() {
  createCanvas(1350, 900);
  engine = Engine.create();
    world = engine.world;

    //bob = new Bob(5);
}

function draw() {
  background(0, 0, 0);
  console.log(mouseX);
  
 // bob.display();

  drawSprites();
}