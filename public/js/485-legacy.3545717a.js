"use strict";(self["webpackChunkbooking_client"]=self["webpackChunkbooking_client"]||[]).push([[485],{12485:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Users")]),s("b-alert",{attrs:{variant:"success",show:""}},[e._v(" Create and modify users ")]),s("b-row",[s("b-col",{attrs:{md:"2"}},[s("p",[e._v("Email")]),s("b-form-input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetch.apply(null,arguments)}},model:{value:e.searchForm.email,callback:function(t){e.$set(e.searchForm,"email",t)},expression:"searchForm.email"}})],1),s("b-col",{attrs:{md:"2"}},[s("p",[e._v("Username")]),s("b-form-input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetch.apply(null,arguments)}},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),s("b-col",{attrs:{md:"2"}},[s("p",[e._v("Company")]),s("b-form-select",{on:{change:e.fetch},model:{value:e.searchForm.company,callback:function(t){e.$set(e.searchForm,"company",t)},expression:"searchForm.company"}},[s("b-form-select-option",{attrs:{value:-1}},[e._v("All")]),e._l(e.companies,(function(t,a){return s("b-form-select-option",{key:a,attrs:{value:t._id}},[e._v(e._s(t.name))])}))],2)],1),s("b-col",{staticClass:"text-right",attrs:{md:"6"}},[s("b-button",{attrs:{variant:"success"},on:{click:e.add}},[s("b-icon",{attrs:{icon:"plus",scale:"1.5"}}),e._v(" Add ")],1)],1)],1),s("b-table",{staticClass:"mt-3",attrs:{fields:e.fields,items:e.list,busy:e.loading,outlined:"",responsive:""},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[s("p",[e._v(e._s((e.searchForm.page-1)*e.searchForm.perPage+t.index+1))])]}},{key:"cell(email)",fn:function(t){return[s("p",[e._v(e._s(t.value))])]}},{key:"cell(username)",fn:function(t){return[s("p",[e._v(e._s(t.value))])]}},{key:"cell(company)",fn:function(t){return[s("p",[e._v(e._s(t.item.company&&t.item.company.name))])]}},{key:"cell(userType)",fn:function(t){return[s("p",[e._v(e._s(t.value))])]}},{key:"cell(edit)",fn:function(t){return[s("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(s){return e.edit(t.index)}}},[s("b-icon",{attrs:{icon:"pencil"}}),e._v(" Edit ")],1),s("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(s){return e.deleteById(t.index)}}},[s("b-icon",{attrs:{icon:"trash"}}),e._v(" Delete ")],1),s("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(s){return e.resetPassword(t.index)}}},[s("b-icon",{attrs:{icon:"lock"}}),e._v(" Reset Password ")],1)]}}])}),s("b-pagination",{attrs:{"total-rows":e.total,"per-page":e.searchForm.perPage,align:"right"},model:{value:e.searchForm.page,callback:function(t){e.$set(e.searchForm,"page",t)},expression:"searchForm.page"}}),s("b-modal",{attrs:{title:"Add User","hide-header-close":""},on:{ok:e.doAdd,cancel:function(t){e.addModalShow=!1}},model:{value:e.addModalShow,callback:function(t){e.addModalShow=t},expression:"addModalShow"}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[e._v("Email")]),s("b-col",{attrs:{md:"8"}},[s("b-form-input",{attrs:{type:"text",state:!(!e.$v.user.email.required||!e.$v.user.email.email)&&null},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e.$v.user.email.required?e._e():s("b-form-invalid-feedback",[e._v(" Email is required. ")]),e.$v.user.email.email?e._e():s("b-form-invalid-feedback",[e._v(" Email is invalid. ")])],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("Username")]),s("b-col",{attrs:{md:"8"}},[s("b-form-input",{attrs:{type:"text",state:!!e.$v.user.username.required&&null},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e.$v.user.username.required?e._e():s("b-form-invalid-feedback",[e._v(" Username is required. ")])],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("userType")]),s("b-col",{attrs:{md:"8"}},[s("b-form-select",{model:{value:e.user.userType,callback:function(t){e.$set(e.user,"userType",t)},expression:"user.userType"}},[s("b-form-select-option",{attrs:{value:"user"}},[e._v("User")]),s("b-form-select-option",{attrs:{value:"admin"}},[e._v("Admin")]),s("b-form-select-option",{attrs:{value:"superadmin"}},[e._v("Super Admin")])],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("Company")]),s("b-col",{attrs:{md:"8"}},[s("b-form-select",{model:{value:e.user.company,callback:function(t){e.$set(e.user,"company",t)},expression:"user.company"}},[s("b-form-select-option",{attrs:{value:null}}),e._l(e.companies,(function(t,a){return s("b-form-select-option",{key:a,attrs:{value:t._id}},[e._v(e._s(t.name))])}))],2)],1)],1)],1),s("b-modal",{attrs:{title:"Edit User","hide-header-close":""},on:{ok:e.doEdit},model:{value:e.editModalShow,callback:function(t){e.editModalShow=t},expression:"editModalShow"}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[e._v("Email")]),s("b-col",{attrs:{md:"8"}},[s("b-form-input",{attrs:{type:"text",state:!(!e.$v.user.email.required||!e.$v.user.email.email)&&null},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e.$v.user.email.required?e._e():s("b-form-invalid-feedback",[e._v(" Email is required. ")]),e.$v.user.email.email?e._e():s("b-form-invalid-feedback",[e._v(" Email is invalid. ")])],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("Username")]),s("b-col",{attrs:{md:"8"}},[s("b-form-input",{attrs:{type:"text",state:!!e.$v.user.username.required&&null},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e.$v.user.username.required?e._e():s("b-form-invalid-feedback",[e._v(" Username is required. ")])],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("userType")]),s("b-col",{attrs:{md:"8"}},[s("b-form-select",{model:{value:e.user.userType,callback:function(t){e.$set(e.user,"userType",t)},expression:"user.userType"}},[s("b-form-select-option",{attrs:{value:"user"}},[e._v("User")]),s("b-form-select-option",{attrs:{value:"admin"}},[e._v("Admin")]),s("b-form-select-option",{attrs:{value:"superadmin"}},[e._v("Super Admin")])],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"4"}},[e._v("Company")]),s("b-col",{attrs:{md:"8"}},[s("b-form-select",{model:{value:e.user.company,callback:function(t){e.$set(e.user,"company",t)},expression:"user.company"}},[s("b-form-select-option",{attrs:{value:null}}),e._l(e.companies,(function(t,a){return s("b-form-select-option",{key:a,attrs:{value:t._id}},[e._v(e._s(t.name))])}))],2)],1)],1)],1),s("b-modal",{attrs:{title:"Delete User","hide-header-close":""},on:{ok:e.doDelete},model:{value:e.deleteModalShow,callback:function(t){e.deleteModalShow=t},expression:"deleteModalShow"}},[e._v(" Are you sure you want to delete? ")]),s("b-modal",{attrs:{title:"Reset Password","hide-header-close":""},on:{ok:e.doResetPassword},model:{value:e.resetPasswordModalShow,callback:function(t){e.resetPasswordModalShow=t},expression:"resetPasswordModalShow"}},[e._v(" Are you sure you want to reset password? ")])],1)},r=[],o=s(93019),i=s(6409),n=s(34665),l={name:"UserView",mounted:function(){this.fetch()},data:function(){return{fields:[{key:"index",label:"No"},{key:"email",label:"Email"},{key:"username",label:"Username"},{key:"company",label:"Company"},{key:"userType",label:"User Type"},{key:"edit",label:"-"}],loading:!1,searchForm:{page:1,perPage:10,email:"",username:"",company:-1},addModalShow:!1,editModalShow:!1,deleteModalShow:!1,resetPasswordModalShow:!1,user:{_id:"",email:"",username:"",userType:"user",company:null}}},validations:{user:{email:{required:i.C1,email:i.Do},username:{required:i.C1}}},computed:(0,o.Z)({},(0,n.rn)({list:function(e){return e.user.list},total:function(e){return e.user.total},companies:function(e){return e.user.companies}})),methods:{fetch:function(){var e=this;this.loading=!0,this.$store.dispatch("user/fetch",this.searchForm).then((function(){e.loading=!1}))},add:function(){this.user={_id:"",email:"",username:"",userType:"user",company:null},this.addModalShow=!0},doAdd:function(e){var t=this;e.preventDefault(),this.$v.user.$touch(),this.$v.user.$error||(this.addModalShow=!1,this.$store.dispatch("user/add",this.user).then((function(){t.$toasted.success("Add Success"),t.fetch()})))},edit:function(e){this.user={_id:this.list[e]._id,email:this.list[e].email,username:this.list[e].username,userType:this.list[e].userType,company:this.list[e].company?this.list[e].company._id:null},this.editModalShow=!0},doEdit:function(e){var t=this;e.preventDefault(),this.$v.user.$touch(),this.$v.user.$error||(this.editModalShow=!1,this.$store.dispatch("user/edit",this.user).then((function(){t.$toasted.success("Edit Success"),t.fetch()})))},deleteById:function(e){this.user._id=this.list[e]._id,this.deleteModalShow=!0},doDelete:function(){var e=this;this.$store.dispatch("user/deleteById",this.user._id).then((function(){e.$toasted.success("Delete Success"),e.fetch()}))},resetPassword:function(e){this.user._id=this.list[e]._id,this.resetPasswordModalShow=!0},doResetPassword:function(){var e=this;this.$store.dispatch("user/resetPassword",this.user._id).then((function(){e.$toasted.success("Reset Password Success")}))}},watch:{"searchForm.page":function(){this.fetch()}}},u=l,c=s(1001),d=(0,c.Z)(u,a,r,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=485-legacy.3545717a.js.map