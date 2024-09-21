import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const d=({items:f,fromColor:p="#ec4899",toColor:g="#a855f7",textColor:r="#ffffff"})=>e.jsxs("div",{className:"relative w-64 rounded-lg shadow-lg overflow-hidden",style:{background:`linear-gradient(to bottom, ${p}, ${g})`},children:[e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx("h2",{className:"text-2xl font-anime",style:{color:r},children:"Menu"})}),e.jsx("ul",{className:"divide-y divide-pink-200",children:f.map((a,b)=>e.jsx("li",{children:e.jsxs("button",{onClick:a.onClick,className:"w-full flex items-center px-4 py-3 hover:bg-opacity-75 transition-colors",style:{color:r},children:[a.icon&&e.jsx("span",{className:"mr-3",children:a.icon}),e.jsx("span",{className:"font-anime",children:a.label})]})},b))}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-4 left-8 w-3 h-3 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-6 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full animate-float delay-500"})]}),e.jsx("style",{children:`
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
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `})]});d.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"MenuItem[]"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}}}};const h={component:d},u=[{label:"Item 1",onClick:()=>{}},{label:"Item 2",onClick:()=>{}},{label:"Item 3",onClick:()=>{}},{label:"Item 4",onClick:()=>{}}],t={args:{items:u}},s={args:{items:u,fromColor:"red",toColor:"lightblue",textColor:"black"}};var n,o,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items,
    fromColor: "red",
    toColor: "lightblue",
    textColor: "black"
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["Default","CustomColours"];export{s as CustomColours,t as Default,k as __namedExportsOrder,h as default};
