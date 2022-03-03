"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[8296],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9408:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="create-follow-up-pr",p={unversionedId:"actions/create-follow-up-pr",id:"actions/create-follow-up-pr",title:"create-follow-up-pr",description:"Source code",source:"@site/docs/actions/create-follow-up-pr.md",sourceDirName:"actions",slug:"/actions/create-follow-up-pr",permalink:"/tfaction/docs/actions/create-follow-up-pr",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/create-follow-up-pr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"check-terraform-skip",permalink:"/tfaction/docs/actions/check-terraform-skip"},next:{title:"create-scaffold-pr",permalink:"/tfaction/docs/actions/create-scaffold-pr"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Required Inputs",id:"required-inputs",children:[],level:3},{value:"Optional Inputs",id:"optional-inputs",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],s={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-follow-up-pr"},"create-follow-up-pr"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/tree/main/create-follow-up-pr"},"Source code")),(0,l.kt)("p",null,"GitHub Actions to create a follow up pull request"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cli/cli"},"GitHub CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- uses: suzuki-shunsuke/tfaction/create-follow-up-pr@main\n  with:\n    github_app_token: ${{ secrets.GITHUB_APP_TOKEN }}\n")),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("h3",{id:"required-inputs"},"Required Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"github_app_token"),(0,l.kt)("td",{parentName:"tr",align:null},"GitHub Access Token. ",(0,l.kt)("inlineCode",{parentName:"td"},"github.token")," can't be used because it can't invoke GitHub Actions Workflow")))),(0,l.kt)("h3",{id:"optional-inputs"},"Optional Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"environment variable"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"github_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"github.token")),(0,l.kt)("td",{parentName:"tr",align:null},"GitHub Access Token")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"Nothing."))}m.isMDXComponent=!0}}]);