precision mediump float;

uniform sampler2D texture;
// see the emitTexOffset() treegl macro
// https://github.com/VisualComputing/p5.treegl#macros
uniform bool withFilter;
uniform bool withMagnifier;
uniform bool withLuma;
uniform vec2 texOffset;
// holds the 3x3 kernel
uniform float mask1[9];
uniform float mask2[9];
uniform float mask3[9];
uniform float mask4[9];

// we need our interpolated tex coord
varying vec2 texcoords2;

//magnifier
uniform vec3 iResolution;// viewport resolution (in pixels)
uniform float iTime;// shader playback time (in seconds)
uniform float iTimeDelta;// render time (in seconds)
uniform float iFrameRate;// shader frame rate
uniform int iFrame;// shader playback frame
uniform float iChannelTime[4];// channel playback time (in seconds)
uniform vec3 iChannelResolution[4];// channel resolution (in pixels)
uniform vec4 iMouse;// mouse pixel coords. xy: current (if MLB down), zw: click
uniform vec4 iDate;// (year, month, day, time in seconds)
uniform float iSampleRate;


float luma(vec3 texel) {
  return 0.299 * texel.r + 0.587 * texel.g + 0.114 * texel.b;
}


void main(){
    // 1. Use offset to move along texture space.
    // In this case to find the texcoords of the texel neighbours.
    vec2 tc0=texcoords2+vec2(-texOffset.s,-texOffset.t);
    vec2 tc1=texcoords2+vec2(0.,-texOffset.t);
    vec2 tc2=texcoords2+vec2(+texOffset.s,-texOffset.t);
    vec2 tc3=texcoords2+vec2(-texOffset.s,0.);
    // origin (current fragment texcoords)
    vec2 tc4=texcoords2+vec2(0.,0.);
    vec2 tc5=texcoords2+vec2(+texOffset.s,0.);
    vec2 tc6=texcoords2+vec2(-texOffset.s,+texOffset.t);
    vec2 tc7=texcoords2+vec2(0.,+texOffset.t);
    vec2 tc8=texcoords2+vec2(+texOffset.s,+texOffset.t);
    
    // 2. Sample texel neighbours within the rgba array
    vec4 rgba[9];
    rgba[0]=texture2D(texture,tc0);
    rgba[1]=texture2D(texture,tc1);
    rgba[2]=texture2D(texture,tc2);
    rgba[3]=texture2D(texture,tc3);
    rgba[4]=texture2D(texture,tc4);
    rgba[5]=texture2D(texture,tc5);
    rgba[6]=texture2D(texture,tc6);
    rgba[7]=texture2D(texture,tc7);
    rgba[8]=texture2D(texture,tc8);
    
    // 3. Apply convolution kernel
    vec4 convolution;
    for(int i=0;i<9;i++){
        convolution+=rgba[i]*mask1[i];
    }
    
    vec2 uv = texcoords2.xy;
    vec2 mouse = iMouse.xy;
    
    if(mouse == vec2(0.0))
        mouse = iResolution.xy/2.0;
    
    //UV coordinates of mouse
    vec2 mouse_uv = mouse/iResolution.y;
    
    //Distance to mouse
    float mouse_dist = distance(uv,mouse_uv);
    
    //Draw the texture
    
    vec4 texel = texture2D(texture,texcoords2);

    vec4 filter = vec4(convolution.rgb,1.0);
    
    if(mouse_dist<.21)
        texel = withMagnifier ? vec4(0.1, 0.1, 0.1, 1.0): texel ; 

    if(mouse_dist<.2)
        texel =  withMagnifier ?  texture2D(texture,(uv+mouse_uv)/2.0)*(convolution.rgb,1.0) : texel;

    if(mouse_dist<.21)
        texel = withFilter ? vec4(0.1, 0.1, 0.1, 1.0): texel; 

    if(mouse_dist<.2)
        texel =  withFilter ?  filter : texel;

    if(mouse_dist<.2)
        texel =  withLuma ?  vec4((vec3(luma(texel.rgb))), 1.0) : texel;

    gl_FragColor = texel;

}
