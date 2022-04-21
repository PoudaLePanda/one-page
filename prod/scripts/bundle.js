"use strict";$(document).ready(function(){new Gradient({canvas:"#backgroung",colors:["#4baabf","#79f2e6","#d9d8d2","#73736f"]})});
"use strict";
"use strict";$(document).ready(function(){$(".bcg").imagesLoaded({background:!0}).progress(function(e,a){n=++s/t,TweenLite.to(o,.7,{progress:n,ease:Linear.easeNone})});var s=0,t=$(".bcg").length,n=0;var o=new TimelineMax({paused:!0,onUpdate:function(){n=Math.round(100*o.progress()),$(".percent").text(n+"%")},onComplete:function(){var e=new TimelineMax;return e.set($("progress"),{className:"+=animate__fadeOutDown"},"+=0.2").set($(".percent"),{className:"+=animate__fadeOutDown"},"+=0.2").set($(".loading"),{className:"+=animate__fadeOutDown"},"+=0.2").set($(".preloader-article"),{className:"+=animate__fadeOutDown"},"+=0.2").set($("#preloader"),{className:"+=animate__fadeOutDown"},"+=0.2").set($("body"),{className:"-=is-loading"}).set($("body"),{className:"+=is-loaded"}).set($("#header .title"),{className:"+=animate__zoomIn"},"+=0.2").set($("#header .subtitle"),{className:"+=animate__zoomIn"},"+=0.2"),e}});o.to($("progress"),1,{value:100,ease:Linear.easeNone})});
"use strict";
"use strict";jQuery(document).ready(function(i){var n=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}});new ScrollMagic.Scene({triggerElement:"#header",duration:i("#header").height(),offset:-56}).setClassToggle("#navbar","is-transparent").addTo(n),new ScrollMagic.Scene({triggerElement:"#header",duration:i("#header").height(),offset:-56}).setClassToggle("#navbar #navbarMyName","is-hidden").addTo(n),new ScrollMagic.Scene({triggerElement:"#timeline",duration:i("#timeline").height(),offset:-56}).setClassToggle("#timeline-anchor","is-active is-tab").setClassToggle("#navbar","is-primary").addTo(n),new ScrollMagic.Scene({triggerElement:"#skills",duration:i("#skills").height(),offset:-56}).setClassToggle("#skills-anchor","is-active is-tab").setClassToggle("#navbar","is-light").addTo(n);var e=Number.parseInt(i("#timeline").height());e+=-300,new ScrollMagic.Scene({triggerElement:"#timeline",duration:e}).setPin("#formation-experience").addTo(n);var t=i("#skills"),a=t.find(".column-one"),o=t.find(".column-two"),l=a.add(o),r=new TimelineMax;l.each(function(){var e=i(this).find(".item-logo"),n=e.length;e.each(function(e){var t=n-e,i=Math.round(10*(Math.random()/2+.5))/10*t;r.to(this,1,{className:"+=visible",ease:Power2.easeInOut},i)})}),new ScrollMagic.Scene({triggerElement:"#skills",duration:i("#skills").height(),offset:-56}).setTween(r).setPin(t[0]).addTo(n),n.scrollTo(function(e){TweenMax.to(window,.8,{scrollTo:{y:e,autoKill:!0},ease:Cubic.easeInOut})}),i(document).on("click","a[href^=\\#]",function(e){var t=i(this).attr("href");0<i(t).length&&(e.preventDefault(),n.scrollTo(t),window.history&&window.history.pushState&&history.pushState("",document.title,t))})});
"use strict";jQuery(document).ready(function(t){var e=new ScrollMagic.Controller;t(".fade").each(function(){t(this).addClass("out"),new ScrollMagic.Scene({triggerElement:this,triggerHook:.75}).on("enter",function(e){t(e.target.triggerElement()).removeClass("out")}).on("leave",function(e){t(e.target.triggerElement()).addClass("out")}).addTo(e)}),t(".enter-left").each(function(){t(this).addClass("out"),new ScrollMagic.Scene({triggerElement:this,triggerHook:.7}).on("enter",function(e){t(e.target.triggerElement()).removeClass("out")}).on("leave",function(e){t(e.target.triggerElement()).addClass("out")}).addTo(e)}),t(".enter-right").each(function(){t(this).addClass("out"),new ScrollMagic.Scene({triggerElement:this,triggerHook:.7}).on("enter",function(e){t(e.target.triggerElement()).removeClass("out")}).on("leave",function(e){t(e.target.triggerElement()).addClass("out")}).addTo(e)})});
"use strict";!function(){function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function r(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,r),a(this,"gl",void 0),a(this,"type",void 0),a(this,"value",void 0),a(this,"typeFn",void 0),a(this,"_typeMap",{float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}),Object.assign(this,i),this.gl=e,this.type=t,this.value=n,this.typeFn=this._typeMap[this.type]||this._typeMap.float,this.update()}var e;return t((e=r).prototype,[{key:"update",value:function(e){if(this.value){var t=this.value,n=null;0===this.typeFn.indexOf("Matrix")&&(t=this.transpose,n=this.value),this.gl.getContext()["uniform".concat(this.typeFn)](e,t,n)}}},{key:"getDeclaration",value:function(e,a,t){if(this.excludeFrom!==a){if("array"===this.type)return"".concat(this.value[0].getDeclaration(e,a,this.value.length),"\nconst int ").concat(e,"_length = ").concat(this.value.length,";");if("struct"!==this.type)return"uniform ".concat(this.type," ").concat(e).concat(0<t?"[".concat(t,"]"):"",";");var n=e.replace("u_","");n=n.charAt(0).toUpperCase()+n.slice(1);var i=Object.entries(this.value).map(function(e){var t,n,i=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[0];return i[1].getDeclaration(r,a).replace(/^uniform/,"")}).join("");return"uniform struct ".concat(n," {\n    ").concat(i,"\n} ").concat(e).concat(0<t?"[".concat(t,"]"):"",";")}}}]),Object.defineProperty(e,"prototype",{writable:!1}),r}();function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function r(e,t,n){!function(e,t){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),l(this,"_class",r),l(this,"_canvas",void 0),l(this,"_context",void 0),l(this,"commonUniforms",{}),l(this,"meshes",[]),this.setCanvas(e);var i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];this.commonUniforms={projectionMatrix:new s(this,"mat4",i),modelViewMatrix:new s(this,"mat4",i),resolution:new s(this,"vec2",[1,1]),aspectRatio:new s(this,"float",1)},this.setSize(t,n)}var e;return n((e=r).prototype,[{key:"setCanvas",value:function(e){this._canvas=e,this._context=e.getContext("webgl",{antialias:!0})}},{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._context}},{key:"setSize",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:640,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:480;this.getCanvas().width=e,this.getCanvas().height=t,this.getContext().viewport(0,0,e,t),this.commonUniforms.resolution.value=[e,t],this.commonUniforms.aspectRatio.value=e/t}},{key:"setOrthographicCamera",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:-2e3,r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2e3;this.commonUniforms.projectionMatrix.value=[2/this.getCanvas().width,0,0,0,0,2/this.getCanvas().height,0,0,0,0,2/(i-r),0,e,t,n,1]}},{key:"render",value:function(){this.getContext().clearColor(0,0,0,0),this.getContext().clearDepth(1),this.meshes.forEach(function(e){e.draw()})}}]),Object.defineProperty(e,"prototype",{writable:!1}),r}();function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function s(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,s),h(this,"gl",void 0),h(this,"uniformInstances",[]),Object.assign(this,r),this.gl=e,this.uniforms=i;var a=this.gl.getContext(),o="\n            precision highp float;\n        ";this.vertexSource="\n            ".concat(o,"\n            attribute vec4 position;\n            attribute vec2 uv;\n            attribute vec2 uvNorm;\n            ").concat(this._getUniformVariableDeclarations(this.gl.commonUniforms,"vertex"),"\n            ").concat(this._getUniformVariableDeclarations(i,"vertex"),"\n            ").concat(t,"\n        "),this.Source="\n            ".concat(o,"\n            ").concat(this._getUniformVariableDeclarations(this.gl.commonUniforms,"fragment"),"\n            ").concat(this._getUniformVariableDeclarations(i,"fragment"),"\n            ").concat(n,"\n        "),this.vertexShader=this._getShaderByType(a.VERTEX_SHADER,this.vertexSource),this.fragmentShader=this._getShaderByType(a.FRAGMENT_SHADER,this.Source),this.program=a.createProgram(),a.attachShader(this.program,this.vertexShader),a.attachShader(this.program,this.fragmentShader),a.linkProgram(this.program),a.getProgramParameter(this.program,a.LINK_STATUS)||console.error(a.getProgramInfoLog(this.program)),a.useProgram(this.program),this.attachUniforms(void 0,this.gl.commonUniforms),this.attachUniforms(void 0,this.uniforms)}var e;return u((e=s).prototype,[{key:"_getShaderByType",value:function(e,t){var n=this.gl.getContext(),i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),n.getShaderParameter(i,n.COMPILE_STATUS)||console.error(n.getShaderInfoLog(i)),i}},{key:"_getUniformVariableDeclarations",value:function(e,i){return Object.entries(e).map(function(e){var t=c(e,2),n=t[0];return t[1].getDeclaration(n,i)}).join("\n")}},{key:"attachUniforms",value:function(r,e){var a=this;r?"array"===e.type?e.value.forEach(function(e,t){a.attachUniforms("".concat(r,"[").concat(t,"]"),e)}):"struct"===e.type?Object.entries(e.value).forEach(function(e){var t=c(e,2),n=t[0],i=t[1];a.attachUniforms("".concat(r,".").concat(n),i)}):this.uniformInstances.push({uniform:e,location:this.gl.getContext().getUniformLocation(this.program,r)}):Object.entries(e).forEach(function(e){var t=c(e,2),n=t[0],i=t[1];a.attachUniforms(n,i)})}}]),Object.defineProperty(e,"prototype",{writable:!1}),s}();function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function r(e,t,n){var o=this,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,r),f(this,"gl",void 0),f(this,"wireframe",!1),f(this,"attributeInstances",[]),Object.assign(this,i),this.geometry=t,this.material=n,this.gl=e,Object.entries(this.geometry.attributes).forEach(function(e){var t,n,i=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[0],a=i[1];o.attributeInstances.push({attribute:a,location:a.attach(r,o.material.program)})}),this.gl.meshes.push(this)}var e;return d((e=r).prototype,[{key:"draw",value:function(){var e=this.gl.getContext();e.useProgram(this.material.program),this.material.uniformInstances.forEach(function(e){var t=e.uniform,n=e.location;t.update(n)}),this.attributeInstances.forEach(function(e){var t=e.attribute,n=e.location;t.use(n)});var t=this.wireframe?e.LINES:e.TRIANGLES;e.drawElements(t,this.geometry.attributes.index.values.length,e.UNSIGNED_SHORT,0)}},{key:"remove",value:function(){var t=this;this.gl.meshes=this.gl.meshes.filter(function(e){return e!=t})}}]),Object.defineProperty(e,"prototype",{writable:!1}),r}();function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),y(this,"gl",void 0),y(this,"type",void 0),y(this,"buffer",void 0),y(this,"normalized",!1),Object.assign(this,t),this.gl=e,this.type=this.gl.getContext().FLOAT,this.buffer=this.gl.getContext().createBuffer(),this.update()}var e;return m((e=n).prototype,[{key:"update",value:function(){if(this.values){var e=this.gl.getContext();e.bindBuffer(this.target,this.buffer),e.bufferData(this.target,this.values,e.STATIC_DRAW)}}},{key:"attach",value:function(e,t){var n=this.gl.getContext(),i=n.getAttribLocation(t,e);return this.target===n.ARRAY_BUFFER&&(n.enableVertexAttribArray(i),n.vertexAttribPointer(i,this.size,this.type,this.normalized,0,0)),i}},{key:"use",value:function(e){var t=this.gl.getContext();t.bindBuffer(this.target,this.buffer),this.target===t.ARRAY_BUFFER&&(t.enableVertexAttribArray(e),t.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0))}}]),Object.defineProperty(e,"prototype",{writable:!1}),n}();function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(){function l(e,t,n,i,r,a){var o=6<arguments.length&&void 0!==arguments[6]?arguments[6]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,l),w(this,"gl",void 0),w(this,"attributes",void 0),Object.assign(this,o),this.gl=e;var s=this.gl.getContext();s.createBuffer(),this.attributes={position:new p(this.gl,{target:s.ARRAY_BUFFER,size:3}),uv:new p(this.gl,{target:s.ARRAY_BUFFER,size:2}),uvNorm:new p(this.gl,{target:s.ARRAY_BUFFER,size:2}),index:new p(this.gl,{target:s.ELEMENT_ARRAY_BUFFER,size:3,type:s.UNSIGNED_SHORT})},this.setTopology(i,r),this.setSize(t,n,a)}var e;return x((e=l).prototype,[{key:"setTopology",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;this.xSegCount=e,this.ySegCount=t,this.vertexCount=(this.xSegCount+1)*(this.ySegCount+1),this.quadCount=this.xSegCount*this.ySegCount*2,this.attributes.uv.values=new Float32Array(2*this.vertexCount),this.attributes.uvNorm.values=new Float32Array(2*this.vertexCount),this.attributes.index.values=new Uint16Array(3*this.quadCount);for(var n=0;n<=this.ySegCount;n++)for(var i=0;i<=this.xSegCount;i++){var r=n*(this.xSegCount+1)+i;if(this.attributes.uv.values[2*r]=i/this.xSegCount,this.attributes.uv.values[2*r+1]=1-n/this.ySegCount,this.attributes.uvNorm.values[2*r]=i/this.xSegCount*2-1,this.attributes.uvNorm.values[2*r+1]=1-n/this.ySegCount*2,i<this.xSegCount&&n<this.ySegCount){var a=n*this.xSegCount+i;this.attributes.index.values[6*a]=r,this.attributes.index.values[6*a+1]=r+1+this.xSegCount,this.attributes.index.values[6*a+2]=r+1,this.attributes.index.values[6*a+3]=r+1,this.attributes.index.values[6*a+4]=r+1+this.xSegCount,this.attributes.index.values[6*a+5]=r+2+this.xSegCount}}this.attributes.uv.update(),this.attributes.uvNorm.update(),this.attributes.index.update()}},{key:"setSize",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"xz";this.width=e,this.height=t,this.orientation=n,this.attributes.position.values&&this.attributes.position.values.length===3*this.vertexCount||(this.attributes.position.values=new Float32Array(3*this.vertexCount));for(var i=e/-2,r=t/-2,a=e/this.xSegCount,o=t/this.ySegCount,s=0;s<=this.ySegCount;s++)for(var l=r+s*o,c=0;c<=this.xSegCount;c++){var u=i+c*a,h=s*(this.xSegCount+1)+c;this.attributes.position.values[3*h+"xyz".indexOf(n[0])]=u,this.attributes.position.values[3*h+"xyz".indexOf(n[1])]=-l}this.attributes.position.update()}}]),Object.defineProperty(e,"prototype",{writable:!1}),l}();function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function n(e){if(function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),L(this,"_class",n),L(this,"vertexShader",null),L(this,"uniforms",null),L(this,"time",1253106),L(this,"mesh",null),L(this,"material",null),L(this,"geometry",null),L(this,"scrollingTimeout",null),L(this,"scrollingRefreshDelay",200),L(this,"scrollObserver",null),L(this,"width",null),L(this,"minWidth",1111),L(this,"height",600),L(this,"xSegCount",null),L(this,"ySegCount",null),L(this,"freqX",14e-5),L(this,"freqY",29e-5),L(this,"freqDelta",1e-5),L(this,"activeColors",[1,1,1,1]),L(this,"shaderFiles",{vertex:"varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n",noise:"//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n",blend:"//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n    return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n    return base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n    return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n    return blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n    return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n    return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n    return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n    return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n    return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n    return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n    return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n    return max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n    return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n    // Note : Same implementation as BlendSubtractf\n    return max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n    // Note : Same implementation as BlendSubtract\n    return max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n    // Note : Same implementation as BlendAddf\n    return min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n    // Note : Same implementation as BlendAdd\n    return min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n    return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n    return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n",fragment:"varying vec3 v_color;\n\nvoid main() {\n    vec3 color = v_color;\n    if (u_darken_top == 1.0) {\n        vec2 st = gl_FragCoord.xy/resolution.xy;\n        color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n    }\n    gl_FragColor = vec4(color, 1.0);\n}\n"}),L(this,"options",{}),L(this,"_flags",{playing:!0}),L(this,"_canvas",void 0),L(this,"_context",void 0),L(this,"_minigl",void 0),this.options=e,this.setCanvas(this.findCanvas(this.getOption("canvas"))),!this.getCanvas())throw"Missing Canvas. Pass the canvas to the Gradient constructor.";this._minigl=new i(this.getCanvas(),this.getCanvas().offsetWidth,this.getCanvas().offsetHeight),this.init()}var e;return S((e=n).prototype,[{key:"getOption",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;return void 0===t&&e in this._class.defaultOptions&&(t=this._class.defaultOptions[e]),e in this.options?this.options[e]:t}},{key:"findCanvas",value:function(e){var t="string"==typeof e?document.querySelector(e):e;return t instanceof HTMLCanvasElement?t:null}},{key:"setCanvas",value:function(e){e?(this._canvas=e,this._context=e.getContext("webgl",{antialias:!0})):(this._canvas=null,this._context=null)}},{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._context}},{key:"setFlag",value:function(e,t){return this._flags[e]=t}},{key:"getFlag",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;return this._flags[e]||t}},{key:"handleScroll",value:function(){clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.getFlag("playing")&&(this.setFlag("isScrolling",!0),this.pause())}},{key:"handleScrollEnd",value:function(){this.setFlag("isScrolling",!1),this.getFlag("isIntersecting")&&this.play()}},{key:"resize",value:function(){var e,t,n=(e=this.getOption("density"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],r=n[1];this.width=window.innerWidth,this._minigl.setSize(this.width,this.height),this._minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*i),this.ySegCount=Math.ceil(this.height*r),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}},{key:"animate",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=!!window.document.hidden||!this.getFlag("playing")||parseInt(e,10)%2==0,n=this.getFlag("lastFrame",0);if(t||(this.time+=Math.min(e-n,1e3/15),n=this.setFlag("lastFrame",e),this.mesh.material.uniforms.u_time.value=this.time,this._minigl.render()),0!==n&&this.getOption("static"))return this._minigl.render(),this.disconnect();this.getFlag("playing")&&requestAnimationFrame(this.animate.bind(this))}},{key:"pause",value:function(){this.setFlag("playing",!1)}},{key:"play",value:function(){requestAnimationFrame(this.animate.bind(this)),this.setFlag("playing",!0)}},{key:"disconnect",value:function(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}},{key:"initMaterial",value:function(){var e=this.getOption("colors").map(function(e){if(4===e.length){var t=e.substr(1).split("").map(function(e){return e+e}).join("");e="#".concat(t)}return e&&"0x".concat(e.substr(1))}).filter(Boolean).map(this.normalizeColor);this.uniforms={u_time:new s(this._minigl,"float",0),u_shadow_power:new s(this._minigl,"float",10),u_darken_top:new s(this._minigl,"float",this.getCanvas().dataset.jsDarkenTop?1:0),u_active_colors:new s(this._minigl,"vec4",this.activeColors),u_global:new s(this._minigl,"struct",{noiseFreq:new s(this._minigl,"vec2",[this.freqX,this.freqY]),noiseSpeed:new s(this._minigl,"float",5e-6)}),u_vertDeform:new s(this._minigl,"struct",{incline:new s(this._minigl,"float",Math.sin(this.getOption("angle"))/Math.cos(this.getOption("angle"))),offsetTop:new s(this._minigl,"float",-.5),offsetBottom:new s(this._minigl,"float",-.5),noiseFreq:new s(this._minigl,"vec2",[3,4]),noiseAmp:new s(this._minigl,"float",this.getOption("amplitude")),noiseSpeed:new s(this._minigl,"float",10),noiseFlow:new s(this._minigl,"float",3),noiseSeed:new s(this._minigl,"float",this.seed)},{excludeFrom:"fragment"}),u_baseColor:new s(this._minigl,"vec3",e[0],{excludeFrom:"fragment"}),u_waveLayers:new s(this._minigl,"array",[],{excludeFrom:"fragment"})};for(var t=1;t<e.length;t+=1){var n=new s(this._minigl,"struct",{color:new s(this._minigl,"vec3",e[t]),noiseFreq:new s(this._minigl,"vec2",[2+t/e.length,3+t/e.length]),noiseSpeed:new s(this._minigl,"float",11+.3*t),noiseFlow:new s(this._minigl,"float",6.5+.3*t),noiseSeed:new s(this._minigl,"float",this.seed+10*t),noiseFloor:new s(this._minigl,"float",.1),noiseCeil:new s(this._minigl,"float",.63+.07*t)});this.uniforms.u_waveLayers.value.push(n)}return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join("\n\n"),new v(this._minigl,this.vertexShader,this.shaderFiles.fragment,this.uniforms)}},{key:"initMesh",value:function(){this.material=this.initMaterial(),this.geometry=new C(this._minigl),this.mesh=new g(this._minigl,this.geometry,this.material),this.mesh.wireframe=this.getOption("wireframe")}},{key:"updateFrequency",value:function(e){this.freqX+=e,this.freqY+=e}},{key:"toggleColor",value:function(e){this.activeColors[e]=0===this.activeColors[e]?1:0}},{key:"init",value:function(){var e=this.getOption("loadedClass");e&&this.getCanvas().classList.add(e),this.initMesh(),this.resize(),requestAnimationFrame(this.animate.bind(this)),window.addEventListener("resize",this.resize)}},{key:"normalizeColor",value:function(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}}]),Object.defineProperty(e,"prototype",{writable:!1}),n}();L(O,"defaultOptions",{canvas:null,colors:["#f00","#0f0","#00f"],wireframe:!1,density:[.06,.16],angle:0,amplitude:320,static:!1,loadedClass:"is-loaded",zoom:1,speed:5,rotation:0}),window.Gradient=O,window.jQuery&&(jQuery.fn.gradient=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.canvas=this.get(0),this._gradient=new O(e),this})}();
"use strict";var app=document.getElementById("typewriter"),typewriter=new Typewriter(app,{loop:!1,delay:30});typewriter.pauseFor(2e3).typeString('Hello world ! Je suis <strong><span style="color: #79f2e6;">Web Designer</span></strong>').pauseFor(300).deleteChars(12).typeString('<strong><span style="color: #79f2e6;">Front-end Developer</span></strong>').pauseFor(1e3).start();