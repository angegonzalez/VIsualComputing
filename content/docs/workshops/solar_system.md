## **Sistema solar** 🌞 🪐

El sistema solar es un sistema planetario ubicado en la via lactea, una galaxía conformada por alrededor de mil millones de estrellas y compuesta por tres brazos en espiral: orion, perseo y centauro.

Nuestro sistema solar se encuentra en el brazo orion y está compuesto por nuestra estrella sol y 8 planetas: mercurio, venus, tierra, marte, jupiter, saturno, urano y nepturno.

Cada planeta cuenta con su propia velocidad de traslación y rotación, donde factores como la cercanía al sol, su masa y sus compuestos hacen que esta se afecte. A su vez la gravedad de cada uno depende de cuan lejos se encuentren de otro objeto.

La información acerca de cada planeta en el sistema solar se muestra a continuación:


| Planeta 🌎 | Gravedad ⏬  |   Velocidad 💨|  Masa     🎱  | Distancia 📏|
|----------   |------------  |-------------- |-----------------|------------|
| Mercurio    | 3,7 m/s2     | 172.404 km/h  | 3,28 x 10^23 kg |579.000.000 km|
| Venus       | 8,87 m/s2    | 126.108 km/h  | 4,83 x 10^24 kg |108.200.000 km|
| Tierra      | 9,807 m/s2   | 107.244 km/h  | 5,98 x 10^24 kg |149.600.000 km|
| Marte       | 3,721 m/s2   | 86.868 km/h   | 2,28 x 10^23 kg |227.900.000 km|
| Jupiter     | 24,79 m/s2   | 47.016 km/h   | 1,90 x10^27 kg  |778.410.000 km|
| Saturno     | 10,44 m/s2   | 34.705 km/h   | 5,98x 10^26 kg  |1.427.000.000 km|
| Urano       | 8,87 m/s2    | 24.516 km/h   | 8,67 x10^25 kg  |2.870.000.000 km|
| Nepturno    | 11,15 m/s2   | 19.548 km/h   | 1,05 x 10^26 kg |4.496.000.000 km|

{{<hint info >}}

# Escalas

* Tamaño

Debido a que el sol demuestra ser un astro gigante respecto a los demás planetas del sistema solar, la escala de tamaño  que se dió para el sol fue de **1:10000000**, la escala para los planetas se determinó con respecto a un factor proporcional al sol para efectos de que la visualización sea entendible.

* Velocidad

La escala de velocidad que se determinó fue **1:100000000** para cada uno de los planetas.

* Distancia

La escalas de distancia que se determinó fue de **1:10000000** para cada uno de los planetas

{{< /hint >}}


### **El planeta tierra en el sistema solar 🌍** 

¿Qué hace que la vida sea posible en el planeta tierra o por que hasta el momento en otros planetas no se ha encontrado señales de vida?

La vida en el planeta tierra es un evento que muestra la perfección de la naturaleza, pues la alteración de una sola característica pudo cambiar todo el rumbo de la vida.



1.   **Distancia al sol 🌞**

La distancia que el planeta tierra tiene al sol brinda unos níveles de temperatura y de luz óptimos para la vida pues tanto la temperatura como la luz brinda energía y sustento.

2.   **Dimensiones y atmósfera 📏**

Gracias a las dimensiones del planeta este puede atraer la atmófera para sí, si llegase la tierra a tener un poco menos de su masa, la fuerza gravitatoria no sería capaz de atraer la atmosféra y no sería posible la vida, pues es esta misma atmósfera es la que es capaz de proteger de radiaciones perjudicilaes mientras brinda elementos necesarios para la vida como el oxígeno.

3.   **Componentes químicos ⚛**

Gracias a los elementos disponibles en la superficie de la tierra y su combinación permiten la vida.

4.   **Campo magnético terrestre 🧲**

El campo magnético permite proteger a los organismos de la radiación solar en la superficie y a los vientos solares.

Si este campo no existiera con sus respectivas magnitudes la formas de vida cambiaría, por ejemplo:

*   Las aves no sabrían hacia donde migrar.
*   Animales se guian por este mismo campo magnético.
*   Fundamental para el crecimiento de las plantas.

5.   **Agua en estado líquido 💦 🚤**

No es sopresa que el agua sea el elemento fundamental para la vida y es gracias a que el 70% de nuestro planeta posea este compuesto que la vida puede sostenerse, regulando su temperatura, hidratando y otro sin fin de características.


Para la práctica #2 del curso de computación visual se presenta un sistema solar dinámico implementado mediante p5.js y haciendo uso de los diferentes conceptos de transformaciones vistos en clase.

{{<hint info >}}
### **!Ponlo a prueba!** ⚡

La implentación puedes hacer uso de:

*   Select para acercarte al planeta que desees.
*   Ubícate en el planeta que desees para obtener información del planeta.
*   Presiona el mouse y muévete para tener una vista 360°.

{{< /hint >}}


{{<p5-iframe sketch="/VisualComputing/sketches/workshops/solar_system/solarSystem.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" lib3="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5treegl.js" width="700" height="1000" >}}

### **Conceptos de clase**

Los conceptos y librerías usadas para la implementación del sistema solar se hizo uso de las siguientes técnicas:
### **Manejo de la cámara 📷**

Para esta escena 3D nos apoyamos en **EasyCam**, que provee un marco fácil para trabajar con la cámara en un entorno `WEBGL`.

