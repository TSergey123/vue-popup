(function(t){function e(e){for(var n,o,i=e[0],u=e[1],s=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),c()}function c(){for(var t,e=0;e<a.length;e++){for(var c=a[e],n=!0,i=1;i<c.length;i++){var u=c[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-popup/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"049c":function(t,e,c){},"17da":function(t,e,c){},"23f4":function(t,e,c){},"25d5":function(t,e,c){"use strict";c("3a0f")},"3a0f":function(t,e,c){},"3e0a":function(t,e,c){"use strict";c("abe3")},"546a":function(t,e,c){t.exports=c.p+"img/5.10ed5101.jpg"},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("5530"),a=c("5502"),o={SET_MOBILE:function(t){var e=t.commit;e("SWITCH_MOBILE")},SET_DESKTOP:function(t){var e=t.commit;e("SWITCH_DESKTOP")},ADD_TO_CART:function(t,e){var c=t.commit;c("SET_CART",e)},DELETE_FROM_CART:function(t,e){var c=t.commit;c("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM:function(t,e){var c=t.commit;c("INCREMENT",e)},DECREMENT_CART_ITEM:function(t,e){var c=t.commit;c("DECREMENT",e)},GET_SEARCH_VALUE_TO_VUEX:function(t,e){var c=t.commit;c("SET_SEARCH_VALUE_TO_VUEX",e)}},i=c("1da1"),u=(c("96cf"),c("bc3a")),s=c.n(u),l={GET_PRODUCTS_FROM_API:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var c,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.commit,e.prev=1,e.next=4,s()("http://localhost:3000/products",{method:"GET"});case 4:return n=e.sent,c("SET_PRODUCTS_TO_STATE",n.data),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e["catch"](1),console.log(e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},p=(c("d81d"),c("a434"),{SET_SEARCH_VALUE_TO_VUEX:function(t,e){t.searchValue=e},SWITCH_MOBILE:function(t){t.isMobile=!0,t.isDesktop=!1},SWITCH_DESKTOP:function(t){t.isMobile=!1,t.isDesktop=!0},SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){var c=!1;t.cart.length?(t.cart.map((function(t){t.article===e.article&&(c=!0,t.quantity++)})),c||t.cart.push(e)):t.cart.push(e)},REMOVE_FROM_CART:function(t,e){t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--}}),d={IS_MOBILE:function(t){return t.isMobile},IS_DESKTOP:function(t){return t.isDesktop},PRODUCTS:function(t){return t.products},CART:function(t){return t.cart},SEARCH_VALUE:function(t){return t.searchValue}},O=Object(r["a"])(Object(r["a"])({},o),l),b=new a["a"].Store({state:{searchValue:"",products:[],cart:[]},mutations:p,actions:O,getters:d}),f=b,h={class:"wrapper"};function j(t,e,c,r,a,o){var i=Object(n["z"])("v-header"),u=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["g"])(n["a"],null,[Object(n["i"])(i),Object(n["h"])("div",h,[(Object(n["r"])(),Object(n["e"])(n["b"],null,[Object(n["i"])(u)],1024))])],64)}c("b0c0"),c("ac1f"),c("841c");var m=c("cf05"),_=c.n(m),g={class:"header"},E=Object(n["h"])("img",{src:_.a,alt:"logo"},null,-1),T=Object(n["h"])("h1",null,"Open Cart",-1),v={class:"search"},C={class:"search__btn"},S={class:"search__btn"};function P(t,e,c,r,a,o){var i=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["g"])("div",g,[Object(n["i"])(i,{to:{name:"main-page"}},{default:Object(n["F"])((function(){return[E]})),_:1}),"catalog-list"===this.$route.name?(Object(n["r"])(),Object(n["e"])(i,{key:0,to:{name:"cart-list",params:{cartData:t.CART}}},{default:Object(n["F"])((function(){return[T]})),_:1},8,["to"])):Object(n["f"])("",!0),Object(n["h"])("div",v,[Object(n["G"])(Object(n["h"])("input",{type:"text",class:"search__field","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.searchValue=t})},null,512),[[n["D"],a.searchValue]]),Object(n["h"])("button",C,[Object(n["h"])("i",{class:"material-icons",onClick:e[1]||(e[1]=function(t){return o.search(a.searchValue)})},"search")]),Object(n["h"])("button",S,[Object(n["h"])("i",{class:"material-icons",onClick:e[2]||(e[2]=function(){return o.clearSearch&&o.clearSearch.apply(o,arguments)})},"cancel")])])])}var D={name:"search-field",props:{},computed:Object(r["a"])({},Object(a["c"])(["SEARCH_VALUE","CART"])),data:function(){return{searchValue:""}},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["GET_SEARCH_VALUE_TO_VUEX"])),{},{search:function(t){this.searchValue="",this.GET_SEARCH_VALUE_TO_VUEX(t),"/catalog-list"!==this.$route.path&&this.$router.push("/catalog-list")},clearSearch:function(t){this.searchValue="",this.GET_SEARCH_VALUE_TO_VUEX(t),"/catalog-list"!==this.$route.path&&this.$router.push("/catalog-list")}})},R=(c("61d4"),c("6b0d")),y=c.n(R);const A=y()(D,[["render",P]]);var I=A,M={name:"App",components:{VHeader:I},methods:Object(r["a"])({},Object(a["b"])(["SET_MOBILE","SET_DESKTOP"])),computed:Object(r["a"])({},Object(a["c"])(["IS_MOBILE","IS_DESKTOP"])),mounted:function(){var t=this;window.addEventListener("resize",(function(){window.innerWidth>767?(t.SET_DESKTOP(),console.log("desktop "+t.IS_DESKTOP)):(t.SET_MOBILE(),console.log("mobile "+t.IS_MOBILE))}))}};c("3e0a");const V=y()(M,[["render",j]]);var k=V,x=c("6c02"),B=function(t){return Object(n["u"])("data-v-ee45c9bc"),t=t(),Object(n["s"])(),t},U={class:"catalog__link"},w=B((function(){return Object(n["h"])("div",null,"Back to catalog",-1)})),L={class:"cart-wrapper"},F={key:0},N={class:"cart__total"},H=B((function(){return Object(n["h"])("p",null,"Total:",-1)}));function $(t,e,c,r,a,o){var i=Object(n["z"])("router-link"),u=Object(n["z"])("cart-item");return Object(n["r"])(),Object(n["g"])("div",null,[Object(n["h"])("div",U,[Object(n["i"])(i,{class:"catalog__link-to-cart",to:{name:"catalog-list"}},{default:Object(n["F"])((function(){return[w]})),_:1})]),Object(n["h"])("h1",null,"Cart("+Object(n["B"])(c.cartData.length)+")",1),Object(n["h"])("div",L,[(Object(n["r"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(c.cartData,(function(t,e){return Object(n["r"])(),Object(n["e"])(u,{key:t.article,cartItemData:t,onDeleteFromCart:function(t){return o.deleteFromCart(e)},onIncrement:function(t){return o.increment(e)},onDecrement:function(t){return o.decrement(e)}},null,8,["cartItemData","onDeleteFromCart","onIncrement","onDecrement"])})),128)),c.cartData.length?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["g"])("h1",F,"Пусто"))]),Object(n["h"])("div",N,[H,Object(n["h"])("p",null,Object(n["B"])(o.cartToTotal),1)])])}var q=c("b85c"),z=(c("d3b7"),{class:"cart-item"}),G={class:"cart-item__info"},K={class:"cart-item__quantity"},X={class:"cart-item__actions"};function W(t,e,c,r,a,o){return Object(n["r"])(),Object(n["g"])("div",z,[Object(n["h"])("div",G,[Object(n["h"])("p",null,Object(n["B"])(c.cartItemData.name),1),Object(n["h"])("p",null,Object(n["B"])(c.cartItemData.price),1),Object(n["h"])("p",null,Object(n["B"])(c.cartItemData.article),1)]),Object(n["h"])("div",K,[Object(n["h"])("span",{class:"cart-item__quantity-button",onClick:e[0]||(e[0]=function(){return o.decrementItem&&o.decrementItem.apply(o,arguments)})},"-"),Object(n["h"])("p",null,"QTY: "+Object(n["B"])(c.cartItemData.quantity),1),Object(n["h"])("span",{class:"cart-item__quantity-button",onClick:e[1]||(e[1]=function(){return o.incrementItem&&o.incrementItem.apply(o,arguments)})},"+")]),Object(n["h"])("div",X,[Object(n["h"])("button",{onClick:e[2]||(e[2]=function(t){return o.deleteFromCart(c.cartItemData.price)})},"Delete")])])}var J={name:"cart-item",props:{cartItemData:{type:Object,default:function(){}}},data:function(){return{quantity:0}},methods:{incrementItem:function(){this.$emit("increment")},decrementItem:function(){this.$emit("decrement")},deleteFromCart:function(t){this.$emit("deleteFromCart"),console.log(t)}}};c("25d5");const Q=y()(J,[["render",W]]);var Y=Q,Z={name:"cart-list",components:{CartItem:Y},props:{cartData:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"])),{},{increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}}),computed:{cartToTotal:function(){var t=[];if(this.cartData.length){var e,c=Object(q["a"])(this.cartData);try{for(c.s();!(e=c.n()).done;){var n=e.value;t.push(n.price*n.quantity)}}catch(r){c.e(r)}finally{c.f()}return t=t.reduce((function(t,e){return t+e})),t}return 0}}};c("fb0d");const tt=y()(Z,[["render",$],["__scopeId","data-v-ee45c9bc"]]);var et=tt,ct={class:"catalog__header"},nt={class:"catalog__link"},rt={class:"range-slider"},at={class:"range-values"},ot={class:"catalog"},it=Object(n["h"])("h1",null,"Catalog",-1),ut={class:"catalog__list"},st={key:0};function lt(t,e,c,r,a,o){var i=Object(n["z"])("router-link"),u=Object(n["z"])("custom-select"),s=Object(n["z"])("catalog-item");return Object(n["r"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",ct,[Object(n["h"])("div",nt,[Object(n["i"])(i,{to:{name:"cart-list",params:{cartData:t.CART}}},{default:Object(n["F"])((function(){return[Object(n["h"])("div",null,"Cart: "+Object(n["B"])(t.CART.length),1)]})),_:1},8,["to"])]),Object(n["i"])(u,{selected:a.selected,options:a.categories,onSelect:o.sortByCategories,isExpanded:t.IS_DESKTOP},null,8,["selected","options","onSelect","isExpanded"]),Object(n["h"])("div",rt,[Object(n["G"])(Object(n["h"])("input",{type:"range",min:"0",max:"10000",step:"100","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.minPrice=t}),onChange:e[1]||(e[1]=function(){return o.setRangeSliders&&o.setRangeSliders.apply(o,arguments)})},null,544),[[n["D"],a.minPrice]]),Object(n["G"])(Object(n["h"])("input",{type:"range",min:"0",max:"10000",step:"100","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.maxPrice=t}),onChange:e[3]||(e[3]=function(){return o.setRangeSliders&&o.setRangeSliders.apply(o,arguments)})},null,544),[[n["D"],a.maxPrice]])]),Object(n["h"])("div",at,[Object(n["h"])("p",null,"Min: "+Object(n["B"])(a.minPrice),1),Object(n["h"])("p",null,"Max: "+Object(n["B"])(a.maxPrice),1),Object(n["h"])("p",null,"products found: "+Object(n["B"])(o.filteredProducts.length),1)])]),Object(n["h"])("div",ot,[it,Object(n["h"])("div",ut,[(Object(n["r"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(o.filteredProducts,(function(t){return Object(n["r"])(),Object(n["e"])(s,{key:t.article,productData:t,onAddToCart:o.addToCart},null,8,["productData","onAddToCart"])})),128)),o.filteredProducts.length?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["g"])("span",st,"Потереби ползунок"))])])],64)}var pt=c("2909"),dt=(c("4de4"),c("caad"),c("2532"),{class:"v-catalog-item"}),Ot=["src"],bt=["src"];function ft(t,e,r,a,o,i){var u=this,s=Object(n["z"])("item-popup");return Object(n["r"])(),Object(n["g"])("div",dt,[o.isPopupVisible?(Object(n["r"])(),Object(n["e"])(s,{key:0,popupTitle:r.productData.name,onClosePopup:i.closePopup},{default:Object(n["F"])((function(){return[Object(n["h"])("img",{src:c("7584")("./".concat(r.productData.image)),class:"v-catalog-item__image",alt:"img"},null,8,Ot),Object(n["h"])("p",null,Object(n["B"])(r.productData.name),1),Object(n["h"])("p",null,Object(n["B"])(r.productData.price),1),Object(n["h"])("p",null,Object(n["B"])(r.productData.category),1)]})),_:1},8,["popupTitle","onClosePopup"])):Object(n["f"])("",!0),Object(n["h"])("img",{src:c("7584")("./".concat(r.productData.image)),class:"v-catalog-item__image",alt:"img"},null,8,bt),Object(n["h"])("p",null,Object(n["B"])(r.productData.name),1),Object(n["h"])("p",null,Object(n["B"])(i.toFix(r.productData.price)),1),Object(n["h"])("button",{onClick:e[0]||(e[0]=function(t){i.addToCart(),u.count+=1})},"Add to cart :"+Object(n["B"])(o.count),1),Object(n["h"])("button",{class:"v-catalog-item__show-popup",onClick:e[1]||(e[1]=function(){return i.showPopup&&i.showPopup.apply(i,arguments)})},"show popup")])}c("b680");var ht={class:"v-popup__block"},jt={class:"v-popup"},mt={class:"v-popup__wrapper"},_t={class:"v-popup__header"},gt={class:"v-popup__content"},Et=Object(n["h"])("div",{class:"v-popup__footer"},null,-1);function Tt(t,e,c,r,a,o){return Object(n["r"])(),Object(n["g"])("div",ht,[Object(n["h"])("div",jt,[Object(n["h"])("div",mt,[Object(n["h"])("div",_t,[Object(n["h"])("h3",null,Object(n["B"])(c.popupTitle),1),Object(n["h"])("span",null,[Object(n["h"])("i",{onClick:e[0]||(e[0]=function(t){return o.closePopup()}),class:"material-icons icons__close"},"close")])]),Object(n["h"])("div",gt,[Object(n["y"])(t.$slots,"default")]),Et])])])}var vt={name:"item-popup",props:{popupTitle:{type:String,default:"PopUp name"}},methods:{closePopup:function(){this.$emit("closePopup")}}};c("e9e5");const Ct=y()(vt,[["render",Tt]]);var St=Ct,Pt={name:"catalog-item",components:{ItemPopup:St},props:{productData:{type:Object,default:function(){return{}}}},data:function(){return{count:0,isPopupVisible:!1}},mounted:function(){this.productData.quantity},computed:{},methods:{toFix:function(t){return t=parseFloat(t),t.toFixed(2)+" ₽"},addToCart:function(){this.$emit("addToCart",this.productData)},showPopup:function(){this.isPopupVisible=!0},closePopup:function(){this.isPopupVisible=!1}}};c("ac36");const Dt=y()(Pt,[["render",ft]]);var Rt=Dt,yt={class:"select"},At={key:0,class:"options"},It=["onClick"];function Mt(t,e,c,r,a,o){return Object(n["r"])(),Object(n["g"])("div",yt,[Object(n["h"])("p",{class:"title",onClick:e[0]||(e[0]=function(t){return a.areOptionsVisible=!a.areOptionsVisible})},Object(n["B"])(c.selected),1),a.areOptionsVisible||c.isExpanded?(Object(n["r"])(),Object(n["g"])("div",At,[(Object(n["r"])(!0),Object(n["g"])(n["a"],null,Object(n["x"])(c.options,(function(t){return Object(n["r"])(),Object(n["g"])("p",{class:"options__items",key:t.value,onClick:function(e){return o.selectOption(t)}},Object(n["B"])(t.name),9,It)})),128))])):Object(n["f"])("",!0)])}var Vt={name:"custom-select",props:{options:{type:Array,default:function(){return[]}},selected:{type:String,default:""},isExpanded:{type:Boolean,default:!1}},data:function(){return{areOptionsVisible:!1}},methods:{selectOption:function(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect:function(){this.areOptionsVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeUnmount:function(){document.removeEventListener("click",this.hideSelect)}};c("c981");const kt=y()(Vt,[["render",Mt]]);var xt=kt,Bt={name:"catalog-list",components:{CatalogItem:Rt,CustomSelect:xt},props:{},computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])(["PRODUCTS","CART","IS_MOBILE","IS_DESKTOP","SEARCH_VALUE"])),{},{filteredProducts:function(){return this.sortedProducts.length?this.sortedProducts:[]}}),watch:{SEARCH_VALUE:function(){this.sortProductsBySearchValue(this.SEARCH_VALUE)}},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{sortProductsBySearchValue:function(t){this.sortProducts=Object(pt["a"])(this.PRODUCTS),this.sortedProducts=t?this.sortedProducts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.PRODUCTS},addToCart:function(t){this.ADD_TO_CART(t)},sortByCategories:function(t){var e=this;this.sortedProducts=Object(pt["a"])(this.PRODUCTS),t&&(this.selected=t.name),this.sortedProducts=this.sortedProducts.filter((function(t){return t.price>=e.minPrice&&t.price<=e.maxPrice})),"Все"!==this.selected&&(this.sortedProducts=this.sortedProducts.filter((function(t){return t.category===e.selected})))},setRangeSliders:function(){if(this.minPrice>this.maxPrice){var t=this.maxPrice;this.maxPrice=this.minPrice,this.minPrice=t}this.sortByCategories()}}),mounted:function(){this.GET_PRODUCTS_FROM_API(),this.sortByCategories()},data:function(){return{categories:[{name:"Все",value:"все"},{name:"Мужские",value:"м"},{name:"Женские",value:"ж"}],selected:"Все",sortedProducts:[],minPrice:0,maxPrice:1e4}}};c("8ace");const Ut=y()(Bt,[["render",lt]]);var wt=Ut,Lt=Object(n["h"])("h1",null,"Main page",-1),Ft=Object(n["h"])("h1",null,"To Catalog",-1);function Nt(t,e,c,r,a,o){var i=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["g"])("div",null,[Lt,Object(n["i"])(i,{to:{name:"catalog-list"}},{default:Object(n["F"])((function(){return[Ft]})),_:1})])}var Ht={};const $t=y()(Ht,[["render",Nt]]);var qt=$t,zt=[{path:"/",name:"main-page",component:qt},{path:"/catalog-list",name:"catalog-list",component:wt},{path:"/cart",name:"cart-list",component:et,props:!0}],Gt=Object(x["a"])({history:Object(x["b"])("/vue-popup/"),routes:zt}),Kt=Gt,Xt=(c("d1e78"),Object(n["d"])(k));Xt.use(f).use(Kt).mount("#app")},"593c":function(t,e,c){t.exports=c.p+"img/2.c0e693f1.jpg"},"61d4":function(t,e,c){"use strict";c("a2e4")},6800:function(t,e,c){t.exports=c.p+"img/3.50e4c188.jpg"},7584:function(t,e,c){var n={"./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800","./4.jpg":"ffd7","./5.jpg":"546a","./6.jpeg":"f5db"};function r(t){var e=a(t);return c(e)}function a(t){if(!c.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="7584"},"7cf3":function(t,e,c){},"8ace":function(t,e,c){"use strict";c("9253")},9253:function(t,e,c){},"98a8":function(t,e,c){t.exports=c.p+"img/1.dc055ef9.jpg"},a2e4:function(t,e,c){},abe3:function(t,e,c){},ac36:function(t,e,c){"use strict";c("7cf3")},c981:function(t,e,c){"use strict";c("23f4")},cf05:function(t,e,c){t.exports=c.p+"img/logo.82b9c7a5.png"},e9e5:function(t,e,c){"use strict";c("049c")},f5db:function(t,e,c){t.exports=c.p+"img/6.da5781a0.jpeg"},fb0d:function(t,e,c){"use strict";c("17da")},ffd7:function(t,e,c){t.exports=c.p+"img/4.51942487.jpg"}});
//# sourceMappingURL=app.b7d325f6.js.map