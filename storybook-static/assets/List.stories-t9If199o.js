import{j as i}from"./jsx-runtime-DEdD30eg.js";import{R as s}from"./index-RYns6xqu.js";const l=({items:e,fromColor:t="#ec4899",toColor:r="#a855f7",textColor:n="#ffffff",fontFamily:o='"Press Start 2P", cursive'})=>i.jsxs("div",{className:"relative rounded-lg shadow-lg overflow-hidden",style:{background:`linear-gradient(to bottom right, ${t}, ${r})`,color:n,fontFamily:o},children:[i.jsx("ul",{className:"divide-y divide-pink-200",children:e.map((a,x)=>i.jsx("li",{children:i.jsxs("button",{onClick:a.onClick,className:"w-full flex items-center px-4 py-3 hover:bg-opacity-75 transition-colors",children:[a.icon&&i.jsx("span",{className:"mr-3",children:a.icon}),i.jsx("span",{children:a.text}),i.jsx("div",{className:"flex-grow text-right",children:i.jsx("div",{className:"inline-block relative",children:i.jsx("div",{className:"absolute -top-1 -right-1 animate-ping",children:i.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full"})})})})]})},x))}),i.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[i.jsx("div",{className:"absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-twinkle"}),i.jsx("div",{className:"absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-twinkle delay-200"}),i.jsx("div",{className:"absolute bottom-6 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-ping"}),i.jsx("div",{className:"absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full animate-float delay-500"})]}),i.jsx("style",{children:`
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
        `})]});l.__docgenInfo={description:"",methods:[],displayName:"List",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"ListItem[]"},description:""},fromColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ec4899"',computed:!1}},toColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#a855f7"',computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#ffffff"',computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`'"Press Start 2P", cursive'`,computed:!1}}}};var V={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=s.createContext&&s.createContext(V),q=["attr","size","title"];function D(e,t){if(e==null)return{};var r=M(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(n){T(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function T(e,t,r){return t=W(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=B(e,"string");return typeof t=="symbol"?t:t+""}function B(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R(e){return e&&e.map((t,r)=>s.createElement(t.tag,g({key:r},t.attr),R(t.child)))}function v(e){return t=>s.createElement(U,p({attr:g({},e.attr)},t),R(e.child))}function U(e){var t=r=>{var{attr:n,size:o,title:a}=e,x=D(e,q),y=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,x,{className:c,style:g(g({color:e.color||r.color},r.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return b!==void 0?s.createElement(b.Consumer,null,r=>t(r)):t(V)}function h(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(e)}function k(e){return v({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function C(e){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const $={component:l},m=()=>{const e=[{text:"Home",icon:i.jsx(k,{}),onClick:()=>alert("Home clicked")},{text:"Profile",icon:i.jsx(C,{}),onClick:()=>alert("Profile clicked")},{text:"Settings",icon:i.jsx(h,{}),onClick:()=>alert("Settings clicked")}];return i.jsx(l,{items:e})},u=()=>{const e=[{text:"Home",icon:i.jsx(k,{}),onClick:()=>alert("Home clicked")},{text:"Profile",icon:i.jsx(C,{}),onClick:()=>alert("Profile clicked")},{text:"Settings",icon:i.jsx(h,{}),onClick:()=>alert("Settings clicked")}];return i.jsx(l,{items:e,fromColor:"#00F260",toColor:"#0575E6",textColor:"#ffffff"})},d=()=>{const e=[{text:"Home",onClick:()=>alert("Home clicked")},{text:"Profile",onClick:()=>alert("Profile clicked")},{text:"Settings",onClick:()=>alert("Settings clicked")}];return i.jsx(l,{items:e})},f=()=>{const e=[{text:"Home",icon:i.jsx(k,{}),onClick:()=>alert("Home clicked")},{text:"Profile",icon:i.jsx(C,{}),onClick:()=>alert("Profile clicked")},{text:"Settings",icon:i.jsx(h,{}),onClick:()=>alert("Settings clicked")}];return i.jsx(l,{items:e,textColor:"#000000",fontFamily:"'Comic Sans MS', cursive, sans-serif"})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"CustomColors"};d.__docgenInfo={description:"",methods:[],displayName:"WithoutIcons"};f.__docgenInfo={description:"",methods:[],displayName:"CustomFont"};var w,P,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const items = [{
    text: "Home",
    icon: <FaHome />,
    onClick: () => alert("Home clicked")
  }, {
    text: "Profile",
    icon: <FaUser />,
    onClick: () => alert("Profile clicked")
  }, {
    text: "Settings",
    icon: <FaCog />,
    onClick: () => alert("Settings clicked")
  }];
  return <List items={items} />;
}`,...(S=(P=m.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var O,N,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const items = [{
    text: "Home",
    icon: <FaHome />,
    onClick: () => alert("Home clicked")
  }, {
    text: "Profile",
    icon: <FaUser />,
    onClick: () => alert("Profile clicked")
  }, {
    text: "Settings",
    icon: <FaCog />,
    onClick: () => alert("Settings clicked")
  }];
  return <List items={items} fromColor="#00F260" // Start color (e.g., green)
  toColor="#0575E6" // End color (e.g., blue)
  textColor="#ffffff" />;
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var F,H,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const items = [{
    text: "Home",
    onClick: () => alert("Home clicked")
  }, {
    text: "Profile",
    onClick: () => alert("Profile clicked")
  }, {
    text: "Settings",
    onClick: () => alert("Settings clicked")
  }];
  return <List items={items} />;
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,I,z;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const items = [{
    text: "Home",
    icon: <FaHome />,
    onClick: () => alert("Home clicked")
  }, {
    text: "Profile",
    icon: <FaUser />,
    onClick: () => alert("Profile clicked")
  }, {
    text: "Settings",
    icon: <FaCog />,
    onClick: () => alert("Settings clicked")
  }];
  return <List items={items} textColor="#000000" fontFamily="'Comic Sans MS', cursive, sans-serif" />;
}`,...(z=(I=f.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const G=["Default","CustomColors","WithoutIcons","CustomFont"];export{u as CustomColors,f as CustomFont,m as Default,d as WithoutIcons,G as __namedExportsOrder,$ as default};
