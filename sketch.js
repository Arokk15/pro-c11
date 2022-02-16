var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin,coin1,coin2,coin_img;
var count,death;
var bomb,bomb_img;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coin_img=loadImage("coin.png");
  bomb_img=loadImage("bomb.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


coin=createSprite(100,-50,10,10)
coin.addImage(coin_img);
coin.scale=0.5;
coin.velocityY=4


coin1=createSprite(210,-150,10,10)
coin1.addImage(coin_img);
coin1.scale=0.5;
coin1.velocityY=4

coin2=createSprite(280,-250,10,10)
coin2.addImage(coin_img);
coin2.scale=0.5;
coin2.velocityY=4

count=0;
death=0;

bomb=createSprite(100,-700,10,10);
bomb.addImage(bomb_img);
bomb.scale=0.1500;
bomb.velocityY=4;

}

function draw() {
  background(0);

  text("point :"+ count,200,50);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/4;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
if(coin.y>=400 || boy.isTouching(coin)){
  coin.y=-50;
  coin.x=random(110,295)

}

if(coin1.y>=400 || boy.isTouching(coin1)){
  coin1.y=-50;
  coin1.x=random(110,295)
  
}

if(coin2.y>=400 || boy.isTouching(coin2)){
  coin2.y=-50;
  coin2.x=random(110,295)
  
}

if(boy.isTouching(coin)){
  count=count+1
}

if(boy.isTouching(coin1)){
  count=count+1
}

if(boy.isTouching(coin2)){
  count=count+1
}

if(bomb.y>=400 || boy.isTouching(bomb)){
  bomb.y=-700;
  bomb.x=random(100,290)
}

if(boy.isTouching(bomb)){
  death=death+1
}

console.log(boy.x)

  
  drawSprites();
}
