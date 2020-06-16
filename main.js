const game = new Game();
let song;
// these three function are p5 created and they are being called from p5 library! :)
function preload() {
  game.preloadGame();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game.setup();
  background = new Background();
  song = loadSound("/assets/jump-sound.mp3");
}

// function loaded() {
//   // song.play();  
// }

function draw() {
  game.drawingGame();
  // console.log(game.player.speed);
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