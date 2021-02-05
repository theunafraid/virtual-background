(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{334:function(e,t){},335:function(e,t){},343:function(e,t){},346:function(e,t){},347:function(e,t){},348:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(401),o=n(6),i=n.n(o),c=n(51),u=n.n(c),s=n(57),l=n(5),f=n(394),d=n(404),g=n(396),b=n(397),m=n(351),p=n(287),j=n.n(p),h=n(288),v=n.n(h),O=n(4),x=n.n(O),C=n(12);function E(e,t,n){var r=Math.min(t,n),a=(t-r)/2,o=(n-r)/2,i=document.createElement("canvas");return i.width=63,i.height=63,i.getContext("2d").drawImage(e,a,o,r,r,0,0,i.width,i.height),new Promise((function(e){return i.toBlob((function(t){return e(t)}))}))}var _=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=new Image;t.src=e,t.onload=Object(C.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,t.naturalWidth,t.naturalHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]},R=n(395),T=n(26),F=n(390);var y=Object(f.a)((function(e){return Object(d.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})})),k=function(e){var t=y();return Object(r.jsx)(F.a,{className:Object(T.a)(t.root,e.active&&t.active),disabled:e.disabled,onClick:e.onClick,children:e.children})};var A=Object(f.a)((function(e){return Object(d.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})})),w=function(e){var t=A();return Object(r.jsxs)(k,{active:!!e.thumbnailUrl&&e.active,disabled:!e.thumbnailUrl,onClick:e.onClick,children:[e.thumbnailUrl?Object(r.jsx)("img",{className:Object(T.a)(t.scalableContent,t.image),src:e.thumbnailUrl,alt:"",onLoad:e.onLoad}):Object(r.jsx)(R.a,{className:t.scalableContent,variant:"rect"}),e.children]})};var U=function(e){var t=_(e.imageUrl),n=Object(l.a)(t,2),a=n[0],o=n[1];return Object(r.jsx)(w,{thumbnailUrl:a,active:e.active,onClick:e.onClick,onLoad:o})};var S=Object(f.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})})),P=function(e){var t=S();return Object(r.jsx)(k,{active:e.active,onClick:e.onClick,children:Object(r.jsx)("div",{className:t.root,children:e.children})})},D=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")}));var M=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),B=function(e){var t=M();return Object(r.jsx)(g.a,{className:t.root,children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Background"}),Object(r.jsx)(P,{active:"none"===e.config.type,onClick:function(){return e.onChange({type:"none"})},children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(P,{active:"blur"===e.config.type,onClick:function(){return e.onChange({type:"blur"})},children:Object(r.jsx)(v.a,{})}),D.map((function(t){return Object(r.jsx)(U,{imageUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)}))]})})},L=n(67),I=n(398),N=n(405),W=n(403);var X=function(e){return Object(r.jsx)(g.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Post-processing"}),"webgl2"===e.pipeline?Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(m.a,{gutterBottom:!0,children:"Joint bilateral filter"}),Object(r.jsx)(m.a,{variant:"body2",children:"Sigma space"}),Object(r.jsx)(N.a,{value:e.config.jointBilateralFilter.sigmaSpace,min:0,max:10,step:.1,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{jointBilateralFilter:Object(L.a)(Object(L.a)({},e.config.jointBilateralFilter),{},{sigmaSpace:n})}))}}),Object(r.jsx)(m.a,{variant:"body2",children:"Sigma color"}),Object(r.jsx)(N.a,{value:e.config.jointBilateralFilter.sigmaColor,min:0,max:1,step:.01,valueLabelDisplay:"auto",onChange:function(t,n){e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{jointBilateralFilter:Object(L.a)(Object(L.a)({},e.config.jointBilateralFilter),{},{sigmaColor:n})}))}})]}):Object(r.jsx)(I.a,{label:"Smooth segmentation mask",control:Object(r.jsx)(W.a,{color:"primary",checked:e.config.smoothSegmentationMask,onChange:function(t){e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{smoothSegmentationMask:t.target.checked}))}})})]})})},G=n(399),H=n(406),V=n(407),Y=n(402);var z=Object(f.a)((function(e){return Object(d.a)({root:Object(s.a)({},e.breakpoints.only("md"),{gridColumnStart:2,gridRowStart:2}),formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:120}})})),q=function(e){var t=z();return Object(r.jsx)(g.a,{className:t.root,children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Segmentation"}),Object(r.jsxs)(G.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(H.a,{children:"Model"}),Object(r.jsxs)(Y.a,{label:"Model",value:e.config.model,onChange:function(t){var n=t.target.value,r=e.config.inputResolution;"meet"===n&&"360p"===r?r="144p":"bodyPix"===n&&(r="360p");var a=e.config.pipeline;"bodyPix"===n&&"webgl2"===a&&(a="canvas2dCpu"),e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{model:n,inputResolution:r,pipeline:a}))},children:[Object(r.jsx)(V.a,{value:"meet",children:"Meet"}),Object(r.jsx)(V.a,{value:"bodyPix",children:"BodyPix"})]})]}),Object(r.jsxs)(G.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(H.a,{children:"Input resolution"}),Object(r.jsxs)(Y.a,{label:"Input resolution",value:e.config.inputResolution,onChange:function(t){e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{inputResolution:t.target.value}))},children:[Object(r.jsx)(V.a,{value:"360p",disabled:"meet"===e.config.model,children:"360p"}),Object(r.jsx)(V.a,{value:"144p",disabled:"bodyPix"===e.config.model,children:"144p"}),Object(r.jsx)(V.a,{value:"96p",disabled:"bodyPix"===e.config.model,children:"96p"})]})]}),Object(r.jsxs)(G.a,{className:t.formControl,variant:"outlined",children:[Object(r.jsx)(H.a,{children:"Pipeline"}),Object(r.jsxs)(Y.a,{label:"Pipeline",value:e.config.pipeline,onChange:function(t){e.onChange(Object(L.a)(Object(L.a)({},e.config),{},{pipeline:t.target.value}))},children:[Object(r.jsx)(V.a,{value:"webgl2",disabled:"bodyPix"===e.config.model,children:"WebGL 2 (WIP)"}),Object(r.jsx)(V.a,{value:"canvas2dCpu",children:"Canvas 2D + CPU"})]})]})]})})},J=n(290),K=n.n(J),Q=n(289),Z=n.n(Q);var $=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){var t=document.createElement("video");t.src=e,t.onloadedmetadata=function(){t.currentTime=t.duration/2},t.onseeked=Object(C.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,t.videoWidth,t.videoHeight);case 2:n=e.sent,a(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[r,function(){return URL.revokeObjectURL(r)}]};var ee=Object(f.a)((function(e){return Object(d.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})})),te=function(e){var t=ee(),n=$(e.videoUrl),a=Object(l.a)(n,2),o=a[0],i=a[1];return Object(r.jsx)(w,{thumbnailUrl:o,active:e.active,onClick:e.onClick,onLoad:i,children:Object(r.jsx)(Z.a,{className:t.icon})})},ne=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")})),re=["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")}));var ae=Object(f.a)((function(e){return Object(d.a)({root:{flex:1}})})),oe=function(e){var t=ae();return Object(r.jsx)(g.a,{className:t.root,children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Source"}),Object(r.jsx)(P,{active:"camera"===e.config.type,onClick:function(){return e.onChange({type:"camera"})},children:Object(r.jsx)(K.a,{})}),ne.map((function(t){return Object(r.jsx)(U,{imageUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)})),re.map((function(t){return Object(r.jsx)(te,{videoUrl:t,active:t===e.config.url,onClick:function(){return e.onChange({type:"video",url:t})}},t)}))]})})},ie=n(408),ce=n(350),ue={"360p":[640,360],"144p":[256,144],"96p":[160,96]};function se(e,t,n,r,a,o,i){var c=r.getContext("2d"),u=Object(l.a)(ue[n.inputResolution],2),s=u[0],f=u[1],d=s*f,g=new ImageData(s,f),b=document.createElement("canvas");b.width=s,b.height=f;var m,p=b.getContext("2d"),j=o._getInputMemoryOffset()/4,h=o._getOutputMemoryOffset()/4;function v(){return(v=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==t.type&&O(),i(),"none"===t.type){e.next=9;break}if("bodyPix"!==n.model){e.next=8;break}return e.next=6,E();case 6:e.next=9;break;case 8:R();case 9:i(),T();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){if(p.drawImage(e.htmlElement,0,0,e.width,e.height,0,0,s,f),"meet"===n.model)for(var t=p.getImageData(0,0,s,f),r=0;r<d;r++)o.HEAPF32[j+3*r]=t.data[4*r]/255,o.HEAPF32[j+3*r+1]=t.data[4*r+1]/255,o.HEAPF32[j+3*r+2]=t.data[4*r+2]/255}function E(){return _.apply(this,arguments)}function _(){return(_=Object(C.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.segmentPerson(b);case 2:for(t=e.sent,n=0;n<d;n++)g.data[4*n+3]=t.data[n]?255:0;p.putImageData(g,0,0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){o._runInference();for(var e=0;e<d;e++){var t=o.HEAPF32[h+2*e],n=o.HEAPF32[h+2*e+1],r=Math.max(t,n),a=Math.exp(t-r),i=Math.exp(n-r);g.data[4*e+3]=255*i/(a+i)}p.putImageData(g,0,0)}function T(){var n;c.globalCompositeOperation="copy",c.filter="none",(null===(n=m)||void 0===n?void 0:n.smoothSegmentationMask)&&("blur"===t.type?c.filter="blur(8px)":"image"===t.type&&(c.filter="blur(4px)")),"none"!==t.type&&(c.drawImage(b,0,0,s,f,0,0,e.width,e.height),c.globalCompositeOperation="source-in",c.filter="none"),c.drawImage(e.htmlElement,0,0),"blur"===t.type&&(c.globalCompositeOperation="destination-over",c.filter="blur(8px)",c.drawImage(e.htmlElement,0,0))}return{render:function(){return v.apply(this,arguments)},updatePostProcessingConfig:function(e){m=e},cleanUp:function(){}}}var le=n(94),fe=String.raw;function de(e,t,n,r,a){var o=function(e,t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error("Could not link WebGL program: ".concat(e.getProgramInfoLog(r)));return r}(e,t,n),i=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);var c=e.getAttribLocation(o,"a_texCoord");return e.enableVertexAttribArray(c),e.bindBuffer(e.ARRAY_BUFFER,a),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0),o}function ge(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error("Could not compile shader: ".concat(e.getShaderInfoLog(r)));return r}function be(e,t,n,r){var a=e.createTexture();return e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texStorage2D(e.TEXTURE_2D,1,t,n,r),a}function me(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_personMask;\n    uniform sampler2D u_background;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    vec3 screen(vec3 a, vec3 b) {\n      return 1.0 - (1.0 - a) * (1.0 - b);\n    }\n\n    vec3 linearDodge(vec3 a, vec3 b) {\n      return a + b;\n    }\n\n    void main() {\n      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;\n      vec3 backgroundColor = texture(u_background, v_texCoord).rgb;\n      float personMask = texture(u_personMask, v_texCoord).a;\n      float edge = smoothstep(1.0, 0.5, personMask);\n      personMask = smoothstep(0.5, 1.0, personMask);\n      vec3 lightWrap = backgroundColor * edge * 0.4;\n      // TODO Switch between screen and linearDodge based on user configuration\n      vec3 person = screen(frameColor, lightWrap);\n      outColor = vec4(person * personMask + backgroundColor * (1.0 - personMask), 1.0);\n    }\n  "]);return me=function(){return e},e}function pe(){var e=Object(le.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      // Flipping Y is required when rendering to canvas\n      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]);return pe=function(){return e},e}function je(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n    uniform sampler2D u_segmentationMask;\n    uniform vec2 u_texelSize;\n    uniform float u_step;\n    uniform float u_radius;\n    uniform float u_offset;\n    uniform float u_sigmaTexel;\n    uniform float u_sigmaColor;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    float gaussian(float x, float sigma) {\n      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);\n      return exp((x * x) * coeff);\n    }\n\n    void main() {\n      vec2 centerCoord = v_texCoord;\n      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;\n      float newVal = 0.0;\n\n      float spaceWeight = 0.0;\n      float colorWeight = 0.0;\n      float totalWeight = 0.0;\n\n      // Subsample kernel space.\n      for (float i = -u_radius + u_offset; i <= u_radius; i += u_step) {\n        for (float j = -u_radius + u_offset; j <= u_radius; j += u_step) {\n          vec2 shift = vec2(j, i) * u_texelSize;\n          vec2 coord = vec2(centerCoord + shift);\n          vec3 frameColor = texture(u_inputFrame, coord).rgb;\n          float outVal = texture(u_segmentationMask, coord).a;\n\n          spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);\n          colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);\n          totalWeight += spaceWeight * colorWeight;\n\n          newVal += spaceWeight * colorWeight * outVal;\n        }\n      }\n      newVal /= totalWeight;\n\n      outColor = vec4(vec3(0.0), newVal);\n    }\n  "]);return je=function(){return e},e}function he(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputFrame;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      outColor = texture(u_inputFrame, v_texCoord);\n    }\n  "]);return he=function(){return e},e}function ve(){var e=Object(le.a)(["#version 300 es\n\n    precision highp float;\n\n    uniform sampler2D u_inputSegmentation;\n\n    in vec2 v_texCoord;\n\n    out vec4 outColor;\n\n    void main() {\n      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;\n      float shift = max(segmentation.r, segmentation.g);\n      float backgroundExp = exp(segmentation.r - shift);\n      float personExp = exp(segmentation.g - shift);\n      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));\n    }\n  "]);return ve=function(){return e},e}function Oe(){var e=Object(le.a)(["#version 300 es\n\n    in vec2 a_position;\n    in vec2 a_texCoord;\n\n    out vec2 v_texCoord;\n\n    void main() {\n      gl_Position = vec4(a_position, 0.0, 1.0);\n      v_texCoord = a_texCoord;\n    }\n  "]);return Oe=function(){return e},e}function xe(e,t,n,r,a,o){var i=fe(Oe()),c=e.width,u=e.height,s=Object(l.a)(ue[n.inputResolution],2),f=s[0],d=s[1],g=r.getContext("webgl2");g.getExtension("EXT_color_buffer_float");var b=ge(g,g.VERTEX_SHADER,i),m=g.createVertexArray();g.bindVertexArray(m);var p=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,p),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW);var j=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,j),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),g.STATIC_DRAW);var h=be(g,g.RGBA8,c,u),v=be(g,g.RGBA8,f,d),O=be(g,g.RGBA8,c,u),E=function(e,t,n,r,a,o){var i=fe(he()),c=o._getInputMemoryOffset()/4,u=Object(l.a)(ue[a.inputResolution],2),s=u[0],f=u[1],d=s*f,g=ge(e,e.FRAGMENT_SHADER,i),b=de(e,t,g,n,r),m=e.getUniformLocation(b,"u_inputFrame"),p=be(e,e.RGBA32F,s,f),j=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,j),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,p,0);var h=new Float32Array(4*d);return e.useProgram(b),e.uniform1i(m,0),{render:function(){e.useProgram(b),e.bindFramebuffer(e.FRAMEBUFFER,j),e.viewport(0,0,s,f),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.readPixels(0,0,s,f,e.RGBA,e.FLOAT,h);for(var t=0;t<d;t++){var n=c+3*t,r=4*t;o.HEAPF32[n]=h[r],o.HEAPF32[n+1]=h[r+1],o.HEAPF32[n+2]=h[r+2]}},cleanUp:function(){e.deleteFramebuffer(j),e.deleteTexture(p),e.deleteProgram(b),e.deleteShader(g)}}}(g,b,p,j,n,a),_=function(e,t,n,r,a,o,i){var c=fe(ve()),u=o._getOutputMemoryOffset()/4,s=Object(l.a)(ue[a.inputResolution],2),f=s[0],d=s[1],g=ge(e,e.FRAGMENT_SHADER,c),b=de(e,t,g,n,r),m=e.getUniformLocation(b,"u_inputSegmentation"),p=be(e,e.RG32F,f,d),j=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,j),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.useProgram(b),e.uniform1i(m,1),{render:function(){e.useProgram(b),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,p),e.texSubImage2D(e.TEXTURE_2D,0,0,0,f,d,e.RG,e.FLOAT,o.HEAPF32,u),e.bindFramebuffer(e.FRAMEBUFFER,j),e.viewport(0,0,f,d),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteFramebuffer(j),e.deleteTexture(p),e.deleteProgram(b),e.deleteShader(g)}}}(g,b,p,j,n,a,v),R=function(e,t,n,r,a,o,i,c){var u=fe(je()),s=Object(l.a)(ue[o.inputResolution],2),f=s[0],d=s[1],g=c.width,b=c.height,m=1/g,p=1/b,j=ge(e,e.FRAGMENT_SHADER,u),h=de(e,t,j,n,r),v=e.getUniformLocation(h,"u_inputFrame"),O=e.getUniformLocation(h,"u_segmentationMask"),x=e.getUniformLocation(h,"u_texelSize"),C=e.getUniformLocation(h,"u_step"),E=e.getUniformLocation(h,"u_radius"),_=e.getUniformLocation(h,"u_offset"),R=e.getUniformLocation(h,"u_sigmaTexel"),T=e.getUniformLocation(h,"u_sigmaColor"),F=e.createFramebuffer();function y(t){t*=Math.max(g/f,b/d);var n=Math.max(1,.66*Math.sqrt(t)),r=t,a=n>1?.5*n:0,o=Math.max(m,p)*t;e.useProgram(h),e.uniform1f(C,n),e.uniform1f(E,r),e.uniform1f(_,a),e.uniform1f(R,o)}function k(t){e.useProgram(h),e.uniform1f(T,t)}return e.bindFramebuffer(e.FRAMEBUFFER,F),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.useProgram(h),e.uniform1i(v,0),e.uniform1i(O,1),e.uniform2f(x,m,p),y(0),k(0),{render:function(){e.useProgram(h),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a),e.bindFramebuffer(e.FRAMEBUFFER,F),e.viewport(0,0,g,b),e.drawArrays(e.TRIANGLE_STRIP,0,4)},updateSigmaSpace:y,updateSigmaColor:k,cleanUp:function(){e.deleteFramebuffer(F),e.deleteProgram(h),e.deleteShader(j)}}}(g,b,p,j,v,n,O,r),T=function(e,t,n,r,a,o){var i=fe(pe()),c=fe(me()),u=o.width,s=o.height,l=ge(e,e.VERTEX_SHADER,i),f=ge(e,e.FRAGMENT_SHADER,c),d=de(e,l,f,t,n),g=e.getUniformLocation(d,"u_inputFrame"),b=e.getUniformLocation(d,"u_personMask"),m=e.getUniformLocation(d,"u_background"),p=null;return(null===a||void 0===a?void 0:a.complete)?(p=be(e,e.RGBA8,a.naturalWidth,a.naturalHeight),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,a)):a&&(a.onload=function(){p=be(e,e.RGBA8,a.naturalWidth,a.naturalHeight),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,a)}),e.useProgram(d),e.uniform1i(g,0),e.uniform1i(b,1),{render:function(){e.useProgram(d),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,r),null!==p&&(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,p),e.uniform1i(m,2)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,u,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)},cleanUp:function(){e.deleteTexture(p),e.deleteProgram(d),e.deleteShader(f),e.deleteShader(l)}}}(g,p,j,O,t,r);function F(){return(F=Object(C.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,h),g.texSubImage2D(g.TEXTURE_2D,0,0,0,g.RGBA,g.UNSIGNED_BYTE,e.htmlElement),g.bindVertexArray(m),E.render(),o(),a._runInference(),o(),_.render(),R.render(),T.render();case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{render:function(){return F.apply(this,arguments)},updatePostProcessingConfig:function(e){R.updateSigmaSpace(e.jointBilateralFilter.sigmaSpace),R.updateSigmaColor(e.jointBilateralFilter.sigmaColor)},cleanUp:function(){T.cleanUp(),R.cleanUp(),_.cleanUp(),E.cleanUp(),g.deleteTexture(O),g.deleteTexture(v),g.deleteTexture(h),g.deleteBuffer(j),g.deleteBuffer(p),g.deleteVertexArray(m),g.deleteShader(b)}}}var Ce=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)([]),i=Object(l.a)(a,2),c=i[0],u=i[1],s=Object(o.useRef)(0),f=Object(o.useRef)(0),d=Object(o.useRef)([]),g=Object(o.useRef)(0),b=Object(o.useRef)(0);return{fps:n,durations:c,beginFrame:Object(o.useCallback)((function(){f.current=Date.now()}),[]),addFrameEvent:Object(o.useCallback)((function(){var e=Date.now();d.current[g.current]=e-f.current,f.current=e,g.current++}),[]),endFrame:Object(o.useCallback)((function(){var e=Date.now();d.current[g.current]=e-f.current,b.current++,e>=s.current+1e3&&(r(1e3*b.current/(e-s.current)),u(d.current),s.current=e,b.current=0),g.current=0}),[])}};var Ee=function(e,t,n,r,a){var i=Object(o.useState)(null),c=Object(l.a)(i,2),u=c[0],s=c[1],f=Object(o.useRef)(null),d=Object(o.useRef)(null),g=Ce(),b=g.fps,m=g.durations,p=g.beginFrame,j=g.addFrameEvent,h=g.endFrame;return Object(o.useEffect)((function(){var o,i=!0,c="webgl2"===n.pipeline?xe(e,f.current,n,d.current,a,j):se(e,t,n,d.current,r,a,j);function u(){return l.apply(this,arguments)}function l(){return(l=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return p(),e.next=5,c.render();case 5:h(),o=requestAnimationFrame(u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u(),console.log("Animation started:",e,t,n),s(c),function(){i=!1,cancelAnimationFrame(o),c.cleanUp(),console.log("Animation stopped:",e,t,n),s(null)}}),[e,t,n,r,a,s,p,j,h]),{pipeline:u,backgroundImageRef:f,canvasRef:d,fps:b,durations:m}};var _e=Object(f.a)((function(e){return Object(d.a)({root:{flex:1,position:"relative"},render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),Re=function(e){var t=_e(),n=Ee(e.sourcePlayback,e.backgroundConfig,e.segmentationConfig,e.bodyPix,e.tflite),a=n.pipeline,i=n.backgroundImageRef,c=n.canvasRef,u=n.fps,s=Object(l.a)(n.durations,3),f=s[0],d=s[1],g=s[2];Object(o.useEffect)((function(){a&&a.updatePostProcessingConfig(e.postProcessingConfig)}),[a,e.postProcessingConfig]);var b=["resizing ".concat(f,"ms"),"inference ".concat(d,"ms"),"post-processing ".concat(g,"ms")],p="".concat(Math.round(u)," fps (").concat(b.join(", "),")");return Object(r.jsxs)("div",{className:t.root,children:["image"===e.backgroundConfig.type&&Object(r.jsx)("img",{ref:i,className:t.render,src:e.backgroundConfig.url,alt:"",hidden:"webgl2"===e.segmentationConfig.pipeline}),Object(r.jsx)("canvas",{ref:c,className:t.render,width:e.sourcePlayback.width,height:e.sourcePlayback.height},e.segmentationConfig.pipeline),Object(r.jsx)(m.a,{className:t.stats,variant:"caption",children:p})]})},Te=n(400),Fe=n(291),ye=n.n(Fe);var ke=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},Object(s.a)(t,e.breakpoints.down("xs"),{width:0,overflow:"hidden"}),Object(s.a)(t,e.breakpoints.up("sm"),{flex:1,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider}),t),sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})})),Ae=function(e){var t=ke(),n=Object(o.useState)(),a=Object(l.a)(n,2),i=a[0],c=a[1],u=Object(o.useState)(!1),s=Object(l.a)(u,2),f=s[0],d=s[1],g=Object(o.useState)(!1),b=Object(l.a)(g,2),m=b[0],p=b[1],j=Object(o.useRef)(null);return Object(o.useEffect)((function(){c(void 0),d(!0),p(!1),setTimeout((function(){return c(e.sourceConfig.url)}))}),[e.sourceConfig]),Object(o.useEffect)((function(){function t(){return(t=Object(C.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:if(n=e.sent,!j.current){e.next=8;break}return j.current.srcObject=n,e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:d(!1),p(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}"camera"===e.sourceConfig.type?function(){t.apply(this,arguments)}():j.current&&(j.current.srcObject=null)}),[e.sourceConfig]),Object(r.jsxs)("div",{className:t.root,children:[f&&Object(r.jsx)(Te.a,{}),"image"===e.sourceConfig.type?Object(r.jsx)("img",{className:t.sourcePlayback,src:i,hidden:f,alt:"",onLoad:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.naturalWidth,height:n.naturalHeight}),d(!1)}}):m?Object(r.jsx)(ye.a,{fontSize:"large"}):Object(r.jsx)("video",{ref:j,className:t.sourcePlayback,src:i,hidden:f,autoPlay:!0,playsInline:!0,controls:!1,muted:!0,loop:!0,onLoadedData:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.videoWidth,height:n.videoHeight}),d(!1)}})]})};var we=Object(f.a)((function(e){var t,n=["".concat(e.spacing(52),"px"),"100vh - ".concat(e.spacing(2),"px")];return Object(d.a)({root:(t={minHeight:"calc(min(".concat(n.join(", "),"))"),display:"flex",overflow:"hidden"},Object(s.a)(t,e.breakpoints.up("md"),{gridColumnStart:1,gridColumnEnd:3}),Object(s.a)(t,e.breakpoints.up("lg"),{gridRowStart:1,gridRowEnd:3}),t),noOutput:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})})),Ue=function(e){var t=we(),n=Object(o.useState)(),a=Object(l.a)(n,2),i=a[0],c=a[1];return Object(o.useEffect)((function(){c(void 0)}),[e.sourceConfig]),Object(r.jsxs)(ce.a,{className:t.root,children:[Object(r.jsx)(Ae,{sourceConfig:e.sourceConfig,onLoad:c}),i&&e.bodyPix&&e.tflite?Object(r.jsx)(Re,{sourcePlayback:i,backgroundConfig:e.backgroundConfig,segmentationConfig:e.segmentationConfig,postProcessingConfig:e.postProcessingConfig,bodyPix:e.bodyPix,tflite:e.tflite}):Object(r.jsx)("div",{className:t.noOutput,children:Object(r.jsx)(ie.a,{className:t.avatar})})]})},Se=n(292),Pe=n(312);var De=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,Pe.a();case 3:return e.t0=r,e.next=6,Se.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Me=function(e,t){var n=Object(o.useState)(!1),r=Object(l.a)(n,2),a=r[0],i=r[1];return Object(o.useEffect)((function(){function n(){return(n=Object(C.a)(x.a.mark((function n(){var r,a,o,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&"meet"===t.model){n.next=2;break}return n.abrupt("return");case 2:return i(!1),r="144p"===t.inputResolution?"segm_full_v679":"segm_lite_v681",console.log("Loading meet model:",r),n.next=7,fetch("".concat("/virtual-background","/models/").concat(r,".tflite"));case 7:return a=n.sent,n.next=10,a.arrayBuffer();case 10:o=n.sent,console.log("Model buffer size:",o.byteLength),c=e._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",c),console.log("Loading model buffer..."),e.HEAPU8.set(new Uint8Array(o),c),console.log("_loadModel result:",e._loadModel(o.byteLength)),console.log("Input memory offset:",e._getInputMemoryOffset()),console.log("Input height:",e._getInputHeight()),console.log("Input width:",e._getInputWidth()),console.log("Input channels:",e._getInputChannelCount()),console.log("Output memory offset:",e._getOutputMemoryOffset()),console.log("Output height:",e._getOutputHeight()),console.log("Output width:",e._getOutputWidth()),console.log("Output channels:",e._getOutputChannelCount()),i(!0);case 26:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e,t]),a};var Be=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,createTFLiteModule();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var Le=Object(f.a)((function(e){var t;return Object(d.a)({root:(t={display:"grid"},Object(s.a)(t,e.breakpoints.up("xs"),{margin:e.spacing(1),gap:e.spacing(1),gridTemplateColumns:"1fr"}),Object(s.a)(t,e.breakpoints.up("md"),{margin:e.spacing(2),gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}),Object(s.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"repeat(3, 1fr)"}),t),resourceSelectionCards:{display:"flex",flexDirection:"column"}})})),Ie=function(){var e=De(),t=Be(),n=Le(),a=Object(o.useState)({type:"image",url:ne[0]}),i=Object(l.a)(a,2),c=i[0],u=i[1],s=Object(o.useState)({type:"image",url:D[0]}),f=Object(l.a)(s,2),d=f[0],g=f[1],b=Object(o.useState)({model:"meet",inputResolution:"96p",pipeline:"canvas2dCpu"}),m=Object(l.a)(b,2),p=m[0],j=m[1],h=Object(o.useState)({smoothSegmentationMask:!0,jointBilateralFilter:{sigmaSpace:1,sigmaColor:.5}}),v=Object(l.a)(h,2),O=v[0],x=v[1],C=Me(t,p);return Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsx)(Ue,{sourceConfig:c,backgroundConfig:d,segmentationConfig:p,postProcessingConfig:O,bodyPix:e,tflite:C||"bodyPix"===p.model?t:void 0}),Object(r.jsx)(oe,{config:c,onChange:u}),Object(r.jsx)(B,{config:d,onChange:g}),Object(r.jsx)(q,{config:p,onChange:j}),Object(r.jsx)(X,{config:O,pipeline:p.pipeline,onChange:x})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,409)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};u.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(Ie,{})]}),document.getElementById("root")),Ne()}},[[348,1,2]]]);
//# sourceMappingURL=main.4587db3f.chunk.js.map