import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";const k=({content:w,children:C,trigger:t="click",fromColor:d="#ec4899",toColor:j="#a855f7",textColor:N="#ffffff"})=>{const[o,a]=c.useState(!1),l=c.useRef(null),y=()=>a(!0),P=()=>a(!1),R=()=>a(!o);return c.useEffect(()=>{if(t==="click"){const i=M=>{l.current&&!l.current.contains(M.target)&&a(!1)};return o?document.addEventListener("mousedown",i):document.removeEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}}},[o,t]),e.jsxs("div",{className:"relative inline-block",ref:l,onMouseEnter:t==="hover"?y:void 0,onMouseLeave:t==="hover"?P:void 0,children:[e.jsx("div",{onClick:t==="click"?R:void 0,children:C}),o&&e.jsxs("div",{className:"absolute z-10 mt-2 w-64 rounded-lg shadow-lg overflow-hidden",style:{background:`linear-gradient(to bottom right, ${d}, ${j})`,color:N},children:[e.jsx("div",{className:"absolute -top-2 left-1/2 transform -translate-x-1/2",children:e.jsx("svg",{width:"20",height:"10",viewBox:"0 0 20 10",fill:"none",children:e.jsx("path",{d:"M0 10L10 0L20 10H0Z",fill:d})})}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-2 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"}),e.jsxs("div",{className:"absolute top-1/3 left-2 w-4 h-4 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute bottom-1/4 right-4 w-3 h-3 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]})]}),e.jsx("div",{className:"relative p-4 font-anime z-10 mt-4",children:w}),e.jsx("style",{children:`
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
              }
              .animate-twinkle {
                animation: twinkle 2s infinite;
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              @keyframes float {
                0% { transform: translateY(0) rotate(45deg); }
                50% { transform: translateY(-10px) rotate(45deg); }
                100% { transform: translateY(0) rotate(45deg); }
              }
            `})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"click"',computed:!1}},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}}}};const L={component:k},n={args:{content:"Popover Component",children:"Click Me!"}},s={args:{content:"Popover Component",children:"Click Me!",trigger:"hover"}},r={args:{content:"Popover Component",children:"Click Me!",fromColor:"pink",toColor:"lightblue",textColor:"black"}};var u,m,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: "Popover Component",
    children: "Click Me!"
  }
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,v,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: "Popover Component",
    children: "Click Me!",
    trigger: "hover"
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: "Popover Component",
    children: "Click Me!",
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black"
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const O=["Default","OnHover","CustomColours"];export{r as CustomColours,n as Default,s as OnHover,O as __namedExportsOrder,L as default};
