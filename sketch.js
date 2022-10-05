var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var bird, birdImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  skyImg = loadImage("sky.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  birdImg = loadImage("bird-standing.png");
 
}

function setup() {
  createCanvas(600,600);
 
  sky = createSprite(300,300);
  sky.addImage("sky",skyImg);
  sk.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  bird = createSprite(200,200,50,50);
  bird.scale = 0.3;
  bird.addImage("bird", birdImg);
}


function draw() {
  background(255);
 if(sky.y > 400) {
      sky.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        bird.x = bird.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right_arrow")){
  
          bird.x = bird.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
  
         bird.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  bird.velocityY = bird.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with bird destroy the bird and make gamestate to end.
     if(climbersGroup.isTouching(bird)){
      bird.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(bird) || bird.y > 600){
      bird.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    door.x= Math.round(random(120,400))
    climber.x = door.x;
    invisibleBlock.x = door.x;

    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the bird and door
    
     
bird.depth = door.depth;
    bird.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

 door.lifetime = 800;
  climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

