var ship, ship_running;
var ground;
function preload(){
 ship_running = loadAnimation("ship-1.png","ship-2.png");
}


function setup(){
  createCanvas(600,200);
  
ship = createSprite (50, 180, 30, 15)
ship.shapeColor="white"
ship.addAnimation("running",ship_running)
ship.velocityY=4;
ship.velocityY=0.4;

ground = createSprite(300,190,500,10)
ground.shapeColor="blue"


// adding scale
ship.scale=0.10

edges = createEdgeSprites(ground);

}



function draw() {
  background("sky");
 
  ship.collide(ground);

  if(keyDown("space")){
  ship.velocityY=4
  }
  ship.velocityY=-0.10 
  ship.velocityY=4

  drawSprites();
}