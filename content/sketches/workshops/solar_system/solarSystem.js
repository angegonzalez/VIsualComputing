const sun_size = 160
const earth_speed = 100

// Code adapted from https://editor.p5js.org/cigno5/sketches/PqB9CEnBp

let sun_texture;
let mercury_texture;
let venus_texture;
let stars;
let earth_texture;
let mars_texture;
let jupiter_texture;
let saturn_texture;
let uranus_texture;
let neptune_texture;
let planets_font;


let saturn_ring_texture;

let orbit1;
let orbit2;
let orbit3;
let orbit4;
let orbit5;
let orbit6;
let orbit7;
let orbit8;

let planetsData;
let uranusData;
let neptureData;
let jupiterData;
let marsData;
let mercurData;
let saturnData;
let earthData;
let venusData;

let newCenter;

let followPlanet = "free";

let auto_rotate;

let mode;
let easycam;
let frames = 0;

let dotId = 0;

let rotating = false;

let orbits = [];
let dotsData = [];

let planetSelector;



function preload() {
  stars = loadImage("/VisualComputing/sketches/assets/2k_stars_milky_way.jpg");
  sun_texture = loadImage("/VisualComputing/sketches/assets/8k_sun.jpg");
  mercury_texture = loadImage(
    "/VisualComputing/sketches/assets/8k_mercury.jpg"
  );
  venus_texture = loadImage("/VisualComputing/sketches/assets/4k_venus.jpg");
  earth_texture = loadImage(
    "/VisualComputing/sketches/assets/2k_earth_daymap.jpg"
  );
  mars_texture = loadImage("/VisualComputing/sketches/assets/8k_mars.jpg");
  jupiter_texture = loadImage(
    "/VisualComputing/sketches/assets/8k_jupiter.jpg"
  );
  saturn_texture = loadImage("/VisualComputing/sketches/assets/8k_saturn.jpg");
  uranus_texture = loadImage("/VisualComputing/sketches/assets/2k_uranus.jpg");
  neptune_texture = loadImage(
    "/VisualComputing/sketches/assets/2k_neptune.jpg"
  );
  planets_font = loadFont("/VisualComputing/sketches/assets/Nasa.ttf")
  saturn_ring_texture = loadImage("/VisualComputing/sketches/assets/8k_saturn_ring_alpha.png")
}

function setup() {
  loadJSON("https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=isPlanet%2Ceq%2Ctrue", planets);
  createCanvas(700, 1000, WEBGL);
  textureMode(NORMAL);
  textFont(planets_font);
  easycam = createEasyCam();
  easycam.setState({
    distance: 900,
    center: [0, 0, 0],
    rotation: [0.5, -0.15, 0.77, 0.3],
  });

  planetSelector = createSelect();
  planetSelector.position(20, 20);
  planetSelector.option("sun");
  planetSelector.option("mercury");
  planetSelector.option("venus");
  planetSelector.option("earth");
  planetSelector.option("mars");
  planetSelector.option("jupiter");
  planetSelector.option("saturn");
  planetSelector.option("uranus");
  planetSelector.option("neptune");
  planetSelector.option("free");
  planetSelector.changed(travelPlanet);


  console.log(easycam.getState());

  orbit1 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 600, 680);
  orbit1.obj.push(new Dot(0, 0.17, 600, 680, mercury_texture, sun_size*0.18, "mercur"));
  orbits.push(orbit1);

  orbit2 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 900, 980);
  orbit2.obj.push(new Dot(0, 0.13,  900, 980, venus_texture, sun_size*0.25,"venus"));
  orbits.push(orbit2);

  orbit3 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1500, 1580);
  orbit3.obj.push(new Dot(0, 0.11, 1500, 1580, earth_texture, sun_size*0.16, "earth"));
  orbits.push(orbit3);

  orbit4 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1900, 1980);
  orbit4.obj.push(new Dot(0, 0.09, 1900, 1980, mars_texture, sun_size*0.10, "mars"));
  orbits.push(orbit4);

  orbit5 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 2700, 2780);
  orbit5.obj.push(new Dot(0, 0.05, 2700, 2780, jupiter_texture, sun_size*0.55, "jupiter"));
  orbits.push(orbit5);

  orbit6 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 3000, 3080);
  saturn_ring = new Ring(190, 0, 0.1,  3000, 3080, saturn_ring_texture );
  orbit6.obj.push(new Dot(0, 0.03,  3000, 3080, saturn_texture, sun_size*0.53, "saturn"));
  orbit6.obj.push(saturn_ring);
  orbits.push(orbit6);

  orbit7 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 4000, 4080);
  orbit7.obj.push(new Dot(0, 0.02,  4000, 4080, uranus_texture, sun_size*0.22, "uranus"));
  orbits.push(orbit7);

  orbit8 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 4900, 4980);
  orbit8.obj.push(new Dot(0, 0.02, 4900, 4980, neptune_texture, sun_size*0.21, "neptune"));
  orbits.push(orbit8);
}

