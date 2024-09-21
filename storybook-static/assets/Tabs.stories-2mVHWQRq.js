import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as w}from"./index-RYns6xqu.js";const f=({tabs:o,fromColor:p="#ec4899",toColor:g="#a855f7",textColor:r="#ffffff",indicatorColor:h="#f9a8d4"})=>{const[l,x]=w.useState(0);return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"flex justify-center",children:o.map((v,t)=>e.jsxs("button",{className:`relative px-4 py-2 mx-2 font-anime transition-colors duration-300 ${l===t?"text-white":"text-gray-300 hover:text-white"}`,onClick:()=>x(t),style:{color:r},children:[v.label,l===t&&e.jsx("div",{className:"absolute left-0 right-0 -bottom-1 h-1 rounded-full",style:{backgroundColor:h}})]},t))}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-2 right-1/4 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-0 left-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-2 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300"}),e.jsxs("div",{className:"absolute top-1/2 left-2 w-5 h-5 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute bottom-1/2 right-4 w-4 h-4 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]})]})]}),e.jsxs("div",{className:"mt-4 p-6 rounded-lg shadow-lg relative overflow-hidden",style:{background:`linear-gradient(to bottom right, ${p}, ${g})`,color:r},children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300"}),e.jsxs("div",{className:"absolute top-1/3 left-4 w-5 h-5 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]})]}),e.jsx("div",{className:"relative z-10 font-anime",children:o[l].content})]}),e.jsx("style",{children:`
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
        `})]})};f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  content: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"TabItem[]"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}},indicatorColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#f9a8d4"',computed:!1}}}};const y={component:f},b=[{label:"One",content:"Tab One"},{label:"Two",content:"Tab Two"},{label:"Three",content:"Tab Three"},{label:"Four",content:"Tab Four"}],a={args:{tabs:b,textColor:"black"}},s={args:{tabs:b,fromColor:"pink",toColor:"lightblue",textColor:"black",indicatorColor:"red"}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    tabs,
    textColor: "black"
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,c,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tabs,
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black",
    indicatorColor: "red"
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["Default","CustomColours"];export{s as CustomColours,a as Default,k as __namedExportsOrder,y as default};
