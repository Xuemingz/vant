(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,s){(e.exports=s(11)(!1)).push([e.i,"\n.demo-sku .sku-container {\n    padding: 0 15px;\n}\n",""])},117:function(e,t,s){"use strict";var i=s(59);s.n(i).a},343:function(e,t,s){"use strict";s.r(t);var i={kdt_id:55,user_id:4674509,offline_id:0,activity_alias:"",sku:{tree:[{k:"颜色",k_id:"1",v:[{id:"30349",name:"天蓝色",imgUrl:"https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"}],k_s:"s1",count:2},{k:"尺寸",k_id:"2",v:[{id:"1193",name:"1"},{id:"1194",name:"2"}],k_s:"s2",count:2}],list:[{id:2259,price:100,discount:100,code:"",s1:"1215",s2:"1193",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:110,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2260,price:100,discount:100,code:"",s1:"1215",s2:"1194",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:0,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2257,price:100,discount:100,code:"",s1:"30349",s2:"1193",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:111,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2258,price:100,discount:100,code:"",s1:"30349",s2:"1194",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:6,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755}],price:"1.00",stock_num:227,collection_id:2261,collection_price:0,none_sku:!1,sold_num:0,min_price:"1.00",max_price:"1.00",messages:[{datetime:"0",disable_multiple:!1,disable:!1,multiple:"0",name:"留言1",disable_required:!1,disable_edit_name:!1,type:"text",disable_delete:!1,disable_type:!1,required:"1"},{datetime:"0",disable_multiple:!1,disable:!1,multiple:0,name:"留言2",disable_required:!1,disable_edit_name:!1,type:"id_no",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,multiple:0,name:"留言3",disable_required:!1,disable_edit_name:!1,type:"image",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,multiple:1,name:"留言4",disable_required:!1,disable_edit_name:!1,type:"text",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,name:"数字",multiple:0,disable_required:!1,disable_edit_name:!1,type:"tel",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,name:"邮件",multiple:0,disable_required:!1,disable_edit_name:!1,type:"email",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,name:"日期",multiple:0,disable_required:!1,disable_edit_name:!1,type:"date",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,name:"时间含日期",multiple:0,disable_required:!1,disable_edit_name:!1,type:"time",disable_delete:!1,disable_type:!1,required:0},{datetime:"0",disable_multiple:!1,disable:!1,name:"时间",multiple:0,disable_required:!1,disable_edit_name:!1,type:"time",disable_delete:!1,disable_type:!1,required:0}],hide_stock:!1},goods_id:"946755",alias:"2oml0r0n5vytj",quota:15,is_virtual:"0",quota_used:0,goods_info:{title:"测试商品",picture:"https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg",price:1,origin:""}},a=s(4),o={i18n:{"zh-CN":{title2:"自定义步进器相关配置",stepperTitle:"我要买",button1:"积分兑换",button2:"买买买"},"en-US":{title2:"Custom Stepper Related Config",stepperTitle:"Stepper title",button1:"Button",button2:"Button"}},data:function(){var e=this;return this.skuData=i,{showBase:!1,showCustom:!1,showStepper:!1,closeOnClickOverlay:!0,initialSku:{s1:"30349",s2:"1193"},customSkuValidator:function(e){return"请选择xxx"},customStepperConfig:{quotaText:"单次限购100件",stockFormatter:function(e){return"剩余"+e+"间"},handleOverLimit:function(t){var s=t.action,i=t.limitType,o=t.quota;"minus"===s?e.$toast("至少选择一件商品"):"plus"===s&&(i===a.a.QUOTA_LIMIT?e.$toast("限购"+o+"件"):e.$toast("库存不够了~~"))}},messageConfig:{uploadImg:function(e,t){return new Promise(function(e){setTimeout(function(){return e(t)},1e3)})},uploadMaxSize:3}}},methods:{onBuyClicked:function(e){this.$toast(JSON.stringify(e))},onAddCartClicked:function(e){this.$toast(JSON.stringify(e))},onPointClicked:function(){this.$toast("积分兑换")}}},d=(s(117),s(0)),n=Object(d.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("demo-section",[s("demo-block",{attrs:{title:e.$t("basicUsage")}},[s("div",{staticClass:"sku-container"},[s("van-sku",{attrs:{sku:e.skuData.sku,goods:e.skuData.goods_info,"goods-id":e.skuData.goods_id,"hide-stock":e.skuData.sku.hide_stock,quota:e.skuData.quota,"quota-used":e.skuData.quota_used,"reset-stepper-on-hide":"","reset-selected-sku-on-hide":"","disable-stepper-input":"","close-on-click-overlay":e.closeOnClickOverlay,"message-config":e.messageConfig,"custom-sku-validator":e.customSkuValidator},on:{"buy-clicked":e.onBuyClicked,"add-cart":e.onAddCartClicked},model:{value:e.showBase,callback:function(t){e.showBase=t},expression:"showBase"}}),s("van-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showBase=!0}}},[e._v(e._s(e.$t("basicUsage")))])],1)]),s("demo-block",{attrs:{title:e.$t("title2")}},[s("div",{staticClass:"sku-container"},[s("van-sku",{attrs:{sku:e.skuData.sku,goods:e.skuData.goods_info,"goods-id":e.skuData.goods_id,"hide-stock":e.skuData.sku.hide_stock,quota:e.skuData.quota,"quota-used":e.skuData.quota_used,"custom-stepper-config":e.customStepperConfig,"message-config":e.messageConfig},on:{"buy-clicked":e.onBuyClicked,"add-cart":e.onAddCartClicked},model:{value:e.showStepper,callback:function(t){e.showStepper=t},expression:"showStepper"}}),s("van-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showStepper=!0}}},[e._v(e._s(e.$t("title2")))])],1)]),s("demo-block",{attrs:{title:e.$t("advancedUsage")}},[s("div",{staticClass:"sku-container"},[s("van-sku",{attrs:{"stepper-title":e.$t("stepperTitle"),sku:e.skuData.sku,goods:e.skuData.goods_info,"goods-id":e.skuData.goods_id,"hide-stock":e.skuData.sku.hide_stock,quota:e.skuData.quota,"quota-used":e.skuData.quota_used,"show-add-cart-btn":"","reset-stepper-on-hide":"","initial-sku":e.initialSku,"message-config":e.messageConfig},on:{"buy-clicked":e.onBuyClicked,"add-cart":e.onAddCartClicked},scopedSlots:e._u([{key:"sku-header-price",fn:function(t){return[s("div",{staticClass:"van-sku__goods-price"},[s("span",{staticClass:"van-sku__price-symbol"},[e._v("￥")]),s("span",{staticClass:"van-sku__price-num"},[e._v(e._s(t.price))])])]}},{key:"sku-actions",fn:function(t){return[s("div",{staticClass:"van-sku-actions"},[s("van-button",{attrs:{"bottom-action":""},on:{click:e.onPointClicked}},[e._v(e._s(e.$t("button1")))]),s("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(e){t.skuEventBus.$emit("sku:buy")}}},[e._v(e._s(e.$t("button2")))])],1)]}}]),model:{value:e.showCustom,callback:function(t){e.showCustom=t},expression:"showCustom"}}),s("van-button",{attrs:{type:"primary",block:""},on:{click:function(t){e.showCustom=!0}}},[e._v(e._s(e.$t("advancedUsage")))])],1)])],1)},[],!1,null,null,null);n.options.__file="index.vue";t.default=n.exports},59:function(e,t,s){var i=s(116);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(10)(i,a);i.locals&&(e.exports=i.locals)}}]);