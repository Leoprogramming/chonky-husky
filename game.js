class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
  }
  preloadGame() {
    this.backgroundImgs = [
      { src: loadImage("/assets/background/background-1.jpg"), x: 0, speed: 0 },
      { src: loadImage("/assets/background/background-1.jpg"), x: 0, speed: 1 },
      { src: loadImage("/assets/background/background-1.jpg"), x: 0, speed: 2 },
      { src: loadImage("/assets/background/background-1.jpg"), x: 0, speed: 3 },
      // { src: loadImage("/assets/background/plx-2.png"), x: 0, speed: 1 },
      // { src: loadImage("/assets/background/plx-3.png"), x: 0, speed: 2 },
      // { src: loadImage("/assets/background/plx-4.png"), x: 0, speed: 3 },
      // { src: loadImage("/assets/background/plx-5.png"), x: 0, speed: 4 },
    ];
    this.playerImg = loadImage("assets/player/husky.gif");
    this.coinImg = loadImage("assets/coins/bone-small-2.gif");
  }
  setup() {
    this.player.setupPlayer();
  }
  drawingGame() {
    clear();
    // this is the framerate we want our game to run
    frameRate(20);
    // console.log("This is already drawing!");
    this.background.drawingBackground();
    this.player.drawingThePlayer();
    //this.obstacles.drawingObstacles();
    // frameCount is a p5 variable that counts all of the loops/frames that the game is doing or having.
    // console.log(frameCount);
    if (frameCount % 20 === 0) {
      //random function from p5
      let randomNumber = random(0, height - 60);
      this.obstacles.push(new Obstacles(randomNumber));
      //console.log(this.obstacles);
    }
    this.obstacles.forEach((elem) => {
      // we draw all of the obstacles
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      // here we check if the collision is happening, and if it is happenind we return false to filter the obstacle :D
      if (obstacle.checkCollision(this.player)) {
        console.log("happening");
        return false;
      } else {
        // here we keep the obstacles
        console.log(" not colliding");

        return true;
      }
    });
  }
}