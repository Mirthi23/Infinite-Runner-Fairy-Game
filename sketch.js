var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var fairy, fairy1, fairy2, fairy3, fairy4;

var bg, fairy1_img, fairy2_img, fairy3_img, fairy4_img;

function preload(){
  bg = loadImage("../images/bg.jpg");
  fairy1_img = loadImage("../images/fairy1.jpg");
  fairy2_img = loadImage("../images/fairy2.jpg");
  fairy3_img = loadImage("../images/fairy3.jpg");
  fairy4_img = loadImage("../images/fairy4.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
