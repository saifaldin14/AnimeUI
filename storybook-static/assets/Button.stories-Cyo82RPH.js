import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const p=({text:f,onClick:g,fromColor:x="#ec4899",toColor:y="#a855f7"})=>{const h={backgroundImage:`linear-gradient(to right, ${x}, ${y})`};return e.jsxs("button",{onClick:g,className:"relative inline-block px-8 py-3 font-bold text-white group",children:[e.jsx("span",{style:h,className:"absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1"}),e.jsx("span",{className:"absolute inset-0 w-full h-full border-2 border-white"}),e.jsx("span",{className:"relative",children:f})]})};p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}}}};const j={component:p},r={args:{text:"Click me!"}},t={args:{text:"😅"}},o={args:{text:"Hellooooo",fromColor:"#00F260",toColor:"#0575E6"}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: "Click me!"
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "😅"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "Hellooooo",
    fromColor: "#00F260",
    toColor: "#0575E6"
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const v=["Default","Emoji","DifferentGradient"];export{r as Default,o as DifferentGradient,t as Emoji,v as __namedExportsOrder,j as default};
