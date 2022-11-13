let uvShader;
let opacity;
let easycam;

function preload() {
    uvShader = readShader('/VisualComputing/sketches/workshops/shaders/shadersDef/texturesUV_blueChannel.frag',
                        { matrices: Tree.pmvMatrix, varyings: Tree.texcoords2 });
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(300, 300, WEBGL);

  let state = {
    distance: 250,           // scalar
    center: [0, 0, 0],       // vector
    rotation: [0, 0, 0, 1],  // quaternion
  };

  easycam = createEasyCam();
  easycam.state_reset = state;   // state to use on reset (double-click/tap)
  easycam.setState(state, 2000); // now animate to that state
  textureMode(NORMAL);
  opacity = createSlider(0, 1, 0.5, 0.01);
  opacity.position(10, 25);
  opacity.style('width', '280px');
}

function draw() {
  background(0);

  resetShader();
  axes();
  grid();
  translate(0, -70);
  rotateY(0.5);
  fill(color(255, 0, 255, 125));
  box(30, 50);
  translate(70, 70);
  fill(color(0, 255, 255, 125));
  sphere(30, 50);
  shader(uvShader);
  uvShader.setUniform('opacity', opacity.value());
  beginHUD();
  noStroke();
  //quad(0, 0, width, 0, width, height, 0, height);
  circle(width/2,height/2, height/1.3);
  endHUD();

}
