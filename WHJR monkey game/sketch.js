
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
  background("white");
  
  if(keyDown("space")){
    monkey.veloctiyY = -15;
    monkey.y = monkey.y + 0.8;
  }
  
  
  food();
  obstacles();
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);

}

function food() {
  if(frameCount % 80 === 0){
    banana = createSprite(375, Math.round(random(120, 200)), 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;

  }


}

function obstacles() {
  if(frameCount % 300 === 0){
    obstacle = createSprite(375, 315, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    
  }
  

  
  
}









