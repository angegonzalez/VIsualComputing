
# **Visual Masking**

Es un fenómeno de la *percepción visual*. Ocurre cuando las visibilidad de la imagen, llamada *objetivo* es reducida por la presencia de otra imagen, llamada *máscara*.

El *objetivo* puede ser invisible o parecer que tiene un contraste o una luminosidad reducidos. Existen tres disposiciones temporales diferentes para el enmascaramiento: el *fordward masking*, el *backward masking* y el *simultaneous masking*. En el *fordward masking*, la *máscara* precede al objetivo. En *fordward masking*, la máscara sigue al objetivo. En el *simultaneous masking*, la máscara y el objetivo aparecen juntos. Existen dos disposiciones espaciales diferentes para el enmascaramiento: el enmascaramiento de patrón y el metacontraste. El enmascaramiento de patrón se produce cuando las ubicaciones del objetivo y de la máscara se superponen. El enmascaramiento de metacontraste se produce cuando la máscara no se solapa con la ubicación del objetivo. 

## **Image kernels**

A continuación, presentamos la implementación de algunos Kernels, o matrices de convolución, que es un tipo de *visual masking*

El paso de las diferentes matrices, que describimos a continuación tienen diferentes efectos sobre la imagen, entonces podemos jugar un poco cambiando los efectos en el primer selector.

Las matrices que usamos  para los efectos son las siguientes:

1. Blur = {{<katex>}}
\begin{bmatrix}
   0,0625 & 0,125 & 0,0625\\
   0,125  & 0,25  & 0,125 \\
   0,0625 & 0,125 & 0,0625 
\end{bmatrix}
{{</katex>}}

2. Bottom Sobel = {{<katex>}}
\begin{bmatrix}
   -1 & -2 & -1\\
   0  & 0  & 0 \\
   1  & 2  & 1 
\end{bmatrix}
{{</katex>}}

3. Emboss = {{<katex>}}
\begin{bmatrix}
   -2 & -1 & 0\\
   -1  & 1  & 1 \\
   0  & 1  & 2 
\end{bmatrix}
{{</katex>}}

4. Left Sobel = {{<katex>}}
\begin{bmatrix}
   1 & 0 & -1\\
   2  & 0  & -2 \\
   1  & 0  & -1 
\end{bmatrix}
{{</katex>}}

5. Outline = {{<katex>}}
\begin{bmatrix}
   -1 & -1 & -1\\
   -1  & 8  & -1 \\
   -1  & -1 & -1 
\end{bmatrix}
{{</katex>}}

5. Right Sobel = {{<katex>}}
\begin{bmatrix}
   -1 & 0 & 1\\
   -2  & 0 & 2 \\
   -1  & 0 & 1
\end{bmatrix}
{{</katex>}}

5. Sharpen = {{<katex>}}
\begin{bmatrix}
   0 & -1 & 0\\
   -1  & 5 & -1 \\
   0  & -1 & 0
\end{bmatrix}
{{</katex>}}

6. Top Sobel = {{<katex>}}
\begin{bmatrix}
   1 & 2 & 1\\
   0 & 0 & 0 \\
   -1  & -2 & -1
\end{bmatrix}
{{</katex>}}

<br>

También, planteamos un transformación de la imagen a una representación de luminosidad por el cálculo de **Lumma**, que se puede calcular mediante la siguiente fórmula:



{{<katex display >}}
Luma = 0.299 \times r + 0.587 \times g+0.114 \times b
{{</katex >}}



{{<hint info >}}
**Consejo #1**  
Si pasas el cursor sobre una parte de la imagen, podrás ver la convolución aplicada a una pequeña área definida por un cuadro alrededor de la posición del cursor, para ver la convolución en toda la imagen, puedes presionar la tecla `a`
{{< /hint >}}

{{<hint info >}}
**Consejo #2**  
En los valores de la matriz, puedes colocar los valores que tu quieras para revisar como quedaría una convolución usando el kernel de tu preferencia
{{< /hint >}}


{{<p5-iframe sketch="/VisualComputing/sketches/workshops/imageKernels.js" width="530" height="700">}}

## **Image histogram**

Un histograma de imagen es un tipo de histograma que actúa como una representación gráfica de la distribución del tono en una imagen digital y traza el número de píxeles para cada valor de tono. Observando el histograma de una imagen concreta, el espectador podrá juzgar toda la distribución del tono.

Los histogramas de imagen están presentes en muchos servicios modernos. Los fotógrafos pueden utilizarlos como ayuda para mostrar la distribución de los tonos capturados, y si se han perdido detalles de la imagen por culpa de las altas luces o las sombras oscurecidas.

A continuación planteamos los histogramas correspondientes a cada canal de color en el modo de color `RGB` y para la luminosidad en los modos de color `HSL` y `HSB`:

{{<p5-iframe sketch="/VisualComputing/sketches/workshops/imageHistograms.js" width="530" height="700">}}

## **Referencias** 

- [Visual masking](https://en.wikipedia.org/wiki/Visual_masking)
- [Kernel in image processing](https://en.wikipedia.org/wiki/Kernel_%28image_processing%29)
- [Different image kernel & convolutions](https://setosa.io/ev/image-kernels/)
- [Image histogram](https://en.wikipedia.org/wiki/Image_histogram)
- [HSL and HSV Lightness](https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness)
