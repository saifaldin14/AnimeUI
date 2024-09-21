import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const c=({isOpen:m,onClose:s,children:f,fromColor:p="#ec4899",toColor:g="#a855f7",textColor:o="#ffffff"})=>m?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:s}),e.jsxs("div",{className:"relative z-10 w-11/12 max-w-md mx-auto p-6 rounded-lg shadow-lg overflow-hidden",style:{background:`linear-gradient(to bottom right, ${p}, ${g})`,color:o},children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-6 left-6 w-4 h-4 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-10 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300"}),e.jsxs("div",{className:"absolute top-1/3 left-4 w-5 h-5 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute bottom-1/4 right-6 w-4 h-4 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]})]}),e.jsx("button",{className:"absolute top-4 right-4 text-2xl focus:outline-none",onClick:s,style:{color:o},children:"×"}),e.jsx("div",{className:"relative z-10 font-anime",children:f})]}),e.jsx("style",{children:`
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
            50% { transform: translateY(-20px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
        `})]}):null;c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}}}};const x={component:c},t={args:{isOpen:!0,children:"Hey this is a Modal!",onClose:()=>{}}},a={args:{isOpen:!0,children:"Hey this is a Modal!",onClose:()=>{},fromColor:"pink",toColor:"lightblue",textColor:"black"}};var r,l,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: "Hey this is a Modal!",
    onClose: () => {}
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: "Hey this is a Modal!",
    onClose: () => {},
    fromColor: "pink",
    toColor: "lightblue",
    textColor: "black"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Default","CustomColours"];export{a as CustomColours,t as Default,y as __namedExportsOrder,x as default};
