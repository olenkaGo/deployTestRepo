(function(e){function t(t){for(var n,c,o=t[0],i=t[1],u=t[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"2ca6":function(e,t,r){"use strict";r("2f7e")},"2f7e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("MainPage",{attrs:{msg:""}})],1)},s=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row my-5"},[r("div",{staticClass:"col-sm search-column"},[r("div",{staticClass:"column-inner"},[r("div",{staticClass:"search-controls"},[r("h2",{staticClass:"my-3"},[e._v("Find a Recipe")]),r("form",{staticClass:"form-inline my-4",attrs:{form:""},on:{submit:function(t){return t.preventDefault(),e.getData.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"form-control mr-3",attrs:{type:"text",id:"keyword-search-control",placeholder:"Search...",required:""},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Go")])]),r("p",{staticClass:"mt-4"},[e._v(e._s(e.recipes.length)+" results")])]),r("div",{staticClass:"search-results"},e._l(e.recipes,(function(t){return r("div",{key:t.id,staticClass:"card mb-2"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[e._v(e._s(t.Title))]),r("p",{staticClass:"card-text"},[e._v(" "+e._s(t.Ingredients))])])])})),0)])])])])},o=[],i=r("1da1"),u=(r("96cf"),r("d3b7"),{name:"MainPage",props:{msg:String},data:function(){return{searchQuery:"",recipes:[]}},methods:{getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://nuor29xk0g.execute-api.us-west-1.amazonaws.com/cook-fair-trade/items?query="+e.searchQuery);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,e.recipes=n,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),l=u,p=(r("2ca6"),r("2877")),f=Object(p["a"])(l,c,o,!1,null,"7900b6c6",null),d=f.exports,v={name:"App",components:{MainPage:d}},m=v,h=(r("034f"),Object(p["a"])(m,a,s,!1,null,null,null)),y=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.81aac0bd.js.map