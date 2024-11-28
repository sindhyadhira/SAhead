import{h}from"@stencil/core";import{__,sprintf}from"@wordpress/i18n";export class ScPaymentMethodDetails{constructor(){this.paymentMethod=void 0,this.editHandler=void 0}render(){var e,t,d,o,a,i,n,c,r,s;return h("sc-card",{key:"f3a564ca0054cc2b63c7118a7fd0fe9f7c7d5eef"},h("sc-flex",{key:"9a94202a2bdfebb868cfceec761ffcbc9c0e860e",alignItems:"center",justifyContent:"flex-start",style:{gap:"0.5em"}},h("sc-payment-method",{key:"3910c58eaba789eb67d9258746e917104dcb1bcd",paymentMethod:this.paymentMethod}),h("div",{key:"2865b838d4195d269cd4f57f5021e5a7ae1b242c"},!!(null===(t=null===(e=this.paymentMethod)||void 0===e?void 0:e.card)||void 0===t?void 0:t.exp_month)&&h("span",{key:"0157bf9151b997ae06022e761df5b2a30088475f"},
// Translators: %d/%d is month and year of expiration.
sprintf(__("Exp. %d/%d","surecart"),null===(o=null===(d=this.paymentMethod)||void 0===d?void 0:d.card)||void 0===o?void 0:o.exp_month,null===(i=null===(a=this.paymentMethod)||void 0===a?void 0:a.card)||void 0===i?void 0:i.exp_year)),!!(null===(c=null===(n=this.paymentMethod)||void 0===n?void 0:n.paypal_account)||void 0===c?void 0:c.email)&&(null===(s=null===(r=this.paymentMethod)||void 0===r?void 0:r.paypal_account)||void 0===s?void 0:s.email)),h("sc-button",{key:"ac181d36c3fc7fd410ba1f81941e0bc08f7ad64f",type:"text",circle:!0,onClick:this.editHandler},h("sc-icon",{key:"43eef4134afe057362bb324ff67811b092ec52f9",name:"edit-2"}))))}static get is(){return"sc-payment-method-details"}static get encapsulation(){return"shadow"}static get properties(){return{paymentMethod:{type:"unknown",mutable:!1,complexType:{original:"PaymentMethod",resolved:"PaymentMethod",references:{PaymentMethod:{location:"import",path:"../../../types",id:"src/types.ts::PaymentMethod"}}},required:!1,optional:!1,docs:{tags:[],text:""}},editHandler:{type:"unknown",mutable:!1,complexType:{original:"() => void",resolved:"() => void",references:{}},required:!1,optional:!1,docs:{tags:[],text:""}}}}}