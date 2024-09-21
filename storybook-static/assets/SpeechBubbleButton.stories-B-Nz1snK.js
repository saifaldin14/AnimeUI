import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const h=({text:x,onClick:y,tailPosition:e="none",backgroundColor:o="white",textColor:b="black",tailColor:s})=>{const v=e!=="none"?{content:"''",position:"absolute",top:"50%",transform:"translateY(-50%)",borderWidth:"8px",borderStyle:"solid",borderColor:"transparent",...e==="left"&&{left:"0",marginLeft:"-16px",borderRightColor:s||o},...e==="right"&&{right:"0",marginRight:"-16px",borderLeftColor:s||o}}:{};return n.jsxs("button",{onClick:y,className:"relative px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",style:{backgroundColor:o,color:b},children:[x,e!=="none"&&n.jsx("span",{style:v})]})};h.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleButton",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},tailPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "none"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"white"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"black"',computed:!1}},tailColor:{required:!1,tsType:{name:"string"},description:""}}};const S={component:h},t={args:{text:"No Tail"}},r={args:{text:"From the left",tailPosition:"left",tailColor:"#000"}},a={args:{text:"From the right",tailPosition:"right"}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "No Tail"
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "From the left",
    tailPosition: "left",
    tailColor: "#000"
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "From the right",
    tailPosition: "right"
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Default","Left","Right"];export{t as Default,r as Left,a as Right,q as __namedExportsOrder,S as default};
