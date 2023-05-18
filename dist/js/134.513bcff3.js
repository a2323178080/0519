"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[134],{2134:function(e,t,l){l.r(t),l.d(t,{default:function(){return _e}});var s=l(6252),a=l(3577);const d={class:"orders mt-4"},r={class:"table-responsive-lg mt-4"},o={class:"table table-striped lh-lg"},n=(0,s._)("thead",{class:"table-dark"},[(0,s._)("tr",{class:"table-nowrap"},[(0,s._)("th",{width:"150",class:"text-center"},"購買時間"),(0,s._)("th",{width:"200",class:"text-center"},"訂單編號"),(0,s._)("th",{width:"200",class:"text-center"},"Email"),(0,s._)("th",{class:"text-center"},"購買項目"),(0,s._)("th",{width:"150",class:"text-end"},"應付金額"),(0,s._)("th",{width:"150",class:"text-center"},"是否付款"),(0,s._)("th",{width:"180",class:"text-center"},"編輯")])],-1),i={class:"text-center"},c=["textContent"],u={class:"list-unstyled"},_={class:"text-end"},h={key:0,class:"text-strong"},b={key:1,class:"text-muted"},p=["onClick"],m=["onClick"],w={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},g={class:"modal-dialog",role:"document"},v={class:"modal-content"},f={class:"modal-header bg-dark text-white"},O={class:"modal-title fw-bold",id:"exampleModalLabel"},k={class:"fs-6"},x=(0,s._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),y={class:"modal-body"},M={class:"mb-3"},z=(0,s._)("h5",{class:"fw-bold"},"訂購日期",-1),$=(0,s._)("hr",null,null,-1),C={class:"mb-3"},D=(0,s._)("h5",{class:"fw-bold"},"商品",-1),L={class:"row"},E={class:"col-6"},N={class:"col-6"},P={class:"text-end"},U={class:"text-end"},q=(0,s._)("hr",null,null,-1),H={class:"mb-3"},K=(0,s._)("h5",{class:"fw-bold"},"Email",-1),T=(0,s._)("hr",null,null,-1),Y={class:"mb-3"},j=(0,s._)("h5",{class:"fw-bold"},"姓名",-1),W=(0,s._)("hr",null,null,-1),Z={class:"mb-3"},A=(0,s._)("h5",{class:"fw-bold"},"收件人電話",-1),B=(0,s._)("hr",null,null,-1),F={class:"mb-3"},G=(0,s._)("h5",{class:"fw-bold"},"收件人地址",-1),I=(0,s._)("hr",null,null,-1),J={class:"mb-3"},Q=(0,s._)("h5",{class:"fw-bold"},"備註",-1),R=(0,s._)("div",{class:"modal-footer"},[(0,s._)("button",{type:"button",class:"btn btn-dark btn-hover rounded-0","data-bs-dismiss":"modal"},"關閉")],-1),S={class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delOrderModal"},V={class:"modal-dialog",role:"document"},X={class:"modal-content border-0"},ee=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"刪除訂單")]),(0,s._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={class:"modal-body"},le={class:"text-strong"},se={class:"modal-footer"},ae=(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0","data-bs-dismiss":"modal"},"取消",-1);function de(e,t,l,de,re,oe){const ne=(0,s.up)("Loading"),ie=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(ne,{active:re.isLoading,"onUpdate:active":t[0]||(t[0]=e=>re.isLoading=e)},null,8,["active"]),(0,s._)("div",r,[(0,s._)("table",o,[n,(0,s._)("tbody",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(re.orders,((t,l)=>((0,s.wg)(),(0,s.iD)("tr",{class:(0,a.C_)(["table-nowrap",{"text-black-50":!t.is_paid}]),key:l},[(0,s._)("td",null,(0,a.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,(0,a.zw)(t.id),1),(0,s._)("td",null,[t.user?((0,s.wg)(),(0,s.iD)("span",{key:0,textContent:(0,a.zw)(t.user.email)},null,8,c)):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},(0,a.zw)(e.product.title)+" "+(0,a.zw)(e.qty)+" ",1)))),128))])]),(0,s._)("td",_,"NT$ "+(0,a.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[t.is_paid?((0,s.wg)(),(0,s.iD)("span",h,"已付款")):((0,s.wg)(),(0,s.iD)("span",b,"尚未付款"))]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-dark btn-hover rounded-0 me-2",onClick:e=>oe.openOrderModal(t)}," 查看詳細 ",8,p),(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0",onClick:e=>oe.openDelModal(t)}," 刪除 ",8,m)])],2)))),128))])])]),(0,s.Wm)(ie,{pages:re.pagination,onEmitPages:oe.getOrders},null,8,["pages","onEmitPages"]),(0,s._)("div",w,[(0,s._)("div",g,[(0,s._)("div",v,[(0,s._)("div",f,[(0,s._)("h4",O,[(0,s.Uk)("訂單資訊 "),(0,s._)("span",k,"( "+(0,a.zw)(re.tempOrder.id)+" )",1)]),x]),(0,s._)("div",y,[(0,s._)("div",M,[z,(0,s._)("p",null,(0,a.zw)(e.$filters.date(re.tempOrder.create_at)),1),$]),(0,s._)("div",C,[D,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(re.tempOrder.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},[(0,s._)("div",L,[(0,s._)("div",E,[(0,s._)("p",null,(0,a.zw)(t.product.title)+" "+(0,a.zw)(t.qty),1)]),(0,s._)("div",N,[(0,s._)("p",P,"NT$ "+(0,a.zw)(e.$filters.currency(t.final_total))+" 元",1)])])])))),128)),(0,s._)("p",U,"總價: NT$ "+(0,a.zw)(e.$filters.currency(re.tempOrder.total))+" 元",1),q]),(0,s._)("div",H,[K,(0,s._)("p",null,(0,a.zw)(re.tempOrder.user.email),1),T]),(0,s._)("div",Y,[j,(0,s._)("p",null,(0,a.zw)(re.tempOrder.user.name),1),W]),(0,s._)("div",Z,[A,(0,s._)("p",null,(0,a.zw)(re.tempOrder.user.tel),1),B]),(0,s._)("div",F,[G,(0,s._)("p",null,(0,a.zw)(re.tempOrder.user.address),1),I]),(0,s._)("div",J,[Q,(0,s._)("p",null,(0,a.zw)(re.tempOrder.message),1)])]),R])])],512),(0,s._)("div",S,[(0,s._)("div",V,[(0,s._)("div",X,[ee,(0,s._)("div",te,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",le,(0,a.zw)(re.tempOrder.id),1),(0,s.Uk)(" 訂單(刪除後將無法恢復)。 ")]),(0,s._)("div",se,[ae,(0,s._)("button",{type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:t[1]||(t[1]=(...e)=>oe.delOrder&&oe.delOrder(...e))},"確認刪除")])])])],512)])}var re=l(7424),oe=l.n(re),ne=l(5891),ie={name:"Orders",components:{Pagination:ne.Z},data(){return{orders:{},tempOrder:{user:{}},pagination:{},isLoading:!1,isNew:!1,orderModal:"",delOrderModal:""}},methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/ifood/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{e.data.success&&(this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1)}))},openOrderModal(e){this.tempOrder=e,this.orderModal.show()},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/ifood/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{e.data.success&&(this.emitter.emit("message:push",{message:e.data.message,status:"danger"}),this.getOrders(),this.delOrderModal.hide(),this.isLoading=!1)}))},openDelModal(e){this.tempOrder=e,this.delOrderModal.show()}},created(){this.getOrders()},mounted(){this.orderModal=new(oe())(this.$refs.orderModal),this.delOrderModal=new(oe())(this.$refs.delOrderModal)}},ce=l(3744);const ue=(0,ce.Z)(ie,[["render",de]]);var _e=ue}}]);
//# sourceMappingURL=134.513bcff3.js.map