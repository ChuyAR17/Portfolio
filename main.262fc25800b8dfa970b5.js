(()=>{var e={757:(e,t,r)=>{e.exports=r(666)},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=p;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return F()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",g={};function v(){}function m(){}function w(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(z([])));x&&x!==r&&n.call(x,a)&&(y=x);var k=w.prototype=v.prototype=Object.create(y);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,a,i,c){var s=u(e[o],e,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function z(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:t,done:!0}}return m.prototype=k.constructor=w,w.constructor=m,m.displayName=s(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),s(k,c,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=z,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},937:(e,t,r)=>{"use strict";e.exports=r.p+"assets/images/210d173992e39d85ad55.png"},255:(e,t,r)=>{"use strict";e.exports=r.p+"assets/images/139c776ebb23872457ed.png"},566:(e,t,r)=>{"use strict";e.exports=r.p+"assets/images/1dafbe174bcac6bfbee7.png"},772:(e,t,r)=>{"use strict";e.exports=r.p+"assets/images/a9e132c0396da18f501e.png"},291:(e,t,r)=>{"use strict";e.exports=r.p+"assets/images/5a4f6ea8e52553197d0c.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";function e(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,s,"next",t)}function s(t){e(i,o,a,c,s,"throw",t)}c(void 0)}))}}var n=r(757),o=r.n(n),a=r(291),i=r(772),c=r(255),s=r(937),l=r(566);const u=function(){var e=t(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t='\n    <header class="header-container">\n        <div class="menu-icon"></div>\n        <div class="logo-icon" title="Jesus Ramirez"></div>\n    </header>\n    <main class="main-container">\n    <div class="side-containers icons-container">\n        <a class="icon icon-github" href="https://github.com/ChuyAR17" target="_blank" rel="noopener noreferrer"></a>\n        <a class="icon icon-linkedin" href="https://www.linkedin.com/in/jesusramirezr17/" target="_blank" rel="noopener noreferrer"></a>\n        <a class="icon icon-twitter" href="https://twitter.com/JRamirezR17" target="_blank" rel="noopener noreferrer"></a>\n        <a class="icon icon-instagram" href="https://www.instagram.com/j_ramirezr17/" target="_blank" rel="noopener noreferrer"></a>\n    </div>\n    <div class="side-containers email-container">\n        <a href="mailto:jar170396@gmail.com">jar170395@gmail.com</a>\n    </div>\n    <section class="greeting-card section">\n        <h1>Hello!</h1>\n        <h4>I\'m Jesús a Front-end Engineer.</h4>\n        <a class="button-mail" href="mailto:jar170396@gmail.com">Let\'s work together</a>\n    </section>\n    <section class="section">\n        <h3 class="title">About me</h3>\n        <p class="subtitle">Who I am.</p>\n        <p class="about-me">I\'m a Front-end Engineer passionate for build custom and person-oriented software and apps, always learning how to improve the performance and UX of the apps I\'ve done.</p>\n    </section>\n    <section class="experience-container section">\n        <h3 class="title">Experience</h3>\n        <p class="subtitle">Where I\'ve worked.</p>\n        <div class="experience-container--card">\n            <h4>Software Developer</h4>\n            <p><a href="https://www.caffenio.com" target="_blank" rel="noopener noreferrer">@ CAFFENIO</a></p>\n            <p><span>2019 - Current Job</span></p>\n        </div>\n        <div class="experience-container--card">\n            <h4>Front-end Engineer</h4>\n            <p><a href="#">@ PRAGMA</a></p>\n            <p><span>2021 - Part Time</span></p>\n        </div>\n    </section>\n    <section class="section">\n        <h3 class="title">Proyects</h3>\n        <p class="subtitle">What I\'ve done.</p>\n        <div class="proyect-card">\n            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">\n            <img src="'.concat(a,'" alt="Proyect image"></a>\n            <h4>Tournament Manager</h4>\n            <p>Organize and manage sport tournamenst.</p>\n            <div class="proyect-card--links">\n                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>\n                <a href="https://www.youtubecom/" target="_blank" rel="noopener noreferrer">Website</a>\n            </div>\n        </div>\n        <div class="proyect-card">\n            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">\n            <img src="').concat(i,'" alt="Proyect image"></a>\n            <h4>Booking boardrooms</h4>\n            <p>Book a boardroom from your office.</p>\n            <div class="proyect-card--links">\n                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Github Repo</a>\n                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">Website</a>\n            </div>\n        </div>\n    </section>\n    <section class="section">\n        <h3 class="title">Skills</h3>\n        <p class="subtitle">What I\'ve studied.</p>\n        <div class="course-card">\n            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">\n            <img src="').concat(c,'" alt="JavaScript Course badge"></a>\n            <p class="course-card--title">JavaScript Career</p>\n            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>\n        </div>\n        <div class="course-card">\n            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">\n            <img src="').concat(s,'" alt="FrontEnd Course badge"></a>\n            <p class="course-card--title">Front-End Engineer</p>\n            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>\n        </div>\n        <div class="course-card">\n            <a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">\n            <img src="').concat(l,'" alt="Web Development Course badge"></a>\n            <p class="course-card--title">Web Development</p>\n            <p><a href="https://www.platzi.com" target="_blank" rel="noopener noreferrer">@ Platzi</a></p>\n        </div>\n    </section>\n    </main>\n    <footer>Jesús Ramírez | 2021</footer>\n  '),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var p;(p=t(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),e.next=3,u();case 3:t.innerHTML=e.sent;case 4:case"end":return e.stop()}}),e)}))),function(){return p.apply(this,arguments)})()})()})();