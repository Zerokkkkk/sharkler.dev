import{r as o,h as t,F as r,H as e}from"./p-a5ccd36d.js";import{F as s,O as n}from"./p-d57f82fb.js";const c=({name:o})=>Object.assign(Object.assign({},s),n)[o];const a=".sk-button{--sk-button-color-text:var(--sk-color-primary);--sk-button-color-text-hover:var(--sk-color-primary-hover);--sk-button-color-text-active:var(--sk-color-primary-active);--sk-button-color-bd:var(--sk-color-primary);--sk-button-color-bd-hover:var(--sk-color-primary-hover);--sk-button-color-bd-active:var(--sk-color-primary-active);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:4px 14px;height:32px;border:1px solid transparent;border-color:var(--sk-button-color-bd);border-radius:var(--sk-border-radius-1);background-color:var(--sk-button-color-bg);text-align:center;color:var(--sk-button-color-text);font-size:var(--sk-font-size);line-height:var(--sk-line-height)}.sk-button:not([disabled]):hover{color:var(--sk-button-color-text-hover);border-color:var(--sk-button-color-bd-hover);background-color:var(--sk-button-color-bg-hover)}.sk-button:not([disabled]):active{color:var(--sk-button-color-text-active);border-color:var(--sk-button-color-bd-active);background-color:var(--sk-button-color-bg-active)}.sk-button[disabled]{cursor:not-allowed;opacity:0.6}.sk-button[danger]{--sk-button-color-bd:var(--sk-color-error);--sk-button-color-bd-hover:var(--sk-color-error-hover);--sk-button-color-bd-active:var(--sk-color-error-active);--sk-button-color-text:var(--sk-color-error);--sk-button-color-text-hover:var(--sk-color-error-hover);--sk-button-color-text-active:var(--sk-color-error-active)}.sk-button[loading]{pointer-events:none;opacity:0.65}.sk-button[type=primary]{--sk-button-color-bg:var(--sk-color-primary);--sk-button-color-bg-hover:var(--sk-color-primary-hover);--sk-button-color-bg-active:var(--sk-color-primary-active);--sk-button-color-text:var(--sk-color-white);--sk-button-color-text-hover:var(--sk-color-white);--sk-button-color-text-active:var(--sk-color-white)}.sk-button[type=primary][danger]{--sk-button-color-bg:var(--sk-color-error);--sk-button-color-bg-hover:var(--sk-color-error-hover);--sk-button-color-bg-active:var(--sk-color-error-active)}.sk-button[type=text],.sk-button[type=link]{--sk-button-color-bd:transparent;--sk-button-color-bd-hover:transparent;--sk-button-color-bd-active:transparent;--sk-button-color-bg:transparent;--sk-button-color-bg-hover:var(--sk-color-fill-2);--sk-button-color-bg-active:var(--sk-color-fill-1)}.sk-button[type=text][disabled],.sk-button[type=link][disabled]{border-color:transparent;background-color:transparent}.sk-button[type=text]{--sk-button-color-text:var(--sk-color-text-3);--sk-button-color-text-hover:var(--sk-color-text-3);--sk-button-color-text-active:var(--sk-color-text-3)}.sk-button[type=text][danger]{--sk-button-color-text:var(--sk-color-error);--sk-button-color-text-hover:var(--sk-color-error-hover);--sk-button-color-text-active:var(--sk-color-error-active)}.sk-button[type=link]{--sk-button-color-bg:transparent;--sk-button-color-bg-hover:transparent;--sk-button-color-bg-active:transparent;padding-left:2px;padding-right:2px}.sk-button[type=link] a{cursor:inherit;display:inline-flex;align-items:center;gap:6px;color:inherit;-webkit-text-decoration:none;text-decoration:none}.sk-button-prefix{display:inline-flex}.sk-button-prefix:empty{display:none}";const i=a;const l=class{constructor(t){o(this,t);this.type=undefined;this.href=undefined;this.target=undefined;this.iconName=undefined;this.disabled=false;this.loading=false;this.danger=false}render(){const o=()=>t(r,null,t("span",{key:"262e2f6aa6d96d87b85d6140716c0046b0473d06",class:"sk-button-prefix"},this.loading&&t("sk-icon",{key:"6a64dbc0ae3157a9371f9267387f74faf5d9526b",name:"Loading"}),this.iconName&&t("sk-icon",{key:"25a2c013ab51cef1d92d4125b3c46b6716a17c6f",name:this.iconName})),t("slot",{key:"9aacf8ce8c9194a5b26bf8267142f68e2c3f6a33"}));return t(e,{key:"3033f508de7a8484c69dbe6f4a55f23d13e3d29f",class:"sk-button"},this.type==="link"?t("a",{href:this.href,target:this.target,onClick:o=>{this.disabled&&o.preventDefault()}},o()):o())}};l.style=i;const b=".sk-icon{display:inline-flex;align-items:center;justify-content:center;width:1em;height:1em;line-height:1em;vertical-align:-0.1em;fill:currentColor}.sk-icon svg{width:1em;height:1em}";const k=b;const u=class{constructor(t){o(this,t);this.name=undefined;this.size=undefined;this.color=undefined}render(){return t(e,{key:"fd8cae5f25eee063599a4d4ad172ca3ea7dc03cc",class:"sk-icon",style:{fontSize:isNaN(Number(this.size))?this.size:this.size+"px",color:this.color}},t(c,{key:"78476f4e56914cf15ec461ae07ee6f3bb363b4b7",name:this.name}))}};u.style=k;export{l as sk_button,u as sk_icon};
//# sourceMappingURL=p-d82fbecd.entry.js.map