import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";const t=({value:a,onChange:s,min:d=0,max:p=100,step:T=1,disabled:g=!1,color:c="#ec4899"})=>{const m=(a-d)/(p-d)*100,D=I=>{const $=Number(I.target.value);s($)};return e.jsxs("div",{className:"relative w-full",children:[e.jsx("input",{type:"range",value:a,onChange:D,min:d,max:p,step:T,disabled:g,className:"slider",style:{background:`linear-gradient(90deg, ${c} ${m}%, #e5e7eb ${m}%)`}}),!g&&e.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 pointer-events-none",style:{left:`calc(${m}% - 10px)`},children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute -top-3 -left-3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"}),e.jsxs("div",{className:"absolute -bottom-4 -right-3 w-4 h-4 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]})]})}),e.jsx("style",{children:`
          .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            border-radius: 4px;
            outline: none;
          }
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: ${c};
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: ${c};
            border-radius: 50%;
            cursor: pointer;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `})]})};t.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}}}};const Y={component:t},r=()=>{const[a,s]=i.useState(50);return e.jsx(t,{value:a,onChange:s})},n=()=>{const[a,s]=i.useState(5);return e.jsx(t,{value:a,onChange:s,min:0,max:10,step:.5})},o=()=>{const[a,s]=i.useState(50);return e.jsx(t,{value:a,onChange:s,disabled:!0})},u=()=>{const[a,s]=i.useState(75);return e.jsx(t,{value:a,onChange:s,color:"#00F260"})},l=()=>{const[a,s]=i.useState(0);return e.jsx(t,{value:a,onChange:s,min:0,max:100,step:10})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"CustomRange"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"CustomColors"};l.__docgenInfo={description:"",methods:[],displayName:"StepValues"};var f,v,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} />;
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,x,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(5);
  return <Slider value={value} onChange={setValue} min={0} max={10} step={0.5} />;
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var V,y,C;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} disabled={true} />;
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,N,_;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(75);
  return <Slider value={value} onChange={setValue} color="#00F260" />;
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var w,k,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <Slider value={value} onChange={setValue} min={0} max={100} step={10} />;
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const F=["Default","CustomRange","Disabled","CustomColors","StepValues"];export{u as CustomColors,n as CustomRange,r as Default,o as Disabled,l as StepValues,F as __namedExportsOrder,Y as default};
