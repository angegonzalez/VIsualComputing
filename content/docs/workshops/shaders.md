# Procesamiento de imágenes

Gracias a la implementación de los shaders, el procesamiento de imágenes se hace más sencillo gracias a las herramientas que este lenguaje provee. 

Mediante el uso de diferentes variables uniformes, se hace la implementación del magnificador o lupa para la imagen. Además se permite controlar la aplicación de un tipo de filtro seleccionado por el usuario el cual se implementa mediante la multiplicación con los elementos de la matriz de convolución. El programa permite usar filtros como Blurring, Sharpen, Box Blur y Ridge Detection.

La aplicación también permite aplicar el luma en la imagen y sobre este se podrá hacer uso de la lupa e incluso aplicar filtros sobre esta.

{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/imageProcessing.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="750" height="625" >}}
# Photomosaic 
{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/photoMosaic.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="750" height="625" >}}


# Conclusiones

En general, el uso de shaders resulta ser una solución práctica para la generación de todo tipo de gráficos y su procesamiento. Alrededor de la implementación para la entrega se percibió que el uso de Shaders puede ser tan sencillo como se desee, pero también tan complejo como se desee. 

La aplicación de shaders para este curso es solo un abrebocas para todas las aplicaciones que estas puedan desarrollar, el conocimiento que se quiera desarrollar más allá de lo visto en clase debe ser estudiado e implementado.
<!-- # Color blending en suma

{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/colorBlendingSum.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}} -->


<!-- # Color blending en multiplicación

{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/colorBlendingMult.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}} -->


<!-- # Color blending en resta

{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/colorBlendingMin.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}}

# Texture UV
{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/texturesUV.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}} -->


<!-- # Texture UV With blue channel
{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/texturesUV_blueChannel.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="625" height="625" >}} -->

<!-- # Texture Sampling with HCL 
{{<p5-iframe sketch="/VisualComputing/sketches/workshops/shaders/texturesSampling.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="625" height="625" >}} -->