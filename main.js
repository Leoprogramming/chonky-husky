const game = new Game();
let song;
let points = 0;
let lives = 3;
let bestTime = localStorage.getItem("fastestTime");

if (!bestTime) {
  bestTime = 0;
}

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
  console.log(bestTime);
  
  if (points > bestTime) {
    localStorage.setItem("fastestTime", points);
    document.querySelector("#best").innerHTML = points;
  }

  if (lives > 0) {
    game.drawingGame();
    document.querySelector("#score").innerText = points;
      if (points > 0) {
        game.playerImg = game.playerImg2;
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

document.querySelector("#best").innerHTML = bestTime;