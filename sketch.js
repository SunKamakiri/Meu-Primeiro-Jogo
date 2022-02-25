var caixa
function setup() {
  createCanvas(400,400);
  caixa=createSprite(250,250,30,30);
  caixa.shapeColor="blue";
}

function draw() 
{
  background(30);
  if (keyDown("w")) {
    caixa.y -=5
  }
  if(keyDown("s")){
    caixa.y +=5;
  }
  if(keyDown("a")){
    caixa.x -=5;
  }
  if(keyDown("d")){
    caixa.x +=5;
  }
drawSprites();
}




