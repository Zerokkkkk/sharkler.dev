import{r as s,h as e,H as o,g as a}from"./p-a5ccd36d.js";import{c as l}from"./p-41c082d6.js";import{g as r}from"./p-444efb9b.js";const c="sk-collapse{--sk-collapse-header-size:36px;--sk-collapse-padding-y:7px;--sk-collapse-padding-x:16px;--sk-collapse-border-radius-size:0;--sk-collapse-border-radius:var(--sk-collapse-border-radius-size);--sk-collapse-bg-color:var(--sk-color-white);--sk-collapse-color:var(--sk-color-text-3);--sk-collapse-color-disabled:var(--sk-color-disabled);--sk-collapse-bg-color:var(--sk-color-white);--sk-collapse-bg-color-hover:#f4f8fc}.sk-collapse{display:grid;border-radius:var(--sk-collapse-border-radius)}.sk-collapse--rounded{--sk-collapse-border-radius-size:var(--sk-border-radius-2)}.sk-collapse--detached{gap:8px}.sk-collapse--detached .sk-collapse-item{box-shadow:var(--sk-box-shadow-light)}.sk-collapse:not(.sk-collapse--detached){box-shadow:var(--sk-box-shadow-light)}.sk-collapse:not(.sk-collapse--detached)>.sk-collapse-item{--sk-collapse-border-radius:0}.sk-collapse:not(.sk-collapse--detached)>.sk-collapse-item:not(:first-of-type){border-top:1px solid var(--sk-color-border-1)}.sk-collapse:not(.sk-collapse--detached)>.sk-collapse-item:first-of-type{--sk-collapse-border-radius:var(--sk-collapse-border-radius-size)\n  \tvar(--sk-collapse-border-radius-size) 0 0}.sk-collapse:not(.sk-collapse--detached)>.sk-collapse-item:last-of-type{--sk-collapse-border-radius:0 0 var(--sk-collapse-border-radius-size)\n  \tvar(--sk-collapse-border-radius-size)}.sk-collapse--rounded.sk-collapse--detached>.sk-collapse-item{border-radius:var(--sk-collapse-border-radius-size)}.sk-collapse--rounded.sk-collapse--detached>.sk-collapse-item .sk-collapse-panel{border-top-left-radius:0;border-top-right-radius:0}.sk-collapse-item{display:block}";const t=c;const d=class{constructor(e){s(this,e);this.scrollIntoViewOnTransitionEnd=false;this.scrollIntoView=s=>{var e;const o=r(s);const a=s.querySelector("sk-collapse-header");const l=s.querySelector("sk-collapse-panel");const c=Array.from(s.parentElement.children);const t=this.accordion&&!this.scrollIntoViewOnTransitionEnd?((e=c.slice(0,c.findIndex((e=>e===s))).find((s=>s.classList.contains("sk-collapse-item--expanded"))))===null||e===void 0?void 0:e.children[1].scrollHeight)||0:0;const d=o.scrollTop+l.getBoundingClientRect().top-Math.max(0,o.getBoundingClientRect().top);const i=parseFloat(window.getComputedStyle(o)["scrollPaddingTop"])||0;const p=d+Math.min(l.scrollHeight,o.clientHeight-a.clientHeight-i)-t;if(!this.scrollIntoViewOnTransitionEnd&&o.scrollHeight<p){this.scrollIntoViewOnTransitionEnd=true;return}if(!this.el.closest("sk-collapse-panel")&&o.clientHeight+o.scrollTop<p){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;o.scrollTo({top:p-o.clientHeight,behavior:s?"auto":"smooth"})}};this.onTransitionEnd=s=>{const e=s.target;if(!this.scrollIntoViewOnTransitionEnd||e.tagName!=="SK-COLLAPSE-PANEL"||e.closest("sk-collapse")!==this.el||!e.closest("sk-collapse-item").expanded){return}this.scrollIntoView(e.closest("sk-collapse-item"));this.scrollIntoViewOnTransitionEnd=false};this.rounded=false;this.detached=false;this.accordion=false}handleItemExpandChange(s){const e=s.target;if(e.tagName!=="SK-COLLAPSE-ITEM")return;if(this.accordion&&e.expanded){const s=Array.from(e.parentElement.children).filter((s=>s!==e));s.forEach((s=>{s.expanded=false}))}if(s.detail.expand){this.scrollIntoView(e)}}render(){const s=l("sk-collapse",this.detached&&"sk-collapse--detached",this.rounded&&"sk-collapse--rounded");return e(o,{key:"2c63274157c5cadd124efa251f4a3b5c62aa40da",class:s,onTransitionEnd:this.onTransitionEnd},e("slot",{key:"b625c1733d0a8b4f5b01165969ead068f0fabbf6"}))}get el(){return a(this)}};d.style=t;export{d as sk_collapse};
//# sourceMappingURL=p-3e19d6e5.entry.js.map