function preload() {
  cameraShader = loadShader(
    "/VisualComputing/sketches/workshops/shaders/shadersDef/cameraShader.vert",
    "/VisualComputing/sketches/workshops/shaders/shadersDef/cameraShader.frag"
  );
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(750, 625, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(750, 625);

  cam.hide();
}

function draw() {
   // shader() sets the active shader with our shader
   shader(cameraShader);
  
   // passing cam as a texture
   cameraShader.setUniform('tex0', cam);
 
   // rect gives us some geometry on the screen
   rect(0,0,width,height);
}
