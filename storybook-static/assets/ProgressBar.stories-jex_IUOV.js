import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({progress:f,fromColor:h="#ec4899",toColor:C="#a855f7",height:x=20,showPercentage:y=!0})=>{const o=Math.min(Math.max(f,0),100),b={width:`${o}%`,backgroundImage:`linear-gradient(to right, ${h}, ${C})`,height:`${x}px`};return t.jsx("div",{className:"w-full bg-gray-300 rounded-full overflow-hidden shadow-inner",children:t.jsx("div",{className:"animate-progress font-anime text-white flex items-center justify-center transition-width duration-500 ease-out",style:b,children:y&&o>5&&t.jsxs("span",{className:"text-sm font-bold",children:[o,"%"]})})})};g.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{progress:{required:!0,tsType:{name:"number"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const j={component:g},e={args:{progress:57}},r={args:{progress:57,fromColor:"red",toColor:"purple"}},s={args:{progress:57,fromColor:"blue",toColor:"green",height:50}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    progress: 57
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,i,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    progress: 57,
    fromColor: "red",
    toColor: "purple"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    progress: 57,
    fromColor: "blue",
    toColor: "green",
    height: 50
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const q=["Default","CustomColours","CustomHeight"];export{r as CustomColours,s as CustomHeight,e as Default,q as __namedExportsOrder,j as default};
