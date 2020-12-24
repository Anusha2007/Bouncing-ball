const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myengine, myworld, ground, ball;

function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  //myworld is myengine's world
  myworld=myengine.world;
  var groundoption={
    isStatic: true
  }
  ground=Bodies.rectangle(200,370,400,20,groundoption);
  World.add(myworld,ground);
  //console.log(ground);
  //console.log(object.position.x);
  var balloption={
    restitution: 0.8
  }
  ball=Bodies.circle(200,200,20,balloption);
  World.add(myworld,ball);

}

function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}