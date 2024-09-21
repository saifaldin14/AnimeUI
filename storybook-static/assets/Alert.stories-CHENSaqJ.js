import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const y={success:{background:"bg-green-500",border:"border-green-700",text:"text-white"},error:{background:"bg-red-500",border:"border-red-700",text:"text-white"},warning:{background:"bg-yellow-500",border:"border-yellow-700",text:"text-black"},info:{background:"bg-blue-500",border:"border-blue-700",text:"text-white"}},g=({message:m,type:b="info",onClose:o,customColors:e})=>{const n=y[b],p=e?{backgroundColor:e.background,borderColor:e.border,color:e.text}:{};return a.jsxs("div",{className:`relative border-l-4 p-4 mb-4 animate-fadeIn rounded-md shadow-md ${e?"":`${n.background} ${n.border} ${n.text}`}`,style:p,children:[a.jsx("p",{className:"font-anime",children:m}),o&&a.jsx("button",{onClick:o,className:"absolute top-2 right-2 text-xl leading-none focus:outline-none",children:"×"})]})};g.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customColors:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  background: string;
  text: string;
  border: string;
}`,signature:{properties:[{key:"background",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"border",value:{name:"string",required:!0}}]}},description:""}}};const k={component:g},r={args:{message:"Hey this is a warning!",type:"warning"}},t={args:{message:"Hey, use custom colours",customColors:{text:"orange",background:"black",border:"yellow"}}};var s,i,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    message: "Hey this is a warning!",
    type: "warning"
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: "Hey, use custom colours",
    customColors: {
      text: "orange",
      background: "black",
      border: "yellow"
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["Default","CustomColours"];export{t as CustomColours,r as Default,w as __namedExportsOrder,k as default};
