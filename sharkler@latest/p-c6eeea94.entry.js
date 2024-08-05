import{r as s,h as t,H as e,g as i}from"./p-a5ccd36d.js";import{m as o}from"./p-41c082d6.js";import{q as r}from"./p-444efb9b.js";import{C as a,I as n,S as c,W as h,E as l}from"./p-d57f82fb.js";const g="sk-message{--sk-message-icon-color:var(--sk-color-primary);--sk-message-text-color:var(--sk-color-text-3);--sk-message-bg-color:rgba(255, 255, 255, 1)}.sk-message{position:fixed;z-index:2147483647;left:50%;transform:translateX(-50%);border:1px solid var(--sk-color-white);background:var(--sk-message-bg-color);border-radius:6px;box-shadow:0 2px 4px rgba(10, 10, 10, 0.1), 0 4px 8px rgba(10, 10, 10, 0.2);transition:top 300ms, opacity 400ms}.sk-message--success{--sk-message-icon-color:var(--sk-color-success)}.sk-message--warning{--sk-message-icon-color:var(--sk-color-warn)}.sk-message--error{--sk-message-icon-color:var(--sk-color-error)}.sk-message-container{display:flex;align-items:center;gap:8px;padding:6px 12px;width:-moz-fit-content;width:fit-content;color:var(--sk-message-text-color)}.sk-message-content{display:inline-flex;overflow:hidden;font-size:var(--sk-font-size);line-height:var(--sk-line-height)}.sk-message-prefix,.sk-message-suffix{display:inline-flex;color:var(--sk-message-icon-color);font-size:var(--sk-font-size-lg)}.sk-message-suffix{cursor:pointer;color:var(--sk-color-text-1)}";const m=g;const d=class{constructor(e){s(this,e);this.delay=400;this.gap=20;this.getTopOffset=()=>{var s;return(((s=this.prev)===null||s===void 0?void 0:s.clientHeight)||0)+this.gap};this.setDisappearTimer=()=>{if(this.duration<=0)return;this.disappearTimer=window.setTimeout((()=>{this.offset=0}),this.duration+this.delay)};this.renderContainer=()=>{const s=({tagName:s})=>({Info:t(n,null),Success:t(c,null),Warning:t(h,null),Error:t(l,null)}[s]);return t("div",{class:"sk-message-container"},t("span",{class:"sk-message-prefix"},this.icon||t(s,{tagName:this.type[0].toUpperCase()+this.type.slice(1)})),t("span",{class:"sk-message-content"},t("slot",null,this.message)),t("span",{class:"sk-message-suffix",onClick:()=>this.close()},this.closable&&t(a,null)))};this.offset=0;this.message=undefined;this.type="info";this.duration=3e3;this.closable=undefined;this.icon=undefined;this.customClass=undefined;this.grouping=undefined;this.count=1}get prev(){const s=r(this.tagSelector);const t=s.indexOf(this.el);return t===-1?s.pop():t===0?null:s[t-1]}get next(){const s=r(this.tagSelector);const t=s.indexOf(this.el);return t===-1?null:s[t+1]}get tagSelector(){return"body > sk-message"}watchOffset(){var s;(s=this.next)===null||s===void 0?void 0:s.decreaseTop();if(this.offset<=0){setTimeout((()=>{this.el.remove()}),this.delay)}}watchCount(){clearTimeout(this.disappearTimer);this.setDisappearTimer()}componentWillLoad(){var s;this.offset=((s=this.prev)===null||s===void 0?void 0:s.offset)||this.offset;this.el.remove()}componentDidLoad(){setTimeout((()=>this.offset+=this.getTopOffset()));window.document.body.append(this.el);this.setDisappearTimer()}async close(){this.offset=0}async decreaseTop(){this.offset=this.offset-this.getTopOffset()}render(){return t(e,{key:"1fb63943edb320b06b8f04b008e0b941458f5228",class:o(this,"sk-message",[],`sk-message--${this.type}`,this.customClass),style:{opacity:this.offset<=0?"0":"1",top:this.offset+"px"}},this.grouping&&this.count>1?t("sk-badge",{background:"var(--sk-message-icon-color)",count:this.count,size:"18px"},this.renderContainer()):this.renderContainer())}get el(){return i(this)}static get watchers(){return{offset:["watchOffset"],count:["watchCount"]}}};d.style=m;export{d as sk_message};
//# sourceMappingURL=p-c6eeea94.entry.js.map