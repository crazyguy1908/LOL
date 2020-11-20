const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1 , box2
var engine, world;
var ground1;
var ball
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1 = new box(100,321,100,50)
box2 = new box(133,311,50,50) 
ground1 = new ground(200,390,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
box1.display()
box2.display()
ground1.display()
}