var canvas;
var dave;
var ground,edge1,edge2,edge3;
var plat1,plat2,plat3,plat4;
var plat5,plat6,plat7,plat8;

function preload(){
  daveI= loadImage("Images/dave_body.png");
  
  brick_1= loadImage("Images/brick_1.png");
  brick_2= loadImage("Images/brick.png");
  groundI=  loadImage("Images/g2.png");
}


function setup(){
  canvas=createCanvas(1000,300)


  ground=createSprite(500,300,1000,10)
  ground.addImage(groundI)
  ground.scale=1
 // ground.debug=true;
  ground.setCollider("rectangle",0,0,1000,20)
    
  dave = createSprite(50,230,70,70);
  dave.addImage(daveI)
  dave.scale=0.2
  dave.debug=true;
  dave.setCollider("rectangle",0,0,80,80)
 
  
  plat1= createSprite(200,240,50,25);
  plat1.addImage(brick_1)
  plat1.scale=0.5
  plat2= createSprite(250,170,30,25);
  plat2.addImage(brick_1)
  plat2.scale=0.5
  plat3= createSprite(350,100,30,25);
  plat3.addImage(brick_1)
  plat3.scale=0.5
  plat4= createSprite(10,100,30,30);
  

  
}

function draw(){
  background("grey");
  
 if(keyDown(UP_ARROW)){
  dave.velocityY=-10;
 }

 dave.velocityY=dave.velocityY+2
 
 if(keyDown(RIGHT_ARROW)){
    dave.x=dave.x+5;
  }

 for(var i=0;i<=300;i=i+50){
  edge1= createSprite(10,i,1,2000);
  edge1.addImage(brick_2)}

  for(var i=0;i<=300;i=i+50){
    edge2=createSprite(985,i,1,1000);
    edge2.addImage(brick_2)}

    for(var i=0;i<=1000;i=i+50){
      edge3=createSprite(i,0,1000,25)
      edge3.addImage(brick_1)
    }

  if(dave.isTouching(plat1)||
  dave.isTouching(plat2)||
  dave.isTouching(plat3)){
    dave.collide(plat1)
  }
  //dave.isTouching(plat4)||
  //dave.isTouching(plat5)||
  //dave.isTouching(plat6)||
  //dave.isTouching(plat7)||
  //dave.isTouching(plat8)||
  //dave.isTouching(plat9)||
  //dave.isTouching(plat10)||
  //dave.isTouching(plat11)){
  
  //}

  dave.collide(ground)
drawSprites()
  text(mouseX+":"+mouseY,mouseX,mouseY);
}
  
/*function keyPressed(){
 
  if(keyIsDown(DOWN_ARROW)){

   dave.velocityY=5
  }
  if(keyIsDown(LEFT_ARROW)){

  dave.velocityX=-5
  }
 
}
*/
