(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb32e6f6"],{"0a31":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"house"},[t._m(0),s("div",{staticClass:"newList-content"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"new-list-left-box fl"},[t._l(t.HouseData,(function(a,i){return s("div",{key:i,staticClass:"list-item clearfix",on:{click:function(s){return t.goDetail(a.id)}}},[s("div",{staticClass:"left-img fl"},[s("el-image",{staticClass:" err-imgs"},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("img",{staticClass:"a-img auto-img",attrs:{src:a.images,alt:""}})],1),s("div",{staticClass:"right-cont fl"},[s("div",{staticClass:"title"},[t._v(t._s(a.title))]),s("div",{staticClass:"text-cont"},[s("span",{staticClass:"post-name"},[t._v(t._s(a.posterNickName))]),s("span",{staticClass:"pub-time"},[t._v("日期："+t._s(a.publishTime))]),s("span",{staticClass:"comment-count"},[t._v("评论："+t._s(a.commentCount))])])])])})),s("div",{staticClass:"pagination-page"},[s("el-pagination",{staticClass:"pag-box",attrs:{background:"",layout:"prev, pager, next","size-change":10,total:1e3,"current-change":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1)],2),s("div",{staticClass:"new-other-right-box fl"},[s("div",{staticClass:"other-list"},[s("div",{staticClass:"other-box-one"},[s("el-carousel",{attrs:{height:"200px"}},t._l(t.houseAdData,(function(t,a){return s("el-carousel-item",{key:a},[s("img",{staticClass:"imgs auto-img",attrs:{src:t,alt:""}})])})),1)],1),t._m(1)])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title-content clearfix"},[s("div",{staticClass:"title-box fl"},[s("div",{staticClass:"t-text"},[t._v("房产>>>")])]),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"ad-img-box fr"},[s("a",{attrs:{target:"_blank",href:"https://gz.fang.anjuke.com/loupan/461934.html?from=loupanlist_sslx&ifxc=935"}},[s("img",{staticClass:"ad-img auto-img",attrs:{src:"https://pic4.ajkimg.com/display/xinfang/767cc27e97f2b68046be7f97e499efda/1180x160n.jpg",border:"0",alt:""}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"other-box-two"},[s("div",{staticClass:"car-item"},[s("a",{attrs:{href:"#",target:"_blank"}},[s("img",{staticClass:"auto-img",attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2745209393,3964229516&fm=26&gp=0.jpg",alt:""}})]),s("div",{staticClass:"text"},[t._v("广告")])])])}],c=(s("dfca"),{name:"house",data:function(){return{currentPage:1,pageNum:"",HouseData:[],houseAdData:["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3829248198,2909032833&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3132597517,2747151375&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=309294174,3645603658&fm=26&gp=0.jpg"]}},created:function(){this.getHouseData()},methods:{getHouseData:function(t){var a=this;this.axios({method:"GET",url:"/list",params:{apikey:this.appkey,category:"T1348654085632",page:t}}).then((function(t){a.HouseData=t.data.data})).catch((function(t){}))},handleCurrentChange:function(t){var a=t;this.getHouseData(a)},goDetail:function(t){this.$router.push({name:"Detail",query:{id:t}})}}}),n=c,l=s("2877"),o=Object(l["a"])(n,i,e,!1,null,"cdce3634",null);a["default"]=o.exports},dfca:function(t,a,s){}}]);
//# sourceMappingURL=chunk-cb32e6f6.eb92a7af.js.map