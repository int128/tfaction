"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[7294],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:150},p="Create a pull request automatically to handle the problem when apply failed",u={unversionedId:"feature/follow-up-pr",id:"feature/follow-up-pr",title:"Create a pull request automatically to handle the problem when apply failed",description:"Sometimes terraform apply fails even if terraform plan passed.",source:"@site/docs/feature/follow-up-pr.md",sourceDirName:"feature",slug:"/feature/follow-up-pr",permalink:"/tfaction/docs/feature/follow-up-pr",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/feature/follow-up-pr.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Update related pull requests automatically when the base branch is updated",permalink:"/tfaction/docs/feature/auto-update-related-prs"},next:{title:"Update dependencies with Renovate safely",permalink:"/tfaction/docs/feature/renovate"}},c=[{value:"\ud83d\udca1 Skip creating pull requests",id:"-skip-creating-pull-requests",children:[],level:2}],s={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-pull-request-automatically-to-handle-the-problem-when-apply-failed"},"Create a pull request automatically to handle the problem when apply failed"),(0,o.kt)("p",null,"Sometimes ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," fails even if ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," passed.\nIn that case, tfaction automatically creates a pull request with an empty commit to fix the failure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/151699230-1c109a57-47d1-4c3b-9c3a-4dfec786a043.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/151699142-6d19cd51-eac5-4f69-bfe5-7920df69edc6.png",alt:"image"})),(0,o.kt)("p",null,"If the problem would be solved by running ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," again,\nplease merge the created pull request."),(0,o.kt)("p",null,"If any code fix is needed, please add commits to the created pull request and merge it."),(0,o.kt)("p",null,"Pull Requests are created per failed job.\nFor example, if two jobs failed, two pull requests would be created."),(0,o.kt)("h2",{id:"-skip-creating-pull-requests"},"\ud83d\udca1 Skip creating pull requests"),(0,o.kt)("p",null,"If you don't want to create pull requests by GitHub App, please see ",(0,o.kt)("a",{parentName:"p",href:"skip-creating-pr"},"Support skipping creating pull requests"),"."))}f.isMDXComponent=!0}}]);