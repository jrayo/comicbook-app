(this["webpackJsonpcomicbook-app"]=this["webpackJsonpcomicbook-app"]||[]).push([[0],{36:function(n,e,t){n.exports=t(52)},41:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(21),i=t.n(c),o=(t(41),t(1)),l=t(35),u=t(2),s=t(17),m=t(18),d=t(6),f=t(14),p=t.n(f),v=t(20),g=t(16),b=Object(g.b)({name:"comics",initialState:{loading:!1,hasErrors:!1,comics:[]},reducers:{getComics:function(n){n.loading=!0},getComicsSuccess:function(n,e){var t=e.payload;n.comics=t,n.loading=!1,n.hasErrors=!1},getComicsFailure:function(n){n.loading=!1,n.hasErrors=!0}}}),h=b.actions,x=h.getComics,E=h.getComicsSuccess,j=h.getComicsFailure,y=function(n){return n.comics},w=b.reducer;var O=t(12);function k(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction:column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    margin-top: 1em;\n    margin-bottom:1em;\n    \n    text-align: center;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color:black;\n    };\n    &:hover{\n        background-color:#a3f090;\n        color:#0f3d04;\n    }\n    "]);return k=function(){return n},n}function _(){var n=Object(o.a)(["\n    display:grid;\n    grid-template-columns: 25% 25% 25% 25%;\n\n    width:80%;\n\n    @media only screen and (max-width: 1024px) and (min-width: 481px)  {\n        grid-template-columns: 33% 33% 33%;\n    }\n        \n    @media only screen and (max-width: 480px)  {\n    grid-template-columns: 50% 50%;.\n    }\n        \n"]);return _=function(){return n},n}function C(){var n=Object(o.a)(["\n    display:flex;\n    flex:1;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return C=function(){return n},n}function z(){var n=Object(o.a)(["\n    width:60%;\n    border: 2px solid black;\n    align-self:center;\n    box-shadow:1px;\n"]);return z=function(){return n},n}function F(){var n=Object(o.a)(["\n    margin-top:0;\n    color:grey;\n    font-weight:bold;\n    font-size:0.8em;\n"]);return F=function(){return n},n}function S(){var n=Object(o.a)(["\n    display:flex;\n    flex:1;\n    flex-direction:column;\n    justify-content:flex-end;\n    margin-top:1em;\n"]);return S=function(){return n},n}function L(){var n=Object(o.a)(["\n\n    width:100%;\n    padding-top:1em;\n"]);return L=function(){return n},n}var B=u.a.div(L()),M=u.a.div(S()),Y=u.a.p(F()),T=u.a.img(z()),$=u.a.div(C()),D=u.a.div(_()),I=Object(u.a)(O.b)(k()),J=function(n){var e=Object(d.c)(y).comics;return a.a.createElement(B,null,a.a.createElement($,null,a.a.createElement(D,null,e.map((function(n){return a.a.createElement(I,{to:"/comic/"+n.id,key:n.id,size:2},a.a.createElement(T,{src:n.image.original_url,alt:n.volume.name}),a.a.createElement(M,null,a.a.createElement("strong",null,n.volume.name," ",null!=n.issue_number.match(/^[0-9]+$/)?"#"+n.issue_number:n.issue_number),a.a.createElement(Y,null,n.date_added)))})))))},W=t(34),G=t.n(W);function N(){var n=Object(o.a)(["\n\tflex: ",";\n\t",";\n    align-items: center;\n    justify-content: center;\n    width:100%;\n    margin:0px;\n"]);return N=function(){return n},n}function P(){var n=Object(o.a)(["\n    display:flex;\n    justify-content:center;\n    border-bottom: 2px solid #E2E2E2;\n    padding-top: 1em;\n    padding-bottom: 1em;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color:black;\n    };\n    &:hover{\n        background-color:#a3f090;\n        color:#0f3d04;\n    }\n"]);return P=function(){return n},n}function q(){var n=Object(o.a)(["\n    width:60%;\n    ",";\n"]);return q=function(){return n},n}function A(){var n=Object(o.a)(["\n    width:65%;\n    border: 2px solid black;\n"]);return A=function(){return n},n}function H(){var n=Object(o.a)(["\n    color:grey;\n    font-weight:bold;\n    font-size:0.8em;\n"]);return H=function(){return n},n}function K(){var n=Object(o.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n"]);return K=function(){return n},n}function Q(){var n=Object(o.a)(["\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    width:100%;\n    padding:1em;\n"]);return Q=function(){return n},n}var R=u.a.div(Q()),U=u.a.div(K()),V=u.a.span(H()),X=u.a.img(A()),Z=u.a.div(q(),(function(n){return n.expand&&en[n.expand]("\n\t\twidth: 80%;\n    ")})),nn=Object(u.a)(O.b)(P()),en={xs:function(n){return"\n\t\t@media only screen and (max-width: 480px){\n\t\t\t".concat(n,"\n\t\t}\n\t")}},tn=u.a.div(N(),(function(n){return n.size}),(function(n){return n.collapse&&en[n.collapse]("\n\t\tdisplay: none;\n    ")})),rn=function(n){var e=Object(d.c)(y).comics;return a.a.createElement(R,null,a.a.createElement(Z,{expand:"xs"},e.map((function(n){return a.a.createElement(nn,{to:"/comic/"+n.id,key:n.id},a.a.createElement(tn,{size:2},a.a.createElement(X,{src:n.image.original_url,alt:n.volume.name})),a.a.createElement(tn,{size:3},a.a.createElement(U,null,a.a.createElement("strong",null,n.volume.name," ",null!=n.issue_number.match(/^[0-9]+$/)?"#"+n.issue_number:n.issue_number),a.a.createElement(V,null,a.a.createElement(G.a,{format:"MMM DD, YYYY"},n.date_added)))))}))))};function an(){var n=Object(o.a)(["\n  display:flex;\n  flex:1;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  padding-top: 5em;\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n\n\n  ","\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(o.a)(["\n  padding-left:0.5em;\n  padding-right:0.5em;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return on=function(){return n},n}function ln(){var n=Object(o.a)(["\n  padding-left:0.5em;\n  padding-right:0.5em;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(o.a)(["\n  width:8em;\n  display:flex;\n"]);return un=function(){return n},n}function sn(){var n=Object(o.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  justify-content:space-between;\n  width:80vw;\n  margin:0px;\n  border-top: 3px solid #E2E2E2;\n  border-bottom: 3px solid #E2E2E2;\n"]);return sn=function(){return n},n}function mn(){var n=Object(o.a)(["\n  display: flex;\n  font-weight: bold;\n  flex: 1;\n  margin:0px;\n  padding:30px;\n"]);return mn=function(){return n},n}function dn(){var n=Object(o.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  width:100vw;\n"]);return dn=function(){return n},n}function fn(){var n=Object(o.a)(["\n  background-color:#F2F2F2;\n  height: 100vh;\n  width: 100vw;\n  overflow-x:hidden;\n  "]);return fn=function(){return n},n}var pn=u.a.div(fn()),vn=u.a.div(dn()),gn=u.a.h1(mn()),bn=u.a.div(sn()),hn=u.a.div(un()),xn=u.a.div(ln()),En=u.a.div(on()),jn=u.a.span(cn(),(function(n){return n.active&&"\n  color green;\n  "})),yn=u.a.div(an()),wn=function(){var n=a.a.useState("list"),e=Object(l.a)(n,2),t=e[0],c=e[1],i=function(n){return t===n?"green":t!==n?"black":void 0},o=Object(d.b)(),u=Object(d.c)(y),f=u.comics,g=u.loading,b=u.hasErrors;return Object(r.useEffect)((function(){o(function(){var n=Object(v.a)(p.a.mark((function n(e){var t,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(x()),n.prev=1,n.next=5,fetch("https://lit-badlands-08756.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&sort=date_added:desc&field_list=date_added,image,name,issue_number,volume,id");case 5:if(!(t=n.sent).ok){n.next=13;break}return n.next=9,t.json();case 9:r=n.sent,e(E(r.results)),n.next=14;break;case 13:throw new Error("Something went wrong");case 14:n.next=20;break;case 16:n.prev=16,n.t0=n.catch(1),console.log(n.t0.message),e(j());case 20:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(e){return n.apply(this,arguments)}}())}),[o]),a.a.createElement(pn,null,a.a.createElement(vn,null,a.a.createElement(gn,null," ComicBook "),a.a.createElement(bn,null,a.a.createElement("b",null,"Latest Issues"),a.a.createElement(hn,null,a.a.createElement(xn,{onClick:function(){return c("list")}},a.a.createElement(s.a,{icon:m.a,color:i("list")}),a.a.createElement(jn,{active:"list"===t}," List ")),a.a.createElement(En,{onClick:function(){return c("grid")}},a.a.createElement(s.a,{icon:m.c,color:i("grid")}),a.a.createElement(jn,{active:"grid"===t}," Grid "))))),g?a.a.createElement(yn,null,a.a.createElement(s.a,{icon:m.b,size:"3x",spin:!0,color:"green"}),a.a.createElement("p",null,"Loading comics...")):b?a.a.createElement(yn,null,"Network error, cannot display comics."):"list"===t?a.a.createElement(rn,{comics:f}):a.a.createElement(J,null))},On=Object(g.b)({name:"comic",initialState:{loading:!1,hasErrors:!1,comic:[],characters:[],teams:[],locations:[],concepts:[]},reducers:{getComic:function(n){n.loading=!0},getComicSuccess:function(n,e){var t=e.payload;n.comic=t,n.loading=!1,n.hasErrors=!1},getComicFailure:function(n){n.loading=!1,n.hasErrors=!0},setCharacters:function(n,e){var t=e.payload;n.characters=t},setTeams:function(n,e){var t=e.payload;n.teams=t},setLocations:function(n,e){var t=e.payload;n.locations=t},setConcepts:function(n,e){var t=e.payload;n.concepts=t}}}),kn=On.actions,_n=kn.getComic,Cn=kn.getComicSuccess,zn=kn.getComicFailure,Fn=kn.setCharacters,Sn=kn.setTeams,Ln=kn.setLocations,Bn=kn.setConcepts,Mn=function(n){return n.comic},Yn=On.reducer;function Tn(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction:row;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    color:#677B67;    \n    text-align: center;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        color:black;\n    };\n    &:hover{\n        background-color:#a3f090;\n        color:#0f3d04;\n    }\n    "]);return Tn=function(){return n},n}function $n(){var n=Object(o.a)(["\n    display:grid;\n    grid-template-columns: 50% 50%;\n"]);return $n=function(){return n},n}function Dn(){var n=Object(o.a)(["\n    display:grid;\n    grid-template-columns: 60% 40%;\n\n    width:80%;\n\n    @media only screen and (max-width: 1024px) and (min-width: 481px)  {\n        grid-template-columns: 60% 40%;\n    }\n        \n    @media only screen and (max-width: 480px)  {\n        grid-template-columns: 100%;\n    }\n            \n"]);return Dn=function(){return n},n}function In(){var n=Object(o.a)(["\n    display:flex;\n    flex:1;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    width:100%;\n"]);return In=function(){return n},n}function Jn(){var n=Object(o.a)(["\n    width:100%;\n    @media only screen and (max-width: 480px)  {\n        order:1;\n    }\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(o.a)(["\n    @media only screen and (max-width: 480px)  {\n        order:2;\n    }\n"]);return Wn=function(){return n},n}function Gn(){var n=Object(o.a)(["\n    border-bottom: 3px solid #E0E0E0\n"]);return Gn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n    border-radius:3px;\n    margin:5px;\n"]);return Nn=function(){return n},n}function Pn(){var n=Object(o.a)(["\n    width:40vw;\n    align-self:center;\n    right:0;\n    @media only screen and (max-width: 480px)  {\n        width:60vw;\n    }\n"]);return Pn=function(){return n},n}function qn(){var n=Object(o.a)(["\n    position: absolute;\n    height: 100%;\n    top: 10vh;\n    right: 0%;\n    @media only screen and (max-width: 480px)  {\n        position: relative;\n        top:0%;\n        left:auto;\n        display:flex;\n        flex:1;\n        justify-content:center;\n    }\n"]);return qn=function(){return n},n}function An(){var n=Object(o.a)(["\n  display:flex;\n  flex:1;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  padding-top: 5em;\n"]);return An=function(){return n},n}var Hn=u.a.div(An()),Kn=u.a.div(qn()),Qn=u.a.img(Pn()),Rn=u.a.img(Nn()),Un=u.a.h2(Gn()),Vn=u.a.div(Wn()),Xn=u.a.div(Jn()),Zn=u.a.div(In()),ne=u.a.div(Dn()),ee=u.a.div($n()),te=u.a.div(Tn()),re=function(){var n=Object(d.c)(Mn),e=n.comic,t=n.loading,r=n.hasErrors,c=n.characters,i=n.teams,o=n.locations,l=n.concepts;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(Hn,null,a.a.createElement(s.a,{icon:m.b,size:"3x",spin:!0,color:"green"}),a.a.createElement("p",null,"Loading comic")):r?a.a.createElement("p",null,"Cannot display comic..."):a.a.createElement(Zn,null,a.a.createElement(ne,null,a.a.createElement(Vn,null,a.a.createElement(Un,null,"Characters"),a.a.createElement(ee,null,0!==c.length&&c.map((function(n,e){return a.a.createElement(te,{key:n.name+e,size:2},a.a.createElement(Rn,{src:n.image.tiny_url,alt:n.name}),a.a.createElement("span",null,n.name))}))),a.a.createElement(Un,null,"Teams"),0!==i.length&&i.map((function(n,e){return a.a.createElement(te,{key:n.name+e,size:2},a.a.createElement(Rn,{src:n.image.tiny_url,alt:n.name}),a.a.createElement("span",null,n.name))})),a.a.createElement(Un,null,"Locations"),0!==o.length&&o.map((function(n,e){return a.a.createElement(te,{key:n.name+e,size:2},a.a.createElement(Rn,{src:n.image.tiny_url,alt:n.name}),a.a.createElement("span",null,n.name))})),a.a.createElement(Un,null,"Concepts"),0!==l.length&&l.map((function(n,e){return a.a.createElement(te,{key:n.name+e,size:2},a.a.createElement(Rn,{src:n.image.tiny_url,alt:n.name}),a.a.createElement("span",null,n.name))}))),a.a.createElement(Xn,null,e.image&&a.a.createElement(Kn,null,a.a.createElement(Qn,{src:e.image.original_url,alt:e.name}))))))};function ae(){var n=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    margin:0px;\n    padding:30px;\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    };\n"]);return ae=function(){return n},n}function ce(){var n=Object(o.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  &:focus, &:hover, &:visited, &:link, &:active {\n    text-decoration: none;\n    color:black;\n};\n"]);return ce=function(){return n},n}function ie(){var n=Object(o.a)(["\n  background-color:#F2F2F2;\n  height: 100vh;\n  width: 100%;\n  overflow-x:hidden;\n  "]);return ie=function(){return n},n}var oe=u.a.div(ie()),le=Object(u.a)(O.b)(ce()),ue=u.a.h1(ae()),se=function(){var n=Object(d.b)();return Object(r.useEffect)((function(){var e,t=window.location.pathname.split("/").filter((function(n){return!!n})).pop();n((e=t,function(){var n=Object(v.a)(p.a.mark((function n(t){var r,a,c,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(_n()),n.prev=1,r="https://lit-badlands-08756.herokuapp.com/",n.next=5,fetch(r+"https://comicvine.gamespot.com/api/issue/4000-".concat(e,"/?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&field_list=image,character_credits,team_credits,location_credits,concept_credits"));case 5:return a=n.sent,n.next=8,a.json();case 8:return c=n.sent,t(Cn(c.results)),i=function(n){var e=n.map(function(){var n=Object(v.a)(p.a.mark((function n(e){var t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(r+"".concat(e.api_detail_url,"?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&field_list=image,name"));case 2:return t=n.sent,n.next=5,t.json();case 5:return a=n.sent,n.abrupt("return",a.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Promise.all(e)},n.next=13,i(c.results.character_credits).then((function(n){return t(Fn(n))}));case 13:return n.next=15,i(c.results.team_credits).then((function(n){return t(Sn(n))}));case 15:return n.next=17,i(c.results.location_credits).then((function(n){return t(Ln(n))}));case 17:return n.next=19,i(c.results.concept_credits).then((function(n){return t(Bn(n))}));case 19:n.next=24;break;case 21:n.prev=21,n.t0=n.catch(1),t(zn());case 24:case"end":return n.stop()}}),n,null,[[1,21]])})));return function(e){return n.apply(this,arguments)}}()))}),[n]),a.a.createElement(oe,null,a.a.createElement(le,{to:"/"},a.a.createElement(ue,null," ComicBook ")),a.a.createElement(re,null))},me=t(5);var de=function(){return a.a.createElement(O.a,{basename:"comicbook-app"},a.a.createElement("div",null,a.a.createElement(me.c,null,a.a.createElement(me.a,{path:"/comic"},a.a.createElement(se,null)),a.a.createElement(me.a,{path:"/"},a.a.createElement(wn,null)))))},fe=t(8),pe=Object(fe.c)({comics:w,comic:Yn}),ve=Object(g.a)({reducer:pe});var ge=function(){return a.a.createElement(d.a,{store:ve},a.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:ve},a.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.2d76863a.chunk.js.map