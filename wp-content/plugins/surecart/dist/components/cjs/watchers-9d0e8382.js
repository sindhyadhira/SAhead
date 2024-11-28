"use strict";const mutations=require("./mutations-19357660.js"),watchers=require("./watchers-2ad3abd1.js"),getters=require("./getters-c1b89891.js"),maybeUpdateProcessor=()=>{const e=[...getters.availableProcessors().map((({processor_type:e})=>e)),...getters.availableManualPaymentMethods().map((({id:e})=>e))];e.includes(watchers.state.id)||(watchers.state.id=(null==e?void 0:e.length)?null==e?void 0:e[0]:null)},maybeUpdateMethod=()=>{const e=(getters.availableMethodTypes()||[]).map((({id:e})=>e));"mollie"===(null===watchers.state||void 0===watchers.state?void 0:watchers.state.id)?e.includes(watchers.state.method)||(watchers.state.method=(null==e?void 0:e.length)?null==e?void 0:e[0]:null):watchers.state.method=null};mutations.onChange("checkout",(()=>{maybeUpdateProcessor(),maybeUpdateMethod()})),watchers.onChange("id",(()=>maybeUpdateProcessor())),getters.onChange("processors",(()=>maybeUpdateProcessor())),getters.onChange("methods",(()=>maybeUpdateMethod()));