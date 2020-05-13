var main ,mainr ,mainl ,mrr,mll ,mt ,mrrr ,mlll  ;



function setup() {
  createCanvas(800,400);
  main = createSprite(400, 299, 124,200);
  mainr = createSprite(515, 299, 100,230);
  mainl = createSprite(285, 299, 100,230);
  //mt = triangle(338, 197,400, 139, 462, 401);
  mll = createSprite(190, 299, 85,310);
  mrr = createSprite(610, 299, 85,310);
  mlll = createSprite(135, 299, 20,380);
  mrrr = createSprite(665, 299, 20,380);
}

function draw() {
  background(0); 
  
  mt = triangle(338, 195,400, 110, 460, 195);
  mllt = triangle(145, 143 ,190, 100, 237, 143);
  mrrt = triangle(560, 143,610, 100, 655, 143);
  drawSprites();
}