let lumaShader;
let img;
let filter;
let blurring = [0.86,0.86,0.86,0.86,0.86,0.23,0.86,0.86,0.86];
let kk1 = [0,0,1, 0,0.235543,0.98453, 0.543, 0, 1];
let kk2 = [0,0,1,0,0,1,1,0,1];

function preload() {
  filtersShader = readShader('/VisualComputing/sketches/workshops/shaders/shadersDef/imageProcessing.frag',
                        { varyings: Tree.texcoords2 });
  img = loadImage('/VisualComputing/sketches/workshops/shaders/resources/fire_breathing.jpg');
}

function setup() {
  createCanvas(730, 600, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(filtersShader);

  filter = createCheckbox('filter', false);
  magnifier = createCheckbox('magnifier', false);
  luma = createCheckbox('luma', false);

  filter.position(10, 10);  
  filter.style('color', 'white');

  magnifier.position(10, 30);  
  magnifier.style('color', 'white');

  luma.position(10, 50);  
  luma.style('color', 'white');

  filter.input(() => filtersShader.setUniform('withFilter', filter.checked() ));
  magnifier.input(() => filtersShader.setUniform('withMagnifier', magnifier.checked()));
  luma.input(() => filtersShader.setUniform('withLuma', luma.checked()));

  filtersShader.setUniform('texture', img);
  filtersShader.setUniform('iResolution',[700,500]);
  emitTexOffset(filtersShader, img, ['texOffset'])
  
  mode = createSelect();
  mode.position(10, 85);
  mode.option('blurring');
  mode.option('filter1');
  mode.option('filter2');
  mode.option('none');
  mode.selected('none');
  filtersShader.setUniform('mask1',blurring);
}

function draw() {
  background(0);
  filtersShader.setUniform('iMouse', [mouseX, mouseY]);
  quad(-width / 2, -height / 2, width / 2, -height / 2,
        width / 2, height / 2, -width / 2, height / 2);
}
