// Based on code taken from : https://p5js.org/es/examples/image-convolution.html

let img;
let w = 80;
let selector;
let entire = false;
let toggleLumma = false;

// It's possible to convolve the image with many different
// matrices to produce different effects.

const blur = [
  [0.0625, 0.125, 0.0625],
  [0.125, 0.25, 0.125],
  [0.0625, 0.125, 0.0625],
];

const bottomSobel = [
  [-1, -2, -1],
  [0, 0, 0],
  [1, 2, 1],
];

const emboss = [
  [-2, -1, 0],
  [-1, 1, 1],
  [0, 1, 2],
];

const leftSobel = [
  [1, 0, -1],
  [2, 0, -2],
  [1, 0, -1],
];

const outline = [
  [-1, -1, -1],
  [-1, 8, -1],
  [-1, -1, -1],
];

const rightSobel = [
  [-1, 0, 1],
  [-2, 0, 2],
  [-1, 0, 1],
];

const sharpen = [
  [0, -1, 0],
  [-1, 5, -1],
  [0, -1, 0],
];

const topSobel = [
  [1, 2, 1],
  [0, 0, 0],
  [-1, -2, -1],
];

let actualMatrix = blur;

function preload() {
  img = loadImage("/VisualComputing/sketches/assets/mandrill.png");
  img2 = loadImage("/VisualComputing/sketches/assets/landscape.jpg");
  img3 = loadImage("/VisualComputing/sketches/assets/landscape2.jpg");
  img4 = loadImage("/VisualComputing/sketches/assets/landscape3.png");
  img5 = loadImage("/VisualComputing/sketches/assets/landscape4.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
  drawSelector();
  drawImageSelector();
  drawMatrix();
  drawButtonLumma();
  changeMatrixInputValues(blur);
}

function draw() {
  if (toggleLumma) {
    drawLumma();
  } else {
    drawCustom(actualMatrix, 3);
  }
}

function drawSelector() {
  // Mode selector
  selector = createSelect();
  selector.position(10, img.height + 20);
  selector.option("blur");
  selector.option("bottom sobel");
  selector.option("emboss");
  selector.option("left sobel");
  selector.option("outline");
  selector.option("right sobel");
  selector.option("sharpen");
  selector.option("top sobel");
  selector.option("custom");
  selector.selected("blur");
  selector.changed(changeMatrix);
}

function drawImageSelector() {
  // Mode selector
  selector2 = createSelect();
  selector2.position(130, img.height + 20);
  selector2.option("mandrill");
  selector2.option("landscape");
  selector2.option("landscape 2");
  selector2.option("landscape 3");
  selector2.option("landscape 4");
  selector2.selected("mandrill");
  selector2.changed(changeImage);
}

function drawButtonLumma() {
  button = createButton("Toggle to lumma");
  button.position(240, img.height + 20);
  button.mousePressed(handleButton);
}

function drawMatrix() {
  // Matrix inputs
  pos00 = createInput("");
  pos00.position(10, img.height + 80);
  pos00.size(15);
  pos01 = createInput("");
  pos01.position(40, img.height + 80);
  pos01.size(15);
  pos02 = createInput("");
  pos02.position(70, img.height + 80);
  pos02.size(15);

  pos10 = createInput("");
  pos10.position(10, img.height + 110);
  pos10.size(15);
  pos11 = createInput("");
  pos11.position(40, img.height + 110);
  pos11.size(15);
  pos12 = createInput("");
  pos12.position(70, img.height + 110);
  pos12.size(15);

  pos20 = createInput("");
  pos20.position(10, img.height + 140);
  pos20.size(15);
  pos21 = createInput("");
  pos21.position(40, img.height + 140);
  pos21.size(15);
  pos22 = createInput("");
  pos22.position(70, img.height + 140);
  pos22.size(15);
}

// function changeRGB(){}

// function changeHSB(){
//   console.log(img.pixels)
//   colorMode(HSB);
//   console.log(img.pixels)
// }

// function changeHSL(){}

function drawCustom(matrix, matrixsize) {
  //Set image as background
  background(img);
  //Load screen pixels
  loadPixels();
  //print(pixels, img.pixels);
  // Calculate the small rectangle we will process
  let xstart = constrain(mouseX - w / 2, 0, img.width);
  let ystart = constrain(mouseY - w / 2, 0, img.height);
  let xend = constrain(mouseX + w / 2, 0, img.width);
  let yend = constrain(mouseY + w / 2, 0, img.height);
  // Begin our loop for every pixel in the smaller image
  if (entire) {
    xstart = 2;
    xend = img.width;
    ystart = 2;
    yend = img.height;
  }

  for (let x = xstart; x < xend; x++) {
    for (let y = ystart; y < yend; y++) {
      let c = convolution(x, y, matrix, matrixsize, img);
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y * img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);
    }
  }
  updatePixels();
}

