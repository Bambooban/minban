(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-603494b6"],{"7fbb":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"game"},[t._m(0),s("div",{staticClass:"banner-content clearfix"},[s("div",{staticClass:"banner-box fl"},[s("div",{staticClass:"block"},[s("el-carousel",{attrs:{height:"400px"}},t._l(t.GameData.slice(0,6),(function(a,i){return s("el-carousel-item",{key:i},[s("img",{staticClass:"imgs auto-img",attrs:{src:a.images,alt:""},on:{click:function(s){return t.goDetail(a.id)}}})])})),1)],1)]),s("div",{staticClass:"cart-box fl "},t._l(t.GameData.slice(8,10),(function(a,i){return s("div",{key:i,staticClass:"cart-item",on:{click:function(s){return t.goDetail(a.id)}}},[s("img",{staticClass:"imgs",attrs:{src:a.images,alt:""}}),s("div",{staticClass:"text"},[t._v(t._s(a.title))])])})),0)]),s("div",{staticClass:"newList-content"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"new-list-left-box fl clearfix"},[t._l(t.GameData,(function(a,i){return s("div",{key:i,staticClass:"list-item fl",on:{click:function(s){return t.goDetail(a.id)}}},[s("div",{staticClass:"left-img"},[s("el-image",{staticClass:" err-imgs"},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("img",{staticClass:"a-img auto-img",attrs:{src:a.images,alt:""}})],1),s("div",{staticClass:"right-cont "},[s("div",{staticClass:"title"},[t._v(t._s(a.title))]),s("div",{staticClass:"text-cont"},[s("span",{staticClass:"post-name"},[t._v(t._s(a.posterNickName))]),s("span",{staticClass:"pub-time"},[t._v(t._s(a.publishTime))])])])])})),s("div",{staticClass:"pagination-page fl"},[s("el-pagination",{staticClass:"pag-box",attrs:{background:"",layout:"prev, pager, next","size-change":10,total:1e3,"current-change":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1)],2),s("div",{staticClass:"new-other-right-box fl"},[s("div",{staticClass:"other-list"},[s("div",{staticClass:"other-box-one"},[t._m(1),s("div",{staticClass:"recom-game"},[s("ul",t._l(t.recomGameData,(function(a,i){return s("li",{key:i,staticClass:"g-item"},[s("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])])})),0)])]),t._m(2),t._m(3)])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title-content clearfix"},[s("div",{staticClass:"title-box fl"},[s("div",{staticClass:"t-text"},[t._v("游戏>>>")])]),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"line-box fl"}),s("div",{staticClass:"ad-img-box fr"},[s("a",{attrs:{target:"_blank",href:"http://p.37gogo.com/s/1/1044/5063.html?ad_type=501&uid=1247809&wd=&bd_vid=12161441698409662099"}},[s("img",{staticClass:"ad-img auto-img",attrs:{src:"http://img.tg.37wan.com/u/2020/0610/1591765443296047.jpg",border:"0",alt:""}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"other-title"},[s("div",{staticClass:"ot-name"},[t._v("游戏推荐")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"other-box-three"},[s("div",{staticClass:"car-item"},[s("a",{attrs:{href:"http://www.code.twzui6.com/htmlcode/9843.html?cplaceid=191314428.602838547.32781377905",target:"_blank"}},[s("img",{staticClass:"auto-img",attrs:{src:"https://i04piccdn.sogoucdn.com/5957efdec458f063",alt:""}})]),s("div",{staticClass:"text"},[t._v("广告")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"other-box-three"},[s("div",{staticClass:"car-item"},[s("a",{attrs:{href:"http://web.4399.com/rxlz2/",target:"_blank"}},[s("img",{staticClass:"auto-img",attrs:{src:"https://i02piccdn.sogoucdn.com/429d2ed8ba27a731",alt:""}})]),s("div",{staticClass:"text"},[t._v("广告")])])])}],l=(s("ede5"),{name:"game",data:function(){return{currentPage:1,pageNum:"",GameData:[],recomGameData:[{title:"英雄联盟",url:"https://lol.qq.com/act/a20200819ninthyear/index.html?e_code=507042"},{title:"贪玩蓝月",url:"http://www.code.twzui6.com/htmlcode/9843.html?cplaceid=191314428.602838547.32781377905"},{title:"风暴英雄",url:"https://heroes.blizzard.cn/landing"},{title:"炉石传说",url:"https://hs.blizzard.cn/landing"},{title:"剑客传奇",url:"http://wan2.p0uqu.com/on/yx-xx/xianxia27/d7/d20200814-109/?sg_vid=RCOvrrmZ3Ok6MzZ-uwtVSqFRaBFR6H23y26_ZxX6666666uRvJMR6666666"},{title:"绝地求生",url:"https://pubg.qq.com/"}]}},created:function(){this.getGameData()},methods:{getGameData:function(t){var a=this;this.axios({method:"GET",url:"/list",params:{apikey:this.appkey,category:"T1348654151579",page:t}}).then((function(t){a.GameData=t.data.data})).catch((function(t){}))},handleCurrentChange:function(t){var a=t;this.getGameData(a)},goDetail:function(t){this.$router.push({name:"Detail",query:{id:t}})}}}),c=l,r=s("2877"),n=Object(r["a"])(c,i,e,!1,null,"3b134236",null);a["default"]=n.exports},ede5:function(t,a,s){}}]);
//# sourceMappingURL=chunk-603494b6.89a22197.js.map