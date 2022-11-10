let colorShaderSum;
let cmy;
let v1, v2, v3;
let square1, square2, square3
// let square1 = {
//   shapeColor : 0,
//   square()
// }

class squares{
  constructor(color, x, y, length) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.length = length;
  }

  display(){
    fill(this.color)
    square(this.x, this.y, this.length)
  }
}

function preload() {

  colorShaderSum = readShader(
    "/VisualComputing/sketches/workshops/shaders/shadersDef/colorSum.frag",
    { matrices: Tree.NONE}
  );
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(300, 300, WEBGL);
  // https://p5js.org/reference/#/p5/shader
  shader(colorShaderSum);

  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(20, height - 25);
  colorPicker2 = createColorPicker('#ed225d');
  colorPicker2.position(90, height - 25);

}

function draw() {

  background(0);
  square1 = new squares(color = colorPicker1.color(), -140,  -140, 125)
  square2 = new squares(color = colorPicker1.color(),15, -140, 125)
  square3 = new squares(color = colorPicker1.color(),-50, 0,100)

  colorShaderSum.setUniform("brightness", 0.5)
  colorShaderSum.setUniform("uMaterial1", colorPicker1.color()._array)
  colorShaderSum.setUniform("uMaterial2", colorPicker2.color()._array)
  square1.display()
  square3.display()
  square2.display()
  

}



