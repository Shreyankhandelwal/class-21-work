var fixedRect
var Rect
var edges

var sprite, sprite2, sprite3;

function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(400, 250, 70, 30);
  fixedRect.shapeColor = "green";

  sprite = createSprite(200,100,45,20);
  sprite.velocityY = -2

  sprite2 = createSprite(200,200,45,20);
  sprite2.velocityY = 2

  edges = createEdgeSprites();

  Rect = createSprite(700,200,30,70);
  Rect.shapeColor = "yellow"
}

function draw() {
  background("black");
  
  Rect.y = mouseY;
  Rect.x = mouseX

  console.log(Rect.x - fixedRect.x)

  fixedRect.bounceOff(edges);

  if (isTouching(Rect,fixedRect)){

    Rect.shapeColor = "Lightblue";
    fixedRect.shapeColor = "red";

    fixedRect.VelocityY = 2;
    fixedRect.velocityX = -3;

  }
  else {
    fixedRect.shapeColor = "green";
    Rect.shapeColor = "yellow"; 

  }


  bounceOff(sprite, sprite2);

  sprite.bounceOff(edges);
  sprite2.bounceOff(edges);
  

  drawSprites();
}
