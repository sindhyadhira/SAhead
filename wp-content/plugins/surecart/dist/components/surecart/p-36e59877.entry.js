import{r as t,c as s,h as i}from"./p-e97fde0a.js";const e=class{constructor(i){t(this,i);this.mountEmitter=s(this,"mountConsumer",7);this.STENCIL_CONTEXT=undefined;this.consumers=[]}watchContext(t){this.consumers.forEach((s=>s(t)))}async mountConsumer(t){t.stopPropagation();this.consumers=this.consumers.slice().concat([t.detail]);await t.detail(this.STENCIL_CONTEXT);const s=this.consumers.indexOf(t.detail);const i=this.consumers.slice(0,s).concat(this.consumers.slice(s+1,this.consumers.length));this.consumers=i}disconnectedCallback(){this.consumers.map((t=>this.mountEmitter.emit(t)))}render(){return i("slot",{key:"955b9395739aec78543c20c13e993b6dad2735b6"})}static get watchers(){return{STENCIL_CONTEXT:["watchContext"]}}};export{e as sc_provider};
//# sourceMappingURL=p-36e59877.entry.js.map