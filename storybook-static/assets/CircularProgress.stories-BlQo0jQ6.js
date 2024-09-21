import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const y=({progress:j,size:a=150,strokeWidth:n=10,fromColor:b="#ec4899",toColor:v="#a855f7",showPercentage:q=!0})=>{const u=Math.min(Math.max(j,0),100),r=a/2,l=r-n/2,c=2*Math.PI*l,T=c-u/100*c;return e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsxs("svg",{width:a,height:a,className:"transform -rotate-90",children:[e.jsx("circle",{cx:r,cy:r,r:l,stroke:"#e5e7eb",strokeWidth:n,fill:"none"}),e.jsx("circle",{cx:r,cy:r,r:l,stroke:"url(#gradient)",strokeWidth:n,fill:"none",strokeDasharray:c,strokeDashoffset:T,strokeLinecap:"round",className:"animate-progress"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"1",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:b}),e.jsx("stop",{offset:"100%",stopColor:v})]})})]}),q&&e.jsxs("div",{className:"absolute font-anime text-xl text-black",children:[u,"%"]})]})};y.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{progress:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const P={component:y},s={args:{progress:57}},o={args:{progress:57,fromColor:"red",toColor:"purple"}},t={args:{progress:57,fromColor:"blue",toColor:"green",size:350}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    progress: 57
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,f,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    progress: 57,
    fromColor: "red",
    toColor: "purple"
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,C,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    progress: 57,
    fromColor: "blue",
    toColor: "green",
    size: 350
  }
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const V=["Default","CustomColours","CustomHeight"];export{o as CustomColours,t as CustomHeight,s as Default,V as __namedExportsOrder,P as default};
