precision mediump float;

// source (image or video) is sent by the sketch
uniform sampler2D source;

uniform sampler2D palette;

// displays original
uniform bool original;
uniform bool keys;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated texcoord (same name and type as in vertex shader)
// defined as a (normalized) vec2 in [0..1]
varying vec2 texcoords2;

void main() {
  if (original) {
    gl_FragColor = texture2D(source, texcoords2);
  }
  else {
    vec2 symbolCoord = texcoords2 * resolution;
    vec2 stepCoord = floor(symbolCoord);
    
    symbolCoord = symbolCoord - stepCoord;

    stepCoord = stepCoord / vec2(resolution);


    vec4 key = texture2D(source, stepCoord);
    vec4 paletteTexel = texture2D(palette, symbolCoord);

    gl_FragColor = keys ? key : paletteTexel;
  }
}
