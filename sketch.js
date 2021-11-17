
var nuvem,nuvemslakk;
var trex ,trex_running;
var chao,chaoimg
function preload(){
  nuvemslakk = loadImage("cloud.png")
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
chaoimg = loadImage("ground2.png")
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
}}
