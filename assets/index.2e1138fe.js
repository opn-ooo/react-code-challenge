var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{u as c,a as d,r as u,b as m,q as p,$ as g,R as f,A as x,c as h,d as v,e as b,J as E,f as y,g as w,t as C,S as _,h as k,i as q,j as $,T as L,P as R}from"./vendor.a898c666.js";const S="React Code Challenge",M=(e={})=>{const{title:t,suffix:r=S,addSuffix:a=!0,returnAppTitle:n=!0}=e;return void 0===t&&n?S:a?`${t} - ${r}`:t||""},z=({name:e,prefix:t="ActivePage"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])},{CancelToken:P,isCancel:T,create:A}=m,j=({data:e})=>e,V=e=>{const t=(({baseURL:e,initialState:t})=>{const r=P.source(),a=r.token,n=A({baseURL:e,cancelToken:a}),[o,l]=u.exports.useState((()=>t));return u.exports.useEffect((()=>()=>{r.cancel()}),[]),{Request:n,state:o,apiSource:r,setState:l,setAuth:(e,t="Bearer")=>{n.defaults.headers.common.Authorization=e?`${t} ${e}`:null},successResolver:j,isCancel:T}})({baseURL:"http://203.170.190.44:8049",initialState:e}),{Request:r,setAuth:l}=t,s=((e,t)=>{var r={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&a)for(var l of a(e))t.indexOf(l)<0&&o.call(e,l)&&(r[l]=e[l]);return r})(t,["Request","setAuth"]);return i({Request:r},s)},B=p.section`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`,N=p.main`
    max-width: 100%;
`,O=g`
    .ActiveLayout--LayoutCenter {
        body {
            overflow-y: auto;
            overflow-x: hidden;
        }
        #root {
            min-height: 100%;
            min-height: 100%;
            display: flex;
        }
    }

`,H=({children:e,BlockName:t="LayoutCenter"})=>((({name:e,prefix:t="ActiveLayout"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])})({name:t}),f.createElement(B,null,f.createElement(O,null),f.createElement(N,null,e))),F=(e=!0)=>x`
    ${e&&x`
        display: block;
    `}

    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:disabled {
        cursor: not-allowed;
    }
`,D=()=>x`
    transition: 0.3s all;
`,Z=p.h1`
    font-weight: 900;
    font-size: 1.5em;
    text-align: center;
    color: var(--title);

    margin-bottom: 40px;
`,I=p.section`
    padding: 40px 20px;
`,U=p.section`
    max-width: 307px;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 50px;
`,Y=p.article`
    text-align: center;
`,J=p.header`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #fff;
    border: 4px solid var(--dorminant_1);
    box-shadow: var(--product_shadow);

    margin: 0 auto;
    margin-bottom: 4px;
`,G=p.div`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);

    margin-bottom: 6px;
`,K=p.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);

    margin-bottom: 8px;
`,Q=p.div`
    font-size: 0.75em;
    color: var(--product_description);
