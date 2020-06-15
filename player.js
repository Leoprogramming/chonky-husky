class Player {
  constructor() {
    this.gravity = 0.1;
    this.speed = 0;
    this.jumps = 0;
    this.x = 50;
  }
  setupPlayer() {
    //here i am setting some variables based on the images height and width
    this.y = height - game.playerImg.height;
    this.width = game.playerImg.width;
    this.height = game.playerImg.height;
  }
  jump() {
    this.jumps += 1;

    // check how many times the player before touching the ground
    if (this.jumps < 2) {
      this.speed = -5;
    }
  }
  drawingThePlayer() {
    //gravity pushes poor antonio down in the canvas
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