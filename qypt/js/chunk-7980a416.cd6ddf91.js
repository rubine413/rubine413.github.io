(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7980a416"],{1172:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("159b"),a("b64b");function s(t){return t.closest(".scroll")||window}function i(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function n(t,e,a){if(t&&!(a<=0)){var s=i(t);window.requestAnimationFrame((function(){c(t,s+(e-s)/a*16),t.scrollTop!==e&&n(t,e,a-16)}))}}function c(t,e){if(t===window)return document.documentElement.scrollTop=e,void(document.body.scrollTop=e);t.scrollTop=e}function o(t,e,a){a?n(t,e,a):c(t,e)}function r(t,e){var a=s(t),i=t.offsetTop;o(a,i,e||300)}},"159b":function(t,e,a){var s=a("da84"),i=a("fdbc"),n=a("17c2"),c=a("9112");for(var o in i){var r=s[o],l=r&&r.prototype;if(l&&l.forEach!==n)try{c(l,"forEach",n)}catch(d){l.forEach=n}}},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,i=a("a640"),n=i("forEach");t.exports=n?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"193b":function(t,e,a){t.exports=a.p+"img/task_body_1.a5c5515a.png"},"1ada":function(t,e,a){t.exports=a.p+"img/task_body_3.31698a46.png"},"3fac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page-task-list"},[a("div",{staticClass:"index-main bg-net v-pb-lg",staticStyle:{"border-top":"1px solid #efefef"}},[a("div",{staticClass:"index-main-section v-py-md"},[a("a-breadcrumb",[a("a-breadcrumb-item",{attrs:{href:""}},[t._v("首页")]),a("a-breadcrumb-item",{attrs:{href:""}},[t._v("实训平台")]),a("a-breadcrumb-item",{attrs:{href:""}},[t._v("选手答题")])],1)],1),a("div",{staticClass:"index-main-section v-pb-lg bg-white border-radius v-pa-md"},[a("a-divider",{attrs:{orientation:"left",id:"form-field-upload"}},[t._v(" 任务基本信息 ")]),a("div",{staticClass:"task-form",staticStyle:{padding:"0 50px"}},[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"form-field"},[a("span",{staticClass:"form-field-label"},[t._v("上传附件：")]),a("div",{staticClass:"form-field-content"},[a("div",{staticClass:"flex items-center"},[a("a-upload",{attrs:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card","file-list":t.fileList},on:{preview:t.handlePreview,change:t.handleUploadChange}},[t.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v("点击上传")])],1):t._e()])],1)])]),a("div",{staticClass:"form-field"},[a("span",{staticClass:"form-field-label"}),a("div",{staticClass:"form-field-content"},[a("a-button",{staticStyle:{width:"100px"},attrs:{type:"primary",loading:t.saving},on:{click:t.onSubmit}},[t._v(" 提交答题 ")])],1)])]),a("a-divider",{attrs:{orientation:"left"}},[t._v(" 相关资源 ")]),a("div",{ref:"content",staticClass:"resource-container",staticStyle:{"min-height":"500px"}},[a("div",{staticClass:"resource-catalogs full-height"},[a("a-affix",[a("div",{staticClass:"resource-header flex items-center"},[a("span",[t._v("资源目录")])])]),a("a-affix",{attrs:{offsetTop:40}},[a("div",{staticClass:"resource-catalogs-list",staticStyle:{"min-height":"calc(100% - 32px)",padding:"10px"}},[a("a-tree",{attrs:{"default-expand-all":"","show-line":"","default-expanded-keys":t.expandedKeys,expandedKeys:t.expandedKeys,draggable:"","tree-data":t.nodeList},on:{"update:expandedKeys":function(e){t.expandedKeys=e},"update:expanded-keys":function(e){t.expandedKeys=e},select:t.onNodeSelect}})],1)])],1),a("div",{staticClass:"resource-content v-ml-auto col full-height"},[a("a-affix",[a("div",{staticClass:"resource-header flex items-center"},[a("span",[t._v("资源详情")])])]),t._m(4)],1)]),a("a-affix",{attrs:{"offset-bottom":0}},[a("div",{staticClass:"text-right v-py-md bg-white"},[a("a-button",{attrs:{type:"primary"},on:{click:t.scrollToSubmit}},[t._v("去上传答题")])],1)])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-field form-field-readonly"},[a("span",{staticClass:"form-field-label"},[t._v("任务名称：")]),a("div",{staticClass:"form-field-content"},[t._v("热敏机打印程序设计2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-field form-field-readonly"},[a("span",{staticClass:"form-field-label"},[t._v("任务用时：")]),a("div",{staticClass:"form-field-content"},[t._v("2.5 小时")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-field form-field-readonly"},[a("span",{staticClass:"form-field-label"},[t._v("评分表：")]),a("div",{staticClass:"form-field-content"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-field form-field-readonly"},[a("span",{staticClass:"form-field-label"},[t._v("是否收费：")]),a("div",{staticClass:"form-field-content"},[a("i",{staticClass:"fa fa-check-square-o text-primary"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"resource-content-body border-left",staticStyle:{"min-height":"calc(100% - 32px)"}},[s("span",{staticClass:"anchor",attrs:{id:"tab1"}}),s("h3",{attrs:{id:"tab01"}},[t._v("简介")]),s("p",[t._v("本次测试项目设计扫雷游戏。")]),s("span",{staticClass:"anchor",attrs:{id:"tab2"}}),s("h3",{attrs:{id:"tab02"}},[t._v("任务描述")]),s("p",[t._v("扫雷是一款经典的大众类的益智小游戏，游戏目标是在最短的时间内根据点击格子出现的数字找出所有非雷格子，同时避免踩雷。分成以下三个任务：")]),s("p",[t._v("1、 阶段一：LCD12864驱动设计（60分钟）；")]),s("p",[t._v("2、 阶段二：基本游戏功能（120分钟）；")]),s("p",[t._v("3、 阶段三：综合游戏设计（180分钟）。")]),s("span",{staticClass:"anchor",attrs:{id:"tab3"}}),s("h3",{attrs:{id:"tab03"}},[t._v("编程环境")]),s("p",[t._v("编程环境如下图所示：")]),s("p",{staticClass:"text-center"},[s("img",{attrs:{src:a("193b")}})]),s("span",{staticClass:"anchor",attrs:{id:"tab4"}}),s("h3",{attrs:{id:"tab04"}},[t._v("接口表")]),s("p",{staticClass:"text-center"},[s("img",{attrs:{src:a("a0a9")}})]),s("span",{staticClass:"anchor",attrs:{id:"tab5"}}),s("h3",{attrs:{id:"tab05"}},[t._v("游戏说明")]),s("p",[t._v("扫雷是一款经典的大众类的益智小游戏，游戏目标是在最短的时间内根据点击格子出现的数字找出所有非雷格子，同时避免踩雷，下面对游戏的一些概念进行解释说明。")]),s("span",{staticClass:"anchor",attrs:{id:"tab5-1"}}),s("p",{staticClass:"text-bold"},[t._v("定义说明")]),s("p",[t._v(" 周边：指坐标点周边3x3的区域；")]),s("p",[t._v(" 地雷点：点阵屏上显示为红色，有地雷的点称作地雷点")]),s("p",[t._v(" 危险点：点阵屏上显示为蓝色，周边有地雷的点称作危险点，危险点可以获取周边3x3的区域中地雷数量")]),s("p",[t._v(" 安全点：点阵屏上显示为绿色，周边没有地雷的点称作安全点")]),s("p",[t._v(" 标记点：点阵屏上显示为紫色，玩家标记的点称为标记点")]),s("span",{staticClass:"anchor",attrs:{id:"tab5-2"}}),s("p",{staticClass:"text-bold"},[t._v("操作说明")]),s("p",[t._v(" 光标移动：通过拨动摇杆控制光标移动")]),s("p",[t._v(" 标记地雷：SW16控制打开/关闭标记操作，使能标记时，单击摇杆按键，光标所在点被标记，如果该点已经标记，则取消标记。")]),s("p",[t._v(" 单击打开：在不使能标记时，单击摇杆按键，对于非标记点执行打开操作")]),s("p",[t._v(" 双击：在已经打开的危险点上双击，周边标记点的数量等于危险点周边地雷数量，那么打开周边未标记的点")]),s("span",{staticClass:"anchor",attrs:{id:"tab5-3"}}),s("p",{staticClass:"text-bold"},[t._v("游戏裁决")]),s("p",[t._v(" 游戏失败：打开了地雷点")]),s("p",[t._v(" 游戏胜利：剩余的未打开点数等于地雷点数。")]),s("p",{staticClass:"text-center"},[s("img",{attrs:{src:a("1ada")}})]),s("div",{staticClass:"v-pl-md"},[s("p",[t._v("LCD第一行最左侧为标记图标，使能标记时，显示 图标，不使能时不显示，默认不使能标记")]),s("p",[t._v("LCD第一行中间为游戏状态图标：游戏中显示 图标，游戏胜利显示 图标，游戏失败显示 图标")]),s("p",[t._v("LCD第一行最右侧为调试图标，按下SW15打开/关闭调试模拟，调试模拟时显示 图标，不使能时不显示，调试模拟默认关闭")]),s("p",[t._v("LCD第二行显示本局已用时间")]),s("p",[t._v("LCD第三行显示剩余的地雷数量（总地雷数量 — 标记点数）")]),s("p",[t._v(" LCD第四行显示光标所在点的周边地雷数量，在调试模拟下，所有点都可以显示周边地雷数量（地雷点显示为-1，安全点显示为00，危险点显示周边地雷数）；在正常模式下，只显示已经打开点的周边地雷数量，未打开的点显示”--”。 ")])]),s("span",{staticClass:"anchor",attrs:{id:"tab6"}}),s("h3",{attrs:{id:"tab06"}},[t._v("编程任务")]),s("span",{staticClass:"anchor",attrs:{id:"tab6-1"}}),s("p",{staticClass:"text-bold"},[t._v("第一阶段编程任务")]),s("p",[t._v("本次任务使用串行接口驱动LCD12864，请打开文件《lcd12864.c》和《lcd12864.h》补全相关函数。")]),s("p",[t._v("阶段 1.1")]),s("p",[t._v("串行模式下的接口时序图如下图所示。 串行数据传送共分三个字节完成：")]),s("p",[t._v("第一字节：串口控制—格式 11111AB0 （A 为数据传送方向控制：H 表示数据从 LCD 到 MCU，L 表示数据从 MCU 到 LCD； B 为数据类型选择：H 表示数据是显示数据，L 表示数据是控制指令）")]),s("p",[t._v("第二字节：(并行)8 位数据的高 4 位—格式 DDDD0000")]),s("p",[t._v("第三字节：(并行)8 位数据的低 4 位—格式 DDDD0000")]),s("p",[t._v("详细说明可以参考ST7920的器件手册第26页。")]),s("p",{staticClass:"text-center"},[s("img",{attrs:{src:a("47c8")}})]),s("p",[t._v("请完成函数void sendFrame(uint32_t data)，向LCD12864发送一组数据，data是要发送的一组数据，低24bit有效，从高位开始发送。")]),s("p",[t._v("阶段1.2")]),s("p",[t._v("请实现向LCD12864写控制命令和写数据的函数，这些函数需要调用阶段1.1的函数sendFrame:")]),s("p",[t._v(" void writeCmd(uint8_t cByte)，向LCD12864发送控制命令，cByte是控制命令字节；")]),s("p",[t._v(" void writeData(uint8_t dByte) ，向LCD12864发送数据，dByte是要发送的数据字节；")]),s("p",[t._v("在《user_function.c》的setup函数中已经写了LCD的测试用例，如果你的答案正确，可以在LCD屏幕上看到“LCD12864工作正常”的字样。")]),s("span",{staticClass:"anchor",attrs:{id:"tab6-2"}}),s("p",{staticClass:"text-bold"},[t._v("第二阶段编程任务")]),s("p",[t._v("阶段 2.1：标记图标的显示与控制")]),s("p",[t._v("在游戏过程中，对地雷点进行标记前需要打开标记功能，标记功能打开时,在LCD的左上角显示标记图标 ，按下SW16可以打开或关闭标记功能。")]),s("p",[t._v("请完成上述功能，按下一次SW16，显示标记图标，再按下一次SW16，不显示标记图标。")]),s("p",[t._v("...")]),s("p",[t._v("...")]),s("p",[t._v("...")]),s("span",{staticClass:"anchor",attrs:{id:"tab6-3"}}),s("p",{staticClass:"text-bold"},[t._v("第三阶段编程任务")]),s("p",[t._v("任务 3.1：游戏计时")]),s("p",[t._v("在LCD的第二行显示“游戏时长: MM:SS ”,MM为分钟数，SS为秒钟数，保留前置0，时间为当前局游戏的持续时间。")]),s("p",[t._v("任务 3.2：光标功能")]),s("p",[t._v(" 在游戏过程中，在点阵屏上使用以2Hz闪烁的像素点作为光标，在黑色的点上光标为白色，在有颜色的点上，光标与当前点颜色相同；可以通过摇杆移动光标（上、下、左、右四个方向），光标可以跨越边界移动。游戏结束的时候不显示光标，游戏刚开始时光标在左上角。 ")]),s("p",[t._v("...")]),s("p",[t._v("...")]),s("p",[t._v("...")]),s("p",[t._v("任务 3.10：调试功能")]),s("p",[t._v(" 在游戏过程，打开调试功能，所有的地雷点可见，未被标记的地雷点显示红色，被标记的地雷点还是显示紫色；在LCD的第四行显示周边地雷数，光标在危险点时显示周边地雷数，在安全点时显示“00”，在地雷点时显示“-1”。 ")])])}],n=(a("b0c0"),a("1172")),c={data:function(){return{taskStep:"tab1",optionType:1,optionTypes:["全部资源","办公效率","职业发展","编程开发","产品和设计","生活方式","亲子教育","语言学习"],list:[],optionList:[],nodeList:[{key:"1",title:"简介"},{key:"2",title:"任务描述"},{key:"3",title:"编程环境"},{key:"4",title:"接口表",children:[]},{key:"5",title:"游戏说明",children:[{key:"5-1",title:"定义说明"},{key:"5-2",title:"操作说明"},{key:"5-3",title:"游戏裁决",isLeaf:!0}]},{key:"6",title:"编程任务",children:[{key:"6-1",title:"第一阶段编程任务"},{key:"6-2",title:"第二阶段编程任务"},{key:"6-3",title:"第三阶段编程任务",children:[{key:"6-3-1",title:"任务 3.1：游戏计时",children:[]},{key:"6-3-2",title:"任务 3.2：光标功能",children:[]},{key:"6-3-3",title:"任务 3.3：调试功能",children:[]}]}]}],expandedKeys:["1","2","3","4","5","6","6-3"],fileList:[]}},methods:{load:function(){for(var t=[],e=1;e<20;e++)t.push({id:e,title:"B模块 嵌入式编程"+e,people:1345});this.list=t},onTabChange:function(t){document.querySelector("#"+t).scrollIntoView(!0)},onNodeSelect:function(t,e){var a=e.node;console.log(document.querySelector("#tab".concat(a.eventKey))),Object(n["a"])(document.querySelector("#tab".concat(a.eventKey)))},onOptionChange:function(){},handleUploadChange:function(t){var e=t.file.status;"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?this.$message.success("".concat(t.file.name," file uploaded successfully.")):"error"===e&&this.$message.error("".concat(t.file.name," file upload failed.")),this.fileList=t.fileList},handlePreview:function(){},scrollToSubmit:function(){Object(n["a"])(document.querySelector("#form-field-upload"))}},mounted:function(){this.load()}},o=c,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);e["default"]=l.exports},"47c8":function(t,e,a){t.exports=a.p+"img/task_body_4.e8670227.png"},a0a9:function(t,e,a){t.exports=a.p+"img/task_body_2.4bd437b0.png"},a640:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,a){var s=a("83ab"),i=a("9bf2").f,n=Function.prototype,c=n.toString,o=/^\s*function ([^ (]*)/,r="name";s&&!(r in n)&&i(n,r,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})},b64b:function(t,e,a){var s=a("23e7"),i=a("7b0b"),n=a("df75"),c=a("d039"),o=c((function(){n(1)}));s({target:"Object",stat:!0,forced:o},{keys:function(t){return n(i(t))}})}}]);
//# sourceMappingURL=chunk-7980a416.cd6ddf91.js.map