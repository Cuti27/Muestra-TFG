(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe31b154"],{"0418":function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("h1",[e._v(e._s(e.name))]),e._t("default")],2)},n=[],i={props:{name:String}},c=i,a=(o("3ee8"),o("2877")),l=Object(a["a"])(c,s,n,!1,null,"52cba19a",null);t["a"]=l.exports},"07ad":function(e,t,o){"use strict";o("afda")},"3bef":function(e,t,o){"use strict";o("e8b8")},"3ee8":function(e,t,o){"use strict";o("770e")},"4c36":function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sourceList"},[o("div",{staticClass:"title"},[e._t("default")],2),o("div",{staticClass:"sources"},e._l(e.options,(function(t,s){return o("div",{key:t+s},[o("input",{attrs:{id:t+"-"+s,type:"radio"}}),o("label",{class:{blanco:!1},attrs:{for:t+"-"+s}},[e._v(e._s(t))])])})),0)])},n=[],i={props:{options:{type:Array,required:!0}},data:function(){return{check:!0}}},c=i,a=(o("3bef"),o("2877")),l=Object(a["a"])(c,s,n,!1,null,"ca7e47a8",null);t["a"]=l.exports},"735f":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"view"},[o("header-custom",{attrs:{name:"Configuracion de Fertirrigación"}}),o("div",{staticClass:"phControl"},[o("div",{staticClass:"phPre"},[o("label",{attrs:{for:"phPre"}},[e._v("CONTROL DE pH EN PRERIEGO: ")]),o("v-switch",{attrs:{label:e.isActive(e.phPre)},model:{value:e.phPre,callback:function(t){e.phPre=t},expression:"phPre"}})],1),o("div",{staticClass:"phRie"},[o("label",{attrs:{for:"phRie"}},[e._v("CONTROL DE pH EN RIEGO: ")]),o("v-switch",{attrs:{label:e.isActive(e.phRie)},model:{value:e.phRie,callback:function(t){e.phRie=t},expression:"phRie"}})],1),o("div",{staticClass:"phPost"},[o("label",{attrs:{for:"phPost"}},[e._v("CONTROL DE pH EN POSTRIEGO: ")]),o("v-switch",{attrs:{label:e.isActive(e.phPost)},model:{value:e.phPost,callback:function(t){e.phPost=t},expression:"phPost"}})],1)]),o("div",{staticClass:"ph"},[o("number-selector",{attrs:{value:e.ph,min:0,max:14,placeholder:"pH"},on:{input:function(t){e.updatePH(parseInt(t))}}})],1),o("div",{staticClass:"controlAbono"},[o("label",{attrs:{for:"control"}},[e._v("CONTROL DE ABONADO: ")]),o("v-switch",{attrs:{label:e.isSecuencial},model:{value:e.control,callback:function(t){e.control=t},expression:"control"}})],1),o("div",{staticClass:"lineaAbono"},[o("source-selector",{attrs:{options:e.abonos}})],1),o("div",{staticClass:"selectorAbono"},[o("custom-select",{attrs:{button:"",selected:e.selected,values:e.sel},on:{change:function(t){e.selected=t}}})],1),o("div",{staticClass:"selector"},[o("custom-select",{attrs:{selected:e.medicionSelected,values:e.medicion},on:{change:function(t){e.medicionSelected=t}}})],1),o("div",{staticClass:"consigna"},[o("custom-input",{attrs:{type:e.typeConsigna,step:"1",placeholder:"Consignia"},model:{value:e.consigna,callback:function(t){e.consigna=t},expression:"consigna"}})],1),o("div",{staticClass:"tiempo"},[o("custom-input",{attrs:{type:"time",step:"1",placeholder:"Tiempo "},model:{value:e.tiempoAbono,callback:function(t){e.tiempoAbono=t},expression:"tiempoAbono"}})],1)],1)},n=[],i=o("891c"),c=o("42de"),a=o("ffcc"),l=o("4c36"),r=o("0418"),u={components:{numberSelector:i["a"],customSelect:c["a"],CustomInput:a["a"],SourceSelector:l["a"],headerCustom:r["a"]},data:function(){return{phPre:!1,phRie:!1,phPost:!1,control:!1,ph:0,selected:0,sel:["Abono 1","Abono 2","Abono 3","Abono 4","Abono 5","Abono 6"],medicion:["Tiempo","Volumen","Proporcional"],medicionSelected:0,consigna:"",tiempoAbono:0,abonos:[1,2,3,4,5,6,7]}},methods:{isActive:function(e){return e?"Activo":"Desactivo"},updatePH:function(e){console.log(e),this.ph=e}},computed:{isSecuencial:function(){return this.control?"Simultáneo":"Secuencial"},typeConsigna:function(){return 0==this.medicionSelected?"time":"number"}}},p=u,d=(o("07ad"),o("2877")),h=Object(d["a"])(p,s,n,!1,null,"54ee3a40",null);t["default"]=h.exports},"770e":function(e,t,o){},afda:function(e,t,o){},e8b8:function(e,t,o){}}]);
//# sourceMappingURL=chunk-fe31b154.d2e54641.js.map