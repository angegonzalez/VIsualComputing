let sun_texture;
let mercury_texture;
let venus_texture;
let stars_texture;
let earth_texture;
let mars_texture;
let jupiter_texture;
let saturn_texture;
let uranus_texture;
let neptune_texture;

let orbit1;
let orbit2;
let orbit3;
let orbit4;
let orbit5;
let orbit6;
let orbit7;
let orbit8;

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
  stars_texture = loadImage("/VisualComputing/sketches/assets/8k_stars.jpg");
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
}

function setup() {
  createCanvas(700, 1000, WEBGL);
  textureMode(NORMAL);
  easycam = createEasyCam();
  easycam.setState({
    distance: 350,
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
  orbit1.obj.push(new Dot(0, 0.05, 600, 680, mercury_texture, 18));
  orbits.push(orbit1);

  orbit2 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1000, 1080);
  orbit2.obj.push(new Dot(0, 0.06, 1000, 1080, venus_texture, 25));
  orbits.push(orbit2);

  orbit3 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1400, 1480);
  orbit3.obj.push(new Dot(0, 0.07, 1400, 1480, earth_texture, 26));
  orbits.push(orbit3);

  orbit4 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1800, 1880);
  orbit4.obj.push(new Dot(0, 0.08, 1800, 1880, mars_texture, 20));
  orbits.push(orbit4);

  orbit5 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 2200, 2280);
  orbit5.obj.push(new Dot(0, 0.09, 2200, 2280, jupiter_texture, 65));
  orbits.push(orbit5);

  orbit6 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 2600, 2680);
  orbit6.obj.push(new Dot(0, 0.1, 2600, 2680, saturn_texture, 63));
  orbits.push(orbit6);

  orbit7 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 3000, 3000);
  orbit7.obj.push(new Dot(0, 0.11, 3000, 3080, uranus_texture, 32));
  orbits.push(orbit7);

  orbit8 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 3400, 3480);
  orbit8.obj.push(new Dot(0, 0.12, 3400, 3480, neptune_texture, 31));
  orbits.push(orbit8);
}

function draw() {
  switch (followPlanet) {
    case "sun":
      easycam.setState({
        distance: 350,
        center: [0, 0, 0],
        rotation: [0.5, -0.15, 0.77, 0.3],
      });
      break;
    case "mercury":
      easycam.setDistance(150);
      newCenter = orbit1.obj[0].getPosition();
    //   newCenter[1] = newCenter[1]+50;
    //   newCenter[1] = newCenter[2]+50;
      easycam.setCenter(newCenter);
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "venus":
      easycam.setDistance(150);
      newCenter = orbit1.obj[0].getPosition();
      newCenter[1] = newCenter[1]+300;
      //   newCenter[1] = newCenter[2]+50;
      easycam.setCenter(newCenter);
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "earth":
      easycam.setDistance(150);
      easycam.setCenter(orbit3.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "mars":
      easycam.setDistance(150);
      easycam.setCenter(orbit4.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "jupiter":
      easycam.setDistance(150);
      easycam.setCenter(orbit5.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "saturn":
      easycam.setDistance(150);
      easycam.setCenter(orbit6.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "uranus":
      easycam.setDistance(150);
      easycam.setCenter(orbit7.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    case "neptune":
      easycam.setDistance(150);
      easycam.setCenter(orbit8.obj[0].getPosition());
      //easycam.setRotation([0, 0, 1, 1]);
      break;
    default:
  }

  angleMode(DEGREES);
  background(0);

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 0, 0, 0);
  push();
  noStroke();
  //strokeWeight(0.5);
  //stroke("purple");
  rotateZ(frameCount)
  texture(sun_texture);
  sphere(100);

  pop();
  // push();
  // position(10,10);
  // grid({ style: Tree.SOLID });
  orbits.forEach((o) => o.draw());
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

    if (rotating) {
      this.currentRot[0] += this.rot[0];
      this.currentRot[1] += this.rot[1];
      this.currentRot[2] += this.rot[2];
    }

    rotateZ(this.currentRot[2]);
    rotateY(this.currentRot[1]);
    rotateX(this.currentRot[0]);

    noFill();
    stroke("white");
    strokeWeight(0.1);
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
  constructor(angle, speed, factorX, factorY, texture, radius) {
    this.id = ++dotId;
    this.angle = angle;
    this.speed = speed;
    this.factorX = factorX;
    this.factorY = factorY;
    this.texture = texture;
    this.radius = radius;
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

    pop();
  }

  getPosition() {
    return [this.x, this.y, 0];
  }
}

function travelPlanet(e) {
  followPlanet = e.target.value;
}
