const game = new Game();
// these three function are p5 created and they are being called from p5 library! :)
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  game.setup();
  background = new Background();
}
function draw() {
  game.drawingGame();
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