La interacción con el usuario a través del raton se hace de una manera sencilla, en la cual se puede cambiar la rotación y la distancia a la cual se ven los objetos en la escena.

También nos provee el manejo de `states` los cuales nos permitirán movernos a cada planeta de una manera sencilla, en la sección de movimiento de cámara se explica más a fondo.

### **Texturas 🖌️**

Las texturas son aplicadas principalmente a objetos esfera (que son los planetas) y usamos el modo de textura `NORMAL`.

La fuente de las texturas las puedes encontrar en la sección de referencias.

### **Movimiento de traslación de los planetas 🪐**

Primero, configuramos una clase que nos ayuda a dibujar las orbitas y en esas orbitas dibujamos cada esfera correspondiente a un planeta (para mas info. ver la clase `Orbit` en código)

Para configurar el movimiento de traslación de los planetas en sus orbitas usamos la siguiente función (traída desde nuestro codigo para analizarla):

```js
  rotate2(vect, axis, angle) {
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
```
Primero, se debe normalizar el vector `axis`, luego retornamos el resultado de:
   1. Sumar dos vectores 
   2. El primer vector es la multiplicación de un escalar (`cos(angle)`) y el vector que recibimos como parámetro
   3. El segundo vector es la multiplicación de un escalar (`1 - cos(angle)`) y otro vector (4)
   4. Este vector es la multiplicación de un escalar (producto punto `p5.Vector.dot(axis, vect)`) y el vector `axis`.

### **Seleccionador de elementos 👆🏻**

Mediante el método de **mousePickin** de la librería `TreeGL` se activa el cuadro de texto donde se muestra la información acerca del planeta. La información de planeta se consumió mediante la API https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=isPlanet%2Ceq%2Ctrue 


### **Movimiento de cámara hacia un elemento 📸**

Mediante el uso de key frames se realizó la traslación de la cámara de un planeta a otro y se realizó la configuración para que la cámara continúe mostrando el planeta independiente de su traslación. 

El método detrás de la función es la interpolación que realiza la librería para lograr trazar la trayectoria y llegar al objeto. 

El método de interpolación que se usa es mediante splines y con la técnica de Catmull-Rom donde los puntos de trayectoria resultan más sencillos de calcular y permiten la obtención de un movimiento suavizado y garantiza que las tangentes de la curva sean continuas en los segmentos.

### **Código de la implementación**

A continuación se detalla el código de la implementación 

```js
const sun_size = 100
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
  orbit1.obj.push(new Dot(0, 0.05, 600, 680, mercury_texture, sun_size*0.18, "mercur"));
  orbits.push(orbit1);

  orbit2 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 900, 980);
  orbit2.obj.push(new Dot(0, 0.048,  900, 980, venus_texture, sun_size*0.25,"venus"));
  orbits.push(orbit2);

  orbit3 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1500, 1580);
  orbit3.obj.push(new Dot(0, 0.075, 1500, 1580, earth_texture, sun_size*0.26, "earth"));
  orbits.push(orbit3);

  orbit4 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 1900, 1980);
  orbit4.obj.push(new Dot(0, 0.06, 1900, 1980, mars_texture, sun_size*0.20, "mars"));
  orbits.push(orbit4);

  orbit5 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 2700, 2780);
  orbit5.obj.push(new Dot(0, 0.15, 2700, 2780, jupiter_texture, sun_size*0.65, "jupiter"));
  orbits.push(orbit5);

  orbit6 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 3000, 3080);
  saturn_ring = new Ring(190, 0, 0.1,  3000, 3080, saturn_ring_texture );
  orbit6.obj.push(new Dot(0, 0.13,  3000, 3080, saturn_texture, sun_size*0.63, "saturn"));
  orbit6.obj.push(saturn_ring);
  orbits.push(orbit6);

  orbit7 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 4000, 4080);
  orbit7.obj.push(new Dot(0, 0.09,  4000, 4080, uranus_texture, sun_size*0.32, "uranus"));
  orbits.push(orbit7);

  orbit8 = new Orbit(0, 0, 0, 0.5, 0.5, 0.5, 4900, 4980);
  orbit8.obj.push(new Dot(0, 0.08, 4900, 4980, neptune_texture, sun_size*0.31, "neptune"));
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
      easycam.setCenter([0,0,0]);
      break;
  }

  beginHUD();
  image(stars, 0, 0);
  endHUD();
  angleMode(DEGREES);

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 0, 0, 0);
  push();
  noStroke();

  rotateZ(frameCount*0.6)
  texture(sun_texture);
  sphere(150);
  pop();
  orbits.forEach(
    (o) =>{
      o.draw() 
    } 
  );   
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
```

# **Referencias**

  *   [API planets info](https://api.le-systeme-solaire.net/swagger/#/)
  *   [Orbitas del sistema solar](http://www.astronoo.com/es/orbitas-sistema-solar.html)
  *   [Qué hace posible la vida en la tierra](https://www.ecologiaverde.com/caracteristicas-del-planeta-tierra-que-hacen-posible-la-vida-1821.html)
  *   [TreeGL library](https://github.com/VisualComputing/p5.treegl)
  * [Textures](https://www.solarsystemscope.com/textures/)
  *  [Interpolación Catmull-Rom](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull%E2%80%93Rom_spline)
  * [Datos básicos sistema solar](https://www.ieslaasuncion.org/fisicaquimica/planetas.htm)
