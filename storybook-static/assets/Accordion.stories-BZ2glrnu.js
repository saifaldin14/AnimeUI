import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as y}from"./index-DJO9vBfz.js";const u=({items:p,fromColor:f="#ec4899",toColor:g="#a855f7"})=>{const[x,h]=y.useState(null),I=t=>{h(n=>n===t?null:t)};return e.jsx("div",{className:"w-full max-w-md mx-auto space-y-4",children:p.map((t,n)=>{const s=x===n,w={backgroundImage:`linear-gradient(to right, ${f}, ${g})`};return e.jsxs("div",{className:"border border-gray-300 rounded-lg overflow-hidden",children:[e.jsxs("button",{onClick:()=>I(n),style:w,className:"w-full flex items-center justify-between p-4 text-white font-bold text-left focus:outline-none",children:[e.jsx("span",{className:"font-anime",children:t.title}),e.jsx("svg",{className:`w-6 h-6 transition-transform duration-300 ${s?"transform rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&e.jsx("div",{className:"p-4 bg-white text-black animate-fadeIn",children:e.jsx("p",{className:"font-anime text-base",children:t.content})})]},n)})})};u.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  content: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:"AccordionItem[]"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}}}};const T={component:u},r={args:{items:[{title:"Item 1",content:"One"},{title:"Item 2",content:"Two"},{title:"Item 3",content:"Three"}]}},o={args:{items:[{title:"Item 1",content:"One"},{title:"Item 2",content:"Two"},{title:"Item 3",content:"Three"}],fromColor:"orange",toColor:"yellow"}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Item 1",
      content: "One"
    }, {
      title: "Item 2",
      content: "Two"
    }, {
      title: "Item 3",
      content: "Three"
    }]
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Item 1",
      content: "One"
    }, {
      title: "Item 2",
      content: "Two"
    }, {
      title: "Item 3",
      content: "Three"
    }],
    fromColor: "orange",
    toColor: "yellow"
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const b=["Default","DifferentColour"];export{r as Default,o as DifferentColour,b as __namedExportsOrder,T as default};
