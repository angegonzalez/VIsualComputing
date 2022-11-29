let lumaShader;
let filtersShader;
let img;
let filter;
let mode;
let sharpen = [0,-1,0,-1,5,-1,0,-1,0];
let box_blur = [1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9];
let ridge_detection = [-1,-1,-1,-1,8,-1,-1,-1,-1];
let blurring = [1/16,2/16,1/16,2/16,4/16,2/16,1/16,2/16,1/16];

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

  mode = createSelect();
  mode.position(10, 85);
  mode.option('blurring');
  mode.option('sharpen');
  mode.option('box_blur');
  mode.option('ridge_detection');
  mode.option('none');
  mode.selected('none');
  
  filter.input(() => filtersShader.setUniform('withFilter', filter.checked() ));
  magnifier.input(() => filtersShader.setUniform('withMagnifier', magnifier.checked()));
  luma.input(() => filtersShader.setUniform('withLuma', luma.checked()));
  

  emitMousePosition(filtersShader, [uniform = 'u_mouse'])

  filtersShader.setUniform('texture', img);
  filtersShader.setUniform('iResolution',[700,500]);
  filtersShader.setUniform('iResolution',[700,500]);
  emitTexOffset(filtersShader, img, ['texOffset'])
  
  
}

function draw() {
  background(0);
  filtersShader.setUniform('u_mouse', [mouseX, mouseY]);
  quad(-width / 2, -height / 2, width / 2, -height / 2,
        width / 2, height / 2, -width / 2, height / 2);
  if(mode.value()== 'sharpen'){
    filtersShader.setUniform('mask1', sharpen);
  }
  else if(mode.value()== 'blurring'){
    filtersShader.setUniform('mask1', blurring);
  }
  else if(mode.value()== 'box_blur'){
    filtersShader.setUniform('mask1', box_blur);
  }
  else if(mode.value()== 'ridge_detection'){
    filtersShader.setUniform('mask1', ridge_detection);
  }
  else{
    filtersShader.setUniform('mask1', [1,0,0,0,1,0,0,0,1]);
  }
}

// function changeFilter(){

//   switch(mode.value()){
//     case 'blurring':
//       filtersShader.setUniform('mask1',blurring);
//       console.log(blurring)
//       case 'sharpen':
//         filtersShader.setUniform('mask1',sharpen);
//         console.log(mode.value())
//         console.log(sharpen)
//     case 'box_blur':
//       filtersShader.setUniform('mask1',box_blur);
//       console.log(mode.value())
//     case 'ridge_detection':
//       filtersShader.setUniform('mask1',ridge_detection);
//       console.log(mode.value())
//   }

// }
