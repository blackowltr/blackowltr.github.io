(self.webpackChunkblackowl=self.webpackChunkblackowl||[]).push([[8390],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var s=n(7294),o=n(5893);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,o.jsx)(o.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(6905),r=n(5999),i=n(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:c,className:a}=e;return(0,o.jsxs)(d,{type:t,className:a,children:[(0,o.jsx)(u,{title:s,icon:n}),(0,o.jsx)(m,{children:c})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,o.jsx)(h,{...f,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(b,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,o.jsx)(h,{...g,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,o.jsx)(h,{...k,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:x,tip:j,info:y,warning:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(x,{title:"secondary",...e}),important:e=>(0,o.jsx)(y,{title:"important",...e}),success:e=>(0,o.jsx)(j,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...L,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function Z(e){const t=c(e),n=(s=t.type,E[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),E.info));var s;return(0,o.jsx)(n,{...t})}},8390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>de});var s=n(7294);const o={},c=s.createContext(o);function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:function(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}(e.components),s.createElement(c.Provider,{value:t},e.children)}var r=n(5742),i=n(2389),l=n(6905),d=n(2949),u=n(6668);function m(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,d.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var h=n(5281),p=n(7594),f=n.n(p);const x=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(g);function k(e,t){const n=e.map((e=>{const{start:n,end:s}=j[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&b.test(c)){const e=c.match(b).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return k(["tex"],t);case"lua":case"haskell":case"sql":return k(["lua"],t);case"wasm":return k(["wasm"],t);case"vb":case"vbnet":case"vba":case"visual-basic":return k(["vb","rem"],t);case"batch":return k(["rem"],t);case"basic":return k(["rem","f90"],t);case"fsharp":return k(["js","ml"],t);case"ocaml":case"sml":return k(["ml"],t);case"fortran":return k(["f90"],t);case"cobol":return k(["cobol"],t);default:return k(v,t)}}(s,o),r=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<r.length;){const e=r[h].match(a);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${h},`:d[t]?i[d[t]].start=h:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${h-1},`),r.splice(h,1)}n=r.join("\n");const m={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var B=n(5893);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=t[s];c&&"string"==typeof o&&(n[c]=o)})),n}(m());return(0,B.jsx)(t,{...n,style:s,className:(0,l.Z)(n.className,N.codeBlockContainer,h.k.common.codeBlock)})}const w={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){let{children:t,className:n}=e;return(0,B.jsx)(C,{as:"pre",tabIndex:0,className:(0,l.Z)(w.codeBlockStandalone,"thin-scrollbar",n),children:(0,B.jsx)("code",{className:w.codeBlockLines,children:t})})}var E=n(902);const Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=Z);const o=(0,E.zX)(t),c=(0,E.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(4798);const S={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function I(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,l.Z)(n,s&&S.codeLine)}),r=t.map(((e,t)=>(0,B.jsx)("span",{...c({token:e,key:t})},t)));return(0,B.jsxs)("span",{...a,children:[s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{className:S.codeLineNumber}),(0,B.jsx)("span",{className:S.codeLineContent,children:r})]}):r,(0,B.jsx)("br",{})]})}var A=n(5999);function M(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function z(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),c&&(o.removeAllRanges(),o.addRange(c)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,B.jsx)("button",{type:"button","aria-label":o?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:r,children:(0,B.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,B.jsx)(M,{className:H.copyButtonIcon}),(0,B.jsx)(z,{className:H.copyButtonSuccessIcon})]})})}function V(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function W(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,B.jsx)("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,s&&$.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,B.jsx)(V,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:a,language:r}=e;const{prism:{defaultLanguage:i,magicComments:d}}=(0,u.L)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??i),p=m(),f=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return T(c,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),b=function(e){return e?.match(x)?.groups.title??""}(o)||c,{lineClassNames:g,code:j}=y(t,{metastring:o,language:h,magicComments:d}),v=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,B.jsxs)(C,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[b&&(0,B.jsx)("div",{className:w.codeBlockTitle,children:b}),(0,B.jsxs)("div",{className:w.codeBlockContent,children:[(0,B.jsx)(_.y$,{theme:p,code:j,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,B.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.Z)(t,w.codeBlock,"thin-scrollbar"),style:n,children:(0,B.jsx)("code",{className:(0,l.Z)(w.codeBlockLines,v&&w.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,B.jsx)(I,{line:e,getLineProps:o,getTokenProps:c,classNames:g[t],showLineNumbers:v},t)))})})}}),(0,B.jsxs)("div",{className:w.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,B.jsx)(W,{className:w.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,B.jsx)(R,{className:w.codeButton,code:j})]})]})]})}function D(e){let{children:t,...n}=e;const o=(0,i.Z)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?P:L;return(0,B.jsx)(a,{...n,children:c},String(o))}function O(e){return(0,B.jsx)("code",{...e})}var q=n(3692);var F=n(788),G=n(6043);const U={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function K(e){let{summary:t,children:n,...o}=e;const c=(0,i.Z)(),a=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,G.u)({initialState:!o.open}),[d,u]=(0,s.useState)(o.open),m=s.isValidElement(t)?t:(0,B.jsx)("summary",{children:t??"Details"});return(0,B.jsxs)("details",{...o,ref:a,open:d,"data-collapsed":r,className:(0,F.Z)(U.details,c&&U.isBrowser,o.className),onMouseDown:e=>{J(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;J(t)&&Y(t,a.current)&&(e.preventDefault(),r?(l(!1),u(!0)):l(!0))},children:[m,(0,B.jsx)(G.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),u(!e)},children:(0,B.jsx)("div",{className:U.collapsibleContent,children:n})})]})}const Q={details:"details_b_Ee"},X="alert alert--info";function ee(e){let{...t}=e;return(0,B.jsx)(K,{...t,className:(0,l.Z)(X,Q.details,t.className)})}function te(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,B.jsx)(B.Fragment,{children:t.filter((e=>e!==n))});return(0,B.jsx)(ee,{...e,summary:n,children:o})}var ne=n(2503);function se(e){return(0,B.jsx)(ne.Z,{...e})}const oe={containsTaskList:"containsTaskList_mC6p"};function ce(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&oe.containsTaskList)}const ae={img:"img_ev3q"};var re=n(9047),ie=n(1875);const le={Head:r.Z,details:te,Details:te,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,B.jsx)(O,{...e}):(0,B.jsx)(D,{...e})},a:function(e){return(0,B.jsx)(q.Z,{...e})},pre:function(e){return(0,B.jsx)(B.Fragment,{children:e.children})},ul:function(e){return(0,B.jsx)("ul",{...e,className:ce(e.className)})},img:function(e){return(0,B.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,l.Z)(t,ae.img))});var t},h1:e=>(0,B.jsx)(se,{as:"h1",...e}),h2:e=>(0,B.jsx)(se,{as:"h2",...e}),h3:e=>(0,B.jsx)(se,{as:"h3",...e}),h4:e=>(0,B.jsx)(se,{as:"h4",...e}),h5:e=>(0,B.jsx)(se,{as:"h5",...e}),h6:e=>(0,B.jsx)(se,{as:"h6",...e}),admonition:re.Z,mermaid:ie.Z};function de(e){let{children:t}=e;return(0,B.jsx)(a,{components:le,children:t})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);