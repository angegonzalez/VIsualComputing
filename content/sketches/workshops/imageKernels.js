// Based on code taken from : https://p5js.org/es/examples/image-convolution.html

new p5((p) => {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;
  let counter7 = 0;
  let counter8 = 0;

  let img;
  let w = 80;

  // It's possible to convolve the image with many different
  // matrices to produce different effects. This is a high-pass
  // filter; it accentuates the edges.
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

  p.preload = function preload() {
    img = p.loadImage("/VisualComputing/sketches/assets/mandrill.png");
  };

  p.setup = function setup() {
    p.createCanvas(512, 512);
    img.loadPixels();

    // pixelDensity(1) for not scaling pixel density to display density
    // for more information, check the reference of pixelDensity()
    p.pixelDensity(1);
  };

  function draw(matrix, matrixsize) {
    // We're only going to process a portion of the image
    // so let's set the whole image as the background first
    // p.image(img, 0,0)
    p.background(img);
    p.loadPixels();
    // Calculate the small rectangle we will process
    const xstart = p.constrain(p.mouseX - w / 2, 0, img.width);
    const ystart = p.constrain(p.mouseY - w / 2, 0, img.height);
    const xend = p.constrain(p.mouseX + w / 2, 0, img.width);
    const yend = p.constrain(p.mouseY + w / 2, 0, img.height);

    // p.loadPixels();
    // console.log(p.pixels, img.pixels)
    // Begin our loop for every pixel in the smaller image
    for (let x = xstart; x < xend; x++) {
      for (let y = ystart; y < yend; y++) {
        let c = convolution(x, y, matrix, matrixsize, img);

        // retrieve the RGBA values from c and update pixels()
        let loc = (x + y * img.width) * 4;
        p.pixels[loc] = p.red(c);
        p.pixels[loc + 1] = p.green(c);
        p.pixels[loc + 2] = p.blue(c);
        p.pixels[loc + 3] = p.alpha(c);
      }
    }
    p.updatePixels();
  }

  p.draw = () => {
    draw(blur, 3);
  };

  function convolution(x, y, matrix, matrixsize, img) {
    let rtotal = 0.0;
    let gtotal = 0.0;
    let btotal = 0.0;
    const offset = Math.floor(matrixsize / 2);
    for (let i = 0; i < matrixsize; i++) {
      for (let j = 0; j < matrixsize; j++) {
        // What pixel are we testing
        const xloc = x + i - offset;
        const yloc = y + j - offset;
        let loc = (xloc + img.width * yloc) * 4;

        // Make sure we haven't walked off our image, we could do better here
        loc = p.constrain(loc, 0, img.pixels.length - 1);

        // Calculate the convolution
        // retrieve RGB values
        rtotal += img.pixels[loc] * matrix[i][j];
        gtotal += img.pixels[loc + 1] * matrix[i][j];
        btotal += img.pixels[loc + 2] * matrix[i][j];
      }
    }
    // Make sure RGB is within range
    rtotal = p.constrain(rtotal, 0, 255);
    gtotal = p.constrain(gtotal, 0, 255);
    btotal = p.constrain(btotal, 0, 255);

    // Return the resulting color
    return p.color(rtotal, gtotal, btotal);
  }

  function toogleConvolution(img, matrix, matrixsize) {
    p.background(223);

    p.draw = () => {
      p.background(img);
      p.loadPixels();
      for (let x = 2; x < img.width; x++) {
        for (let y = 2; y < img.height; y++) {
          let c = convolution(x, y, matrix, matrixsize, img);

          // retrieve the RGBA values from c and update pixels()
          let loc = (x + y * img.width) * 4;
          p.pixels[loc] = p.red(c);
          p.pixels[loc + 1] = p.green(c);
          p.pixels[loc + 2] = p.blue(c);
          p.pixels[loc + 3] = p.alpha(c);
        }
      }
      p.updatePixels();
    };
  }

  p.keyPressed = function keyPressed() {
    if (p.key === "1" && counter1 === 0) {
      toogleConvolution(img, blur, 3);
      counter1++;
    } else if (counter1 === 1) {
      p.draw = () => {
        draw(blur, 3);
      };
      counter1--;
    }

    if (p.key === "2" && counter2 === 0) {
      toogleConvolution(img, bottomSobel, 3);
      counter2++;
    } else if (counter2 === 1) {
      p.draw = () => {
        draw(bottomSobel, 3);
      };
      counter2--;
    }

    if (p.key === "3" && counter3 === 0) {
      toogleConvolution(img, emboss, 3);
      counter3++;
    } else if (counter3 === 1) {
      p.draw = () => {
        draw(emboss, 3);
      };
      counter3--;
    }

    if (p.key === "4" && counter4 === 0) {
      toogleConvolution(img, leftSobel, 3);
      counter4++;
    } else if (counter4 === 1) {
      p.draw = () => {
        draw(leftSobel, 3);
      };
      counter4--;
    }

    if (p.key === "5" && counter5 === 0) {
      toogleConvolution(img, outline, 3);
      counter5++;
    } else if (counter5 === 1) {
      p.draw = () => {
        draw(outline, 3);
      };
      counter5--;
    }

    if (p.key === "6" && counter6 === 0) {
      toogleConvolution(img, rightSobel, 3);
      counter6++;
    } else if (counter6 === 1) {
      p.draw = () => {
        draw(rightSobel, 3);
      };
      counter6--;
    }

    if (p.key === "7" && counter7 === 0) {
      toogleConvolution(img, sharpen, 3);
      counter7++;
    } else if (counter7 === 1) {
      p.draw = () => {
        draw(sharpen, 3);
      };
      counter7--;
    }

    if (p.key === "8" && counter8 === 0) {
      toogleConvolution(img, topSobel, 3);
      counter8++;
    } else if (counter8 === 1) {
      p.draw = () => {
        draw(topSobel, 3);
      };
      counter8--;
    }


  };
});