`,W=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 3px;
`,X=p.div`
    font-size: 0.875em;
    font-weight: 500;
    color: var(--input_value);

    margin: 0 10px;
`,ee=p.button`
    ${F()}
    ${D()}

    width: 16px;
    height: 16px;
    border: 1px solid var(--input_border);
    border-radius: 3px;

    padding: 3px;

    svg {
        width: 100%;
        height: auto;

        path {
            fill: var(--dorminant_1);
            ${D()}
        }
    }

    &:disabled {
        svg path {
            fill: var(--input_border);
        }
    }

    &:hover:not(:disabled) {
        border-color: var(--dorminant_1);
    }
`,te=p.footer`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`,re=p.button`
    ${F()}

    font-size: 0.75em;
    font-weight: 500;
    color: var(--label);
    text-align: center;

    margin-top: 8px;
`,ae=p.span`
    ${D()}

    font-size: 0.625em;
    line-height: normal;
    text-align: center;

    min-width: 13px;
    padding: 2px;
    padding-right: 3px;

    color: #fff;
    display: block;
    background-color: var(--notification);
    border-radius: 4px;
    pointer-events: none;

    position: absolute;
    z-index: 1;
    right: -4px;
    top: -5px;

    opacity: 1;

    &[hidden] {
        opacity: 0;
    }
`,ne=p.button`
    ${F()}
    ${D()}

    width: 35px;
    height: 35px;
    border-radius: 100%;

    position: relative;
    z-index: 0;

    padding: 7px;

    background-color: var(--dorminant_1);
    box-shadow: var(--cart_shadow);

    svg {
        width: 100%;
        height: auto;

        path {
            fill: #fff;
            ${D()}
        }
    }

    &:disabled {
        background-color: var(--input_border);

        svg path {
            fill: var(--color_2);
        }
    }

    &:hover:not(:disabled) {
        background-color: #fff;

        svg path {
            fill: var(--dorminant_1);
        }
    }
`;function oe(e){return u.exports.createElement("svg",i({width:5,height:5,viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{d:"M2 3V5H3V3L5 3V2L3 2V0H2V2L0 2V3L2 3Z",fill:"#6A52FF"}))}function le(e){return u.exports.createElement("svg",i({width:5,height:1,viewBox:"0 0 5 1",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0L5 4.47035e-07V1L0 1V0Z",fill:"#6A52FF"}))}function ie(e){return u.exports.createElement("svg",i({width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5902 5.36287L16.3875 14.0333L4.49032 14.0332L3 6.03382L17.018 6.0439L17.5373 4H21V5.36287H18.5902ZM15.3346 12.6704L16.6719 7.40653L4.63336 7.39787L5.61566 12.6704H15.3346ZM16.6997 16.8205C16.6997 18.0223 15.7271 19 14.5317 19C13.3363 19 12.3637 18.0223 12.3637 16.8205C12.3637 16.5319 12.42 16.2563 12.5218 16.004H8.37358C8.47538 16.2563 8.53163 16.5319 8.53163 16.8205C8.53163 18.0223 7.5591 19 6.36365 19C5.16822 19 4.19566 18.0223 4.19566 16.8205C4.19566 15.6188 5.16823 14.6411 6.36365 14.6411H14.5317C15.7271 14.6411 16.6997 15.6188 16.6997 16.8205ZM6.36365 17.6371C6.81155 17.6371 7.17593 17.2708 7.17593 16.8205C7.17593 16.3703 6.81155 16.004 6.36365 16.004C5.91574 16.004 5.55135 16.3703 5.55135 16.8205C5.55135 17.2708 5.91575 17.6371 6.36365 17.6371ZM14.5317 17.6371C14.9796 17.6371 15.344 17.2708 15.344 16.8205C15.344 16.3703 14.9796 16.004 14.5317 16.004C14.0838 16.004 13.7195 16.3703 13.7195 16.8205C13.7195 17.2708 14.0838 17.6371 14.5317 17.6371Z",fill:"#6A52FF"}))}const se=p.section``,ce=p.form`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 35px;
`,de=p.article`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`,ue=p.section`
    display: grid;
    ${({column:e=2})=>x`
        grid-template-columns: repeat(${e}, 1fr);
    `}

    .fields:not(:last-child) input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .fields:not(:first-child) input {
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,me=p.label`
    display: block;
`,pe=p.span`
    display: block;
    margin-bottom: 12px;
    color: var(--label);
    font-size: 0.875em;
    font-weight: 700;

    ${({error:e=!1})=>e&&x`
                color: var(--error);
            `}
`,ge=p.input`
    ${D()}
    ${x`
    display: block;
    background: none;
    border: none;
`}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;

    width: 100%;

    background-color: #fff;

    border: 1px solid var(--input_border);
    border-radius: 8px;

    &::placeholder {
        opacity: 0.5;
    }
`,fe=p.div`
    color: var(--error);
    font-weight: 500;
    font-size: 0.6875em;
    margin-top: 5px;
`,xe=p.article`
    display: flex;
    justify-content: center;
`,he=p.button`
    ${F()}
    font-weight: 500;
    font-size: 0.875em;

    padding: 12px 32px;
    border-radius: 4px;

    color: #fff;
    background-color: var(--dorminant_2);
    box-shadow: var(--product_shadow);

    &:disabled {
        color: var(--label);
    }
`,ve=p.article.attrs((()=>({className:"fields"})))``,be={email:null,card_number:null,card_expire:null,cvv:null},Ee=({onSuccess:e,loading:t=!1,submitText:r="Submit"})=>{const{models:a,register:n,updateModel:o}=v({defaultState:be}),{state:l,setData:c}=b({initialData:be,schema:E.object({email:E.string().email({tlds:{allow:!1}}).required().messages({"string.empty":"Required","string.email":"Must be a valid email","any.required":"Required"}),card_number:E.string().custom(((e,t)=>{if(e){if(!y.exports.validateCardNumber(e))return t.error("string.cardNumber");if(!["mastercard","visa"].includes(y.exports.parseCardType(e)))return t.error("string.cardType")}return e})).required().messages({"string.empty":"Required","string.cardNumber":"Must be a valid card","string.cardType":"Must be Mastercard or Visa type","any.required":"Required"}),card_expire:E.string().custom(((e,t)=>e&&!y.exports.validateCardExpiry(...e.split("/"))?t.error("string.card_expire"):e)).required().messages({"string.empty":"Required","string.card_expire":"Invalid","any.required":"Required"}),cvv:E.string().length(3).custom(((e,t)=>e&&!y.exports.validateCardCVC(e)?t.error("string.cvv"):e)).required().messages({"string.empty":"Required","string.length":"Maximum 3 digits","string.cvv":"Invalid code","any.required":"Required"})})}),d=u.exports.useCallback((e=>l.$errors[e].map((e=>e.$message)).join(",")),[l.$errors]),m={cardNumber:e=>{const t=y.exports.formatCardNumber(e.target.value);o("card_number",t)},cardExpire:e=>{const t=y.exports.formatCardExpiry(e.target.value);o("card_expire",t)}};return u.exports.useEffect((()=>{c(a)}),[a]),f.createElement(se,null,f.createElement(ce,{onSubmit:t=>{t.preventDefault(),e(l.$data)}},f.createElement(ve,null,f.createElement(me,null,f.createElement(pe,{error:!!d("email")},"Email"),f.createElement(ge,s(i({},n.input({name:"email"})),{type:"email",placeholder:"you@company.com",autoComplete:"current-email"}))),d("email")&&f.createElement(fe,null,d("email"))),f.createElement(de,null,f.createElement(ve,null,f.createElement(me,null,f.createElement(pe,{error:!!d("card_number")},"Card information"),f.createElement(ge,s(i({},n.input({name:"card_number",onChange:m.cardNumber})),{type:"text",placeholder:"1234 1234 1234 1234"}))),d("card_number")&&f.createElement(fe,null,d("card_number"))),f.createElement(ue,null,f.createElement(ve,null,f.createElement(ge,s(i({},n.input({name:"card_expire",onChange:m.cardExpire})),{type:"text",placeholder:"MM / YY"})),d("card_expire")&&f.createElement(fe,null,d("card_expire"))),f.createElement(ve,null,f.createElement(ge,s(i({},n.input({name:"cvv"})),{type:"text",placeholder:"123"})),d("cvv")&&f.createElement(fe,null,d("cvv"))))),f.createElement(xe,null,f.createElement(he,{disabled:l.$auto_invalid||t},r))))},ye=p.section`
    width: 420px;
    max-width: 100%;
    padding: 40px 20px;
`,we=p.section`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 15px;

    margin-bottom: 35px;
`,Ce=p.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
`,_e=p.header`
    width: 36px;
    height: 36px;
    border-radius: 30px;
    background-color: #fff;
    border: 3px solid var(--dorminant_1);
    box-shadow: var(--product_shadow);

    margin: 0 auto;
    margin-bottom: 4px;
`,ke=p.nav`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    grid-gap: 3px;
`,qe=p.h3`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);
`,$e=p.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);
`,Le=p.div`
    text-align: right;

    font-size: 0.875em;
    font-weight: 700;
    color: var(--dorminant_1);
`,Re=p.div`
    text-align: right;

    font-size: 0.75em;
    font-weight: 500;
    color: var(--product_description);
`,Se=[{path:"/",key:"products",title:"Products",component:({BlockName:e="PageProducts"})=>{z({name:e});const[,t]=d(),r=h(),{state:a,fetch:n}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n,isCancel:o}=V(e);return{state:r,fetch:u.exports.useCallback((async(r={})=>{a((t=>s(i({},t),{loading:!0,error:e.error})));const l=t({method:"get",url:"/products",params:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t})))})).catch((e=>{if(o(e))return e;a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))}));o(await l)||a((e=>s(i({},e),{loading:!1})))}),[a])}})(),o=u.exports.useMemo((()=>a.data.map((e=>s(i({},e),{qty:0})))),[a.data]),[l,c]=u.exports.useState([]),m=u.exports.useMemo((()=>l.reduce(((e,{qty:t})=>e+t),0)),[l]),p=u.exports.useMemo((()=>m<=0),[m]),g=u.exports.useMemo((()=>p||a.loading),[p,a.loading]),x=()=>{t("/checkout")};return u.exports.useEffect((()=>{n()}),[n]),u.exports.useEffect((()=>{c(o)}),[o,c]),u.exports.useEffect((()=>{const e=l.filter((({qty:e})=>e>0));r({type:"UPDATE_CART",value:e})}),[l,r]),f.createElement(H,null,f.createElement(I,null,f.createElement(Z,null,"Products"),f.createElement(U,null,l.map((({id:e,name:t,price:r,qty:a})=>f.createElement(Y,{key:e},f.createElement(J,null),f.createElement(G,null,t),f.createElement(K,null,r.toLocaleString()," THB"),f.createElement(W,null,f.createElement(ee,{disabled:a<=0,onClick:()=>(e=>{c((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty>0?t.qty-1:0;return s(i({},t),{qty:r})}))))})(e)},f.createElement(le,null)),f.createElement(X,null,a),f.createElement(ee,{onClick:()=>(e=>{c((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty+1;return s(i({},t),{qty:r})}))))})(e)},f.createElement(oe,null))),f.createElement(Q,null,"quantity"))))),f.createElement(te,null,f.createElement(ne,{disabled:p,onClick:x},f.createElement(ie,null),f.createElement(ae,{hidden:p},m)),f.createElement(re,{disabled:g,onClick:x},"Checkout"))))}},{path:"/checkout",key:"checkout",title:"Checkout",component:({BlockName:e="PageCheckout"})=>{z({name:e});const[,t]=d(),{state:{loading:r},post:a}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n,isCancel:o}=V(e);return{state:r,post:u.exports.useCallback((async r=>{a((t=>s(i({},t),{loading:!0,error:e.error})));const l=t({method:"post",url:"/pay",data:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t})))})).catch((e=>{if(o(e))return e;a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))}));o(await l)||a((e=>s(i({},e),{loading:!1})))}),[a])}})(),n=w((e=>e.cart)),o=u.exports.useMemo((()=>n.filter((e=>e.qty>0)).reduce(((e,{qty:t,price:r})=>e+t*r),0)),[n]);return u.exports.useEffect((()=>{n.length||(t("/"),C.error("Empty products. Please add some."))}),[n]),f.createElement(H,null,f.createElement(ye,null,f.createElement(Z,null,"Checkout"),f.createElement(we,null,n.map((({id:e,name:t,price:r,qty:a})=>f.createElement(Ce,{key:e},f.createElement(_e,null),f.createElement(ke,null,f.createElement(qe,null,t),f.createElement($e,null,r.toLocaleString()," THB")),f.createElement(ke,null,f.createElement(Le,null,(r*a).toLocaleString()," THB"),f.createElement(Re,null,"qty: ",a)))))),f.createElement(Ee,{onSuccess:e=>{C.promise(a({paymentInfo:{cardInfo:{cardNo:`${e.card_number}`,cardCVV:`${e.cvv}`,cardExpiryDate:`${e.card_expire}`},email:`${e.email}`},products:n.map((e=>({id:e.id,quantity:e.qty})))}),{loading:"Paying...",success:"Success",error:"Something went wrong"})},submitText:`Pay ${o.toLocaleString()} THB`,loading:r})))}},{key:"404",title:"Page not found",component:()=>f.createElement(f.Fragment,null,"404, Not Found!")}],Me=()=>((e=>{const{matcher:t}=c(),[r]=d();u.exports.useEffect((()=>{let a=e.find((({path:e})=>t(e,r)[0]));a||(a=e.find((({path:e})=>null==e))),a&&(document.title=M({title:a.title}))}),[r])})(Se),f.createElement(_,null,Se.map((({component:e,path:t,key:r})=>f.createElement(k,{key:t||r,path:t,component:e}))))),ze=q(((e,t)=>{const{type:r,value:a}=t;switch(r){case"UPDATE_CART":return s(i({},e),{cart:a});default:return e}}),{cart:[]});document.title=M(),$.exports.render(f.createElement(u.exports.StrictMode,null,f.createElement(L,{position:"top-center",reverseOrder:!0}),f.createElement(R,{store:ze},f.createElement(Me,null))),document.getElementById("root"));
