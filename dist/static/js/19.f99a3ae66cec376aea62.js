webpackJsonp([19],{"5FJE":function(e,t,o){"use strict";function n(e){o("jfww")}Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Timeout",components:{},props:{},data:function(){return{isShow:!0,timeoutId:null}},computed:{classes:function(){return this.isShow?"":"hide"}},watch:{},created:function(){},mounted:function(){this.timeoutId=window.setTimeout(this.toggleShow,1e3)},methods:{toggleShow:function(){this.isShow=!this.isShow,this.timeout()},handleMouseover:function(){this.isShow=!0,window.clearTimeout(this.timeoutId)},handleMouseout:function(){this.timeout()},timeout:function(){this.timeoutId=window.setTimeout(this.toggleShow,5e3)}}},i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("h4",[e._v("Timeout")]),e._v(" "),o("div",{staticClass:"demo",class:e.classes,on:{mouseover:e.handleMouseover,mouseout:e.handleMouseout}},[o("span",[e._v("timeout")])])])},u=[],a={render:i,staticRenderFns:u},c=a,d=o("VU/8"),r=n,h=d(s,c,!1,r,"data-v-5e298e20",null);t.default=h.exports},jfww:function(e,t,o){var n=o("lfsW");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("6c56df48",n,!0,{})},lfsW:function(e,t,o){t=e.exports=o("FZ+f")(!0),t.push([e.i,"\n.demo[data-v-5e298e20] {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  color: #fff;\n}\n.hide[data-v-5e298e20] {\n  display: none;\n}\n","",{version:3,sources:["D:/case/vue-study-note/src/pages/timer/timeout.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,YAAY;CACb;AACD;EACE,cAAc;CACf",file:"timeout.vue",sourcesContent:["\n.demo[data-v-5e298e20] {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n  color: #fff;\n}\n.hide[data-v-5e298e20] {\n  display: none;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=19.f99a3ae66cec376aea62.js.map