webpackJsonp([3],{104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n(73),o=n.n(l);new i.a({render:function(e){return e(o.a)}}).$mount("#app")},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(62),l=n.n(i);t.default={components:{InlineDesc:l.a},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title);return{display:"block",width:Math.min(e?5:this.title.length+1,14)+"em"}}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number]},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)},value:function(e){this.currentValue=e}}}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(n(3),n(61)),l=n.n(i),o=n(22),s=n.n(o),r=n(261),a=n.n(r),u=n(20),c=n.n(u),d=n(4),h=n.n(d);t.default={components:{Alert:l.a,Group:s.a,XSwitch:a.a,Cell:c.a,HbHead:h.a},data:function(){return{show:!1,show1:!1,show2:!1}},methods:{onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},showPlugin:function(){this.$vux.alert.show({title:"VUX is Cool",content:"哈哈哈",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}})},showPluginAuto:function(){var e=this;this.showPlugin(),setTimeout(function(){e.$vux.alert.hide()},3e3)}}}},192:function(e,t){},193:function(e,t){},233:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"alert弹窗"}}),e._v(" "),n("group",{attrs:{title:"prop:content"}},[n("x-switch",{attrs:{title:"显示"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}})],1),e._v(" "),n("div",[n("alert",{attrs:{title:"温馨提示",content:"这里是内容了"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}})],1),e._v(" "),n("group",{attrs:{title:"插件"}},[n("cell",{attrs:{title:"显示","is-link":""},nativeOn:{click:function(t){e.showPlugin(t)}}}),e._v(" "),n("cell",{attrs:{title:"3S后关闭","is-link":""},nativeOn:{click:function(t){e.showPluginAuto(t)}}})],1)],1)},staticRenderFns:[]}},234:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[n("div",{staticClass:"weui-cell__bd"},[n("label",{staticClass:"weui-label",style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?n("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),n("div",{staticClass:"weui-cell__ft"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{__c:function(t){var n=e.currentValue,i=t.target,l=!!i.checked;if(Array.isArray(n)){var o=e._i(n,null);l?o<0&&(e.currentValue=n.concat(null)):o>-1&&(e.currentValue=n.slice(0,o).concat(n.slice(o+1)))}else e.currentValue=l}}})])])},staticRenderFns:[]}},261:function(e,t,n){n(193);var i=n(0)(n(122),n(234),null,null);e.exports=i.exports},73:function(e,t,n){n(192);var i=n(0)(n(132),n(233),null,null);e.exports=i.exports}},[104]);