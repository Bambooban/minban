(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3370502c"],{"9f0c":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"headlines"},[t._m(0),a("div",{staticClass:"newList-content"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"new-list-left-box fl"},[t._l(t.HeadlinesListData,(function(s,i){return a("div",{key:i,staticClass:"list-item clearfix"},[a("div",{staticClass:"left-img fl"},[a("el-image",{staticClass:" err-imgs"},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),a("img",{staticClass:"a-img auto-img",attrs:{src:s.images,alt:""}})],1),a("div",{staticClass:"right-cont fl"},[a("div",{staticClass:"title"},[t._v(t._s(s.title))]),a("div",{staticClass:"text-cont"},[a("span",{staticClass:"post-name"},[t._v(t._s(s.posterNickName))]),a("span",{staticClass:"pub-time"},[t._v("日期："+t._s(s.publishTime))]),a("span",{staticClass:"comment-count"},[t._v("评论："+t._s(s.commentCount))])])])])})),a("div",{staticClass:"pagination-page"},[a("el-pagination",{staticClass:"pag-box",attrs:{background:"",layout:"prev, pager, next","size-change":10,total:1e3,"current-change":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1)],2),a("div",{staticClass:"new-other-right-box fl"},[a("div",{staticClass:"other-list"},[t._m(1),t._m(2),a("div",{staticClass:"advertise-two"},[a("el-carousel",{attrs:{height:"200px"}},t._l(t.adbannerData,(function(t){return a("el-carousel-item",{key:t},[a("img",{staticClass:"imgs auto-img",attrs:{src:t,alt:""}})])})),1)],1),t._m(3)])])])])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title-content clearfix"},[a("div",{staticClass:"title-box fl"},[a("div",{staticClass:"t-text"},[t._v("头条>>>")])]),a("div",{staticClass:"line-box fl"}),a("div",{staticClass:"line-box fl"}),a("div",{staticClass:"ad-img-box fr"},[a("a",{attrs:{target:"_blank",href:"https://g.163.com/c?AID=259321&FlightID=2057&Values=339870558&Redirect=http://data.163.com/special/datablog/"}},[a("img",{staticClass:"ad-img auto-img",attrs:{src:"https://yt-adp.ws.126.net/channel4/1200125_roku_20190313.jpg",border:"0",alt:""}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"public-benefit-advertise"},[a("div",{staticClass:"pub-ad-title"},[t._v("公益·广告")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"advertise-three"},[a("img",{staticClass:"imgs",attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3963176046,4154651129&fm=26&gp=0.jpg",alt:""}}),a("div",{staticClass:"title"},[t._v("[公益之家]——拒绝酒驾")]),a("div",{staticClass:"texts"},[t._v("开车不喝酒，喝酒不开车！拒绝酒驾，珍惜生命。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"advertise-one"},[a("div",{staticClass:"ad-box"},[a("img",{staticClass:"ad-imgs auto-img",attrs:{src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2559058049,1882169172&fm=26&gp=0.jpg",alt:""}}),a("div",{staticClass:"ad-texts"},[t._v("广告")])]),a("div",{staticClass:"ad-title"},[t._v("自然堂·亮-润-白")])])}],c=(a("b051"),{name:"headlines",data:function(){return{HeadlinesListData:[],pageNum:"",currentPage:1,adbannerData:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=813059290,2999325279&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3036988705,1298077967&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=371673075,3441510009&fm=26&gp=0.jpg"]}},created:function(){this.getHeadlinesListData()},methods:{getHeadlinesListData:function(t){var s=this;this.axios({method:"GET",url:"/list",params:{apikey:this.appkey,category:"T1348647909107",page:t}}).then((function(t){s.HeadlinesListData=t.data.data})).catch((function(t){}))},handleCurrentChange:function(t){var s=t;this.getHeadlinesListData(s)}}}),l=c,n=a("2877"),r=Object(n["a"])(l,i,e,!1,null,"39e6984f",null);s["default"]=r.exports},b051:function(t,s,a){}}]);
//# sourceMappingURL=chunk-3370502c.5eb46bed.js.map