var fixedRect, movingRect,box;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  box=createSprite(200,200,100,100);
  box.shapeColor="white";
  box.velocityX=20;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(1000,200,100,100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=-20;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(movingRect,box);

if(isTouching(movingRect,box))
  {
    movingRect.shapeColor = "red";
    box.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    box.shapeColor = "white";
  }
  drawSprites();
}
