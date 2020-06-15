console.log("hello world ");
const game = new Game();
// these three function are p5 created and they are being called from p5 library! :)
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(300, 200);
  game.setup();
}
function draw() {
  game.drawingGame();
}

function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
}