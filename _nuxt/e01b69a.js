(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{360:function(t,e,l){},365:function(t,e,l){"use strict";l(360)},366:function(t,e,l){"use strict";l.r(e);l(183),l(51);var n={name:"AppGlitchButton",props:{block:{type:Boolean,default:!1},buttonClass:{type:String,default:""},outlined:{type:Boolean,default:!1},text:{type:String,default:null},minWidth:{type:[String,Number],default:"auto"},xSmall:{type:Boolean,default:!1},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1}}},o=(l(365),l(37)),r=l(64),c=l.n(r),d=l(356),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("v-btn",{staticClass:"glitch-main",class:t.buttonClass,attrs:{color:"primary-font-light",outlined:t.outlined,block:t.block,"min-width":t.minWidth,"x-small":t.xSmall,small:t.small,large:t.large,"x-large":t.xLarge}},[t._t("default")],2),e("v-btn",{staticClass:"glitch glitch-primary",class:t.buttonClass,attrs:{color:"primary",outlined:t.outlined,block:t.block,"min-width":t.minWidth,"x-small":t.xSmall,small:t.small,large:t.large,"x-large":t.xLarge}},[t._t("default")],2),e("v-btn",{staticClass:"glitch glitch-red",class:t.buttonClass,attrs:{color:"light-red",outlined:t.outlined,block:t.block,"min-width":t.minWidth,"x-small":t.xSmall,small:t.small,large:t.large,"x-large":t.xLarge}},[t._t("default")],2)],1)}),[],!1,null,"087dec61",null);e.default=component.exports;c()(component,{VBtn:d.a})},367:function(t,e,l){"use strict";l(51),l(75);var n=l(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var l=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){l.isActive={open:!0,close:!1}[t]},n)}}}),o=l(84),r=l(31),c=l(15);e.a=Object(r.a)(n,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},376:function(t,e,l){"use strict";l.r(e);l(55),l(20),l(56);var n={name:"HomeHero",components:{AppGlitchButton:l(366).default},computed:{title:function(){return["Hi,","I'm Ruslan,","web developer"].map((function(t){return t.split("")}))}}},o=l(37),r=l(64),c=l.n(r),d=l(367),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"fullscreen-page w-100 d-flex align-center"},[e("div",{staticClass:"d-flex flex-column align-start"},[e("h1",{staticClass:"text-h1 mb-4 headline"},t._l(t.title,(function(l,n){return e("div",{key:n,staticClass:"d-flex align-center"},t._l(l,(function(l,n){return e("v-hover",{key:n,attrs:{"close-delay":700},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[e("span",{class:{"mx-3":" "===l,"squeeze-animation primary--text":o}},[t._v(t._s(l))])]}}],null,!0)})})),1)})),0),t._m(0),e("app-glitch-button",{attrs:{"min-width":"420","x-large":"",outlined:""},nativeOn:{click:function(e){return t.$store.dispatch("home/setSection",4)}}},[t._v("Get in touch")])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-center text-h3 text--disabled mb-8"},[e("span",[t._v("< Front-End Developer")]),e("span",{staticClass:"mx-3"},[t._v("/")]),e("span",[t._v("Vue.js Developer >")])])}],!1,null,null,null);e.default=component.exports;c()(component,{AppGlitchButton:l(366).default}),c()(component,{VHover:d.a})}}]);