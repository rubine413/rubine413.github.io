(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e560f"],{"93dc":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page page-task-list"},[s("div",{staticClass:"index-main bg-white shadow-main"},[s("div",{staticClass:"index-main-section v-pt-lg"},[s("a-breadcrumb",[s("a-breadcrumb-item",{attrs:{href:""}},[t._v("首页")]),s("a-breadcrumb-item",{attrs:{href:""}},[t._v("全部资源")])],1)],1)]),s("a-affix",[s("div",{staticClass:"index-main bg-white shadow-main"},[s("div",{staticClass:"index-main-section v-pt-md"},[s("div",{staticClass:"flex items-center bg-white"},t._l(t.optionTypes,(function(i,a){return s("span",{key:a,staticClass:"task-option-type",class:{active:a===t.optionType},on:{click:function(i){t.optionType=a}}},[t._v(t._s(i))])})),0)])])]),s("div",{staticClass:"index-main v-pb-lg"},[s("div",{staticClass:"index-main-section v-pt-lg"},[s("a-tabs",{attrs:{size:"small"},model:{value:t.listType,callback:function(i){t.listType=i},expression:"listType"}},[s("a-tab-pane",{key:1,attrs:{tab:"综合"}}),s("a-tab-pane",{key:2,attrs:{tab:"最新"}}),s("a-tab-pane",{key:3,attrs:{tab:"最热"}}),s("div",{attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[s("a-checkbox-group",{attrs:{options:["免费","实训"]},on:{change:t.onOptionChange},model:{value:t.optionList,callback:function(i){t.optionList=i},expression:"optionList"}})],1)],1),s("div",{staticClass:"section-body"},[s("div",{staticClass:"task-list wrap"},t._l(t.list,(function(i){return s("div",{key:i.id,staticClass:"task-item",on:{click:function(i){return t.$router.push("detail")}}},[s("div",{staticClass:"task-img"},[s("a-icon",{staticStyle:{"font-size":"88px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#ccc"},attrs:{type:"picture"}})],1),s("div",{staticClass:"task-info v-pa-sm"},[s("div",{staticClass:"task-title ellipsis ellipsis-2-lines"},[t._v(t._s(i.title))])])])})),0)])],1)])],1)},e=[],n={data:function(){return{listType:1,optionType:0,optionTypes:["全部资源","办公效率","职业发展","编程开发","产品和设计","生活方式","亲子教育","语言学习"],list:[],optionList:[]}},methods:{load:function(){for(var t=[],i=1;i<20;i++)t.push({id:i,title:"B模块 嵌入式编程"+i,people:1345});this.list=t},onOptionChange:function(){}},mounted:function(){this.load()}},o=n,l=s("2877"),c=Object(l["a"])(o,a,e,!1,null,null,null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e560f.72132d22.js.map