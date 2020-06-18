class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.chocolate = [];
  }
  
  preloadGame() {
    this.backgroundImgs = [
      { src: loadImage("/assets/background/background-snow.jpg"), x: 0, speed: 0 },
      { src: loadImage("/assets/background/background-snow.jpg"), x: 0, speed: 1 },
      { src: loadImage("/assets/background/background-snow.jpg"), x: 0, speed: 2 },
      { src: loadImage("/assets/background/background-snow.jpg"), x: 0, speed: 3 },
      { src: loadImage("/assets/background/background-snow.jpg"), x: 0, speed: 4 },
    ];
    this.playerImg = loadImage("assets/player/husky-loop.gif");
    this.playerImg2 = loadImage("assets/player/husky-fat-small.jpg");
    this.playerImg3 = loadImage("assets/player/sick-husky.png");
    this.treatImg = loadImage("/assets/treats/treat-small.png");
    this.badTreatImg = loadImage("/assets/treats/bad-treat.png");
  }

  setup() {
    this.player.setupPlayer();
  }

  drawingGame() {
    clear();
    // this is the framerate we want our game to run
    frameRate(20);
    this.background.drawingBackground();
    this.player.drawingThePlayer();
    // frameCount is a p5 variable that counts all of the loops/frames that the game is doing or having.
    if (frameCount % 60 === 0) {
      //random function from p5
      let randomNumber = random(0, height - 60);
      this.obstacles.push(new Obstacles(randomNumber));
    }
    
    this.obstacles.forEach((elem) => {
      // we draw all of the obstacles
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });
    
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        return false;
      } else {
        return true;
      }
    });

    if (frameCount % 20 === 0) {
      //random function from p5
      let randomNumber = random(0, height - 60);
      this.chocolate.push(new Chocolate(randomNumber));
    }
    
    this.chocolate.forEach((elem) => {
      // we draw all of the chocolate
      elem.drawingChocolate();
      elem.checkCollision(this.player);
    });
    
    this.chocolate = this.chocolate.filter((chocolate) => {
      if (chocolate.checkCollision(this.player)) {
        return false;
      } else {
        return true;
      }
    });
  }
}