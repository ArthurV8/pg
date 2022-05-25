var areia;
var donat;
var donag;
var vxl=0;
var vyl=0;
var grama=5.75;
var voo;


function preload(){
  areia=loadImage("./img/bg_sur.png");
  donat=loadImage("./img/normal.png");
  voo=loadAnimation("./img/b_thrust_1.png","./img/b_thrust_2.png","./img/b_thrust_3.png");
  voo.playing=true;
  voo.looping=false;
}

function setup() {
  createCanvas(1000,600);
  donag=createSprite(100,50,30,30);
  donag.addImage(donat);
  donag.scale=0.10;
  donag.frameDelay=5;
  donag.addAnimation("voo",voo);
}

function draw() {
  background("black");
  image(areia,0,0,1200,810);
  drawSprites(); 
 
  vyl=vyl+grama;
  donag.position.y=vyl;

  textSize(25);
  fill("#87CEEB");
  text("vly="+Math.round(vyl),900,30);

  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    vyl=vyl-100;
    donag.changeAnimation("voo");
  }
}