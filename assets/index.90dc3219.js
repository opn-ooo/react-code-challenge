var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{u as c,a as d,r as u,b as m,q as p,$ as g,R as f,A as h,c as x,d as b,e as v,J as E,f as y,t as w,S as k,g as C,h as _,i as q,T as $,P as L}from"./vendor.9e6d6e86.js";const R="React Code Challenge",M=(e={})=>{const{title:t,suffix:r=R,addSuffix:a=!0,returnAppTitle:n=!0}=e;return void 0===t&&n?R:a?`${t} - ${r}`:t||""},S=({name:e,prefix:t="ActivePage"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])},{CancelToken:z,isCancel:P,create:A}=m,T=({data:e})=>e,j=e=>{const t=(({baseURL:e,initialState:t})=>{const r=z.source(),a=r.token,n=A({baseURL:e,cancelToken:a}),[o,l]=u.exports.useState((()=>t));return u.exports.useEffect((()=>()=>{r.cancel()}),[]),{Request:n,state:o,apiSource:r,setState:l,setAuth:(e,t="Bearer")=>{n.defaults.headers.common.Authorization=e?`${t} ${e}`:null},successResolver:T,isCancel:P}})({baseURL:"http://203.170.190.44:8049",initialState:e}),{Request:r,setAuth:l}=t,s=((e,t)=>{var r={};for(var l in e)n.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&a)for(var l of a(e))t.indexOf(l)<0&&o.call(e,l)&&(r[l]=e[l]);return r})(t,["Request","setAuth"]);return i({Request:r},s)},B=p.section`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`,O=p.main`
    max-width: 100%;
`,H=g`
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

`,V=({children:e,BlockName:t="LayoutCenter"})=>((({name:e,prefix:t="ActiveLayout"})=>{const r=document.documentElement,a=`${t}--${e}`;u.exports.useEffect((()=>(r.classList.add(a),()=>{r.classList.remove(a)})),[])})({name:t}),f.createElement(B,null,f.createElement(H,null),f.createElement(O,null,e))),F=(e=!0)=>h`
    ${e&&h`
        display: block;
    `}

    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:disabled {
        cursor: not-allowed;
    }
`,D=()=>h`
    transition: 0.3s all;
`,Z=p.h1`
    font-weight: 900;
    font-size: 1.5em;
    text-align: center;
    color: var(--title);

    margin-bottom: 40px;
`,N=p.section`
    padding: 40px 20px;
`,U=p.section`
    max-width: 307px;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 50px;
`,I=p.article`
    text-align: center;
`,Y=p.header`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #fff;
    border: 4px solid var(--dorminant_1);
    box-shadow: var(--product_shadow);

    margin: 0 auto;
    margin-bottom: 4px;
`,J=p.div`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);

    margin-bottom: 6px;
`,G=p.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);

    margin-bottom: 8px;
`,K=p.div`
    font-size: 0.75em;
    color: var(--product_description);
