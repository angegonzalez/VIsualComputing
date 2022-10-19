## **Sistema solar** 🌞 🪐

El sistema solar es un sistema planetario ubicado en la via lactea, una galaxía conformada por alrededor de mil millones de estrellas y compuesta por tres brazos en espiral: orion, perseo y centauro.

Nuestro sistema solar se encuentra en el brazo orion y está compuesto por nuestra estrella sol y 8 planetas: mercurio, venus, tierra, marte, jupiter, saturno, urano y nepturno.

Cada planeta cuenta con su propia velocidad de traslación y rotación, donde factores como la cercanía al sol, su masa y sus compuestos hacen que esta se afecte. A su vez la gravedad de cada uno depende de cuan lejos se encuentren de otro objeto.

La información acerca de cada planeta en el sistema solar se muestra a continuación:


| Planeta 🌎 | Gravedad ⏬  |   Velocidad 💨|  Masa     🎱  |
|----------   |------------  |-------------- |-----------------|
| Mercurio    | 3,7 m/s2     | 172.404 km/h  | 3,28 x 10^23 kg |
| Venus       | 8,87 m/s2    | 126.108 km/h  | 4,83 x 10^24 kg |
| Tierra      | 9,807 m/s2   | 107.244 km/h  | 5,98 x 10^24 kg |
| Marte       | 3,721 m/s2   | 86.868 km/h   | 2,28 x 10^23 kg |
| Jupiter     | 24,79 m/s2   | 47.016 km/h   | 1,90 x10^27 kg  |
| Saturno     | 10,44 m/s2   | 34.705 km/h   | 5,98x 10^26 kg  |
| Urano       | 8,87 m/s2    | 24.516 km/h   | 8,67 x10^25 kg  |
| Nepturno    | 11,15 m/s2   | 19.548 km/h   | 1,05 x 10^26 kg |

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


A continuación presentamos el desarrollo de nuestro sistema solar el cual implementa varios conceptos vistos en clase.

### Manejo de la cámara 📷

Para esta escena 3D nos apoyamos en **EasyCam**, que provee un marco fácil para trabajar con la cámara en un entorno `WEBGL`.

La interacción con el usuario a través del raton se hace de una manera sencilla, en la cual se puede cambiar la rotación y la distancia a la cual se ven los objetos en la escena de

También nos provee el manejo de `states` los cuales nos permitirán movernos a cada planeta de una manera sencilla (ver más en el tema de interpolación)

### Texturas 🖌️

Las texturas son aplicadas principalmente a objetos esfera (que son los planetas) y usamos el modo de textura `NORMAL`.

La fuente de las texturas las puedes encontrar en la sección de referencias

### Movimiento de traslación de los planetas 🪐

Primero, configuramos una clase que nos ayuda a dibujar las orbitas y en esas orbitas dibujamos cada esfera correspondiente a un planeta (para mas info. ver la clase `Orbit` en código)

Para configurar el movimiento de traslación de los planetas en sus orbitas usamos la siguiente función (traída desde nuestro codigo para analizarla):

```
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

Para ver la implementación completa y uso de esta función base, te invitamos a revisar el código.


{{<p5-iframe sketch="/VisualComputing/sketches/workshops/solar_system/solarSystem.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" lib3="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5treegl.js" width="700" height="1000" >}}