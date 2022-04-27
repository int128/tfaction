"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[9849],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=u(r),s=a,g=f["".concat(p,".").concat(s)]||f[s]||c[s]||i;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},391:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:400},p="tfmigrate",u={unversionedId:"feature/tfmigrate",id:"feature/tfmigrate",title:"tfmigrate",description:"About tfmigrate, please see https://github.com/minamijoyo/tfmigrate .",source:"@site/docs/feature/tfmigrate.md",sourceDirName:"feature",slug:"/feature/tfmigrate",permalink:"/tfaction/docs/feature/tfmigrate",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/feature/tfmigrate.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Scaffold working directory by GitHub Actions `workflow_dispatch` event",permalink:"/tfaction/docs/feature/scaffold-working-dir"},next:{title:"Manage Terraform Modules",permalink:"/tfaction/docs/feature/module"}},m=[{value:"multi_state migration",id:"multi_state-migration",children:[],level:2},{value:"Scaffold migration pull request",id:"scaffold-migration-pull-request",children:[{value:"\ud83d\udca1 Skip creating pull requests",id:"-skip-creating-pull-requests",children:[],level:3}],level:2}],c={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tfmigrate"},"tfmigrate"),(0,i.kt)("p",null,"About tfmigrate, please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/minamijoyo/tfmigrate"},"https://github.com/minamijoyo/tfmigrate")," ."),(0,i.kt)("p",null,"You can introduce tfmigrate to Terraform Workflow easily with tfaction."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create .tfmigrate.hcl and migration file in the working directory"),(0,i.kt)("li",{parentName:"ol"},"Create a Pull Request with label ",(0,i.kt)("inlineCode",{parentName:"li"},"tfmigrate:<target>"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tfmigrate plan")," is run in the pull request CI, and ",(0,i.kt)("inlineCode",{parentName:"p"},"tfmigrate apply")," is run in the main branch."),(0,i.kt)("p",null,"The label prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"tfmigrate:")," can be changed in the configuration file ",(0,i.kt)("a",{parentName:"p",href:"/config/tfaction-root-yaml"},"tfaction-root.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'label_prefixes:\n  tfmigrate: "migrate:"\n  skip: "skip:"\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tfmigrate plan")," is run."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/150029520-fd3aac78-d76a-41ee-9df0-a7fc02fb12b7.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tfmigrate apply")," is run."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/150029697-316218e0-cb1e-4a8d-ad5c-0c12e1cb68dc.png",alt:"image"})),(0,i.kt)("h2",{id:"multi_state-migration"},"multi_state migration"),(0,i.kt)("p",null,"If you migrate resources from the target ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to the target ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/minamijoyo/tfmigrate#multi_state-mv"},"tfmigrate's multi_state"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create .tfmigrate.hcl and migration file in the working directory ",(0,i.kt)("inlineCode",{parentName:"li"},"A")),(0,i.kt)("li",{parentName:"ol"},"Create a Pull Request with label ",(0,i.kt)("inlineCode",{parentName:"li"},"tfmigrate:<target A>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"skip:<target B>"))),(0,i.kt)("p",null,"Or"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create .tfmigrate.hcl and migration file in the working directory ",(0,i.kt)("inlineCode",{parentName:"li"},"B")),(0,i.kt)("li",{parentName:"ol"},"Create a Pull Request with label ",(0,i.kt)("inlineCode",{parentName:"li"},"tfmigrate:<target B>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"skip:<target A>"))),(0,i.kt)("p",null,"The label ",(0,i.kt)("inlineCode",{parentName:"p"},"skip:<target>")," is important to prevent ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform plan")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply")," from being run."),(0,i.kt)("h2",{id:"scaffold-migration-pull-request"},"Scaffold migration pull request"),(0,i.kt)("p",null,"It is a little bothersome to write migration file.\nYou can scaffold migration pull request by GitHub Actions."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction-example/blob/main/.github/workflows/scaffold-tfmigrate.yaml"},"workflow")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/154389701-737050cf-beca-4754-9852-76986e4ebf21.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/154388296-420b421e-1940-446a-a8e1-95d2b4f3f782.png",alt:"image"})),(0,i.kt)("h3",{id:"-skip-creating-pull-requests"},"\ud83d\udca1 Skip creating pull requests"),(0,i.kt)("p",null,"If you don't want to create pull requests by GitHub App, please see ",(0,i.kt)("a",{parentName:"p",href:"skip-creating-pr"},"Support skipping creating pull requests"),"."))}f.isMDXComponent=!0}}]);