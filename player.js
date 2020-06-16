class Player {
  constructor() {
    this.gravity = 0.1;
    this.speed = 0;
    this.jumps = 0;
    this.x = 50;
    // this.jumpSound = loadSound("/assets/jump-sound.mp3", loaded)
  }
  setupPlayer() {
    //here i am setting some variables based on the images height and width
    this.y = height - game.playerImg.height;
    this.width = game.playerImg.width;
    this.height = game.playerImg.height;
  }
  jump() {
    this.jumps += 1;
    console.log(this.y);
    
    if (this.y > 640) {
      song.play();
    }

    // check how many times the player before touching the ground
    if (this.jumps < 2) {
      this.speed = -5;
    }
  }

  moveRight() {
    this.x += 20;
  }

  moveLeft() {
    this.x -= 20;
  }
  drawingThePlayer() {
    this.speed += this.gravity;
    this.y += this.speed;
    // this if statement is to check that gravity doesn't affect the Husky if he is outside of the canvas
    if (this.y >= height - game.playerImg.height) {
      this.y = height - game.playerImg.height;
      //we set the jumps to 0 so we can jump again
      this.jumps = 0;
    }
    image(game.playerImg, this.x, this.y);
  }
}