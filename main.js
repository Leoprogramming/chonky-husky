const game = new Game();
let song;
let points = 0;
// let score = 0;
// these three function are p5 created and they are being called from p5 library! :)
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
  // document.querySelector(".hiscore").innerText = hiScoreCounter;
  game.drawingGame();
  console.log(points);
  document.querySelector("#score").innerText = points;
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