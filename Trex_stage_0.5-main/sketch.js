var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,205);
  frameRate(40);
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  ground = createSprite(300,200,1200,5);
  ground.addImage("ground",groundImage);
  ground.velocityX=-3.5;
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  //reset ground
  if (ground.x<-120) {
    ground.x=ground.width / 2;
  }
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyWentDown("space") && (trex.y>=170)){
    trex.velocityY = -9;
  }
  
  if (!trex.isTouching(ground)) {
    trex.velocityY = trex.velocityY + 0.5;
  } else {
    trex.velocityY = 0;
  }
 
  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites();
}