"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[52],{2052:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var i=e(6252),a=e(3577);const r={class:"mt-3"},c={class:"container px-0"},o={class:"row row-cols-1 row-cols-md-5 g-3"},n=["onClick"],d={class:"card-body text-center"},l={class:"card-title fw-bold"},u={class:"d-flex justify-content-around align-items-end"},g={key:0,class:"fs-6 text-muted"},f={key:1,class:"fs-6 text-muted"},p={key:2,class:"fs-5 text-black fw-bold"},w={class:"card-footer border-0 d-flex justify-content-between align-items-center bg-transparent"},h=(0,i.uE)('<div><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i></div>',1);function v(t,s,e,v,k,m){const x=(0,i.up)("Loading");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(x,{active:k.isLoading,"onUpdate:active":s[0]||(s[0]=t=>k.isLoading=t)},null,8,["active"]),(0,i._)("div",c,[(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.products,(s=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:s.id},[(0,i._)("div",{class:"card border-0 box-shadow rounded-0 h-100",onClick:t=>m.goProduct(s.id)},[(0,i._)("div",{style:(0,a.j5)([{height:"250px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}])},null,4),(0,i._)("div",d,[(0,i._)("h4",l,(0,a.zw)(s.title),1),(0,i._)("div",u,[s.price?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",g," NT$ "+(0,a.zw)(t.$filters.currency(s.origin_price)),1)),s.price?((0,i.wg)(),(0,i.iD)("del",f," NT$ "+(0,a.zw)(t.$filters.currency(s.origin_price)),1)):(0,i.kq)("",!0),s.price?((0,i.wg)(),(0,i.iD)("div",p," NT$ "+(0,a.zw)(t.$filters.currency(s.price)),1)):(0,i.kq)("",!0)])]),(0,i._)("div",w,[h,(0,i._)("small",null,"已售出 "+(0,a.zw)(Math.floor(150*Math.random())),1)])],8,n)])))),128))])])])}e(7658);var k={name:"Rice",data(){return{isLoading:!1,products:[]}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/ifood/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(t.data.products.forEach((t=>{"吃飯"===t.category&&this.products.push(t)})),this.isLoading=!1)})),document.documentElement.scrollTop=0},goProduct(t){this.$router.push(`/productPage/${t}`)}},created(){this.getProducts()}},m=e(3744);const x=(0,m.Z)(k,[["render",v]]);var b=x}}]);
//# sourceMappingURL=52.29b54ac7.js.map