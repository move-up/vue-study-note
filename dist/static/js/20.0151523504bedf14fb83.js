webpackJsonp([20],{CoEp:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"\ntable tbody tr .ellipsis[data-v-54216d10] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n","",{version:3,sources:["D:/case/vue-study-note/src/pages/pagination/index.vue"],names:[],mappings:";AACA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;CAClB",file:"index.vue",sourcesContent:["\ntable tbody tr .ellipsis[data-v-54216d10] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n"],sourceRoot:""}])},HWjp:function(e,t,a){var n=a("CoEp");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("24bde3da",n,!0,{})},IJYn:function(e,t,a){"use strict";function n(e){a("HWjp")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("P9l9"),s={name:"pagination",components:{},props:{},data:function(){return{table:{data:[],page:1,total:null,size:2}}},computed:{},watch:{},created:function(){var e=this.table.page,t=this.table.size;Object(l.f)({page:e,size:t}).then(this.handleFetchData)},mounted:function(){},methods:{handleFetchData:function(e){this.table.data=e.data,this.table.total=Number(e.count)},handleSizeChange:function(e){this.table.size=e;var t=this.table.page;Object(l.f)({page:t,size:e}).then(this.handleFetchData)},handleCurrentChange:function(e){console.log("change"),this.table.page=e;var t=this.table.size;Object(l.f)({page:e,size:t}).then(this.handleFetchData)}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table.data,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"boss",label:"导演",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actors",label:"演员",width:"230"}}),e._v(" "),a("el-table-column",{attrs:{prop:"star",label:"评分",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"des",label:"描述",width:"600"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.table.page,"page-sizes":[2,4,6,8],"page-size":e.table.size,layout:"total, sizes, prev, pager, next, jumper",total:e.table.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],r={render:i,staticRenderFns:o},p=r,c=a("VU/8"),d=n,h=c(s,p,!1,d,"data-v-54216d10",null);t.default=h.exports}});
//# sourceMappingURL=20.0151523504bedf14fb83.js.map