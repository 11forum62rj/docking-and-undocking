var iss;
var spacecraft;
var hasDocked = false;


function preload(){
	issImg=loadImage("images/iss.png");
  backgroundImg=loadImage("images/spacebg.jpg");
  spacecraft1Img=loadImage("images/spacecraft1.png");
  spacecraft2Img=loadImage("images/spacecraft2.png");
  spacecraft3Img=loadImage("images/spacecraft3.png");
  spacecraft4Img=loadImage("images/spacecraft4.png");
  }


function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);

  iss = createSprite(400,260,10,10);
  iss.addImage(issImg);
  iss.debug = true;
  iss.setCollider("rectangle",-80,0,80,80);

  spacecraft=createSprite(343,556,10,10);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale =0.3;
  spacecraft.debug = true;
}

function draw() {
  background(backgroundImg);
  
  if(hasDocked === false){
    spacecraft.x = 370; 
    if(keyCode === LEFT_ARROW){
      spacecraft.addImage(spacecraft3Img)
      spacecraft.x = spacecraft.x-20
    } 
    if(keyCode === RIGHT_ARROW){
      spacecraft.addImage(spacecraft4Img,)
      spacecraft.x = spacecraft.x+20
    }
    if(keyCode === DOWN_ARROW){
      spacecraft.addImage(spacecraft2Img,)
    }
    if(keyCode === UP_ARROW){
      spacecraft.addImage(spacecraft2Img,)
      spacecraft.y = spacecraft.y-10
    }
  } 
  if(spacecraft.isTouching(iss)){
    hasDocked = true;
    textSize(40);
    fill("white");
    text("Docking successful",600,500);
    
  }

  drawSprites();
}

