#ifdef GL_ES
precision mediump float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;
uniform vec3 iResolution;

// our texture coming from p5
uniform sampler2D tex0;

const vec2 PixelsSizeRange =  vec2(5.,300.);
uniform samplerXX iChannel0..3;

vec3 GetColor(vec2 uv)
{
    uv = clamp(vec2(0.0),vec2(1.0), uv);
    return texture(iChannel0, uv).xyz;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;
    
    float pixelSizeF = mix(PixelsSizeRange.x, PixelsSizeRange.y, 0.5 + 0.5*sin(iTime /2.));
    
    vec2 pixelSize = vec2(pixelSizeF * iResolution.x / iResolution.y ,pixelSizeF); // fix aspect ratio in cells
    
    vec2 pixelindex = floor(uv * pixelSize); 
    
    vec2 bottom = pixelindex / pixelSize;
    vec2 top = (pixelindex + vec2(0.,1.)) / pixelSize;
    vec2 right = (pixelindex + vec2(1.,0.)) / pixelSize;
    vec2 topRight = (pixelindex + vec2(1.,1.)) / pixelSize;
    
    
    vec3 color = GetColor(bottom) + GetColor(top) + GetColor(right) + GetColor(topRight);
    color *= 0.25;

    // Output to screen
    fragColor = vec4(color,1.0);
}

void main() {
  vec2 uv = vTexCoord;
  
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;
  
  vec4 tex = texture2D(tex0, uv);
  
  float gray = (tex.r + tex.g + tex.b) / 3.0;
  
  float res = 20.0;
  float scl = res / (10.0);
 
  float threshR = (fract(floor(tex.r*res)/scl)*scl) * gray ;
  float threshG = (fract(floor(tex.g*res)/scl)*scl) * gray ;
  float threshB = (fract(floor(tex.b*res)/scl)*scl) * gray ;
  vec3 thresh = vec3(threshR, threshG, threshB);

  // render the output
  gl_FragColor = vec4(thresh, 1.0);
}