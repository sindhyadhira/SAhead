import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{d as defineCustomElement$o}from"./sc-alert2.js";import{d as defineCustomElement$n}from"./sc-block-ui2.js";import{d as defineCustomElement$m}from"./sc-button2.js";import{d as defineCustomElement$l}from"./sc-card2.js";import{d as defineCustomElement$k}from"./sc-cc-logo2.js";import{d as defineCustomElement$j}from"./sc-dashboard-module2.js";import{d as defineCustomElement$i}from"./sc-dialog2.js";import{d as defineCustomElement$h}from"./sc-divider2.js";import{d as defineCustomElement$g}from"./dropdown.js";import{d as defineCustomElement$f}from"./sc-empty2.js";import{d as defineCustomElement$e}from"./sc-flex2.js";import{d as defineCustomElement$d}from"./sc-icon2.js";import{d as defineCustomElement$c}from"./sc-menu2.js";import{d as defineCustomElement$b}from"./sc-menu-item2.js";import{d as defineCustomElement$a}from"./sc-payment-method2.js";import{d as defineCustomElement$9}from"./sc-skeleton2.js";import{d as defineCustomElement$8}from"./sc-spinner2.js";import{d as defineCustomElement$7}from"./sc-stacked-list2.js";import{d as defineCustomElement$6}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$5}from"./sc-switch2.js";import{d as defineCustomElement$4}from"./sc-tag2.js";import{d as defineCustomElement$3}from"./sc-text2.js";import{d as defineCustomElement$2}from"./sc-tooltip2.js";import{a as addQueryArgs}from"./add-query-args.js";const scPaymentMethodsListCss=":host{display:block;position:relative}.payment-methods-list{display:grid;gap:0.5em}.payment-methods-list sc-heading a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.payment-id{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",ScPaymentMethodsListStyle0=scPaymentMethodsListCss,ScPaymentMethodsList$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.query=void 0,this.heading=void 0,this.isCustomer=void 0,this.canDetachDefaultPaymentMethod=!1,this.paymentMethods=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.hasTitleSlot=void 0,this.editPaymentMethod=!1,this.deletePaymentMethod=!1,this.cascadeDefaultPaymentMethod=!1}componentWillLoad(){onFirstVisible(this.el,(()=>this.getPaymentMethods())),this.handleSlotChange()}handleSlotChange(){this.hasTitleSlot=!!this.el.querySelector('[slot="title"]')}async deleteMethod(){var e;if(this.deletePaymentMethod)try{this.busy=!0,await apiFetch({path:`surecart/v1/payment_methods/${null===(e=this.deletePaymentMethod)||void 0===e?void 0:e.id}/detach`,method:"PATCH"}),this.paymentMethods=this.paymentMethods.filter((e=>{var t;return e.id!==(null===(t=this.deletePaymentMethod)||void 0===t?void 0:t.id)})),this.deletePaymentMethod=!1}catch(e){alert((null==e?void 0:e.messsage)||wp.i18n.__("Something went wrong","surecart"))}finally{this.busy=!1}}async setDefault(){var e,t,s;if(this.editPaymentMethod){try{this.error="",this.busy=!0,await apiFetch({path:`surecart/v1/customers/${null===(t=null===(e=this.editPaymentMethod)||void 0===e?void 0:e.customer)||void 0===t?void 0:t.id}`,method:"PATCH",data:{default_payment_method:null===(s=this.editPaymentMethod)||void 0===s?void 0:s.id,cascade_default_payment_method:this.cascadeDefaultPaymentMethod}}),this.editPaymentMethod=!1}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}try{this.busy=!0,this.paymentMethods=await apiFetch({path:addQueryArgs("surecart/v1/payment_methods/",{expand:["card","customer","billing_agreement","paypal_account","payment_instrument","bank_account"],...this.query})})}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}}}async getPaymentMethods(){if(this.isCustomer)try{this.loading=!0,this.paymentMethods=await apiFetch({path:addQueryArgs("surecart/v1/payment_methods/",{expand:["card","customer","billing_agreement","paypal_account","payment_instrument","bank_account"],...this.query,per_page:100})})}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}}renderLoading(){return h("sc-card",{noPadding:!0},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":500},[...Array(4)].map((()=>h("sc-skeleton",{style:{width:"100px",display:"inline-block"}}))))))}renderEmpty(){return h("div",null,h("sc-divider",{style:{"--spacing":"0"}}),h("slot",{name:"empty"},h("sc-empty",{icon:"credit-card"},wp.i18n.__("You don't have any saved payment methods.","surecart"))))}renderPaymentMethodActions(e){const{id:t,customer:s}=e;if("string"!=typeof s&&(s.default_payment_method!==t||this.canDetachDefaultPaymentMethod))return h("sc-dropdown",{placement:"bottom-end",slot:"suffix"},h("sc-icon",{role:"button",tabIndex:0,name:"more-horizontal",slot:"trigger"}),h("sc-menu",null,s.default_payment_method!==t&&h("sc-menu-item",{onClick:()=>this.editPaymentMethod=e},wp.i18n.__("Make Default","surecart")),h("sc-menu-item",{onClick:()=>this.deletePaymentMethod=e},wp.i18n.__("Delete","surecart"))))}renderList(){return this.paymentMethods.map((e=>{const{id:t,card:s,customer:a,live_mode:n,billing_agreement:o,paypal_account:i}=e;return h("sc-stacked-list-row",{style:{"--columns":o?"2":"3"}},h("sc-payment-method",{paymentMethod:e}),h("div",{class:"payment-id"},!!(null==s?void 0:s.exp_month)&&h("span",null,wp.i18n.__("Exp.","surecart"),null==s?void 0:s.exp_month,"/",null==s?void 0:s.exp_year),!!i&&(null==i?void 0:i.email)),h("sc-flex",{"justify-content":"flex-start","align-items":"center",style:{"--spacing":"0.5em",marginLeft:"auto"}},"string"!=typeof a&&(null==a?void 0:a.default_payment_method)===t&&h("sc-tag",{type:"info"},wp.i18n.__("Default","surecart")),!n&&h("sc-tag",{type:"warning"},wp.i18n.__("Test","surecart"))),this.renderPaymentMethodActions(e))}))}renderContent(){var e;return this.isCustomer?this.loading?this.renderLoading():0===(null===(e=this.paymentMethods)||void 0===e?void 0:e.length)?this.renderEmpty():h("sc-card",{"no-padding":!0},h("sc-stacked-list",null,this.renderList())):this.renderEmpty()}handleEditPaymentMethodChange(){this.cascadeDefaultPaymentMethod=!1}render(){return h("sc-dashboard-module",{key:"4c2d389a7640f339a0a2e8971acc4d4e5a6396cf",class:"payment-methods-list",error:this.error},h("span",{key:"499ac2a2d306e1ea84c98aafdc5d49b4717d20cd",slot:"heading"},h("slot",{key:"993d25b876f792c50a1ab41c74379b5c62456ffa",name:"heading"},this.heading||wp.i18n.__("Payment Methods","surecart"))),this.isCustomer&&h("sc-flex",{key:"f4884a81c9042cb60fe4e299880d8aa7c9db7f2d",slot:"end"},h("sc-button",{key:"7ba263b1667ec3a94449a8d1b0b46a03e034f407",type:"link",href:addQueryArgs(window.location.href,{action:"index",model:"charge"})},h("sc-icon",{key:"b871db4e03fefb686f6e71e8fb8dcc5a9b511d18",name:"clock",slot:"prefix"}),wp.i18n.__("Payment History","surecart")),h("sc-button",{key:"ebeef8238b15b11aa60df9d7d761cabd9e45f230",type:"link",href:addQueryArgs(window.location.href,{action:"create",model:"payment_method"})},h("sc-icon",{key:"d207eb80c48e7207aea44a27af71c27af107abc5",name:"plus",slot:"prefix"}),wp.i18n.__("Add","surecart"))),this.renderContent(),h("sc-dialog",{key:"7e2f2f44739ed32333510f0930fa2f47cd01244e",open:!!this.editPaymentMethod,label:wp.i18n.__("Update Default Payment Method","surecart"),onScRequestClose:()=>this.editPaymentMethod=!1},h("sc-alert",{key:"c482ca0b09dbe93c9cc9db4a7a18a5e133213a79",type:"danger",open:!!this.error},this.error),h("sc-flex",{key:"179b64e3800ab92a6c79109ad33338e899d60181",flexDirection:"column",style:{"--sc-flex-column-gap":"var(--sc-spacing-small)"}},h("sc-alert",{key:"8ee7ae4f067699a6bccb58122153e9deddacad07",type:"info",open:!0},wp.i18n.__("A default payment method will be used as a fallback in case other payment methods get removed from a subscription.","surecart")),h("sc-switch",{key:"bbbc6f8cfc9d2fa7ed126a20ac34a9db266a7d47",checked:this.cascadeDefaultPaymentMethod,onScChange:e=>this.cascadeDefaultPaymentMethod=e.target.checked},wp.i18n.__("Update All Subscriptions","surecart"),h("span",{key:"f2d3ed6827f35fe34a31fbf53daaff32c53a50f5",slot:"description"},wp.i18n.__("Update all existing subscriptions to use this payment method","surecart")))),h("div",{key:"d307179924b8531602b5f6a886c83e81f8f91415",slot:"footer"},h("sc-button",{key:"e1f357af7f0861e72b8cb02581ac969468239a16",type:"text",onClick:()=>this.editPaymentMethod=!1},wp.i18n.__("Cancel","surecart")),h("sc-button",{key:"fa1f45bb1022a4753a94d0881970dfeb8a71983f",type:"primary",onClick:()=>this.setDefault()},wp.i18n.__("Make Default","surecart"))),this.busy&&h("sc-block-ui",{key:"6a70714c44cbdb2f85d85617c5e19b9abc87fd94",spinner:!0})),h("sc-dialog",{key:"3cdeb320fcb213100737a8f470d94ed38b03485a",open:!!this.deletePaymentMethod,label:wp.i18n.__("Delete Payment Method","surecart"),onScRequestClose:()=>this.deletePaymentMethod=!1},h("sc-alert",{key:"b372aa4d97b2e6d5b7bfd5a459af035f4ad6519a",type:"danger",open:!!this.error},this.error),h("sc-text",{key:"e6005f4058ca1bb643253c36e6c5b8f8ab5c5df5"},wp.i18n.__("Are you sure you want to remove this payment method?","surecart")),h("div",{key:"90f8211a2373ff182f46a6a20b63fa2fd92347d0",slot:"footer"},h("sc-button",{key:"844190f2c497f4863a3ba56408f107e63653a557",type:"text",onClick:()=>this.deletePaymentMethod=!1},wp.i18n.__("Cancel","surecart")),h("sc-button",{key:"2d55d4ab8a5cbf09e202f02e7e94a2f2e69f8726",type:"primary",onClick:()=>this.deleteMethod()},wp.i18n.__("Delete","surecart"))),this.busy&&h("sc-block-ui",{key:"307a3fe39de177d5a41470e3afe03cdbd8833d40",spinner:!0})),this.busy&&h("sc-block-ui",{key:"498adc9f9d6905fe220d3225f92ac11f3fdad312",spinner:!0}))}get el(){return this}static get watchers(){return{editPaymentMethod:["handleEditPaymentMethodChange"]}}static get style(){return ScPaymentMethodsListStyle0}},[1,"sc-payment-methods-list",{query:[16],heading:[1],isCustomer:[4,"is-customer"],canDetachDefaultPaymentMethod:[4,"can-detach-default-payment-method"],paymentMethods:[32],loading:[32],busy:[32],error:[32],hasTitleSlot:[32],editPaymentMethod:[32],deletePaymentMethod:[32],cascadeDefaultPaymentMethod:[32]},void 0,{editPaymentMethod:["handleEditPaymentMethodChange"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-payment-methods-list","sc-alert","sc-block-ui","sc-button","sc-card","sc-cc-logo","sc-dashboard-module","sc-dialog","sc-divider","sc-dropdown","sc-empty","sc-flex","sc-icon","sc-menu","sc-menu-item","sc-payment-method","sc-skeleton","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-switch","sc-tag","sc-text","sc-tooltip"].forEach((e=>{switch(e){case"sc-payment-methods-list":customElements.get(e)||customElements.define(e,ScPaymentMethodsList$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$o();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$n();break;case"sc-button":customElements.get(e)||defineCustomElement$m();break;case"sc-card":customElements.get(e)||defineCustomElement$l();break;case"sc-cc-logo":customElements.get(e)||defineCustomElement$k();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$j();break;case"sc-dialog":customElements.get(e)||defineCustomElement$i();break;case"sc-divider":customElements.get(e)||defineCustomElement$h();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$g();break;case"sc-empty":customElements.get(e)||defineCustomElement$f();break;case"sc-flex":customElements.get(e)||defineCustomElement$e();break;case"sc-icon":customElements.get(e)||defineCustomElement$d();break;case"sc-menu":customElements.get(e)||defineCustomElement$c();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$b();break;case"sc-payment-method":customElements.get(e)||defineCustomElement$a();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$9();break;case"sc-spinner":customElements.get(e)||defineCustomElement$8();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$7();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$6();break;case"sc-switch":customElements.get(e)||defineCustomElement$5();break;case"sc-tag":customElements.get(e)||defineCustomElement$4();break;case"sc-text":customElements.get(e)||defineCustomElement$3();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$2()}}))}const ScPaymentMethodsList=ScPaymentMethodsList$1,defineCustomElement=defineCustomElement$1;export{ScPaymentMethodsList,defineCustomElement};