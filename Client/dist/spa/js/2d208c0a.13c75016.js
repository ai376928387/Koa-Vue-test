(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d208c0a"],{a5aa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[a("q-toolbar",[a("q-toolbar-title",[a("q-avatar",[a("img",{staticStyle:{"max-width":"50px"},attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),t._v("\n        Title\n      ")],1)],1)],1),a("q-drawer",{attrs:{side:"left",bordered:""},model:{value:t.drawerLeft,callback:function(e){t.drawerLeft=e},expression:"drawerLeft"}},[a("div",{staticClass:"bg-brown text-center text-white flex flex-center",staticStyle:{height:"150px"}},[a("p",[t._v("Here is main menu")])]),a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","border-right":"1px solid #ddd"}},[a("q-list",{attrs:{padding:""}},t._l(t.menu,function(e,r){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:r,attrs:{clickable:"",to:{path:e.route}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[t._v("\n            "+t._s(e.name)+"\n          ")])],1)}),1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],n={data:function(){return{drawerLeft:!0,menu:[{name:"Dashboard",icon:"dashboard",route:"/dashboard"},{name:"Items",icon:"shopping_cart",route:"/items"},{name:"Activity",icon:"local_activity",route:"/activity"},{name:"Contacts",icon:"contact_mail",route:"/contacts"}]}}},o=n,s=a("2877"),c=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports}}]);