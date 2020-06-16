const game = new Game();
let song;
let score = 0;
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
  document.querySelector("#score").innerText = score;
  // document.querySelector(".hiscore").innerText = hiScoreCounter;
  game.drawingGame();
  // clear();
  // if (scoreCounter <= 0) {
  //   // gameOver = true;
  //   document.querySelector(".hiscorefinal").innerText = hiScoreCounter;
  //   // document.querySelector(".game-over").style.display = "block";
  //   // song.pause();
  //   // if (songState) {
  //   //   gameOverSound.play();
  //   //   songState = false;
  //   // }
  // }
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