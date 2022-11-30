precision mediump float;

// source (image or video) is sent by the sketch
uniform sampler2D source;
uniform sampler2D luma1;
uniform sampler2D luma2;
uniform sampler2D luma3;
uniform sampler2D luma4;
uniform sampler2D luma5;
uniform sampler2D luma6;
uniform sampler2D luma7;
uniform sampler2D luma8;
uniform sampler2D luma9;
uniform sampler2D luma10;

// displays original
uniform bool original;
uniform bool keys;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated texcoord (same name and type as in vertex shader)
// defined as a (normalized) vec2 in [0..1]
varying vec2 texcoords2;

const vec4 lumcoeff = vec4(0.299, 0.587, 0.114, 0);

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

    float luma = dot(key, lumcoeff);
    vec4 paletteTexel;

    //symbolCoord.x = 0.8;
    
    if (luma >= 0.0 && luma < 0.1){
      paletteTexel = texture2D(luma1, symbolCoord);
    }
    else if (luma >= 0.1 && luma < 0.2){
      paletteTexel = texture2D(luma2, symbolCoord);
    }
    else if (luma >= 0.2 && luma < 0.3){
      paletteTexel = texture2D(luma3, symbolCoord);
    }
    else if (luma >= 0.3 && luma < 0.4){
      paletteTexel = texture2D(luma4, symbolCoord);
    }
    else if (luma >= 0.4 && luma < 0.5){
      paletteTexel = texture2D(luma5, symbolCoord);
    }
    else if (luma >= 0.5 && luma < 0.6){
      paletteTexel = texture2D(luma6, symbolCoord);
    }
    else if (luma >= 0.6 && luma < 0.7){
      paletteTexel = texture2D(luma7, symbolCoord);
    }
    else if (luma >= 0.7 && luma < 0.8){
      paletteTexel = texture2D(luma8, symbolCoord);
    }
    else if (luma >= 0.8 && luma < 0.9){
      paletteTexel = texture2D(luma9, symbolCoord);
    }
    else if (luma >= 0.9 && luma < 1.0){
      paletteTexel = texture2D(luma10, symbolCoord);
    }
    else{
      paletteTexel = texture2D(source, stepCoord);
    }
    
    

    // vec4 paletteTexel = texture2D(palette, symbolCoord);

    gl_FragColor = keys ? key : paletteTexel;
  }
}
