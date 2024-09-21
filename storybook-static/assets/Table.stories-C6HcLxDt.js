import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const a=({headers:t,data:f,striped:s=!1,hoverable:B=!1,fromColor:L="#f472b6",toColor:U="#c084fc",textColor:O="#4b5563"})=>e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("table",{className:"min-w-full",children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:`linear-gradient(to right, ${L}, ${U})`},children:t.map((h,g)=>e.jsx("th",{className:"px-6 py-3 text-left text-xs font-anime uppercase tracking-wider",style:{color:O},children:h},g))})}),e.jsx("tbody",{className:"bg-white divide-y divide-pink-200",children:f.map((h,g)=>e.jsx("tr",{className:`${s&&g%2===0?"bg-pink-50":""} ${B?"hover:bg-pink-100":""} transition-colors`,children:t.map((z,F)=>e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:h[z]},F))},g))})]}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsxs("div",{className:"absolute top-2 left-4 w-4 h-4 transform rotate-45 animate-float",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"})]}),e.jsxs("div",{className:"absolute bottom-4 right-6 w-3 h-3 transform rotate-45 animate-float delay-500",children:[e.jsx("div",{className:"absolute inset-0 bg-purple-300 rounded-full"}),e.jsx("div",{className:"absolute inset-0 bg-purple-300 rounded-full transform -translate-x-full"})]}),e.jsx("div",{className:"absolute top-1/3 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"}),e.jsx("div",{className:"absolute top-6 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle"}),e.jsx("div",{className:"absolute bottom-8 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-200"})]})}),e.jsx("style",{children:`
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
        `})]});a.__docgenInfo={description:"",methods:[],displayName:"Table",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Array<Record<string, any>>"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#f472b6"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#c084fc"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#4b5563"',computed:!1}}}};const K={component:a},r=["Name","Age","Email"],p=[{Name:"Alice",Age:25,Email:"alice@example.com"},{Name:"Bob",Age:30,Email:"bob@example.com"},{Name:"Charlie",Age:28,Email:"charlie@example.com"},{Name:"David",Age:22,Email:"david@example.com"}],o=()=>e.jsx(a,{headers:r,data:p}),d=()=>e.jsx(a,{headers:r,data:p,striped:!0}),n=()=>e.jsx(a,{headers:r,data:p,hoverable:!0}),l=()=>e.jsx(a,{headers:r,data:p,striped:!0,hoverable:!0}),i=()=>{const t=Array.from({length:20},(f,s)=>({Name:`User ${s+1}`,Age:20+s%10,Email:`user${s+1}@example.com`}));return e.jsx(a,{headers:r,data:t})},c=()=>{const t=["Product","Price","In Stock"],f=[{Product:"Widget A",Price:"$10.99","In Stock":"Yes"},{Product:"Widget B",Price:"$12.99","In Stock":"No"},{Product:"Widget C",Price:"$9.99","In Stock":"Yes"}];return e.jsx(a,{headers:t,data:f})},m=()=>e.jsx(a,{headers:r,data:[]}),u=()=>e.jsx(a,{headers:r,data:p,striped:!0,hoverable:!0,fromColor:"#ffafbd",toColor:"#ffc3a0",textColor:"#4b5563"});o.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"StripedRows"};n.__docgenInfo={description:"",methods:[],displayName:"HoverableRows"};l.__docgenInfo={description:"",methods:[],displayName:"StripedAndHoverable"};i.__docgenInfo={description:"",methods:[],displayName:"LongData"};c.__docgenInfo={description:"",methods:[],displayName:"CustomHeaders"};m.__docgenInfo={description:"",methods:[],displayName:"EmptyData"};u.__docgenInfo={description:"",methods:[],displayName:"CustomColors"};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"() => <Table headers={headers} data={data} />",...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,N,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"() => <Table headers={headers} data={data} striped={true} />",...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,_,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"() => <Table headers={headers} data={data} hoverable={true} />",...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var S,C,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"() => <Table headers={headers} data={data} striped={true} hoverable={true} />",...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,D,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const longData = Array.from({
    length: 20
  }, (_, i) => ({
    Name: \`User \${i + 1}\`,
    Age: 20 + i % 10,
    Email: \`user\${i + 1}@example.com\`
  }));
  return <Table headers={headers} data={longData} />;
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,$,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const customHeaders = ["Product", "Price", "In Stock"];
  const customData = [{
    Product: "Widget A",
    Price: "$10.99",
    "In Stock": "Yes"
  }, {
    Product: "Widget B",
    Price: "$12.99",
    "In Stock": "No"
  }, {
    Product: "Widget C",
    Price: "$9.99",
    "In Stock": "Yes"
  }];
  return <Table headers={customHeaders} data={customData} />;
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var H,R,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:"() => <Table headers={headers} data={[]} />",...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var Y,W,V;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:'() => <Table headers={headers} data={data} striped={true} hoverable={true} fromColor="#ffafbd" toColor="#ffc3a0" textColor="#4b5563" />',...(V=(W=u.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const M=["Default","StripedRows","HoverableRows","StripedAndHoverable","LongData","CustomHeaders","EmptyData","CustomColors"];export{u as CustomColors,c as CustomHeaders,o as Default,m as EmptyData,n as HoverableRows,i as LongData,l as StripedAndHoverable,d as StripedRows,M as __namedExportsOrder,K as default};
