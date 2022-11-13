let uvShader;

function preload() {
    uvShader = readShader('/VisualComputing/sketches/workshops/shaders/shadersDef/texturesUV.frag',
                        { matrices: Tree.NONE, varyings: Tree.texcoords2 });
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(300, 300, WEBGL);
  noStroke();
  shader(uvShader);
  textureMode(NORMAL);
}

function draw() {
  background(0);

  beginShape();
  vertex(-1, -1, 0, 1, 1);
  vertex( 1, -1, 0, 0, 1);
  vertex( 1,  1, 0, 0, 0);
  vertex(-1,  1, 0, 1, 0);
  endShape();

}
