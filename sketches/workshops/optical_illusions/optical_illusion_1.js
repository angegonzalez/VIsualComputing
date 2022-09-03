let tamanioCanvas = 500;
var angulo = 0;
var velocidad = 0.09;


function setup() {
  createCanvas(tamanioCanvas*1.3, tamanioCanvas);
  angleMode(DEGREES);
}

function draw() {
  
  let ms = millis();

  background(119,119,119);
  fill('blue')
  strokeWeight(0);
  rect(0,0, tamanioCanvas*1.5,100);
  
  //Ruedas
  fill(132,132,132)
  noStroke()
  circle(200,350,130);
  circle(440,353,130);

  strokeWeight(11);

  stroke('#7F7FCC')
  line(200, 350, 250, 200);
  //manubrio
  line(250,200, 280, 200);
  
  //Marco
  line(240,245,360,350); // \
  line(400,230,360,340); // /
  line(360,350,440,353); // _
  line(440,353,390,255);
  line(240,245,390,245);
  
  //sillín
  line(390,230,410,230);
  
  if (mouseIsPressed === true) {

    //ruedas alumbrantes
    if(ms%1.5 === 0){
      noFill();
      stroke('black');
      strokeWeight(8);
      circle(200,350,130);
      circle(440,353,130);


    }else{

      noFill();
      stroke('white')
      strokeWeight(8)
      circle(200,350,130);
      circle(440,353,130);

    }

    //+
    translate(320, 300);
    strokeWeight(3)
    stroke('#00ff00');
    rotate(angulo);
    line(0,0,5,5);
    line(0,0,-5,5);
    line(0,0,5,-5);   
    line(0,0,-5,-5);
    angulo++;

    
    

  }
 


  
}

class Mas{
  constructor(x_1, y_1, x_2, y_2) {
    this.x_1 = x_1; 
    this.y_1 = y_1; 
    this.x_2 = x_2; 
    this.y_2 = y_2; 
  }

  display(){
    strokeWeight(3)
    stroke('#00ff00');
    rotate(0)
    line(this.x_1,this.y_1,this.x_2,this.y_2);
    rotate(0)
    line(this.x_1+5,this.y_1-5,this.x_2-5,this.y_2+5);
    angulo++;
    

  }
}