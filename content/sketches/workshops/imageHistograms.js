// Based on code from: https://editor.p5js.org/ebenjmuse/sketches/HyPfeGkCZ

let toggleLumma = false;


function preload() {
  img = loadImage("/VisualComputing/sketches/assets/mandrill.png");
  img3 = loadImage("/VisualComputing/sketches/assets/landscape2.jpg");
  img4 = loadImage("/VisualComputing/sketches/assets/landscape3.png");
  img5 = loadImage("/VisualComputing/sketches/assets/landscape4.png");
}

function setup() {
  createCanvas(512, 1550);
  maxRange = 256;
  color = "RGB";
  image(img, 0, 0);
  drawSelector();
  drawImageSelector();
}

function drawSelector() {
  // Mode selector
  selector = createSelect();
  selector.position(10, img.height + 20);
  selector.option("RGB");
  selector.option("HSL");
  selector.option("HSB");
  selector.selected("RGB");
  selector.changed(changeColorMode);
}
function drawImageSelector() {
  // Mode selector
  selector2 = createSelect();
  selector2.position(80, img.height + 20);
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

function handleButton() {
  if (toggleLumma) {
    toggleLumma = false;
  } else {
    toggleLumma = true;
  }
}

function changeImage() {
  switch (selector2.value()) {
    case "mandrill":
      img = img;
      img.loadPixels();
      break;
    case "landscape":
      img = loadImage("/VisualComputing/sketches/assets/landscape.jpg");
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


function changeColorMode() {
  switch (selector.value()) {
    case "RGB":
      color = "RGB";
      break;
    case "HSB":
      color = "HSB";
      break;
    case "HSL":
      color = "HSL";
      break;
  }
}

function draw() {
  if(!toggleLumma){
    clear();
    drawHistogram(color);
  }
  else{
    clear();
    drawWithLumma(color);
  }
}

function drawHistogram(color) {
  switch (color) {
    case "RGB":
      colorMode(RGB, maxRange);
      break;
    case "HSL":
      colorMode(HSL, maxRange);
      break;
    case "HSB":
      colorMode(HSB, maxRange);
      break;
  }
  image(img, 0, 0);
  var histogramF = new Array(maxRange);
  var histogramS = new Array(maxRange);
  var histogramT = new Array(maxRange);

  for (i = 0; i <= maxRange; i++) {
    histogramF[i] = 0;
    histogramS[i] = 0;
    histogramT[i] = 0;
  }

  loadPixels();

  for (var x = 0; x < img.width; x += 5) {
    for (var y = 0; y < img.height; y += 5) {
      var loc = (x + y * img.width) * 4;
      var first = pixels[loc];
      var second = pixels[loc + 1];
      var third = pixels[loc + 2];
      histogramF[int(first)]++;
      histogramS[int(second)]++;
      histogramT[int(third)]++;
    }
  }

  if (color !== "RGB") {
    clear();
    image(img, 0, 0);
    //img.filter(GRAY);
    stroke(300, 100, 80);
    push();
    translate(0, 300);

    for (x = 1; x <= maxRange; x++) {
      index = histogramT[x];
      y1 = int(map(index, 0, max(histogramT), img.height, img.height - 200));
      y2 = img.height;
      xPos = map(x, 0, maxRange, 0, img.width - 20);
      line(xPos, y1, xPos, y2);
    }
    pop();
  } else {
    clear();
    image(img, 0, 0);
    stroke('red');
    push();
    translate(0, 300);

    for (x = 1; x <= maxRange-2; x++) {
      index = histogramF[x];
      y1 = int(map(index, 0, max(histogramF), img.height, img.height - 200));
      y2 = img.height;
      xPos = map(x, 0, maxRange, 0, img.width - 20);
      line(xPos, y1, xPos, y2);
    }
    pop();

    stroke('green');
    push();
    translate(0, 700);

    for (x = 1; x <= maxRange; x++) {
      index = histogramS[x];
      y1 = int(map(index, 0, max(histogramS), img.height, img.height - 200));
      y2 = img.height;
      xPos = map(x, 0, maxRange, 0, img.width - 20);
      line(xPos, y1, xPos, y2);
    }
    pop();

    stroke('blue');
    push();
    translate(0, 1000);

    for (x = 1; x <= maxRange; x++) {
      index = histogramT[x];
      y1 = int(map(index, 0, max(histogramT), img.height, img.height - 200));
      y2 = img.height;
      xPos = map(x, 0, maxRange, 0, img.width - 20);
      line(xPos, y1, xPos, y2);
    }
    pop();
  }
}
