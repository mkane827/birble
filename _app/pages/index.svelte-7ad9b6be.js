import{S as et,i as st,s as it,e as p,t as V,c as h,a as w,h as j,d as b,b as r,g as Q,J as n,L as G,K as q,k as I,m as N,M as X,N as nt,O as ot,P as rt,v as at,Q as lt}from"../chunks/vendor-9d40ad94.js";const Z=[{description:"2 points per birb",points:2},{description:"Damn! Back at it again with the good birb! 7 points",points:7},{description:"6 points awarded",points:6},{description:"Nice birb, 7 points",points:7},{description:"Beautiful! 5 points",points:5},{description:"13/10 Great plumage",points:13},{description:"Much feathers. So wow. 9 points",points:9},{description:"Common birb, 3 points",points:3},{description:"Ruffled my feathers. 9 points",points:9},{description:"Shake those tail feathers for 4 points",points:4},{description:"Bird-like government drone. 2 points",points:2},{description:"This birb is golden. 8 points",points:8},{description:"0/10 Not even my dog would like this one",points:0},{description:"12 points. You're just robin points now",points:12},{description:"May be realted to a parrot-billed puffin, 7 points",points:7},{description:"Silly goose only 3 points",points:3},{description:"Common birb. 3 points",points:3},{description:"Chirp chirp. 5 points",points:5},{description:"Squaking in at 5 points",points:5},{description:"You're a common Loon for submitting this. 2 points",points:2}];function $(){return Z[Math.floor(Math.random()*1e3%Z.length)]}function tt(a){let e,t,d,v;return{c(){e=p("button"),t=V("Share your birb"),this.h()},l(c){e=h(c,"BUTTON",{class:!0});var o=w(e);t=j(o,"Share your birb"),o.forEach(b),this.h()},h(){r(e,"class","share-birble svelte-4bpe6o")},m(c,o){Q(c,e,o),n(e,t),d||(v=G(e,"click",a[16]),d=!0)},p:q,d(c){c&&b(e),d=!1,v()}}}function ct(a){let e,t,d,v,c,o,f,u,R,k,s,g,L,H,_,M,U,W,y,i,T,A,E,B,D,P,l=a[4]&&tt(a);return{c(){e=p("div"),t=p("header"),d=p("h1"),v=V("birble"),c=I(),o=p("div"),f=p("button"),u=p("img"),k=I(),s=p("button"),g=p("img"),H=I(),_=p("div"),M=p("canvas"),W=I(),y=p("label"),i=p("h2"),T=V("Add birb"),A=I(),E=p("input"),B=I(),l&&l.c(),this.h()},l(S){e=h(S,"DIV",{class:!0});var m=w(e);t=h(m,"HEADER",{class:!0});var z=w(t);d=h(z,"H1",{class:!0});var x=w(d);v=j(x,"birble"),x.forEach(b),c=N(z),o=h(z,"DIV",{});var C=w(o);f=h(C,"BUTTON",{class:!0});var Y=w(f);u=h(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(b),k=N(C),s=h(C,"BUTTON",{class:!0});var F=w(s);g=h(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(b),C.forEach(b),z.forEach(b),H=N(m),_=h(m,"DIV",{class:!0});var J=w(_);M=h(J,"CANVAS",{}),w(M).forEach(b),J.forEach(b),W=N(m),y=h(m,"LABEL",{class:!0});var O=w(y);i=h(O,"H2",{class:!0});var K=w(i);T=j(K,"Add birb"),K.forEach(b),A=N(O),E=h(O,"INPUT",{class:!0,type:!0,accept:!0}),O.forEach(b),B=N(m),l&&l.l(m),m.forEach(b),this.h()},h(){r(d,"class","svelte-4bpe6o"),X(u.src,R="/help.png")||r(u,"src",R),r(u,"alt","help"),r(u,"class","svelte-4bpe6o"),r(f,"class","header-button svelte-4bpe6o"),X(g.src,L="/settings.png")||r(g,"src",L),r(g,"alt","settings"),r(g,"class","svelte-4bpe6o"),r(s,"class","header-button svelte-4bpe6o"),r(t,"class","svelte-4bpe6o"),r(_,"class","canvas-wrapper svelte-4bpe6o"),nt(()=>a[13].call(_)),r(i,"class","birble-target svelte-4bpe6o"),r(E,"class","birble-input svelte-4bpe6o"),r(E,"type","file"),r(E,"accept","image/*"),r(y,"class","birble-label svelte-4bpe6o"),r(e,"class","birble svelte-4bpe6o")},m(S,m){Q(S,e,m),n(e,t),n(t,d),n(d,v),n(t,c),n(t,o),n(o,f),n(f,u),n(o,k),n(o,s),n(s,g),n(e,H),n(e,_),n(_,M),a[12](M),U=ot(_,a[13].bind(_)),n(e,W),n(e,y),n(y,i),n(i,T),n(y,A),n(y,E),n(e,B),l&&l.m(e,null),D||(P=[G(_,"resize",a[14]),G(E,"change",a[15]),G(E,"change",a[5])],D=!0)},p(S,[m]){S[4]?l?l.p(S,m):(l=tt(S),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:q,o:q,d(S){S&&b(e),a[12](null),U(),l&&l.d(),D=!1,rt(P)}}}function pt(a,e,t){let d,v=$(),c,o,f,u,R,k,s={},g;at(()=>{t(11,g=navigator&&navigator.share)});function L(){t(7,v=$()),t(8,c=o[0])}function H(){fetch(s.toDataURL()).then(i=>i.blob()).then(i=>{g({files:[new File([i],"birb.png",{type:i.type,lastModified:new Date().getTime()})]})})}function _(i){lt[i?"unshift":"push"](()=>{s=i,t(3,s),t(8,c),t(1,f),t(2,u),t(10,k),t(9,R),t(7,v)})}function M(){f=this.clientHeight,u=this.clientWidth,t(1,f),t(2,u)}const U=()=>console.log("resize");function W(){o=this.files,t(0,o)}const y=()=>H();return a.$$.update=()=>{if(a.$$.dirty&2049&&t(4,d=g&&o&&o.length>0),a.$$.dirty&1934&&s&&c){t(3,s.width=f*.8,s),t(3,s.height=u*.8,s);const i=s.getContext("2d");i.clearRect(0,0,s.width,s.height);const T=new Image;T.onload=function(){const A=s.width/this.naturalWidth,E=s.height/this.naturalHeight,B=Math.min(A,E),D=Math.max(0,(s.width-this.naturalWidth*B)/2);t(9,R=this.naturalHeight*B),t(10,k=this.naturalWidth*B),i.drawImage(T,0,0,this.naturalWidth,this.naturalHeight,D,0,k,R),i.fillStyle="rgba(0, 0, 0, 0.5)",i.fillRect(0,20,s.width,60),i.fillStyle="white",i.textBaseline="middle",i.font="30px sans-serif",i.textAlign="center",i.fillText(v.description,s.width/2,50,s.width*.8)},T.src=URL.createObjectURL(c)}},[o,f,u,s,d,L,H,v,c,R,k,g,_,M,U,W,y]}class dt extends et{constructor(e){super();st(this,e,pt,ct,it,{})}}export{dt as default};