"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[6653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,g=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},s="Stemming",l={unversionedId:"text-analysis/stemming",id:"version-v0.3.1/text-analysis/stemming",title:"Stemming",description:"By default, Lyra analyzes the input and performs a stemming operation, which",source:"@site/versioned_docs/version-v0.3.1/05-text-analysis/01-stemming.md",sourceDirName:"05-text-analysis",slug:"/text-analysis/stemming",permalink:"/v0.3.1/text-analysis/stemming",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/versioned_docs/version-v0.3.1/05-text-analysis/01-stemming.md",tags:[],version:"v0.3.1",sidebarPosition:1,frontMatter:{},sidebar:"main",previous:{title:"Text Analysis",permalink:"/v0.3.1/category/text-analysis"},next:{title:"Stop-words",permalink:"/v0.3.1/text-analysis/stop-words"}},o={},m=[{value:"Disabling stemming",id:"disabling-stemming",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stemming"},"Stemming"),(0,r.kt)("p",null,"By default, Lyra analyzes the input and performs a ",(0,r.kt)("inlineCode",{parentName:"p"},"stemming")," operation, which\nallows the engine to perform more optimized queries, as well as save indexing\nspace."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stemming"},(0,r.kt)("em",{parentName:"a"},"Wikipedia"))," In linguistic\nmorphology and information retrieval, stemming is the process of reducing\ninflected (or sometimes derived) words to their word stem, base, or root\nform\u2014generally a written word form. The stem need not be identical to the\nmorphological root of the word; it is usually sufficient that related words map\nto the same stem, even if this stem is not in itself a valid root. Algorithms\nfor stemming have been studied in computer science since the 1960s. Many search\nengines treat words with the same stem as synonyms as a kind of query expansion,\na process called conflation.")),(0,r.kt)("p",null,"By default, Lyra uses ",(0,r.kt)("strong",{parentName:"p"},"the English language analyzer"),", but we can override\nthis behavior by setting the property ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLanguage")," at database\ninitialization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { create } from "@lyrasearch/lyra";\nimport { stemmer } from "@lyrasearch/lyra/dist/esm/stemmer/lib/it";\n\nconst db = create({\n  schema: {\n    author: "string",\n    quote: "string",\n  },\n  defaultLanguage: "italian",\n  tokenizer: {\n    stemmingFn: stemmer,\n  },\n});\n')),(0,r.kt)("p",null,"Right now, Lyra supports 23 languages and stemmers out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Armenian"),(0,r.kt)("li",{parentName:"ul"},"Arabic"),(0,r.kt)("li",{parentName:"ul"},"Danish"),(0,r.kt)("li",{parentName:"ul"},"Spanish"),(0,r.kt)("li",{parentName:"ul"},"English"),(0,r.kt)("li",{parentName:"ul"},"Finnish"),(0,r.kt)("li",{parentName:"ul"},"French"),(0,r.kt)("li",{parentName:"ul"},"German"),(0,r.kt)("li",{parentName:"ul"},"Greek"),(0,r.kt)("li",{parentName:"ul"},"Hindi"),(0,r.kt)("li",{parentName:"ul"},"Hungarian"),(0,r.kt)("li",{parentName:"ul"},"Indonesian"),(0,r.kt)("li",{parentName:"ul"},"Italian"),(0,r.kt)("li",{parentName:"ul"},"Irish"),(0,r.kt)("li",{parentName:"ul"},"Dutch"),(0,r.kt)("li",{parentName:"ul"},"Nepali"),(0,r.kt)("li",{parentName:"ul"},"Norwegian"),(0,r.kt)("li",{parentName:"ul"},"Portuguese"),(0,r.kt)("li",{parentName:"ul"},"Romanian"),(0,r.kt)("li",{parentName:"ul"},"Russian"),(0,r.kt)("li",{parentName:"ul"},"Serbian"),(0,r.kt)("li",{parentName:"ul"},"Swedish"),(0,r.kt)("li",{parentName:"ul"},"Turkish")),(0,r.kt)("h2",{id:"disabling-stemming"},"Disabling stemming"),(0,r.kt)("p",null,"You can disable stemming by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"enableStemming: false")," while initializing a\nnew Lyra instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { create } from "@lyrasearch/lyra";\n\nconst db = create({\n  schema: {\n    author: "string",\n    quote: "string",\n  },\n  tokenizer: {\n    enableStemming: false,\n  },\n});\n')))}u.isMDXComponent=!0}}]);