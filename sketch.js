var issImg, spaceBGImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var hasDocked;
var black, rand, iss, spacecraft;

function preload(){
  issImg = loadImage("images/iss.png");
  spaceBGImg = loadImage("images/spacebg.jpg");
  spacecraft1Img = loadAnimation("images/spacecraft1.png");
  spacecraft2Img = loadAnimation("images/spacecraft2.png");
  spacecraft3Img = loadAnimation("images/spacecraft3.png");
  spacecraft4Img = loadAnimation("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,600);
  hasDocked = false;

  block = createSprite(340, 270, 20, 20)
  block.visible = false;

  spacecraft = createSprite(300, 525, 20, 20)
  rand = Math.round(random(50, 750));
  spacecraft.position.x = rand
  spacecraft.addAnimation("firstImg", spacecraft1Img)
  spacecraft.addAnimation("bothImg", spacecraft2Img)
  spacecraft.addAnimation("leftImg", spacecraft3Img)
  spacecraft.addAnimation("rightImg", spacecraft4Img)
  spacecraft.scale = 0.2

  iss = createSprite(400, 260, 50, 50);
  iss.addImage(issImg)
}

function draw() {
  background(spaceBGImg); 
  
  if(!hasDocked || hasDocked === false){
//Write code to set random x position for spacecraft
rand = Math.round(random(50, 750));
  
  if(keyDown("LEFT_ARROW")){
    spacecraft.changeAnimation("leftImg", spacecraft3Img)
    spacecraft.x = spacecraft.x - 2
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.changeAnimation("rightImg", spacecraft4Img)
    spacecraft.x = spacecraft.x + 2
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.changeAnimation("bothImg", spacecraft2Img)
  }

  if(keyDown("UP_ARROW")){
    spacecraft.changeAnimation("firstImg", spacecraft1Img)
    spacecraft.y = spacecraft.y - 4
  }

  if(spacecraft.isTouching(block)){
    hasDocked = true;
  }

  }

  if(hasDocked === true){
  fill("white")
  textSize(30)
  text("Docking Successful!", 180, 550)
  }

  drawSprites();
}

/*
When the left arrow is pressed:
Show image with the left side jet smoke.
Move the spacecraft in the left direction a little bit.
When the right arrow is pressed:
Show image with the right side jet smoke.
Move the spacecraft in the left direction a little bit.
When the down arrow is pressed:
Show image with both side jet smoke.
No downward movements will be added here for spacecraft.
Write a condition using UP_ARROW key:
To move spacecraft towards ISS.
*/