var z1,z1img;
var backgroundimg;
var s1,s1img;
var t1,t1img;
var ghostimg;
var batimg;
var invisibleGround;
var bg;
function preload(){
z1img=loadAnimation("zombie1.png","zombie2.png","zombie4.png","zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png","zombie10.png")  
  backgroundimg=loadImage("background.jpg")
  s1img=loadAnimation("simba1.png","simba2.png","simba3.png","simba4.png","simba5.png","simba6.png","simba7.png")
 // t1img=loadAnimation("t1.gif")
ghostimg=loadImage("ghost.png")
batimg=loadImage("bat.png")
}










function setup() {
  createCanvas(800, 800);
  bg=createSprite(500,400,3000);
bg.addImage("background1",backgroundimg);

bg.velocityX=-3;
//bg.y=bg.height/2;
bg.scale=2;
bg.x=bg.width/2;
  z1=createSprite(300,550,10,100);
  z1.addAnimation("zombie",z1img);
  z1.scale=0.5;
  s1=createSprite(550,550,10,10);
  s1.addAnimation("simba",s1img);
  s1.scale=0.8;
  //t1=createSprite(200,200,10,10);
  //t1.addAnimation("t1",t1img);
   invisibleGround = createSprite(600,650,1000,5);
  invisibleGround.visible = false;


}










function draw() {
  background("black" );
  
  z1.velocityX=5;
  s1.velocityX=5;
  spawnGhost();
  spawnBat();
  if (keyDown("space")) {
s1.velocityY=-10;

  }
  s1.velocityY=s1.velocityY+0.8;
s1.collide(invisibleGround);

if(bg.x<0){
bg.x=bg.width/2;

}






  drawSprites();
}

function spawnGhost(){
if(frameCount % 120===0) {
var ghost=createSprite(300,400,10,10);
ghost.addImage("ghost",ghostimg);
ghost.velocityX=-3;
ghost.scale=0.5;
ghost.lifetime=100;

}
}

function spawnBat(){
  if(frameCount % 180===0) {
  var bat=createSprite(300,200,10,10);
  bat.addImage("bat",batimg);
  bat.velocityX=3;
  bat.scale=0.55;
  bat.lifetime=200;
  
  }

}





















