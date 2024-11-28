import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{s as state}from"./mutations2.js";import{d as defineCustomElement$6}from"./sc-choice2.js";import{d as defineCustomElement$5}from"./sc-divider2.js";import{d as defineCustomElement$4}from"./sc-form-control2.js";import{d as defineCustomElement$3}from"./sc-format-number2.js";import{d as defineCustomElement$2}from"./sc-order-bump2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scOrderBumpsCss=":host{display:block}.bumps__list{display:grid;gap:10px}",ScOrderBumpsStyle0=scOrderBumpsCss,ScOrderBumps=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.label=void 0,this.showControl=void 0,this.help=void 0}render(){var e,s;const t=((null===(s=null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.recommended_bumps)||void 0===s?void 0:s.data)||[]).filter((e=>{var s,t,o,r;return 0===(null===(r=null===(o=null===(t=null===(s=null==e?void 0:e.price)||void 0===s?void 0:s.product)||void 0===t?void 0:t.variants)||void 0===o?void 0:o.pagination)||void 0===r?void 0:r.count)}));return(null==t?void 0:t.length)?h("sc-form-control",{label:this.label||wp.i18n.__("Recommended","surecart"),help:this.help},h("div",{class:"bumps__list","aria-label":wp.i18n.__("Order bump summary","surecart")},t.map((e=>h("sc-order-bump",{key:null==e?void 0:e.id,showControl:this.showControl,bump:e}))))):null}static get style(){return ScOrderBumpsStyle0}},[1,"sc-order-bumps",{label:[1],showControl:[4,"show-control"],help:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-order-bumps","sc-choice","sc-divider","sc-form-control","sc-format-number","sc-order-bump","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-order-bumps":customElements.get(e)||customElements.define(e,ScOrderBumps);break;case"sc-choice":customElements.get(e)||defineCustomElement$6();break;case"sc-divider":customElements.get(e)||defineCustomElement$5();break;case"sc-form-control":customElements.get(e)||defineCustomElement$4();break;case"sc-format-number":customElements.get(e)||defineCustomElement$3();break;case"sc-order-bump":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScOrderBumps as S,defineCustomElement as d};