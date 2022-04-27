"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[5960],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="release-module",p={unversionedId:"actions/release-module",id:"actions/release-module",title:"release-module",description:"Create a GitHub Tag and Release for the versioning of Terraform Module.",source:"@site/docs/actions/release-module.md",sourceDirName:"actions",slug:"/actions/release-module",permalink:"/tfaction/docs/actions/release-module",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/release-module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list-working-dirs",permalink:"/tfaction/docs/actions/list-working-dirs"},next:{title:"scaffold-module",permalink:"/tfaction/docs/actions/scaffold-module"}},s=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Required Inputs",id:"required-inputs",children:[],level:3},{value:"Optional Inputs",id:"optional-inputs",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"release-module"},"release-module"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/feature/module"},"Create a GitHub Tag and Release for the versioning of Terraform Module"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/156072006-12d48ac2-95ee-41ab-a90a-42b232f40140.png",alt:"image"})),(0,l.kt)("p",null,"--"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/156072085-cabd76cd-e8a4-44af-b407-e862f4bf9946.png",alt:"image"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/release-module"},"Source code")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cli.github.com/"},"gh"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-module.yaml"},"Workflow")),(0,l.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"Nothing."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"module_path"),(0,l.kt)("td",{parentName:"tr",align:null},"file path to Module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"module version")))),(0,l.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"github_token"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"github.token")),(0,l.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"Nothing."))}m.isMDXComponent=!0}}]);