webpackJsonp([1],{"6+sB":function(t,n){},"7Otq":function(t,n,e){t.exports=e.p+"static/img/logo.7abe06c.png"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),a=e("//Fk"),s=e.n(a);var i="undifined"!=typeof XMLHttpRequest&&new XMLHttpRequest,o=function(t){return new s.a(function(n,e){!1===i&&e(new Error("Not XHR")),i.onreadystatechange=function(){4===i.readyState&&(200===i.status||304===i.status?n(i.responseText):e(new Error("Not Found")))},i.open("get",t,!0),i.send(null)})},u={name:"SideMenu",data:function(){return{menus:[]}},created:function(){var t=this;o("/static/menus.json").then(function(n){var e=JSON.parse(n);t.menus=e.menus})}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{attrs:{id:"nav"}},[e("ul",t._l(t.menus,function(n){return e("li",[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("ul",{staticClass:"subnav"},t._l(n.subMenus,function(n){return e("li",[e("router-link",{attrs:{to:n.path}},[t._v(t._s(n.name))])],1)}))])}))])},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("header",[n("a",{attrs:{href:"/"}},[n("img",{attrs:{id:"logo",src:e("7Otq"),alt:"慎思笃行"}})])])}]};var d={name:"App",components:{SideMenu:e("VU/8")(u,c,!1,function(t){e("6+sB")},null,null).exports,Header:e("VU/8")({name:"Header"},l,!1,function(t){e("tDdk")},null,null).exports}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),this._v(" "),n("SideMenu"),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var p=e("VU/8")(d,f,!1,function(t){e("VZYV")},null,null).exports,h=e("/ocq"),m={name:"Main",data:function(){return{content:'<div style="text-align:center;margin-top: 1rem;font-size:1.3rem;padding-left:80px;"><h2>博学之</h2><h2>审问之</h2><h2>慎思之</h2><h2>明辨之</h2><h2>笃行之</h2></div>'}},watch:{$route:function(t,n){var e=this,r="/static/note/"+t.params.folder+"/"+t.params.filename;o(r).then(function(t){e.content=t}).catch(function(t){})}}},v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"main"}},[n("div",{staticClass:"content",attrs:{id:"content"},domProps:{innerHTML:this._s(this.content)}})])},staticRenderFns:[]};var _=e("VU/8")(m,v,!1,function(t){e("Y0qJ")},null,null).exports;r.a.use(h.a);var g=new h.a({mode:"history",base:"/",routes:[{path:"/",name:"root",component:_},{path:"/:folder/:filename",name:"Main",component:_}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:g,components:{App:p},template:"<App/>"})},VZYV:function(t,n){},Y0qJ:function(t,n){},tDdk:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d950161f39e0ecf12aec.js.map
