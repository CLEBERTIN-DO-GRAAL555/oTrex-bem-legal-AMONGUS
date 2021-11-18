
var nuvem,nuvemslakk;
var trex ,trex_running;
var chao,chaoimg
var cacto1
var cacto2
var cacto3
var cacto4
var cacto5
var cacto6
function preload(){
  nuvemslakk = loadImage("cloud.png")
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
chaoimg = loadImage("ground2.png");
 cacto1= loadImage("obstacle1.png");
 cacto2= loadImage("obstacle2.png");
 cacto3= loadImage("obstacle3.png");
 cacto4= loadImage("obstacle4.png");
 cacto5= loadImage("obstacle5.png");
 cacto6= loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale=0.5

  chao=createSprite(300,180,600,50);
chao.addImage(chaoimg);
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY = -10;
}
//console.log(trex.y)
trex.velocityY=trex.velocityY+0.8;
chao.velocityX=-5
trex.collide(chao)
if(chao.x<0){
  chao.x=chao.width/2
}
gerarobstaculos()
gerarnuvens()
drawSprites();

}


function gerarnuvens(){
  if(frameCount    %  60 ==0 ){
  var nuvem = createSprite(600,100,50,50)
  nuvem.scale=0.5;
  nuvem.y = Math.round(random(20,100));
  nuvem.addImage(nuvemslakk)
nuvem.velocityX =-2
console.log(frameCount)
nuvem.lifetime= 350

}}
function gerarobstaculos(){
  if(frameCount   % 60 ==0){
  var cactos = createSprite (600,150,50,50)
  var sorteio=Math.round(random(1.6))
  cactos.velocityX=-5
switch(sorteio){
  case 1:cactos.addImage(cacto1);
  break;
  case 2:cactos.addImage(cacto2);
  break;
  case 3:cactos.addImage(cacto3);
  break;
  case 4:cactos.addImage(cacto4);
  break;
  case 5:cactos.addImage(cacto5);
  break;
  case 6:cactos.addImage(cacto6);
  break; 
  default: break;
}
}}
