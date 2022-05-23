var areia;
var donat;
var donag;
var vxl=0;
var vyl=0;
var grama=5.75;



function preload(){
  areia=loadImage("bg_sur.png");
  donat=loadImage("normal.png");

}

function setup() {
  createCanvas(1200,810);
  donag=createSprite(100,50,30,30);
  donag.addImage(donat);
  donag.scale=0.10;
}

function draw() {
  background("black");
  image(areia,0,0,1200,810);
  drawSprites(); 
  vyl=vyl+grama;
  donag.position.y=vyl;
  textSize(200);
  fill("#87CEEB");
  text("vly=",vyl,1000,100);
}