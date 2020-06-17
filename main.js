const game = new Game();
let song;
let points = 0;
let lives = 3;
function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game.setup();
  background = new Background();
  song = loadSound("/assets/howl2-trim.mp3");
}

function draw() {
  if (lives > 0) {
    console.log(game.chocolate.width, game.chocolate);
    
    game.drawingGame();
    console.log(lives);
    document.querySelector("#score").innerText = points;
      if (points > 0) {
        game.playerImg = game.playerImg2;
        // console.log("Changing Image");
      }
    } else {
      console.log("Game Over!");
      noLoop();
  }
}

function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
  if (keyCode == 37) {
    game.player.moveLeft();
  }
  if (keyCode == 39) {
    game.player.moveRight();
  }
}