`,Q=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 3px;
`,W=p.div`
    font-size: 0.875em;
    font-weight: 500;
    color: var(--input_value);

    margin: 0 10px;
`,X=p.button`
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
`,ee=p.footer`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`,te=p.button`
    ${F()}

    font-size: 0.75em;
    font-weight: 500;
    color: var(--label);
    text-align: center;

    margin-top: 8px;
`,re=p.span`
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
`,ae=p.button`
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
`;function ne(e){return u.exports.createElement("svg",i({width:5,height:5,viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{d:"M2 3V5H3V3L5 3V2L3 2V0H2V2L0 2V3L2 3Z",fill:"#6A52FF"}))}function oe(e){return u.exports.createElement("svg",i({width:5,height:1,viewBox:"0 0 5 1",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0L5 4.47035e-07V1L0 1V0Z",fill:"#6A52FF"}))}function le(e){return u.exports.createElement("svg",i({width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5902 5.36287L16.3875 14.0333L4.49032 14.0332L3 6.03382L17.018 6.0439L17.5373 4H21V5.36287H18.5902ZM15.3346 12.6704L16.6719 7.40653L4.63336 7.39787L5.61566 12.6704H15.3346ZM16.6997 16.8205C16.6997 18.0223 15.7271 19 14.5317 19C13.3363 19 12.3637 18.0223 12.3637 16.8205C12.3637 16.5319 12.42 16.2563 12.5218 16.004H8.37358C8.47538 16.2563 8.53163 16.5319 8.53163 16.8205C8.53163 18.0223 7.5591 19 6.36365 19C5.16822 19 4.19566 18.0223 4.19566 16.8205C4.19566 15.6188 5.16823 14.6411 6.36365 14.6411H14.5317C15.7271 14.6411 16.6997 15.6188 16.6997 16.8205ZM6.36365 17.6371C6.81155 17.6371 7.17593 17.2708 7.17593 16.8205C7.17593 16.3703 6.81155 16.004 6.36365 16.004C5.91574 16.004 5.55135 16.3703 5.55135 16.8205C5.55135 17.2708 5.91575 17.6371 6.36365 17.6371ZM14.5317 17.6371C14.9796 17.6371 15.344 17.2708 15.344 16.8205C15.344 16.3703 14.9796 16.004 14.5317 16.004C14.0838 16.004 13.7195 16.3703 13.7195 16.8205C13.7195 17.2708 14.0838 17.6371 14.5317 17.6371Z",fill:"#6A52FF"}))}const ie=p.section``,se=p.form`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 35px;
`,ce=p.article`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`,de=p.section`
    display: grid;
    ${({column:e=2})=>h`
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
`,ue=p.label`
    display: block;
`,me=p.span`
    display: block;
    margin-bottom: 12px;
    color: var(--label);
    font-size: 0.875em;
    font-weight: 700;

    ${({error:e=!1})=>e&&h`
                color: var(--error);
            `}
`,pe=p.input`
    ${D()}
    ${h`
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
`,ge=p.div`
    color: var(--error);
    font-weight: 500;
    font-size: 0.6875em;
    margin-top: 5px;
`,fe=p.article`
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
`,xe=p.article.attrs((()=>({className:"fields"})))``,be={email:null,card_number:null,card_expire:null,cvv:null},ve=({onSuccess:e,loading:t=!1,submitText:r="Submit"})=>{const{models:a,register:n}=b({defaultState:be}),{state:o,setData:l}=v({initialData:be,schema:E.object({email:E.string().email({tlds:{allow:!1}}).required().messages({"string.empty":"Required","string.email":"Must be a valid email","any.required":"Required"}),card_number:E.string().pattern(/^[0-9]+$/).min(12).max(19).required().messages({"string.pattern.base":"Must be numeric","string.empty":"Required","string.min":"Minimum 12 digits required","string.max":"Must be 19 Maximum digits","any.required":"Required"}),card_expire:E.string().pattern(/^[0-9]+$/).length(4).required().messages({"string.pattern.base":"Must be numeric","string.empty":"Required","string.length":"Must be 4 digits","any.required":"Required"}),cvv:E.string().pattern(/^[0-9]+$/).min(3).max(4).required().messages({"string.pattern.base":"Must be numeric","string.empty":"Required","string.min":"Minimum 3 digits","string.max":"Maximum 4 digits","any.required":"Required"})})}),c=u.exports.useCallback((e=>o.$errors[e].map((e=>e.$message)).join(",")),[o.$errors]);return u.exports.useEffect((()=>{l(a)}),[a]),f.createElement(ie,null,f.createElement(se,{onSubmit:t=>{t.preventDefault(),e(o.$data)}},f.createElement(xe,null,f.createElement(ue,null,f.createElement(me,{error:!!c("email")},"Email"),f.createElement(pe,s(i({},n.input({name:"email"})),{type:"email",placeholder:"you@company.com",autoComplete:"current-email"}))),c("email")&&f.createElement(ge,null,c("email"))),f.createElement(ce,null,f.createElement(xe,null,f.createElement(ue,null,f.createElement(me,{error:!!c("card_number")},"Card information"),f.createElement(pe,s(i({},n.input({name:"card_number"})),{type:"text",placeholder:"1234 1234 1234 1234"}))),c("card_number")&&f.createElement(ge,null,c("card_number"))),f.createElement(de,null,f.createElement(xe,null,f.createElement(pe,s(i({},n.input({name:"card_expire"})),{type:"text",placeholder:"MM / YY"})),c("card_expire")&&f.createElement(ge,null,c("card_expire"))),f.createElement(xe,null,f.createElement(pe,s(i({},n.input({name:"cvv"})),{type:"text",placeholder:"123"})),c("cvv")&&f.createElement(ge,null,c("cvv"))))),f.createElement(fe,null,f.createElement(he,{disabled:o.$auto_invalid||t},r))))},Ee=p.section`
    width: 420px;
    max-width: 100%;
    padding: 40px 20px;
`,ye=p.section`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 15px;

    margin-bottom: 35px;
`,we=p.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
`,ke=p.header`
    width: 36px;
    height: 36px;
    border-radius: 30px;
    background-color: #fff;
    border: 3px solid var(--dorminant_1);
    box-shadow: var(--product_shadow);

    margin: 0 auto;
    margin-bottom: 4px;
`,Ce=p.nav`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    grid-gap: 3px;
`,_e=p.h3`
    font-size: 0.875em;
    font-weight: 700;
    color: var(--product_label);
`,qe=p.div`
    font-size: 0.6875em;
    font-weight: 500;
    color: var(--dorminant_1);
`,$e=p.div`
    text-align: right;

    font-size: 0.875em;
    font-weight: 700;
    color: var(--dorminant_1);
`,Le=p.div`
    text-align: right;

    font-size: 0.75em;
    font-weight: 500;
    color: var(--product_description);
`,Re=[{path:"/",key:"products",title:"Products",component:({BlockName:e="PageProducts"})=>{S({name:e});const[,t]=d(),r=x(),{state:a,fetch:n}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n,isCancel:o}=j(e);return{state:r,fetch:u.exports.useCallback((async(r={})=>{a((t=>s(i({},t),{loading:!0,error:e.error})));const l=t({method:"get",url:"/products",params:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t})))})).catch((e=>{if(o(e))return e;a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))}));o(await l)||a((e=>s(i({},e),{loading:!1})))}),[a])}})(),o=u.exports.useMemo((()=>a.data.map((e=>s(i({},e),{qty:0})))),[a.data]),[l,c]=u.exports.useState([]),m=u.exports.useMemo((()=>l.reduce(((e,{qty:t})=>e+t),0)),[l]),p=u.exports.useMemo((()=>m<=0),[m]),g=u.exports.useMemo((()=>p||a.loading),[p,a.loading]),h=()=>{t("/checkout")};return u.exports.useEffect((()=>{n()}),[n]),u.exports.useEffect((()=>{c(o)}),[o,c]),u.exports.useEffect((()=>{const e=l.filter((({qty:e})=>e>0));r({type:"UPDATE_CART",value:e})}),[l,r]),f.createElement(V,null,f.createElement(N,null,f.createElement(Z,null,"Products"),f.createElement(U,null,l.map((({id:e,name:t,price:r,qty:a})=>f.createElement(I,{key:e},f.createElement(Y,null),f.createElement(J,null,t),f.createElement(G,null,r.toLocaleString()," THB"),f.createElement(Q,null,f.createElement(X,{disabled:a<=0,onClick:()=>(e=>{c((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty>0?t.qty-1:0;return s(i({},t),{qty:r})}))))})(e)},f.createElement(oe,null)),f.createElement(W,null,a),f.createElement(X,{onClick:()=>(e=>{c((t=>t.map((t=>{if(e!==t.id)return t;const r=t.qty+1;return s(i({},t),{qty:r})}))))})(e)},f.createElement(ne,null))),f.createElement(K,null,"quantity"))))),f.createElement(ee,null,f.createElement(ae,{disabled:p,onClick:h},f.createElement(le,null),f.createElement(re,{hidden:p},m)),f.createElement(te,{disabled:g,onClick:h},"Checkout"))))}},{path:"/checkout",key:"checkout",title:"Checkout",component:({BlockName:e="PageCheckout"})=>{S({name:e});const[,t]=d(),{state:{loading:r},post:a}=(()=>{const e={loading:!1,data:[],error:null},{Request:t,state:r,setState:a,successResolver:n,isCancel:o}=j(e);return{state:r,post:u.exports.useCallback((async r=>{a((t=>s(i({},t),{loading:!0,error:e.error})));const l=t({method:"post",url:"/pay",data:r}).then(n).then(((t=e.data)=>{a((e=>s(i({},e),{data:t})))})).catch((e=>{if(o(e))return e;a((t=>{var r,a;return s(i({},t),{error:(null==(a=null==(r=null==e?void 0:e.response)?void 0:r.data)?void 0:a.message)||e.message})}))}));o(await l)||a((e=>s(i({},e),{loading:!1})))}),[a])}})(),n=y((e=>e.cart)),o=u.exports.useMemo((()=>n.filter((e=>e.qty>0)).reduce(((e,{qty:t,price:r})=>e+t*r),0)),[n]);return u.exports.useEffect((()=>{n.length||(t("/"),w.error("Empty products. Please add some."))}),[n]),f.createElement(V,null,f.createElement(Ee,null,f.createElement(Z,null,"Checkout"),f.createElement(ye,null,n.map((({id:e,name:t,price:r,qty:a})=>f.createElement(we,{key:e},f.createElement(ke,null),f.createElement(Ce,null,f.createElement(_e,null,t),f.createElement(qe,null,r.toLocaleString()," THB")),f.createElement(Ce,null,f.createElement($e,null,(r*a).toLocaleString()," THB"),f.createElement(Le,null,"qty: ",a)))))),f.createElement(ve,{onSuccess:e=>{w.promise(a({paymentInfo:{cardInfo:{cardNo:`${e.card_number}`,cardCVV:`${e.cvv}`,cardExpiryDate:`${e.card_expire}`},email:`${e.email}`},products:n.map((e=>({id:e.id,quantity:e.qty})))}),{loading:"Paying...",success:"Success",error:"Something went wrong"})},submitText:`Pay ${o.toLocaleString()} THB`,loading:r})))}},{key:"404",title:"Page not found",component:()=>f.createElement(f.Fragment,null,"404, Not Found!")}],Me=()=>((e=>{const{matcher:t}=c(),[r]=d();u.exports.useEffect((()=>{let a=e.find((({path:e})=>t(e,r)[0]));a||(a=e.find((({path:e})=>null==e))),a&&(document.title=M({title:a.title}))}),[r])})(Re),f.createElement(k,null,Re.map((({component:e,path:t,key:r})=>f.createElement(C,{key:t||r,path:t,component:e}))))),Se=_(((e,t)=>{const{type:r,value:a}=t;switch(r){case"UPDATE_CART":return s(i({},e),{cart:a});default:return e}}),{cart:[]});document.title=M(),q.exports.render(f.createElement(u.exports.StrictMode,null,f.createElement($,{position:"top-center",reverseOrder:!0}),f.createElement(L,{store:Se},f.createElement(Me,null))),document.getElementById("root"));
