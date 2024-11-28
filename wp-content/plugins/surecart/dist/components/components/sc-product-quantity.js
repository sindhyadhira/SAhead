import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as state,b as setProduct}from"./watchers.js";import{g as getMaxStockQuantity}from"./quantity.js";import{d as defineCustomElement$5}from"./sc-form-control2.js";import{d as defineCustomElement$4}from"./sc-icon2.js";import{d as defineCustomElement$3}from"./sc-quantity-select2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scProductQuantityCss=":host{display:block}",ScProductQuantityStyle0=scProductQuantityCss;let id=0;const ScProductQuantity$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inputId="sc-quantity-"+ ++id,this.helpId=`sc-quantity-help-text-${id}`,this.labelId=`sc-quantity-label-${id}`,this.size="medium",this.name=void 0,this.errors=void 0,this.showLabel=!0,this.label=void 0,this.required=!1,this.help=void 0,this.productId=void 0}render(){var t,e,s,i,o,d,c;const n=getMaxStockQuantity(null===(t=state[this.productId])||void 0===t?void 0:t.product,null===(e=state[this.productId])||void 0===e?void 0:e.selectedVariant);return h(Host,{key:"7ce131521009ff58c7848c6f6b8fae90507ef2f3"},h("sc-form-control",{key:"cc0899d4af6fec59da9da041b4ae9499a5d49f56",exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("sc-quantity-select",{key:"7f54bb234abe657869d19fd3fe8ea69470f2f28e",size:this.size,quantity:Math.max((null===(i=null===(s=state[this.productId])||void 0===s?void 0:s.selectedPrice)||void 0===i?void 0:i.ad_hoc)?1:null===(o=state[this.productId])||void 0===o?void 0:o.quantity,1),disabled:null===(c=null===(d=state[this.productId])||void 0===d?void 0:d.selectedPrice)||void 0===c?void 0:c.ad_hoc,onScInput:t=>setProduct(this.productId,{quantity:t.detail}),...n?{max:n}:{}})))}static get style(){return ScProductQuantityStyle0}},[1,"sc-product-quantity",{size:[513],name:[1],errors:[8],showLabel:[4,"show-label"],label:[1],required:[4],help:[1],productId:[1,"product-id"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-quantity","sc-form-control","sc-icon","sc-quantity-select","sc-visually-hidden"].forEach((t=>{switch(t){case"sc-product-quantity":customElements.get(t)||customElements.define(t,ScProductQuantity$1);break;case"sc-form-control":customElements.get(t)||defineCustomElement$5();break;case"sc-icon":customElements.get(t)||defineCustomElement$4();break;case"sc-quantity-select":customElements.get(t)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(t)||defineCustomElement$2()}}))}const ScProductQuantity=ScProductQuantity$1,defineCustomElement=defineCustomElement$1;export{ScProductQuantity,defineCustomElement};