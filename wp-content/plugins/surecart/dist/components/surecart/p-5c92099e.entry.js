import{r as a,h as r,a as d}from"./p-e97fde0a.js";const s=":host{display:block;--overflow:visible}.card{font-family:var(--sc-font-sans);overflow:var(--overflow);display:block}.card:not(.card--borderless){padding:var(--sc-card-padding, var(--sc-spacing-large));background:var(--sc-card-background-color, var(--sc-color-white));border:1px solid var(--sc-card-border-color, var(--sc-color-gray-300));border-radius:var(--sc-input-border-radius-medium);box-shadow:var(--sc-shadow-small)}.card:not(.card--borderless).card--no-padding{padding:0}.title--divider{display:none}.card--has-title-slot .card--title{font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.card--has-title-slot .title--divider{display:block}::slotted(*){margin-bottom:var(--sc-form-row-spacing)}::slotted(*:first-child){margin-top:0}::slotted(*:last-child){margin-bottom:0 !important}";const t=s;const o=class{constructor(r){a(this,r);this.noDivider=undefined;this.borderless=undefined;this.noPadding=undefined;this.href=undefined;this.loading=undefined;this.hasTitleSlot=undefined}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasTitleSlot=!!this.el.querySelector('[slot="title"]')}render(){const a=this.href?"a":"div";return r(a,{key:"b6fedccde48b021cb1a885ba1f5f9c65ab8aa4c7",part:"base",class:{card:true,"card--borderless":this.borderless,"card--no-padding":this.noPadding}},r("slot",{key:"f5f162eb19336a83446a1c9bd536cb835b0d8a9d"}))}get el(){return d(this)}};o.style=t;export{o as sc_card};
//# sourceMappingURL=p-5c92099e.entry.js.map