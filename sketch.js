var gameState=1
var player,playerImg
var road,roadImg
var kills=0
var stopper,stopper2
var enemy1Img,enemy1Group
var enemy2Img,enemy2Group
var enemy3Img,enemy3Group
var bulletImg
var bulletGroup

function preload(){

playerImg=loadImage("player.png")
roadImg=loadImage("road.jpeg")
enemy1Img=loadImage("enemy1.gif")
enemy2Img=loadImage("army.png")
enemy3Img=loadImage("robot.png")

enemy1Group=new Group()
enemy2Group=new Group()
enemy3Group=new Group()

bulletImg=loadImage("bullet.png")

bulletGroup=new Group()
}
function setup(){

createCanvas(500,800)

  road=createSprite(400,150)
  road.addImage(roadImg)
  road.scale=2
  road.velocityX=-10

  player=createSprite(470,60,10,10)
  player.addImage(playerImg)
  player.scale=0.05
 
  stopper=createSprite(250,16,500,2)
  stopper2=createSprite(250,284,500,2)

}

function draw() {
  background("white")
   
   
   
   
   if(gameState===1){
   if(road.x<200){
     road.x=300
   }
   
 
   
   if(keyDown("up_arrow")){
     
     player.y=player.y-8
   }
   
   if(keyDown("down_arrow")){
     
     player.y=player.y+8
   }
  if(keyWentDown("space"))
 {
 createBullet();
 }
     

   spawnEnemy1()
   
   player.bounceOff(stopper)
     player.bounceOff(stopper2)
   

     if(bulletGroup.isTouching(enemy1Group)){
      enemy1Group.destroyEach()
      bulletGroup.destroyEach();
      kills=kills+1
    }
if(kills>10 ){
  spawnEnemy2()

  if(bulletGroup.isTouching(enemy2Group)){
    enemy2Group.destroyEach()
    bulletGroup.destroyEach();
    kills=kills+2
  }
}
if(kills>30){
  spawnEnemy3()

  if(bulletGroup.isTouching(enemy3Group)){
    enemy3Group.destroyEach()
    bulletGroup.destroyEach();
    kills=kills+3
  }
}






   }
   if(gameState===0){
     
     background("black")
     enemy1Group.destroyEach();
     
     stopper.visible=false
     stopper2.visible=false
     
     stroke("cyan")
     fill("cyan")
     textSize(30)
     text("GAME OVER",170,150)
   }
   
   drawSprites();
   stroke("cyan")
   fill("cyan")
   textSize(10)
   text("KILLS =   "+ kills,30,30)
   
  
 }
 
 function spawnEnemy1(){
   
   if(frameCount%80===0){
   var obstacle=createSprite(20,Math.round(random(30,270)),10,10);
   obstacle.addImage(enemy1Img)
   obstacle.scale=0.2
    
 
    obstacle.velocityX=5
     obstacle.lifetime=300
     enemy1Group.add(obstacle)
 }
 }

 function spawnEnemy2(){
   
  if(frameCount%90===0){
  var obstacle2=createSprite(20,Math.round(random(30,270)),10,10);
  obstacle2.addImage(enemy2Img)
  obstacle2.scale=0.1
   

   obstacle2.velocityX=5
    obstacle2.lifetime=300
    enemy2Group.add(obstacle2)
}
}
function spawnEnemy3(){
   
  if(frameCount%100===0){
  var obstacle3=createSprite(20,Math.round(random(30,270)),10,10);
  obstacle3.addImage(enemy3Img)
  obstacle3.scale=0.04
   

   obstacle3.velocityX=5
    obstacle3.lifetime=300
    enemy3Group.add(obstacle3)
}
}

 function createBullet()
        {
          var bullet=createSprite(475,430,5,5)
          bullet.addImage(bulletImg)
          bullet.velocityX=-15
          bullet.scale=0.01
          bullet.lifetime=30
          bullet.y=player.y-5
          bulletGroup.add(bullet);
        }