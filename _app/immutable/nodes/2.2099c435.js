import{s as R,n as N,r as X,o as M}from"../chunks/scheduler.e108d1fd.js";import{S as P,i as D,g as d,m as H,s as k,h as f,j,y as z,n as U,c as b,f as A,k as a,a as F,x as s,z as E,A as I}from"../chunks/index.8be4893e.js";function G(i){let t,l,x="Jolt Transformer v0.1.6",_,n,T="Input Json:",C,r,y,o,g="Spec:",c,p,O,v,B="Output",w,m,q="Output Json:",L,u,S,J;return{c(){t=d("main"),l=d("h1"),l.textContent=x,_=H(`\r
  It might take few seconds to spin up the backend, wait for the default output :)\r
\r
  `),n=d("label"),n.textContent=T,C=k(),r=d("textarea"),y=k(),o=d("label"),o.textContent=g,c=k(),p=d("textarea"),O=k(),v=d("button"),v.textContent=B,w=k(),m=d("label"),m.textContent=q,L=k(),u=d("textarea"),this.h()},l(h){t=f(h,"MAIN",{class:!0});var e=j(t);l=f(e,"H1",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-rlt5mf"&&(l.textContent=x),_=U(e,`\r
  It might take few seconds to spin up the backend, wait for the default output :)\r
\r
  `),n=f(e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),z(n)!=="svelte-1a74td9"&&(n.textContent=T),C=b(e),r=f(e,"TEXTAREA",{id:!0,class:!0}),j(r).forEach(A),y=b(e),o=f(e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),z(o)!=="svelte-nz2jj9"&&(o.textContent=g),c=b(e),p=f(e,"TEXTAREA",{id:!0,class:!0}),j(p).forEach(A),O=b(e),v=f(e,"BUTTON",{class:!0,"data-svelte-h":!0}),z(v)!=="svelte-1dvbq8t"&&(v.textContent=B),w=b(e),m=f(e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),z(m)!=="svelte-1hwmxxy"&&(m.textContent=q),L=b(e),u=f(e,"TEXTAREA",{id:!0,class:!0}),j(u).forEach(A),e.forEach(A),this.h()},h(){a(l,"class","svelte-hzr2ka"),a(n,"for","input1"),a(n,"class","svelte-hzr2ka"),a(r,"id","input1"),a(r,"class","svelte-hzr2ka"),a(o,"for","input2"),a(o,"class","svelte-hzr2ka"),a(p,"id","input2"),a(p,"class","svelte-hzr2ka"),a(v,"class","svelte-hzr2ka"),a(m,"for","output"),a(m,"class","svelte-hzr2ka"),a(u,"id","output"),u.readOnly=!0,a(u,"class","svelte-hzr2ka"),a(t,"class","svelte-hzr2ka")},m(h,e){F(h,t,e),s(t,l),s(t,_),s(t,n),s(t,C),s(t,r),E(r,i[0]),s(t,y),s(t,o),s(t,c),s(t,p),E(p,i[1]),s(t,O),s(t,v),s(t,w),s(t,m),s(t,L),s(t,u),E(u,i[2]),S||(J=[I(r,"input",i[4]),I(p,"input",i[5]),I(v,"click",i[3]),I(u,"input",i[6])],S=!0)},p(h,[e]){e&1&&E(r,h[0]),e&2&&E(p,h[1]),e&4&&E(u,h[2])},i:N,o:N,d(h){h&&A(t),S=!1,X(J)}}}function K(i,t,l){let x=`{
  "alldetails": {
    "classid": 1,
    "schoolid": 3
  }
}`,_=`[
  {
    "operation": "shift",
    "spec": {
      "alldetails": {
        "classid": {
          "#Id_class": "data[0].source",
          "@(1,classid)": "data[0].value"
        },
        "teacherid": {
          "#Id_teacher": "data[1].source",
          "@(1,teacherid)": "data[1].value"
        },
        "schoolid": {
          "#Id_school": "data[2].source",
          "@(1,schoolid)": "data[2].value"
        }
      }
    }
  },
  {
    "operation": "modify-overwrite-beta",
    "spec": {
      "*": "=recursivelySquashNulls"
    }
  }
]`,n="";const T={indent_size:2,space_in_empty_paren:!0};function C(){l(2,n="");const g=`{
    "jsonspec": ${_},
    "jsoninput": ${x}
  }`;fetch("https://jolt-api.onrender.com/api/processData",{method:"POST",headers:{"Content-Type":"application/json"},body:g}).then(c=>c.json()).then(c=>{l(2,n=js_beautify(JSON.stringify(c),T))}).catch(c=>{console.error("Error:",c)})}M(()=>{fetch("https://jolt-api.onrender.com/api/ping"),C()});function r(){x=this.value,l(0,x)}function y(){_=this.value,l(1,_)}function o(){n=this.value,l(2,n)}return[x,_,n,C,r,y,o]}class W extends P{constructor(t){super(),D(this,t,K,G,R,{})}}export{W as component};