function drawLumma() {
  background(img);
  loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      var index = (x + y * img.width) * 4;
      var r = pixels[index + 0];
      var g = pixels[index + 1];
      var b = pixels[index + 2];
      var a = pixels[index + 3];

      var luma = r * 0.299 + g * 0.587 + b * 0.0114;

      pixels[index + 0] = luma;
      pixels[index + 1] = luma;
      pixels[index + 2] = luma;
    }
  }
  updatePixels();
}

function handleButton() {
  if (toggleLumma) {
    toggleLumma = false;
  } else {
    toggleLumma = true;
  }
}

function keyPressed() {
  if (key === "a" && !entire) {
    entire = true;
  } else if (key === "a" && entire) {
    entire = false;
  }
}

function convolution(x, y, matrix, matrixsize, image) {
  //console.log(image.pixels);
  //loadPixels();
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++) {
    for (let j = 0; j < matrixsize; j++) {
      // What pixel are we testing
      const xloc = x + i - offset;
      const yloc = y + j - offset;
      let loc = (xloc + image.width * yloc) * 4;

      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc, 0, image.pixels.length - 1);

      // Calculate the convolution
      // retrieve RGB values
      rtotal += image.pixels[loc] * matrix[i][j];
      gtotal += image.pixels[loc + 1] * matrix[i][j];
      btotal += image.pixels[loc + 2] * matrix[i][j];
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);

  // Return the resulting color
  return color(rtotal, gtotal, btotal);
}

function changeMatrix() {
  switch (selector.value()) {
    case "blur":
      actualMatrix = blur;
      changeMatrixInputValues(actualMatrix);
      break;
    case "bottom sobel":
      actualMatrix = bottomSobel;
      changeMatrixInputValues(actualMatrix);
      break;
    case "emboss":
      actualMatrix = emboss;
      changeMatrixInputValues(actualMatrix);
      break;
    case "left sobel":
      actualMatrix = leftSobel;
      changeMatrixInputValues(actualMatrix);
      break;
    case "outline":
      actualMatrix = outline;
      changeMatrixInputValues(actualMatrix);
      break;
    case "right sobel":
      actualMatrix = rightSobel;
      changeMatrixInputValues(actualMatrix);
      break;
    case "sharpen":
      actualMatrix = sharpen;
      changeMatrixInputValues(actualMatrix);
      break;
    case "top sobel":
      actualMatrix = topSobel;
      changeMatrixInputValues(actualMatrix);
      break;

    case "custom":
      actualMatrix = [
        [pos00.value(), pos01.value(), pos02.value()],
        [pos10.value(), pos11.value(), pos12.value()],
        [pos20.value(), pos21.value(), pos22.value()],
      ];
      break;

    default:
      break;
  }
}

function changeImage() {
  switch (selector2.value()) {
    case "mandrill":
      img = img;
      img.loadPixels();
      break;
    case "landscape":
      img = img2;
      img.loadPixels();
      break;
    case "landscape 2":
      img = img3;
      img.loadPixels();
      break;
    case "landscape 3":
      img = img4;
      img.loadPixels();
      break;
    case "landscape 4":
      img = img5;
      img.loadPixels();
      break;
  }
}

function changeMatrixInputValues(matrix) {
  pos00.value(matrix[0][0]);
  pos01.value(matrix[0][1]);
  pos02.value(matrix[0][2]);

  pos10.value(matrix[1][0]);
  pos11.value(matrix[1][1]);
  pos12.value(matrix[1][2]);

  pos20.value(matrix[2][0]);
  pos21.value(matrix[2][1]);
  pos22.value(matrix[2][2]);
}
