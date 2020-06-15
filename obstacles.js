class Obstacles {
  constructor(randomY) {
    this.x = width;
    this.y = randomY;
    this.img = game.coinImg;
    this.width = this.img.width;
    this.height = this.img.height;
  }
  checkCollision(player) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let playerLeftSide = player.x;
    let playerRightSide = player.x + player.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;
    let playerTopSide = player.y;
    let playerBottomSide = player.y + player.height;
    //console.log(leftSide, playerLeftSide, playerRightSide);
    let xCollision =
      leftSide > playerLeftSide - 10 &&
      leftSide < playerRightSide + 10 &&
      rightSide > playerLeftSide - 10 &&
      rightSide < playerRightSide + 10;

    let yCollision =
      topSide > playerTopSide - 10 &&
      topSide < playerBottomSide + 10 &&
      bottomSide > playerTopSide - 10 &&
      bottomSide < playerBottomSide + 10;
    /*       playerLeftSide > leftSide > playerRightSide &&
      playerLeftSide > rightSide > playerRightSide; */
    if (yCollision && xCollision) {
      return true;
    } else {
      return false;
    }
  }
  drawingObstacles() {
    this.x -= 2;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}