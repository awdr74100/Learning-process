webpackJsonp([1],{HltC:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("d1qu")},null,null).exports,n=a("/ocq"),o={name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=Object({NODE_ENV:"production"}).API_PATH+"/admin/signin",e=this;this.$http.post(t,e.user).then(function(t){t.data.success?e.$router.push("/admin/products"):console.log(t.data)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("請先登入")]),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2019")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),this._v(" Remember me\n      ")])])}]};var c=a("VU/8")(o,l,!1,function(t){a("HltC")},"data-v-0ffc0246",null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[e("div",{staticClass:"sidebar-sticky"},[this._m(0),this._v(" "),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[e("i",{staticClass:"fas fa-box-open"}),this._v("產品列表")])],1)]),this._v(" "),this._m(1),this._v(" "),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/customer_order"}},[e("i",{staticClass:"fas fa-shopping-cart"}),this._v("\n          模擬訂單\n          ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("管理員")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("模擬功能")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}]},u={name:"Navbar",methods:{signout:function(){var t=Object({NODE_ENV:"production"}).API_PATH,e=(Object({NODE_ENV:"production"}).CUSTOM_PATH,this),a=t+"/logout";this.$http.post(a).then(function(t){console.log(t.data),t.data.success&&e.$router.push("/login")})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("Company name")]),t._v(" "),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("Sign out")])])])])])},staticRenderFns:[]},m={name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout(function(){e.messages.forEach(function(a,s){a.timestamp===t&&e.messages.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("message:push",function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)})}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var _={components:{Sidebar:a("VU/8")(null,d,!1,null,null,null).exports,Navbar:a("VU/8")(u,p,!1,null,null,null).exports,Alert:a("VU/8")(m,v,!1,function(t){a("NMIz")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Alert"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),this._v(" "),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]},g=a("VU/8")(_,f,!1,null,null,null).exports,h=a("woOf"),b=a.n(h),C=a("7t+N"),P=a.n(C),x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.callProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.callProducts(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.callProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},staticRenderFns:[]},y={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=Object({NODE_ENV:"production"}).API_PATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOM_PATH+"/admin/products?page="+t;e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination})},opemModel:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=b()({},e),this.isNew=!1),P()("#productModal").modal("show")},delProductModal:function(t,e){console.log(e);this.tempProduct=b()({},e),this.isNew=t,P()("#delProductModal").modal("show")},updateProduct:function(){var t=Object({NODE_ENV:"production"}).API_PATH,e=Object({NODE_ENV:"production"}).CUSTOM_PATH,a=t+"/api/"+e+"/admin/product",s="post",i=this;i.isNew?"rm"==i.isNew&&(a=t+"/api/"+e+"/admin/product/"+i.tempProduct.id,s="delete"):(a=t+"/api/"+e+"/admin/product/"+i.tempProduct.id,s="put"),this.$http[s](a,{data:i.tempProduct}).then(function(t){console.log(t.data),t.data.success?(P()("#productModal").modal("hide"),P()("#delProductModal").modal("hide"),i.getProducts()):(P()("#productModal").modal("hide"),i.getProducts(),console.log("應用失敗"))})},uploadFile:function(){var t=Object({NODE_ENV:"production"}).API_PATH,e=Object({NODE_ENV:"production"}).CUSTOM_PATH;console.log(this);var a=this.$refs.files.files[0],s=this.$refs.files.id,i=this,r=new FormData;r.append("file-to-upload",a);var n=t+"/api/"+e+"/admin/upload";i.status.fileUploading=!0,i.$http.post(n,r,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){i.status.fileUploading=!1,t.data.success?(i.$set(i.tempProduct,"imageUrl",t.data.imageUrl),document.getElementById(s).value="",console.log(t.data)):i.$bus.$emit("message:push",t.data.message,"danger")})}},components:{Pagination:a("VU/8")({props:["pagination"],data:function(){return{}},methods:{callProducts:function(t){this.$emit("callGetProducts",t)}}},x,!1,null,null,null).exports},created:function(){this.getProducts()}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.opemModel(!0)}}},[t._v("建立新的產品")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(t._f("currency")(e.origin_price))+"\n        ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(t._f("currency")(e.price))+"\n        ")]),t._v(" "),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),t._v(" "),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.opemModel(!1,e)}}},[t._v("編輯")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm ",on:{click:function(a){return t.delProductModal("rm",e)}}},[t._v("刪除")])])])])}),0)]),t._v(" "),a("Pagination",{attrs:{pagination:t.pagination},on:{callGetProducts:t.getProducts}}),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",alt:"",src:t.tempProduct.imageUrl}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content  "}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":1,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=(s.checked,1);if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),t._v(" "),a("th",[t._v("產品名稱")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("原價")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("售價")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},N=a("VU/8")(y,w,!1,null,null,null).exports,E=(a("K3J8"),{data:function(){return{products:[],isLoading:!1}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=Object({NODE_ENV:"production"}).API_PATH+"/api/"+Object({NODE_ENV:"production"}).CUSTOM_PATH+"/products?page="+t;e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),e.isLoading=!1,e.products=t.data.products})}},created:function(){this.getProducts()}}),$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"row mt-4"},t._l(t.products,function(e,s){return a("div",{key:s,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),t._v(" "),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(e.origin_price))]),t._v(" "),e.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(e.origin_price)+" 元")]):t._e(),t._v(" "),e.price?a("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(e.price)+" 元")]):t._e()])]),t._v(" "),t._m(0,!0)])])}),0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-spinner fa-spin"}),this._v("\n            查看更多\n          ")]),this._v(" "),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-spinner fa-spin"}),this._v("\n            加到購物車\n          ")])])}]},k=a("VU/8")(E,$,!1,null,null,null).exports;s.a.use(n.a);var M=new n.a({routes:[{path:"/login",name:"Login",component:c},{path:"*",redirect:"/login"},{path:"/admin",name:"Dashboard",component:g,children:[{path:"products",name:"products",component:N,meta:{requiresAuth:!0}}]},{path:"/customer_order",component:g,children:[{path:"",name:"CustomerOrder",component:k}]}]}),O=a("mtWM"),A=a.n(O),U=a("Rf8U"),D=a.n(U),T=a("ZZvs"),V=a.n(T);a("SYh3");s.a.prototype.$bus=new s.a;s.a.component("Loading",V.a),s.a.filter("currency",function(t){return"$"+Number(t).toFixed(0).replace(/./g,function(t,e,a){return e&&"."!==t&&(a.length-e)%3==0?(", "+t).replace(/\s/g,""):t})}),s.a.use(D.a,A.a),A.a.defaults.withCredentials=!0,new s.a({el:"#app",router:M,components:{App:r},template:"<App/>"}),M.beforeEach(function(t,e,a){if(t.meta.requiresAuth){var s=Object({NODE_ENV:"production"}).API_PATH+"/api/user/check";A.a.post(s).then(function(t){console.log(t.data),t.data.success?a():a({path:"/login"})})}else a()})},NMIz:function(t,e){},SYh3:function(t,e){},d1qu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d1f60e86ef869948600a.js.map