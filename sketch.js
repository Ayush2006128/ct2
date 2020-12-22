
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,jungle

function preload(){
  
  
  monkey_running =loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  jungle=loadImage("jungle.jpg")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 600);
 


  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,300,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(400,500,12000,10);
  //ground.velocityX=-4;
 // ground.x=ground.width/2;
  console.log(ground.x)
ground.visible=false
  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
  background("red");
  image(jungle,50,40,width*4,height) 
  camera.position.y = width/2;
          camera.position.x = monkey.x
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(monkey.x>800){
    End()
  }
   
    if(keyDown(RIGHT_ARROW) ) {
      monkey.velocityX = 12;
    }
    if(keyDown("space")){
      monkey.velocityY=-12
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  //stroke("white");
  //textSize(20);
  //fill("white");
  //text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
 // stroke("black");
  //textSize(20);
  //fill("black");
  //survivalTime=Math.ceil(frameCount/frameRate()) 
  //text("Survival Time: "+ survivalTime, 100,50);
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,500,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function End(){
  monkey.velocityX=0
  console.log("end")
} 