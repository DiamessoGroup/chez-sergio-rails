(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomePage"],{2922:function(t,e,a){},"2a10":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProductList"},[a("div",{staticClass:"w3-row-padding w3-center products",staticStyle:{"margin-top":"64px"}},t._l(t.pizzas,(function(e){return a("div",{key:e.id,staticClass:"w3-quarter w3-margin-bottom product"},[a("router-link",{attrs:{to:{name:"ProductDetail",params:{id:e.id}}}},[a("img",{staticClass:"image",staticStyle:{width:"100%"},attrs:{alt:e.name,src:e.image,"data-test":"image"}})]),a("p",{staticClass:"w3-large w3-margin-top w3-text-orange name"},[t._v(" "+t._s(e.name)+" "),t.quantityInCartGetter(e)>0?a("span",{staticClass:"badge rounded-pill badge-product-list badge-add"},[t._v(t._s(t.quantityInCartGetter(e)))]):t._e()]),a("p",{staticClass:"w3-large w3-margin-top price"},[t._v("$"+t._s(e.price))]),a("p",{staticClass:"w3-margin-top w3-margin-bottom description"},[t._v(" "+t._s(e.description)+" ")])],1)})),0)])},i=[],r=a("5530"),n=a("2f62"),l=a("4360"),o={name:"ProductList",store:l["a"],props:{pizzas:{type:Array}},computed:Object(r["a"])({},Object(n["b"])(["quantityInCartGetter"]))},c=o,u=(a("a676"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,null,null);e["a"]=d.exports},3796:function(t,e,a){},"4d42":function(t,e,a){"use strict";a("e490")},"7e7c":function(t,e,a){"use strict";a("2922")},a4c0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AboutUs"},[a("div",{staticClass:"w3-row w3-padding-64 w3-black",attrs:{id:"about"}},[a("div",{staticClass:"w3-col m12 w3-padding-large"},[a("h2",{staticClass:"w3-center"},[t._v("About Us")]),a("br"),a("p",{staticClass:"w3-center",attrs:{id:"about-us-description"}},[t._v(" Since 1889, we bring authentic Italian pizza near you. We make our dough in house every day and let it rest overnight to develop the taste and structure it needs. We use Grande cheese from Wisconsin and shred it ourselves to get that perfect melt. Our sauce is made with local Toronto tomatoes, salt and oregano."),a("br"),a("br"),t._v(" Chez Sergio is a space where quality isn’t compromised, prices are approachable, and everyone is welcome."),a("br"),a("br"),t._v(" When you sit down at our table, you’re family. ")])])])])}],r={name:"AboutUs"},n=r,l=a("2877"),o=Object(l["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports},a676:function(t,e,a){"use strict";a("3796")},e490:function(t,e,a){},f4a9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Banner"),a("AboutUs"),a("BestSellers"),a("Catering")],1)},i=[],r=a("a4c0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Banner"},[a("div",{staticClass:"container my-5"},[a("div",{staticClass:"row pb-0 pe-lg-0 align-items-center rounded-3 border shadow-lg"},[a("div",{staticClass:"col-lg-7 p-3 p-lg-5 pt-lg-3"},[a("h1",{staticClass:"display-4 fw-bold lh-1"},[t._v(t._s(t.restaurantTitle))]),a("p",{staticClass:"lead w3-margin-top"},[t._v(" "+t._s(t.leadDescription)+" ")])]),a("div",{staticClass:"col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"},[a("img",{staticClass:"rounded-lg-3",attrs:{alt:t.altTextMainImage,src:t.imgURL,width:"720"}})])])])])},l=[],o={name:"Banner",data:function(){return{restaurantTitle:"Chez Sergio",imgURL:"chezSergioBanner.jpg",altTextMainImage:"Pizza Image of Chez Sergio",leadDescription:"Authentic Italian Pizza in a warm, friendly atmosphere to share a meal with family and friends at any time of the day or evening."}}},c=o,u=(a("7e7c"),a("2877")),d=Object(u["a"])(c,n,l,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Catering"},[a("div",{staticClass:"w3-container container w3-padding-64",attrs:{id:"contact"}},[a("h2",[t._v("Catering")]),a("br"),a("p",[t._v(" We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste. Do not hesitate to contact us. ")]),a("p",{staticClass:"w3-text-black w3-large"},[a("b",[t._v("Chez Sergio, 195 Dundas Street, M5G 1C7 TORONTO, ON")])]),a("p",[t._v("You can also contact us by phone +1.409.553.2323 or email hello@chezsergio.com")]),a("form",{attrs:{action:"",target:"_blank"}},[a("p",[a("input",{staticClass:"w3-input w3-padding-16",attrs:{name:"Name",placeholder:"Name",required:"",type:"text"}})]),a("p",[a("input",{staticClass:"w3-input w3-padding-16",attrs:{name:"Email",placeholder:"Email",required:"",type:"text"}})]),a("p",[a("input",{staticClass:"w3-input w3-padding-16",attrs:{name:"Address",placeholder:"Address",required:"",type:"text"}})]),a("p",[a("input",{staticClass:"w3-input w3-padding-16",attrs:{name:"People",placeholder:"How many people",required:"",type:"number"}})]),a("p",[a("input",{staticClass:"w3-input w3-padding-16",attrs:{name:"date",placeholder:"Date and time",required:"",type:"datetime-local",value:"2020-11-16T20:00"}})]),a("p",[a("textarea",{staticClass:"w3-input w3-padding-16",attrs:{name:"Message",placeholder:"Message \\ Special requirements"}})]),a("p",[a("button",{staticClass:"w3-button w3-light-grey w3-section",attrs:{type:"submit"}},[t._v("SUBMIT REQUEST")])])])])])}],w={name:"Catering"},h=w,v=Object(u["a"])(h,m,g,!1,null,null,null),f=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BestSellers"},[a("div",{staticClass:"w3-container menu-back-color",staticStyle:{padding:"128px 16px"},attrs:{id:"about"}},[a("h2",{staticClass:"w3-center"},[t._v("Our Best Sellers")]),a("p",{staticClass:"w3-center w3-large"},[t._v("Your Favorite Pizza awaits you")]),t.bestSellers?a("div",[a("ProductList",{attrs:{pizzas:t.bestSellers}})],1):a("div",[t._m(0)])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"spinner-border",staticStyle:{width:"5rem",height:"5rem"},attrs:{role:"status"}})])}],_=a("a18c"),y=a("4360"),S=a("2a10"),z={name:"BestSellers",components:{ProductList:S["a"]},router:_["a"],store:y["a"],computed:{bestSellers:function(){return this.$store.getters.bestSellerGetter}}},x=z,O=(a("4d42"),Object(u["a"])(x,b,C,!1,null,null,null)),E=O.exports,q={name:"HomePage",components:{BestSellers:E,Catering:f,Banner:p,AboutUs:r["a"]}},B=q,P=Object(u["a"])(B,s,i,!1,null,null,null);e["default"]=P.exports}}]);
//# sourceMappingURL=HomePage.f07b6986.js.map