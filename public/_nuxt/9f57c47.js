(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7388ab72",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";r(9),r(5),r(7),r(13),r(10),r(14);var n=r(15),o=r(2),c=(r(48),r(88));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{title:"Q Board",user:null}},created:function(){var t=this;this.bindQuestions(),this.bindAnswers(),this.$fire.auth.onAuthStateChanged((function(e){e?(t.user=e,"sample"===t.user.photoURL&&(t.user.photoURL=null)):t.user=null}))},methods:f(f({},Object(c.b)({bindQuestions:"questions/bind",bindAnswers:"answers/bind"})),{},{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fire.auth.signOut();case 2:t.user=null;case 3:case"end":return e.stop()}}),e)})))()}})},v=r(90),h=r(124),m=r.n(h),y=r(404),w=r(405),_=r(182),O=r(392),j=r(391),x=r(411),$=r(406),I=r(407),V=r(263),C=r(261),A=r(408),E=r(410),S=r(409),U=r(258),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{fixed:"",app:""}},[r("v-spacer"),t._v(" "),r("v-toolbar-title",{staticStyle:{"padding-right":"10px"},domProps:{textContent:t._s(t.title)}}),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"50px"},attrs:{src:"/logo/favicon_scsk.jpg"}})]),t._v(" "),r("v-spacer"),t._v(" "),t.user?r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({},n),[r("v-avatar",{attrs:{size:"36",color:"primary"}},[t.user.photoURL?r("v-img",{attrs:{src:t.user.photoURL}}):r("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.user.displayName.slice(0,2)))])],1),t._v(" "),r("strong",{staticClass:"mx-3"},[t._v(t._s(t.user.displayName))])],1)]}}])},[t._v(" "),r("v-card",[r("v-list-item-content",{staticClass:"justify-center"},[r("div",{staticClass:"mx-auto text-center px-3"},[r("v-avatar",{attrs:{color:"primary"}},[t.user.photoURL?r("v-img",{attrs:{src:t.user.photoURL}}):r("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.user.displayName.slice(0,2)))])],1),t._v(" "),r("h3",[t._v(t._s(t.user.displayName))]),t._v(" "),r("p",{staticClass:"text-caption mt-1"},[t._v("\n              "+t._s(t.user.email)+"\n            ")]),t._v(" "),r("v-divider",{staticClass:"my-3"}),t._v(" "),r("v-btn",{attrs:{depressed:"",rounded:"",text:""},on:{click:t.logout}},[t._v(" Logout ")])],1)])],1)],1):r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/auth/login"}},[t._v("\n      Sing In / Sign Up\n    ")])],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:y.a,VAppBar:w.a,VAvatar:_.a,VBtn:O.a,VCard:j.a,VContainer:x.a,VDivider:$.a,VFooter:I.a,VImg:V.a,VListItemContent:C.a,VMain:A.a,VMenu:E.a,VSpacer:S.a,VToolbarTitle:U.a})},275:function(t,e,r){r(276),t.exports=r(277)},296:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.app,r=t.redirect;if(!e.$fire.auth.currentUser)return r("/auth/login")}},301:function(t,e,r){"use strict";r(237)},302:function(t,e,r){var n=r(19)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},368:function(t,e,r){"use strict";r.r(e),r.d(e,"mutations",(function(){return n}));var n=r(60).b},369:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return f})),r.d(e,"actions",(function(){return d}));r(7),r(35),r(11),r(30),r(41),r(23),r(5),r(42),r(55),r(25);var n=r(60);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l=function(){return{items:[]}},f={all:function(t){return t.items},byId:function(t){return function(e){var r=t.items.filter((function(t){return t.id===e}));return r.length>0?r[0]:null}},byQuestion:function(t){return function(e){return t.items.filter((function(t){return t.question_uid===e}))}},countAudience:function(t){return function(e){var r,n=t.items.filter((function(t){return t.question_uid===e})),c=0,l=o(n);try{for(l.s();!(r=l.n()).done;){c+=r.value.users.length}}catch(t){l.e(t)}finally{l.f()}return c}}},d={bind:Object(n.a)((function(t){return(0,t.bindFirestoreRef)("items",this.$fire.firestore.collection("answers"))})),add:Object(n.a)((function(t,e){var title=e.title,r=e.detail,n=e.userId,o=e.questionId;return this.$fire.firestore.collection("answers").add({title:title,detail:r,userId:n,question_uid:o})})),remove:Object(n.a)((function(t,e){var r=t.getters,n=e.answerId,o=this.$fire.auth().currentUser;if(null===o)throw new Error("is not logged in");var c=r.byId(n);if(!c)throw new Error("invalid answer id");if(c.admin_uid!==o.uid)throw new Error("permission denied");return this.$fire.firestore.collection("answers").doc(n).delete()})),join:Object(n.a)((function(t,e){var r=t.getters,n=e.answerId,o=this.$fire.auth.currentUser;if(null===o)throw new Error("is not logged in");if(!r.byId(n))throw new Error("invalid answer id");return this.$fire.firestore.collection("answers").doc(n).update({users:this.$fireModule.firestore.FieldValue.arrayUnion(o.uid)})})),leave:Object(n.a)((function(t,e){var r=t.getters,n=e.answerId,o=this.$fire.auth.currentUser;if(null===o)throw new Error("is not logged in");if(!r.byId(n))throw new Error("invalid answer id");return this.$fire.firestore.collection("answers").doc(n).update({users:this.$fireModule.firestore.FieldValue.arrayRemove(o.uid)})}))}},370:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"actions",(function(){return l}));r(7);var n=r(60),o=function(){return{items:[]}},c={all:function(t){return t.items},byId:function(t){return function(e){var r=t.items.filter((function(t){return t.id===e}));return r.length>0?r[0]:null}},byCategory:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?t.items.filter((function(t){return t.category===e})):t.items}}},l={bind:Object(n.a)((function(t){return(0,t.bindFirestoreRef)("items",this.$fire.firestore.collection("questions"))})),add:Object(n.a)((function(t,e){var r=e.user,n=e.category,o=e.date,title=e.title,c=e.detail,l=e.lebel;return this.$fire.firestore.collection("questions").add({user:r,date:o,category:n,title:title,detail:c,lebel:l})}))}},81:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(301),r(90)),c=r(124),l=r.n(c),f=r(404),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[275,24,7,25]]]);