import{h,Host}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScAlert{constructor(){this.open=!1,this.title=void 0,this.closable=!1,this.type="primary",this.duration=1/0,this.scrollOnOpen=void 0,this.scrollMargin="0px",this.noIcon=void 0,this.autoHideTimeout=void 0}async show(){this.open||(this.open=!0)}async hide(){this.open&&(this.open=!1)}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=setTimeout((()=>this.hide()),this.duration))}handleMouseMove(){this.restartAutoHide()}handleCloseClick(){this.hide()}handleOpenChange(){this.open?this.scShow.emit():this.scHide.emit(),this.open&&this.scrollOnOpen&&this.el.scrollIntoView({behavior:"smooth"})}componentDidLoad(){this.handleOpenChange()}iconName(){switch(this.type){case"danger":return"alert-circle";case"success":return"check-circle";case"warning":return"alert-triangle";default:return"info"}}icon(){return h("sc-icon",{name:this.iconName()})}render(){return h(Host,{key:"7c14c082ca884b677a37b0920f652aa90a6c2113",style:{"scroll-margin-top":this.scrollMargin}},h("div",{key:"a3965ee24e9e25312e91229013a7506f60190f6a",class:{alert:!0,"alert--primary":"primary"===this.type,"alert--success":"success"===this.type,"alert--info":"info"===this.type,"alert--warning":"warning"===this.type,"alert--danger":"danger"===this.type,"alert--is-rtl":isRtl()},part:"base",role:"alert","aria-live":"assertive","aria-atomic":"true","aria-hidden":this.open?"false":"true",hidden:!this.open,onMouseMove:()=>this.handleMouseMove()},h("div",{key:"d8dab48a78ba46f2ccedb4eb7fa522b69318a15a",class:"alert__icon",part:"icon"},h("slot",{key:"24758b17c044e292a0d1ff22de73cf992b3718fa",name:"icon"},this.icon())),h("div",{key:"3dc5aa7a2bf185d77136088290a2ab2b5f0c3616",class:"alert__text",part:"text"},h("div",{key:"b091b3e6765c7cdaa81f0c85a7b8de0fd334af01",class:"alert__title",part:"title"},h("slot",{key:"7bed59c4900c940627372a3482ba48427c331df5",name:"title"},this.title)),h("div",{key:"1ad5fe81ca9d9b678ff206a4e5a6636b109bb885",class:"alert__message",part:"message"},h("slot",{key:"ccae2fa74a9156e8cdedc6ff626009dd8eb7df20"}))),this.closable&&h("span",{key:"b6c754012b511fbca310ec17607fc2d29968e1d4",part:"close",class:"alert__close",onClick:()=>this.handleCloseClick()},h("span",{key:"d48d740009d3429a90d0f4a6d2e4fd6b120203e3",class:"sr-only"},"Dismiss"),h("svg",{key:"1e238208f48f07b97fcb238996575d19d0c01215",class:"h-5 w-5","x-description":"Heroicon name: solid/x",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},h("path",{key:"a4bb9b583d31b0949c09af6c0e53b713bbf8e73c","fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})))))}static get is(){return"sc-alert"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-alert.scss"]}}static get styleUrls(){return{$:["sc-alert.css"]}}static get properties(){return{open:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods."},attribute:"open",reflect:!0,defaultValue:"false"},title:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The title."},attribute:"title",reflect:!1},closable:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the alert closable."},attribute:"closable",reflect:!0,defaultValue:"false"},type:{type:"string",mutable:!1,complexType:{original:"'primary' | 'success' | 'info' | 'warning' | 'danger'",resolved:'"danger" | "info" | "primary" | "success" | "warning"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The type of alert."},attribute:"type",reflect:!0,defaultValue:"'primary'"},duration:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with\nthe alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`."},attribute:"duration",reflect:!1,defaultValue:"Infinity"},scrollOnOpen:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Scroll into view."},attribute:"scroll-on-open",reflect:!1},scrollMargin:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Scroll margin"},attribute:"scroll-margin",reflect:!1,defaultValue:"'0px'"},noIcon:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"No icon"},attribute:"no-icon",reflect:!1}}}static get states(){return{autoHideTimeout:{}}}static get events(){return[{method:"scHide",name:"scHide",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"When alert is hidden"},complexType:{original:"void",resolved:"void",references:{}}},{method:"scShow",name:"scShow",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"When alert is shown"},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{show:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Shows the alert.",tags:[]}},hide:{complexType:{signature:"() => Promise<void>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<void>"},docs:{text:"Hides the alert",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"open",methodName:"handleOpenChange"}]}}