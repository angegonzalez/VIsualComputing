'use strict';

let image_src;
let video;
let mosaic;
// ui
let resolution;
let mode;
let keys;
let paintings;
let camera
let imagesQuadrille
let imagesBuffer

function preload() {
  // paintings are stored locally in the /sketches/shaders/paintings dir
  // and named sequentially as: p1.jpg, p2.jpg, ... p30.jpg
  // so we pick up one randomly just for fun:
  paintings = []
  for(let i = 0; i < 31; i++){
    paintings.push(loadImage(`/VisualComputing/sketches/assets/paintings/ImgurImgDump0.${i}.jpg`));
  }
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
  mosaic.setUniform('resolution', resolution.value());


  keys = createCheckbox('keys', false);
  keys.position(10, 90);  
  keys.style('color', 'white');

  keys.input(() => mosaic.setUniform('keys', keys.checked() ));

  mode = createSelect();
  mode.position(10, 75);
  mode.option('original');
  mode.option('pixelator');
  mode.selected('pixelator');
  mode.changed(() => {
    mosaic.setUniform('original', mode.value() === 'original');
  });

  // image_select = createSelect();
  // image_select.position(10, 100);
  // for(let i = 0; i <= 30; i++){
  //   image_select.option(`${i}`);
  // }

  // image_select.selected("0")
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  camera = createCheckbox('camera', true);
  camera.position(10, 140);  
  camera.style('color', 'white');
  camera.changed(()=> camera = !camera)
  
  // paintings.forEach((image)=>{
  //   image.loadPixels();
  // })
  
  image_src = paintings[10]
  imagesQuadrille = createQuadrille(paintings);
  imagesQuadrille.sort();

  // imagesBuffer = createGraphics(300,70);

  // drawQuadrille(imagesQuadrille, {graphics: imagesBuffer, outlineWeight: 0});

}

function draw() {

  // image.changed(() => {
  //   image_src = paintings[image.value()]
  // });

  if(camera){
    mosaic.setUniform('source', video);
    //mosaic.setUniform('palette', video);
  }
  else{
    mosaic.setUniform('source', image_src);
    for(let i = 1; i <= 10; i++){
      mosaic.setUniform(`luma${i}`, imagesQuadrille._memory2D[0][i]);
    }
  }

  beginShape();
  vertex(-1, -1, 0, 0, 1);
  vertex(1, -1, 0, 1, 1);
  vertex(1, 1, 0, 1, 0);
  vertex(-1, 1, 0, 0, 0);
  endShape();
}
