var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pockmon , ball,bird,pockmonimg,ballg,score,gameOverImg,gameOver;

function preload(){
pockmonimg=loadImage("s1256.png")  
gameOverImg = loadImage("gameOver.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight );
  pockmon=createSprite(200,100,40,20)
  pockmon.addImage("pockmon",pockmonimg)
  pockmon.scale = 0.3
  
 ballg = new Group();
  gameOver = createSprite(400,height-200);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1.5;
  
  
  score = 0;
  
}


function draw() {
  background("lightblue");
  gameOver.visible = false;
  text("Score: "+ score, 700,100);
  if(gameState===PLAY){
    pockmon.velocityY = 10;
    score = score + Math.round(getFrameRate()/60);
  if((touches.length > 0 || keyDown("SPACE")) ) {

pockmon.velocityY = -10;
    
touches = [];
    
}
    
    if(pockmon.isTouching(ballg)){
       pockmon.destroy();
      gameState=END;
    }
 
  pockmon.velocityY = pockmon.velocityY + 0.8
  
if((touches.length > 0 || keyDown("SPACE"))){
 touches = []; 
  
}
  }
  else if (gameState === END) {
     fill("red");
    textSize = 10;
    gameOver.visible = true;
    text("gameover",200,100);
  
    
  }
       Ball();
  drawSprites();
}

function Ball(){
  
  if(World.frameCount%102===0){
   ball = createSprite(1500,150,40,20);
     ball.velocityX = -(4 + 3* score/100);
    ball.y = Math.round(random(1,300));
   ballg.add(ball)
  
    
     
  }
}