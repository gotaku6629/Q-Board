(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{384:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(386),r=n(0),c=Object(r.e)("v-card__actions"),d=Object(r.e)("v-card__subtitle"),l=Object(r.e)("v-card__text"),v=Object(r.e)("v-card__title");o.a},425:function(t,e,n){"use strict";n.r(e);n(29),n(35);var o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r={props:{questionId:{type:String,required:!0}},data:function(){return{isLogined:!1}},computed:{question:function(){var t=this.$store.getters["questions/byId"](this.questionId),e=t.start.toDate(),n=t.end.toDate();return t.date="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate(),"/(").concat(o[e.getDay()],")"),t.time="".concat(e.getHours(),":").concat(("00"+e.getMinutes()).slice(-2),"~").concat(n.getHours(),":").concat(("00"+n.getMinutes()).slice(-2)),t},answer:function(){return this.$store.getters["answers/byQuestion"](this.questionId)},audience:function(){return this.$store.getters["rooms/countAudience"](this.questionId)}},created:function(){var t=this;this.$fire.auth.onAuthStateChanged((function(e){t.isLogined=!!e}))}},c=n(89),d=n(122),l=n.n(d),v=n(388),_=n(386),h=n(384),f=n(258),x=n(404),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-10",attrs:{width:"450px"}},[n("v-img",{attrs:{src:t.question.thumbnail2,height:"635px"}},[n("div",{staticClass:"pa-3 text-h5",staticStyle:{position:"absolute",bottom:"0","background-color":"rgba(107, 107, 107, 0.5)"}},[n("span",{staticClass:"primary--text"},[t._v("●")]),t._v(" "),n("strong",[t._v(" "+t._s(t.answers.length)+" Answers/ ")]),t._v(" "),n("strong",[t._v(" "+t._s(t.audience)+" Audience ")])])]),t._v(" "),n("v-card-text",{staticClass:"text-center"},[n("h2",[t._v(t._s(t.question.date))]),t._v(" "),n("h2",[t._v(t._s(t.question.time))])]),t._v(" "),n("v-card-actions",{staticClass:"flex-column",staticStyle:{height:"100px"}},[n("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"primary flex-grow-0",nuxt:"",to:"/questions/"+t.question.id}},[t._v("Check Question Room")]),t._v(" "),n("v-spacer"),t._v(" "),t.isLogined?n("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"secondary flex-grow-0",nuxt:"",to:"/questions/"+t.question.id+"/createAnswer"}},[t._v("+Create Answer")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:_.a,VCardActions:h.a,VCardText:h.b,VImg:f.a,VSpacer:x.a})}}]);