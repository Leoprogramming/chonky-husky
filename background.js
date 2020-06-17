class Background {
  constructor() {}

  drawingBackground() {
    //width and height are predefined variables from p5, and its the width and height of the canvas
    game.backgroundImgs.forEach(function (elem) {
      elem.x -= elem.speed;
      //image(source, x coordinate, y coordinate, width, height)
      image(elem.src, elem.x, 0, width, height);
      image(elem.src, elem.x + width, 0, width, height);

      if (elem.x <= - width) {
        elem.x = 0;
      }
    });
  }
}