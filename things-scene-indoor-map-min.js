!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,c=u.Rect,f={props:[{type:"number",label:"zPos",name:"zPos",property:"zPos"},{type:"string",label:"uuid",name:"uuid",property:"uuid"}]},s=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"_post_draw",value:function(e){this.model.fillStyle={type:"pattern",fitPattern:!0,image:"data:image/png;base64,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"},this.drawFill(e)}},{key:"controls",get:function(){}}],[{key:"nature",get:function(){return f}}]),t}(c);n["default"]=s,l.register("beacon",s)},{}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n,r){for(var o=Math.cos(r),i=Math.sin(r),a=Math.cos(t),u=Math.sin(t),l=Math.cos(n),c=Math.sin(n),f=o*a,s=o*u*c-i*l,p=o*u*l+i*c,y=i*a,d=i*u*c+o*l,b=i*u*l-o*c,h=-u,g=a*c,m=a*l,v=[],O=0;O<e.length;O++){var x=e[O].x,k=e[O].y,j=e[O].z,w={};w.x=f*x+s*k+p*j,w.y=y*x+d*k+b*j,w.z=h*x+g*k+m*j,w.x*=100,w.y*=100,w.z*=100,v.push(w)}return v}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=scene,c=l.Component,f=l.Rect,s={props:[]},p=[{x:0,y:0,z:0},{x:1,y:.8,z:.5},{x:1,y:.8,z:-.5},{x:1,y:-.8,z:-.5},{x:1,y:-.8,z:.5},{x:1,y:0,z:0}],y=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"_draw",value:function(e){var t=this.transformed;this.transformed[5].y>0?(this.__drawLines(e,t),this.__drawRect(e,t)):(this.__drawRect(e,t),this.__drawLines(e,t))}},{key:"__drawLines",value:function(e,t){var n=this.center;e.beginPath(),e.moveTo(n.x+t[0].x,n.y+t[0].z),e.lineTo(n.x+t[1].x,n.y+t[1].z),e.moveTo(n.x+t[0].x,n.y+t[0].z),e.lineTo(n.x+t[2].x,n.y+t[2].z),e.moveTo(n.x+t[0].x,n.y+t[0].z),e.lineTo(n.x+t[3].x,n.y+t[3].z),e.moveTo(n.x+t[0].x,n.y+t[0].z),e.lineTo(n.x+t[4].x,n.y+t[4].z),e.strokeStyle=this.model.strokeStyle,e.stroke(),e.closePath()}},{key:"__drawRect",value:function(e,t){var n=this.center;e.beginPath(),e.moveTo(n.x+t[1].x,n.y+t[1].z),e.lineTo(n.x+t[2].x,n.y+t[2].z),e.lineTo(n.x+t[3].x,n.y+t[3].z),e.lineTo(n.x+t[4].x,n.y+t[4].z),e.lineTo(n.x+t[1].x,n.y+t[1].z),e.fillStyle=this.model.fillStyle,e.strokeStyle=this.model.strokeStyle,e.fill(),e.stroke(),e.closePath()}},{key:"transformed",get:function(){var e=this.model,t=e.yaw,n=void 0===t?0:t,r=e.pitch,o=void 0===r?0:r,i=e.roll,u=void 0===i?0:i;return a(p,n,u,o)}}],[{key:"nature",get:function(){return s}}]),t}(f);n["default"]=y,c.register("camera",y)},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,c=u.Container,f=(u.CardLayout,u.Model),s=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"drawText",value:function(){}},{key:"drawLocationMarkers",value:function(e){for(var t in e){var n=e[t],r=n.props||{},o=(new Date).getTime(),i=o-n.lastUpdateTime;if(i<n.updateInterval){var a=this.findById(t);if(a){a.set(r);for(var u in r)a[u]=r[u]}else{var l=Object.assign({type:n.type||"camera",id:t,fillStyle:"red",left:r.center.x-.5*r.width,top:r.center.y-.5*r.height,cx:r.center.x,cy:r.center.y},r),c=f.compile(l);this.addComponent(c)}}else{var s=this.findById(t);this.removeComponent(s)}this.invalidate()}}},{key:"mutable",get:function(){return!1}},{key:"resizable",get:function(){return!1}},{key:"rotatable",get:function(){return!1}}]),t}(c);n["default"]=s,l.register("floor",s)},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./floor");Object.defineProperty(n,"Floor",{enumerable:!0,get:function(){return r(o)["default"]}});var i=e("./indoor-map");Object.defineProperty(n,"IndoorMap",{enumerable:!0,get:function(){return r(i)["default"]}});var a=e("./table-layout");Object.defineProperty(n,"TableLayout",{enumerable:!0,get:function(){return r(a)["default"]}});var u=e("./rack");Object.defineProperty(n,"Rack",{enumerable:!0,get:function(){return r(u)["default"]}});var l=e("./beacon");Object.defineProperty(n,"Beacon",{enumerable:!0,get:function(){return r(l)["default"]}});var c=e("./camera");Object.defineProperty(n,"Camera",{enumerable:!0,get:function(){return r(c)["default"]}})},{"./beacon":1,"./camera":2,"./floor":3,"./indoor-map":5,"./rack":6,"./table-layout":7}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n,r){return"rgba("+e+", "+t+", "+n+", "+r+")"}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function O(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:O(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0===i?void 0:i.call(n)},f=e("./floor"),s=(r(f),scene),p=s.Component,y=s.Container,d=s.CardLayout,b=s.Model,h=25,g=25,m={props:[{type:"number",label:"Active Floor",name:"activeIndex",property:"activeIndex"}]},v=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"_post_draw",value:function(e){c(Object.getPrototypeOf(t.prototype),"_post_draw",this).call(this,e);{var n=this.model,r=n.left,o=n.top,i=n.width;n.fillStyle}e.beginPath(),e.rect(r+i,o,h,g);var a=235;e.fillStyle=u(a,a,a,1),e.fill(),e.closePath()}},{key:"contains",value:function(e,n){if(c(Object.getPrototypeOf(t.prototype),"contains",this).call(this,e,n))return!0;var r=this.bounds,o=r.left,i=r.top,a=r.width,u=o+a,l=g;return e<Math.max(u+h,u)&&e>Math.min(u+h,u)&&n<Math.max(i+l,i)&&n>Math.min(i+l,i)}},{key:"addFloor",value:function(){var e=b.compile({type:"floor",fillStyle:"gray",top:0,left:0,width:100,height:100});this.addComponent(e)}},{key:"drawLocationMarkers",value:function(e){var t=this.activeFloor;t.drawLocationMarkers(e)}},{key:"onchange",value:function(){}},{key:"layout",get:function(){return d}},{key:"activeIndex",set:function(e){var t=Object.assign({},this.layoutConfig);t.activeIndex=e,this.set("layoutConfig",t)}},{key:"activeFloor",get:function(){return this.components[this.get("layoutConfig").activeIndex]}}],[{key:"nature",get:function(){return m}}]),t}(y);n["default"]=v,p.register("indoor-map",v)},{"./floor":3}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,c=u.Rect,f={props:[{type:"number",label:"shelves",name:"shelves",property:"shelves"},{type:"number",label:"depth",name:"depth",property:"depth"},{type:"string",label:"location",name:"location",property:"location"}]},s=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"_draw",value:function(e){var t=this.model,n=t.left,r=t.top,o=t.width,i=t.height,a=t.strokeStyle,u=t.lineWidth,l=t.fillStyle,c=t.alpha,f=void 0===c?1:c;e.beginPath(),e.rect(n,r,o,i),e.strokeStyle=a,e.lineWidth=u,e.globalAlpha=.4*f,e.stroke(),e.beginPath(),e.rect(n+.15*o,r+.15*i,.7*o,.7*i),e.fillStyle=l,e.globalAlpha=.5*f,e.fill(),e.beginPath(),e.moveTo(n,r),e.lineTo(n+o,r+i),e.moveTo(n,r+i),e.lineTo(n+o,r),e.strokeStyle=a,e.lineWidth=u,e.globalAlpha=.4*f,e.stroke()}},{key:"controls",get:function(){}}],[{key:"nature",get:function(){return f}}]),t}(c);n["default"]=s,l.register("rack",s)},{}],7:[function(e,t,n){"use strict";function r(e){if(e||(e={top:0,right:0,bottom:0,left:0}),"number"==typeof e&&(e=String(e)),"string"==typeof e){var t=e.split(" ");1===t.length?e={top:Number(t[0]),right:Number(t[0]),bottom:Number(t[0]),left:Number(t[0])}:2===t.length?e={top:Number(t[0]),right:Number(t[1]),bottom:Number(t[0]),left:Number(t[1])}:4===t.length&&(e={top:Number(t[0]),right:Number(t[1]),bottom:Number(t[2]),left:Number(t[3])})}return e}Object.defineProperty(n,"__esModule",{value:!0});var o=scene,i=o.Layout,a={reflow:function(e){var t=e.get("layoutConfig"),n=t&&t.columns||3,o=Math.ceil(e.components.length/n),i=r(e.get("padding")),a=(e.bounds.width-(i.left+i.right))/n,u=(e.bounds.height-(i.top+i.bottom))/o,l=0,c=0;e.components.forEach(function(e,t){l=t%n,c=Math.floor(t/n),e.bounds={left:i.left+l*a,top:i.top+c*u,width:a,height:u},e.set("rotation",0)})},capturables:function(e){return e.components},drawables:function(e){return e.components},isStuck:function(){return!0}};i.register("table",a),n["default"]=a},{}]},{},[4]);