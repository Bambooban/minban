(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4980c368"],{c308:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"army"},[t._m(0),s("div",{staticClass:"banner-content clearfix"},[s("div",{staticClass:"banner-box fl"},[s("el-carousel",{staticClass:"banner-item",attrs:{interval:5e3,arrow:"always"}},t._l(t.armyNewsData.slice(0,5),(function(a,i){return s("el-carousel-item",{key:i},[s("img",{staticClass:"auto-img",attrs:{src:a.images},on:{click:function(s){return t.goDetail(a.id)}}})])})),1)],1),s("div",{staticClass:"hot-tips-box fl"},[s("div",{staticClass:"hot-title"},[t._v("航空焦点")]),t._l(t.armyNewsData.slice(0,10),(function(a,i){return s("div",{key:i,staticClass:"hot-item clearfix",on:{click:function(s){return t.goDetail(a.id)}}},[s("div",{staticClass:"h-title fl"},[t._v(t._s(a.title))]),s("div",{staticClass:"post-name fr"},[t._v(t._s(a.posterNickName))])])}))],2)]),s("div",{staticClass:"newList-content"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"new-list-left-box fl"},[t._l(t.armyNewsData,(function(a,i){return s("div",{key:i,staticClass:"list-item clearfix",on:{click:function(s){return t.goDetail(a.id)}}},[s("div",{staticClass:"left-img fl"},[s("el-image",{staticClass:" err-imgs"},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("img",{staticClass:"a-img auto-img",attrs:{src:a.images,alt:""}})],1),s("div",{staticClass:"right-cont fl"},[s("div",{staticClass:"title"},[t._v(t._s(a.title))]),s("div",{staticClass:"text-cont"},[s("span",{staticClass:"post-name"},[t._v(t._s(a.posterNickName))]),s("span",{staticClass:"pub-time"},[t._v("日期："+t._s(a.publishTime))]),s("span",{staticClass:"comment-count"},[t._v("评论："+t._s(a.commentCount))])])])])})),s("div",{staticClass:"pagination-page"},[s("el-pagination",{staticClass:"pag-box",attrs:{background:"",layout:"prev, pager, next","size-change":10,total:1e3,"current-change":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1)],2),s("div",{staticClass:"new-other-right-box fl"},[s("div",{staticClass:"other-list"},[t._m(1),t._m(2),t._m(3),s("div",{staticClass:"other-link"},[s("div",{staticClass:"other-title"},[t._v("航空链接")]),t._l(t.armyOtherLinkData,(function(a,i){return s("div",{key:i,staticClass:"ot-box fl"},[s("img",{staticClass:"ot-imgs",attrs:{src:a.img,alt:""}}),s("div",{staticClass:"ot-name"},[s("a",{attrs:{target:"_blank",href:a.url}},[t._v(t._s(a.title))])])])}))],2)])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title-content clearfix"},[s("div",{staticClass:"title-box fl"},[s("div",{staticClass:"t-text"},[t._v("航空>>>")])]),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"ad-img-box fr"},[s("a",{attrs:{target:"_blank",href:"http://www.csair.com/cn/"}},[s("img",{staticClass:"ad-img auto-img",attrs:{src:"https://www.csair.com/cn/cmsad/resource/89cb51c4178273cc24c14d26aee81002.jpg",border:"0",alt:""}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"public-benefit-advertise"},[s("div",{staticClass:"pub-ad-title"},[t._v("公益·广告")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"advertise-one"},[s("div",{staticClass:"ad-box"},[s("img",{staticClass:"ad-imgs auto-img",attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3918833539,4216485827&fm=26&gp=0.jpg",alt:""}}),s("div",{staticClass:"ad-texts"},[t._v("广告")])]),s("div",{staticClass:"ad-title"},[t._v("皮卡·Great Wall")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"advertise-two"},[s("div",{staticClass:"ad-box"},[s("img",{staticClass:"ad-imgs auto-img",attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1902594961,512294864&fm=26&gp=0.jpg",alt:""}})])])}],c=(s("c63b"),{name:"aviation",data:function(){return{armyNewsData:[],currentPage:1,pageNum:"",armyOtherLinkData:[{img:"http://static.ws.126.net/cnews/2013/3/12/20130312104531507ec.jpg",url:"http://www.airchina.com.cn",title:"国际航空"},{img:"http://static.ws.126.net/cnews/2013/3/12/2013031210484389f7f.jpg",url:"http://www.csair.com/cn/",title:"南方航空"},{img:"http://static.ws.126.net/cnews/2013/3/12/201303121051140af08.jpg",url:"http://www.ceair.com",title:"东方航空"},{img:"http://static.ws.126.net/cnews/2013/3/12/2013031210532002131.jpg",url:"hhttp://www.hnair.com/",title:"海南航空"},{img:"http://static.ws.126.net/cnews/2013/3/12/20130312105434b9441.jpg",url:"http://www.airbus.com",title:"空中客车"},{img:"http://static.ws.126.net/cnews/2013/3/12/20130312105614d8e38.jpg",url:"http://honeywell.com/sites/cn/Pages/home.aspx",title:"霍尼韦尔"},{img:"http://static.ws.126.net/cnews/2013/3/12/2013031213152310372.jpg",url:"http://www.embraer.com.cn/",title:"巴西航空工业"},{img:"http://static.ws.126.net/cnews/2013/3/12/2013031211064274b8c.jpg",url:"http://www.caac.gov.cn/",title:"中国民用航空局"},{img:"https://res.variflight.com/www_carnoc/images/logo.gif",url:"http://www.carnoc.com/",title:"民航资源网"},{img:"http://www.cannews.com.cn/Public/cannews/img/logo.jpg",url:"http://www.cannews.com.cn/",title:"中国航空报"},{img:"http://www.caacnews.com.cn/logo/images/P020170608358684670814.png",url:"http://www.caacnews.com.cn/",title:"中国民航网"},{img:"http://www.airyc.cn/Pic/UpLoad/images/LOGOair.gif",url:"http://www.airyc.cn",title:"中国航空英才网"},{img:"http://www.ck365.cn/skin/default/image/logo2017.png",url:"http://www.ck365.cn",title:"中国测控网"}]}},created:function(){this.getArmyNewsData()},methods:{getArmyNewsData:function(t){var a=this;this.axios({method:"GET",url:"/list",params:{apikey:this.appkey,category:"T1474271789612",page:t}}).then((function(t){a.armyNewsData=t.data.data})).catch((function(t){}))},handleCurrentChange:function(t){var a=t;this.getArmyNewsData(a)},goDetail:function(t){this.$router.push({name:"Detail",query:{id:t}})}}}),n=c,l=s("2877"),r=Object(l["a"])(n,i,e,!1,null,"f8c51954",null);a["default"]=r.exports},c63b:function(t,a,s){}}]);
//# sourceMappingURL=chunk-4980c368.e337fdd4.js.map