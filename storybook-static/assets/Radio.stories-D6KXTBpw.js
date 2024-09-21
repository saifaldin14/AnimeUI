import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";const o=({name:t,options:a,selectedValue:j,onChange:N,fromColor:_="#ec4899",toColor:q="#a855f7",size:d=24})=>e.jsx("div",{className:"flex flex-col space-y-2",children:a.map((n,w)=>{const c=j===n.value,s=n.disabled||!1,R=()=>{s||N(n.value)},$={width:`${d}px`,height:`${d}px`,background:c?`linear-gradient(135deg, ${_}, ${q})`:"#e5e7eb"};return e.jsxs("label",{className:`flex items-center cursor-pointer select-none ${s?"opacity-50 cursor-not-allowed":""}`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"radio",name:t,checked:c,disabled:s,onChange:R,className:"sr-only"}),e.jsx("div",{className:"rounded-full flex items-center justify-center transition-all duration-300",style:$,children:c&&e.jsx("div",{className:"rounded-full bg-white",style:{width:`${d*.5}px`,height:`${d*.5}px`}})}),c&&!s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-1 -right-1 animate-ping",children:e.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full"})}),e.jsx("div",{className:"absolute -bottom-1 -left-1 animate-ping delay-200",children:e.jsx("div",{className:"w-1.5 h-1.5 bg-yellow-300 rounded-full"})})]})]}),n.label&&e.jsx("span",{className:`ml-3 font-anime ${s?"text-gray-400":"text-black"}`,children:n.label})]},w)})});o.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},selectedValue:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const D={component:o},l=()=>{const[t,a]=p.useState("option1");return e.jsx(o,{name:"default",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],selectedValue:t,onChange:a})},r=()=>{const[t,a]=p.useState("option1");return e.jsx(o,{name:"disabledOption",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2",disabled:!0}],selectedValue:t,onChange:a})},i=()=>{const[t,a]=p.useState("option1");return e.jsx(o,{name:"customColors",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],selectedValue:t,onChange:a,fromColor:"#00F260",toColor:"#0575E6"})},u=()=>{const[t,a]=p.useState("option1");return e.jsx(o,{name:"customSize",options:[{value:"option1",label:"Large Option 1"},{value:"option2",label:"Large Option 2"}],selectedValue:t,onChange:a,size:40})};l.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"DisabledOption"};i.__docgenInfo={description:"",methods:[],displayName:"CustomColors"};u.__docgenInfo={description:"",methods:[],displayName:"CustomSize"};var m,g,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return <Radio name="default" options={[{
    value: "option1",
    label: "Option 1"
  }, {
    value: "option2",
    label: "Option 2"
  }]} selectedValue={selectedValue} onChange={setSelectedValue} />;
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return <Radio name="disabledOption" options={[{
    value: "option1",
    label: "Option 1"
  }, {
    value: "option2",
    label: "Option 2",
    disabled: true
  }]} selectedValue={selectedValue} onChange={setSelectedValue} />;
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var V,x,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return <Radio name="customColors" options={[{
    value: "option1",
    label: "Option 1"
  }, {
    value: "option2",
    label: "Option 2"
  }]} selectedValue={selectedValue} onChange={setSelectedValue} fromColor="#00F260" toColor="#0575E6" />;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return <Radio name="customSize" options={[{
    value: "option1",
    label: "Large Option 1"
  }, {
    value: "option2",
    label: "Large Option 2"
  }]} selectedValue={selectedValue} onChange={setSelectedValue} size={40} />;
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const z=["Default","DisabledOption","CustomColors","CustomSize"];export{i as CustomColors,u as CustomSize,l as Default,r as DisabledOption,z as __namedExportsOrder,D as default};