function planets(data){
  print(data);
  planetsData = data
}

function draw() {
  //Data planets
  if (planetsData){
    uranusData = {
      "name": planetsData.bodies[0].englishName,
      "gravity": planetsData.bodies[0].gravity,
      "discoveredBy": planetsData.bodies[0].discoveredBy,
      "discoveryDate": planetsData.bodies[0].discoveryDate,
      "meanRadius": planetsData.bodies[0].meanRadius,
      "moons": planetsData.bodies[0].moons,
    }
    neptureData = {
      "name": planetsData.bodies[1].englishName,
      "gravity": planetsData.bodies[1].gravity,
      "discoveredBy": planetsData.bodies[1].discoveredBy,
      "discoveryDate": planetsData.bodies[1].discoveryDate,
      "meanRadius": planetsData.bodies[1].meanRadius,
      "moons": planetsData.bodies[1].moons,
    }
    jupiterData = {
      "name": planetsData.bodies[2].englishName,
      "gravity": planetsData.bodies[2].gravity,
      "discoveredBy": planetsData.bodies[2].discoveredBy,
      "discoveryDate": planetsData.bodies[2].discoveryDate,
      "meanRadius": planetsData.bodies[2].meanRadius,
      "moons": planetsData.bodies[2].moons,
    }
    marsData = {
      "name": planetsData.bodies[3].englishName,
      "gravity": planetsData.bodies[3].gravity,
      "discoveredBy": planetsData.bodies[3].discoveredBy,
      "discoveryDate": planetsData.bodies[3].discoveryDate,
      "meanRadius": planetsData.bodies[3].meanRadius,
      "moons": planetsData.bodies[3].moons,
    }
    mercurData = {
      "name": planetsData.bodies[4].englishName,
      "gravity": planetsData.bodies[4].gravity,
      "discoveredBy": planetsData.bodies[4].discoveredBy,
      "discoveryDate": planetsData.bodies[4].discoveryDate,
      "meanRadius": planetsData.bodies[4].meanRadius,
      "moons": planetsData.bodies[4].moons,
    }
    saturnData = {
      "name": planetsData.bodies[5].englishName,
      "gravity": planetsData.bodies[5].gravity,
      "discoveredBy": planetsData.bodies[5].discoveredBy,
      "discoveryDate": planetsData.bodies[5].discoveryDate,
      "meanRadius": planetsData.bodies[5].meanRadius,
      "moons": planetsData.bodies[5].moons,
    }
    earthData = {
      "name": planetsData.bodies[6].englishName,
      "gravity": planetsData.bodies[6].gravity,
      "discoveredBy": planetsData.bodies[6].discoveredBy,
      "discoveryDate": planetsData.bodies[6].discoveryDate,
      "meanRadius": planetsData.bodies[6].meanRadius,
      "moons": planetsData.bodies[6].moons,
    }
    venusData = {
      "name": planetsData.bodies[7].englishName,
      "gravity": planetsData.bodies[7].gravity,
      "discoveredBy": planetsData.bodies[7].discoveredBy,
      "discoveryDate": planetsData.bodies[7].discoveryDate,
      "meanRadius": planetsData.bodies[7].meanRadius,
      "moons": planetsData.bodies[7].moons,
    }
  }
  switch (followPlanet) {
    case "sun":
      easycam.setState({
        distance: 350,
        center: [0, 0, 0],
        rotation: [0.5, -0.15, 0.77, 0.3],
      });
      break;
    case "mercury":
      easycam.setState({
        distance: 250,
        center: orbit1.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 200);
      break;
    case "venus":
      easycam.setState({
        distance: 250,
        center: orbit2.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 200);
      break;
    case "earth":
      easycam.setState({
        distance: 250,
        center: orbit3.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 200);
      break;
    case "mars":
      easycam.setState({
        distance: 250,
        center: orbit4.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 200);
      break;
    case "jupiter":
      easycam.setState({
        distance: 400,
        center: orbit5.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 200);
      break;
    case "saturn":
      easycam.setState({
        distance: 400,
        center: orbit6.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 100);
      break;
    case "uranus":
      easycam.setState({
        distance: 400,
        center: orbit7.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 100);
      break;
    case "neptune":
      easycam.setState({
        distance: 250,
        center: orbit8.obj[0].getPosition(),
        rotation: [0.5, -0.15, 0.77, 0.3],
      }, 100);
      break;
    default:
      easycam.setState({
        distance: 850,
        center: [0, 0, 0],
        rotation: [0.5, -0.15, 0.77, 0.3],
      });
      break;
  }

  beginHUD();
  image(stars, 0, 0);
  endHUD();
  angleMode(DEGREES);

  ambientLight(60, 60, 60);
  pointLight((255,255,255), 255, 255, 0, 0, 0);
  push();
  noStroke();
  rotateZ(frameCount*0.6)
  texture(sun_texture);
  textureMode(IMAGE);
  
  sphere(sun_size);
  pointLight((255,255,255), 255, 255, 150, 150, 150);
  pop();
  orbits.forEach(
    (o) =>{
      o.draw() 
    } 
  );

  // beginHUD()
  // rect(355, 650, 300, 300, 70);
  // text("hola", 0,0, 30,30)
  // endHUD()

   
}

class Orbit {
  constructor(x, y, z, xr, yr, zr, ellipseWidth, ellipseHeight) {
    this.obj = [];
    this.currentRot = [x ? x : 0, y ? y : 0, z ? z : 0];
    this.rot = [xr ? xr : 0, yr ? yr : 0, zr ? zr : 0];
    this.ellipseWidth = ellipseWidth;
    this.ellipseHeight = ellipseHeight;
  }

  draw() {
    push();
    rotateZ(this.currentRot[2]);
    rotateY(this.currentRot[1]);
    rotateX(this.currentRot[0]);

    noFill();
    stroke("white");
    strokeWeight(0.4);
    ellipse(0, 0, this.ellipseWidth, this.ellipseHeight, 50);

    for (let i = 0; i < this.obj.length; i++) {
      let o = this.obj[i];
      o.draw();
      dotsData.push([o.id, o.getPosition(), this.get3DPos(o)]);
    }

    pop();
  }

  get3DPos(o) {
    let [x, y, z] = o.getPosition();
    let pos = createVector(x, y, z);
    pos = this.rotate2(pos, createVector(1, 0, 0), this.currentRot[0]);
    pos = this.rotate2(pos, createVector(0, 1, 0), this.currentRot[1]);
    pos = this.rotate2(pos, createVector(0, 0, 1), this.currentRot[2]);
    return pos;
  }

  //https://stackoverflow.com/questions/67458592/how-would-i-rotate-a-vector-in-3d-space-p5-js
  rotate2(vect, axis, angle) {
    // Make sure our axis is a unit vector
    axis = p5.Vector.normalize(axis);

    return p5.Vector.add(
      p5.Vector.mult(vect, cos(angle)),
      p5.Vector.add(
        p5.Vector.mult(p5.Vector.cross(axis, vect), sin(angle)),
        p5.Vector.mult(
          p5.Vector.mult(axis, p5.Vector.dot(axis, vect)),
          1 - cos(angle)
        )
      )
    );
  }
}

class Dot {
  constructor(angle, speed, factorX, factorY, texture, radius, name) {
    this.id = ++dotId;
    this.angle = angle;
    this.speed = speed;
    this.factorX = factorX;
    this.factorY = factorY;
    this.texture = texture;
    this.radius = radius;
    this.name = name;
  }

  draw() {
    this.angle += this.speed;
    this.x = (cos(this.angle) * this.factorX) / 2;
    this.y = (sin(this.angle) * this.factorY) / 2;
    push();
    
    translate(this.x, this.y);
    noStroke();
    texture(this.texture);
    rotateZ(frameCount)
    sphere(this.radius);
    fill("white")
    pop();
    push();
    var position = createVector(this.x, this.y, 0)
    translate(position);
    let picked = mousePicking({ size: this.radius*2, shape: Tree.CIRCLE });
    fill(picked ? color(33,248,246): 255,255,255,10);
    if (picked){
      if(this.name === "earth"){
        beginHUD()

        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(earthData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(earthData.gravity, 510,750)
        text("Mean radius:", 400,800)
        text(earthData.meanRadius, 510,800)
        text("Moons:", 400,850)
        text(earthData.moons[0].moon, 510,850)
        endHUD()
      }else if(this.name === "mercur"){
        beginHUD()

        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(mercurData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(mercurData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(mercurData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("It is the smallest planet", 400,870)
        text("a littler bigger than moon", 400,900)

        endHUD()

      }else if(this.name === "venus"){
        
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(venusData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(venusData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(venusData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("It is the hotest planet", 400,870)
        text("with 470°c", 400,900)
        endHUD()

      }else if(this.name === "mars"){
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(marsData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(marsData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(marsData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("Theoretically you can sow", 400,870)
        text("potatos due to minerals", 400,900)
        endHUD()

      }else if(this.name === "jupiter"){
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(jupiterData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(jupiterData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(jupiterData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("It is the fastest planet", 400,870)
        text("one day takes 10 hours.", 400,900)
        endHUD()

      }else if(this.name === "saturn"){
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(saturnData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(saturnData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(saturnData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("It is the fastest planet", 400,870)
        text("one day takes 10 hours.", 400,900) 
        endHUD()

      }else if(this.name === "uranus"){
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(uranusData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(uranusData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(uranusData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("It rains diamons!!", 400,870)
        text("so sad that in earth", 400,900) 
        text("rains water...", 400,930) 
        endHUD()

      }else if(this.name === "neptune"){
        beginHUD()
        fill(color(255,255,255))
        rect(355, 650, 300, 300, 50);
        textSize(37);
        text(neptureData.name, 400,700)
        textSize(17);
        text("Gravity:", 400,750)
        text(neptureData.gravity, 510,750)
        text("Mean Radius:", 400,790)
        text(neptureData.meanRadius, 510,790)
        text("Random fact:", 400,840)
        text("One year takes 165 years", 400,900)
        
        endHUD()

      }

    }
    noStroke();
    strokeWeight(0);
    stroke(picked ?  color(33,248,246): 255,255,255,50);
    bullsEye({ size: this.radius*2, shape: Tree.CIRCLE });
    pop();

  }

  getPosition() {
    return [this.x, this.y, 0];
  }
}


class Ring {
  constructor(diameter, angle, speed, factorX, factorY, texture) {
    this.id = ++dotId;
    this.diameter = diameter;
    this.angle = angle;
    this.speed = speed;
    this.factorX = factorX;
    this.factorY = factorY;
    this.texture = texture; //
  }

  draw() {
    this.angle += this.speed;
    this.x = (cos(this.angle) * this.factorX) / 2;
    this.y = (sin(this.angle) * this.factorY) / 2;
    push();
    noStroke();
    texture(this.texture);
    circle(this.x, this.y, this.diameter);
    pop();
  }

  getPosition() {
    return [this.x, this.y, 0];
  }

}


function travelPlanet(e) {
  followPlanet = e.target.value;
  
  var p = planetInfo();
  p.draw();
}

class planetInfo {
  draw(){
    rect(-20,-20, 50, 50)
  }
}