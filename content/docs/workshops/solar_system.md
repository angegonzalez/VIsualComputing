## **Sistema solar** 🌞 🪐

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

### Movimiento de rotación de los planetas 🪐

Para el movimiento de rotación, usamos la función `rotateZ()` para que la esfera rote sobre su propio eje, así simulamos el comportamiento del movimiento en todos los planetas.

### Picker

Para Laurita xd

### API

Laurita x2

### Luz

Emitimos una luz mediante la función `pointLight()` emitida desde el origen y en todas las direcciones para ver los lados iluminados y oscuros de cada planeta.

### Interpolación para el cambio entre estados

Laurita :D