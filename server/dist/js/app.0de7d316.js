(function(t){function n(n){for(var r,a,s=n[0],u=n[1],c=n[2],f=0,p=[];f<s.length;f++)a=s[f],i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var u=e[s];0!==i[u]&&(r=!1)}r&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={app:0},o=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"1fde":function(t,n,e){"use strict";var r=e("5126"),i=e.n(r);i.a},5126:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("ShowPage",{attrs:{msg:"Which do you prefer?"}})],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"row"},[t._m(0),e("section",{staticClass:"side"},[e("Flight")],1)])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"main"},[e("img",{attrs:{id:"picture",src:"https://img.grouponcdn.com/deal/u2oGrLLtKK5SYv3dVPFZ/GP-2048x1229/v1/c700x420.jpg",width:"750"}}),e("div",{staticClass:"controls"},[e("button",{staticClass:"button left"},[e("i",{staticClass:"prev"}),e("span",{staticClass:"text-hidden"},[t._v("prev")])]),e("button",{staticClass:"button right"},[e("i",{staticClass:"next"}),e("span",{staticClass:"text-hidden"},[t._v("next")])])])])}],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Liked ones!")]),t._l(t.info,function(n){return e("div",{key:t.idx,attrs:{id:"flight"}},[t._v("\n    "+t._s(n)+":\n    "),e("span",[e("span",{domProps:{innerHTML:t._s(n.flights)}})])])})],2)},c=[],l=e("bc3a"),f=e.n(l),p={name:"Flight",props:{},data:function(){return{info:null,loading:!0,errored:!1}},mounted:function(){var t=this;f.a.defaults.withCredentials=!0,f.a.get("http://localhost:8080/api/get_flights?end_date=2019-03-01&start_date=2019-02-24&budget=500&uuid=1&origin=MAD").then(function(n){t.info=n})}},d=p,h=(e("889c"),e("2877")),v=Object(h["a"])(d,u,c,!1,null,null,null),g=v.exports,b={name:"ShowPage",props:{msg:String},components:{Flight:g}},m=b,_=(e("1fde"),Object(h["a"])(m,a,s,!1,null,"1fffd25b",null)),y=_.exports,w={name:"app",components:{ShowPage:y}},x=w,j=Object(h["a"])(x,i,o,!1,null,null,null),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"889c":function(t,n,e){"use strict";var r=e("cb6f"),i=e.n(r);i.a},cb6f:function(t,n,e){}});
//# sourceMappingURL=app.0de7d316.js.map