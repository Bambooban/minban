(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f1caf1d"],{3859:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"army"},[t._m(0),i("div",{staticClass:"banner-content clearfix"},[i("div",{staticClass:"banner-box fl"},[i("el-carousel",{staticClass:"banner-item",attrs:{interval:5e3,arrow:"always"}},t._l(t.armyNewsData.slice(0,5),(function(a,s){return i("el-carousel-item",{key:s},[i("img",{staticClass:"auto-img",attrs:{src:a.images},on:{click:function(i){return t.goDetail(a.id)}}})])})),1)],1),i("div",{staticClass:"hot-tips-box fl"},[i("div",{staticClass:"hot-title"},[t._v("军事焦点")]),t._l(t.armyNewsData.slice(0,10),(function(a,s){return i("div",{key:s,staticClass:"hot-item clearfix",on:{click:function(i){return t.goDetail(a.id)}}},[i("div",{staticClass:"h-title fl"},[t._v(t._s(a.title))]),i("div",{staticClass:"post-name fr"},[t._v(t._s(a.posterNickName))])])}))],2)]),i("div",{staticClass:"newList-content"},[i("div",{staticClass:"clearfix"},[i("div",{staticClass:"new-list-left-box fl"},[t._l(t.armyNewsData,(function(a,s){return i("div",{key:s,staticClass:"list-item clearfix",on:{click:function(i){return t.goDetail(a.id)}}},[i("div",{staticClass:"left-img fl"},[i("el-image",{staticClass:" err-imgs"},[i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-picture-outline"})])]),i("img",{staticClass:"a-img auto-img",attrs:{src:a.images,alt:""}})],1),i("div",{staticClass:"right-cont fl"},[i("div",{staticClass:"title"},[t._v(t._s(a.title))]),i("div",{staticClass:"text-cont"},[i("span",{staticClass:"post-name"},[t._v(t._s(a.posterNickName))]),i("span",{staticClass:"pub-time"},[t._v("日期："+t._s(a.publishTime))]),i("span",{staticClass:"comment-count"},[t._v("评论："+t._s(a.commentCount))])])])])})),i("div",{staticClass:"pagination-page"},[i("el-pagination",{staticClass:"pag-box",attrs:{background:"",layout:"prev, pager, next","size-change":10,total:1e3,"current-change":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1)],2),i("div",{staticClass:"new-other-right-box fl"},[i("div",{staticClass:"other-list"},[t._m(1),t._m(2),t._m(3),i("div",{staticClass:"other-link"},[i("div",{staticClass:"other-title"},[t._v("军事链接")]),t._l(t.armyOtherLinkData,(function(a,s){return i("div",{key:s,staticClass:"ot-box fl"},[i("img",{staticClass:"ot-imgs",attrs:{src:a.img,alt:""}}),i("div",{staticClass:"ot-name"},[i("a",{attrs:{target:"_blank",href:a.url}},[t._v(t._s(a.title))])])])}))],2)])])])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title-content clearfix"},[i("div",{staticClass:"title-box fl"},[i("div",{staticClass:"t-text"},[t._v("军事>>>")])]),i("div",{staticClass:"line-box fl"}),i("div",{staticClass:"line-box fl"}),i("div",{staticClass:"ad-img-box fr"},[i("a",{attrs:{target:"_blank",href:"https://www.ndrc.gov.cn/"}},[i("img",{staticClass:"ad-img auto-img",attrs:{src:"http://www.chinaweekly.cn/upload/image/20200528/6372627177471587074662176.png",border:"0",alt:""}})])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"public-benefit-advertise"},[i("div",{staticClass:"pub-ad-title"},[t._v("公益·广告")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"advertise-one"},[i("div",{staticClass:"ad-box"},[i("img",{staticClass:"ad-imgs auto-img",attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=530564373,949721671&fm=26&gp=0.jpg",alt:""}}),i("div",{staticClass:"ad-texts"},[t._v("广告")])]),i("div",{staticClass:"ad-title"},[t._v("荣耀10，会变色潮美")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"advertise-two"},[i("div",{staticClass:"ad-box"},[i("img",{staticClass:"ad-imgs auto-img",attrs:{src:"https://pg-ad-b1.ws.126.net/yixiao/27054/2ac44d9e2fb8b348aae234d1c940fe71.jpg",alt:""}})])])}],c=(i("c63b"),{name:"army",data:function(){return{armyNewsData:[],currentPage:1,pageNum:"",armyOtherLinkData:[{img:"http://img6.cache.netease.com/news/2017/1/13/20170113182613cae4c.jpg",url:"http://mil.iqiyi.com/",title:"爱奇艺军事"},{img:"http://img1.cache.netease.com/cnews/2009/10/21/20091021173129385b2.gif",url:"http://lt.cjdby.net/",title:"超级大本营"},{img:"http://img2.cache.netease.com/cnews/2010/4/2/20100402171952338f6.jpg",url:"http://www.knowfar.org.cn/",title:"知远战略与防务研究所"},{img:"http://img2.cache.netease.com/cnews/2011/3/10/20110310141818a3648.jpg",url:'http://mil.cnr.cn/"></a>',title:"中广网军事频道"},{img:"http://img3.cache.netease.com/cnews/2015/3/26/2015032614053025879.png",url:"http://www.js7tv.cn/",title:"中国军视网"},{img:"http://img5.cache.netease.com/cnews/2013/8/27/20130827161156fcba4.jpg",url:"http://youth.chinamil.com.cn/",title:"青年军事"},{img:"http://img6.cache.netease.com/cnews/2012/11/2/201211021721442d4bd.jpg",url:"http://navy.81.cn/",title:"中国海军网"},{img:"http://img5.cache.netease.com/cnews/2012/11/2/201211021719041c113.jpg",url:"http://www.casic.com.cn/",title:"中国航天科工集团"},{img:"http://www.chinamil.com.cn/43821.files/logo.png",url:"http://www.chinamil.com.cn/",title:"中国军网"},{img:"http://www.dsti.net/Images/logo.jpg",url:"http://www.dsti.net/",title:"中国国防科技信息网"},{img:"https://x2.ifengimg.com/fe/shank/autumn1/logoMil.d8c654f3.png",url:"http://news.ifeng.com/mil/",title:"凤凰军事"},{img:"//rs2.huanqiucdn.cn/huanqiu/image/www/list/huanqiu_logo2x.png",url:"http://mil.huanqiu.com/",title:"环球网军事"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEKgwYJw_lurqKrVkQJ92c9QG_Z9Mp1BDTKA&usqp=CAU",url:"http://mil.tiexue.net/",title:"铁血军事"}]}},created:function(){this.getArmyNewsData()},methods:{getArmyNewsData:function(t){var a=this;this.axios({method:"GET",url:"/list",params:{apikey:this.appkey,category:"T1348648141035",page:t}}).then((function(t){a.armyNewsData=t.data.data})).catch((function(t){}))},handleCurrentChange:function(t){var a=t;this.getArmyNewsData(a)},goDetail:function(t){this.$router.push({name:"Detail",query:{id:t}})}}}),n=c,l=i("2877"),r=Object(l["a"])(n,s,e,!1,null,"c5c5c768",null);a["default"]=r.exports},c63b:function(t,a,i){}}]);
//# sourceMappingURL=chunk-2f1caf1d.ebf39939.js.map