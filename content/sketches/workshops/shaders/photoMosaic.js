'use strict';

let image_src;
let video_src;
let mosaic;
// ui
let resolution;
let video_on;
let mode;
let keys;

function preload() {
  // paintings are stored locally in the /sketches/shaders/paintings dir
  // and named sequentially as: p1.jpg, p2.jpg, ... p30.jpg
  // so we pick up one randomly just for fun:
  image_src = loadImage(`/VisualComputing/sketches/workshops/shaders/resources/fire_breathing.jpg`);
  mosaic = readShader('/VisualComputing/sketches/workshops/shaders/shadersDef/photoMosaic.frag',
           { matrices: Tree.NONE, varyings: Tree.texcoords2 });
}

function setup() {
  createCanvas(750, 625, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaic);
  resolution = createSlider(1, 100, 30, 1);
  resolution.position(10, 35);
  resolution.style('width', '80px');
  resolution.input(() => mosaic.setUniform('resolution', resolution.value()));

  keys = createCheckbox('keys', false);
  keys.position(10, 90);  
  keys.style('color', 'white');

  mosaic.setUniform('resolution', resolution.value());
  keys.input(() => mosaic.setUniform('keys', keys.checked() ));
  mosaic.setUniform('source', image_src);
  mosaic.setUniform('palette', image_src);


  mode = createSelect();
  mode.position(10, 75);
  mode.option('original');
  mode.option('pixelator');
  mode.selected('pixelator');
  mode.changed(() => {
    mosaic.setUniform('original', mode.value() === 'original');
  });
}

function draw() {
  beginShape();
  vertex(-1, -1, 0, 0, 1);
  vertex(1, -1, 0, 1, 1);
  vertex(1, 1, 0, 1, 0);
  vertex(-1, 1, 0, 0, 0);
  endShape();
}
