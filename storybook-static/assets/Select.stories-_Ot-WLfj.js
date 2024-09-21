import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";const o=({options:t,value:a,onChange:m,placeholder:M="Select an option",disabled:f=!1,fromColor:A="#ec4899",toColor:E="#a855f7",textColor:P="#ffffff"})=>{const[g,h]=s.useState(!1),v=t.find(n=>n.value===a),Y=()=>{f||h(!g)},$=n=>{m(n),h(!1)};return e.jsxs("div",{className:"relative inline-block w-64",children:[e.jsxs("button",{type:"button",className:`w-full px-4 py-2 text-left rounded-lg shadow-md focus:outline-none ${f?"opacity-50 cursor-not-allowed":""}`,onClick:Y,style:{background:`linear-gradient(135deg, ${A}, ${E})`,color:P},children:[e.jsx("span",{className:"font-anime",children:v?v.label:M}),e.jsx("svg",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",width:"20",height:"20",fill:"currentColor",children:e.jsx("path",{d:"M5 8.5l5 5 5-5H5z"})})]}),g&&e.jsx("ul",{className:"absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden",style:{color:"black"},children:t.map(n=>e.jsx("li",{children:e.jsx("button",{type:"button",className:"w-full text-left px-4 py-2 hover:bg-gray-100 font-anime",onClick:()=>$(n.value),children:n.label})},n.value))}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),e.jsx("div",{className:"absolute bottom-2 left-6 w-3 h-3 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-pink-300 rounded-full animate-float delay-300"})]}),e.jsx("style",{children:`
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
        `})]})};o.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select an option"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}}}};const H={component:o},d=[{label:"Option One",value:"option1"},{label:"Option Two",value:"option2"},{label:"Option Three",value:"option3"}],l=()=>{const[t,a]=s.useState("");return e.jsx(o,{options:d,value:t,onChange:a,placeholder:"Select an option"})},r=()=>{const[t,a]=s.useState("option2");return e.jsx(o,{options:d,value:t,onChange:a})},i=()=>{const[t,a]=s.useState("");return e.jsx(o,{options:d,value:t,onChange:a,disabled:!0})},u=()=>{const[t,a]=s.useState("");return e.jsx(o,{options:d,value:t,onChange:a,fromColor:"#00F260",toColor:"#0575E6",textColor:"#ffffff"})},c=()=>{const t=[{label:"Very Long Option Text That Might Wrap",value:"long1"},{label:"Another Long Option Text That Might Wrap",value:"long2"},{label:"Yet Another Long Option Text That Might Wrap",value:"long3"}],[a,m]=s.useState("");return e.jsx(o,{options:t,value:a,onChange:m,placeholder:"Select a long option"})},p=()=>{const[t,a]=s.useState("");return e.jsx(o,{options:d,value:t,onChange:a,placeholder:"Custom Placeholder"})};l.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"SelectedValue"};i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"CustomColors"};c.__docgenInfo={description:"",methods:[],displayName:"WithLongOptions"};p.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};var b,y,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <Select options={options} value={value} onChange={setValue} placeholder="Select an option" />;
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,S,V;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("option2");
  return <Select options={options} value={value} onChange={setValue} />;
}`,...(V=(S=r.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,j,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <Select options={options} value={value} onChange={setValue} disabled={true} />;
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var T,N,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <Select options={options} value={value} onChange={setValue} fromColor="#00F260" toColor="#0575E6" textColor="#ffffff" />;
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var k,q,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const longOptions = [{
    label: "Very Long Option Text That Might Wrap",
    value: "long1"
  }, {
    label: "Another Long Option Text That Might Wrap",
    value: "long2"
  }, {
    label: "Yet Another Long Option Text That Might Wrap",
    value: "long3"
  }];
  const [value, setValue] = useState("");
  return <Select options={longOptions} value={value} onChange={setValue} placeholder="Select a long option" />;
}`,...(L=(q=c.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var W,I,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("");
  return <Select options={options} value={value} onChange={setValue} placeholder="Custom Placeholder" />;
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const R=["Default","SelectedValue","Disabled","CustomColors","WithLongOptions","CustomPlaceholder"];export{u as CustomColors,p as CustomPlaceholder,l as Default,i as Disabled,r as SelectedValue,c as WithLongOptions,R as __namedExportsOrder,H as default};
