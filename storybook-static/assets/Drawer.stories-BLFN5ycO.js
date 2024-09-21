import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const c=({isOpen:r,onClose:o,children:m,fromColor:f="#ec4899",toColor:p="#a855f7",elementColor:x="#f9a8d4",textColor:g="#ffffff"})=>e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",onClick:o}),e.jsx("div",{className:`fixed top-0 right-0 h-full z-50 transform ${r?"translate-x-0":"translate-x-full"} transition-transform duration-500 ease-in-out`,style:{width:"300px"},children:e.jsxs("div",{className:"relative h-full shadow-xl overflow-hidden",style:{background:`linear-gradient(to bottom, ${f}, ${p})`,"--element-color":x,"--text-color":g},children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-10 left-1/4 w-2 h-2 bg-[var(--element-color)] rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-20 right-1/4 w-3 h-3 bg-[var(--element-color)] rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-[var(--element-color)] rounded-full animate-twinkle delay-400"}),e.jsx("div",{className:"absolute bottom-10 right-10 w-4 h-4 bg-[var(--element-color)] rounded-full animate-ping"}),e.jsx("div",{className:"absolute top-16 right-8 w-3 h-3 bg-[var(--element-color)] rounded-full animate-ping delay-300"}),e.jsxs("div",{className:"absolute bottom-1/3 left-5 w-5 h-5 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-[var(--element-color)] rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute top-1/4 right-8 w-4 h-4 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-[var(--element-color)] rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-[var(--element-color)] rounded-full transform -translate-x-full"})]})]}),e.jsx("button",{className:"absolute top-4 right-4 text-[var(--text-color)] text-2xl focus:outline-none z-10",onClick:o,children:"×"}),e.jsx("div",{className:"relative p-6 overflow-y-auto h-full z-10 font-anime text-[var(--text-color)]",children:m})]})}),e.jsx("style",{children:`
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
        `})]});c.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},elementColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#f9a8d4"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}}}};const v={component:c},t={args:{isOpen:!0,children:"Hey this is a Drawer!",onClose:()=>{}}},a={args:{isOpen:!0,children:"Hey this is a Drawer!",onClose:()=>{},fromColor:"red",toColor:"lightblue",elementColor:"black",textColor:"black"}};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: "Hey this is a Drawer!",
    onClose: () => {}
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: "Hey this is a Drawer!",
    onClose: () => {},
    fromColor: "red",
    toColor: "lightblue",
    elementColor: "black",
    textColor: "black"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Default","CustomColours"];export{a as CustomColours,t as Default,y as __namedExportsOrder,v as default};
