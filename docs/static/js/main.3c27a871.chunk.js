(this.webpackJsonptriphub=this.webpackJsonptriphub||[]).push([[0],{464:function(e,t,n){e.exports=n(792)},694:function(e,t){},696:function(e,t){},707:function(e,t){},709:function(e,t){},736:function(e,t){},738:function(e,t){},739:function(e,t){},744:function(e,t){},746:function(e,t){},752:function(e,t){},754:function(e,t){},773:function(e,t){},785:function(e,t){},788:function(e,t){},792:function(e,t,n){"use strict";n.r(t);n(465),n(477);var a=n(0),r=n.n(a),o=n(76),c=n.n(o),l=n(450),i=n(61).a(),s=n(36),u=r.a.createContext({}),m=n(22);var d,f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Page No Found"))},g=n(14),p=n(431),h=n(86),b=n(150),v=n(102),E=n(5),y=n.n(E),N=n(17),k=n(837),w=function(){var e=Object(k.a)(["authToken"]),t=Object(g.a)(e,3),n=t[0],a=t[1],r=t[2];return[n.authToken,function(e){return a("authToken",e)},function(){return r("authToken")}]},x=function(){var e=w(),t=Object(g.a)(e,3)[2],n=Object(v.a)();return function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.clearStore();case 2:t(),window.location.href="./#/logout";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},j=Object(b.a)(d||(d=Object(h.a)(["\n  mutation login($email: String!, $code: String!) {\n    login(input: { email: $email,code:$code }) {\n      token\n    }\n  }\n"]))),O=n(119);var C=function(e){e.warning&&(O.b.error("The Email or Group you entered does not match our records. Please try again or contact xiaolianbei.org@gmail.com for help"),O.b.clearWaitingQueue());var t=function(){var e=Object(s.g)(),t=w(),n=Object(g.a)(t,3),a=(n[0],n[1]),r=n[2],o=Object(v.b)(j,{onCompleted:function(t){if(null===t.login){e.push("./?warning")}else{a(t.login.token);e.push("./list")}}}),c=Object(g.a)(o,2),l=c[0];return[function(e,t){return r(),l({variables:{email:e,code:t}})},c[1]]}(),n=Object(g.a)(t,2),a=n[0],o=n[1],c=Object(p.a)({shouldUseNativeValidation:!0}),l=c.handleSubmit,i=c.register,u=o.loading;return r.a.createElement("section",{className:"hero d-flex flex-column justify-content-center align-items-center",id:"home"},r.a.createElement(O.a,{limit:1}),r.a.createElement("div",{className:"bg-overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto col-12"},r.a.createElement("div",{className:"hero-text mt-5 text-center"},r.a.createElement("h6",{"data-aos":"fade-up","data-aos-delay":"300"},"Welcome to NAAAC-North America Alumni Alliance Cup Singing Competition Voting System"),r.a.createElement("h1",{className:"text-white","data-aos":"fade-up","data-aos-delay":"500"},"NAAAC"),r.a.createElement("form",{onSubmit:l((function(e){window.history.replaceState({},document.title,"./"),a(e.email,e.code)}))},r.a.createElement("input",Object.assign({type:"email",className:"form-control",name:"cf-email",placeholder:"Email"},i("email",{required:"Please enter your email."}))),r.a.createElement("input",Object.assign({type:"text",className:"form-control",name:"cf-group",placeholder:"Group"},i("code",{required:"Please enter your code."}))),r.a.createElement("button",{disabled:u,type:"submit",className:"form-control",id:"submit-button",name:"submit"},"Sign in ")))))),r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ml-auto col-lg-12 col-md-12"},r.a.createElement("p",{className:"copyright-text"},"If you have any questions, please contact xiaolianbei.org@gmail.com.")),r.a.createElement("div",{className:"ml-auto col-lg-12 col-md-12"},r.a.createElement("p",{className:"copyright-text"},"Copyright \xa9 2022 North America Alumni Alliance Cup. Design By Y&L Solution ",r.a.createElement("span",{role:"img","aria-label":"twist"}," \u270a "),"  Photos on Unsplash"))))))};var S,A=function(e){var t=null===new URLSearchParams(Object(s.h)().search).get("warning");return r.a.createElement(C,{warning:!t})},_=n(438),I=n.n(_),P=n(24),$=n(832),T=n(842),W=n(840),q=n(843),L=n(445),D=n.n(L),U=(n(686),n(185)),V=n(838),B=n(844),Y=n(443),M=n.n(Y),z=["children","onClose"],F=function(e){var t=e.children,n=e.onClose,r=Object(U.a)(e,z);return a.createElement(V.a,Object.assign({sx:{m:0,p:2}},r),t,n?a.createElement(B.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}}},a.createElement(M.a,null)):null)},R=Object(b.a)(S||(S=Object(h.a)(["\n  mutation updateVote($input: [SongInputInsertInput]) {\n    updateVote(input:$input) {\n      output\n    }\n  }\n"])));var G,J=function(e){var t=function(){var e=x(),t=Object(v.b)(R,{onCompleted:function(t){return e(),!0}}),n=Object(g.a)(t,2),a=n[0];return[function(e){return a({variables:{input:e}})},n[1]]}(),n=Object(g.a)(t,1)[0],o=x(),c=Object(P.a)($.a)((function(e){var t=e.theme;return{"& .MuiDialog-paper":{minWidth:"500px"},"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),l=Object(a.useState)([]),i=Object(g.a)(l,2),s=i[0],u=i[1],m=r.a.useState(!1),d=Object(g.a)(m,2),f=d[0],p=d[1],h=r.a.useState(!1),b=Object(g.a)(h,2),E=b[0],y=b[1];Object(a.useEffect)((function(){var t=[];e.data&&(e.data.songLists.map((function(e){return 0!==e.rank&&""!==e.rank&&t.push({_id:e._id,rank:e.rank,song:e.singer}),e})),u(t))}),[e.data]);var N=function(){p(!1)},k=function(e,t,n){if(function(e){var t=parseInt(e);return Number.isInteger(t)?!(t<0||t>6)||(Object(O.b)("Please enter integer number within a rang (1-6) !"),!1):(Object(O.b)("Please enter integer number !"),!1)}(t)){for(var a={_id:e,rank:t,song:n},r=!1,o=s.length-1;o>=0;o--)s[o]._id===e&&(s[o]=a,r=!0);r||s.push(a),u(s)}},w=[{name:"Name",selector:function(e){return e.singer}},{name:"Click to Listen",selector:function(e){return r.a.createElement("a",{href:e.song,target:"external-url"},r.a.createElement(D.a,null))}},{name:"Ranking",selector:function(e){return r.a.createElement("input",{type:"number",min:"0",max:"6",className:"form-control",defaultValue:e.rank,name:"cf-name",onChange:function(t){return k(e._id,t.target.value,e.singer)}})}}],j=e.data?e.data.songLists:[];return r.a.createElement("section",{className:"hero-list d-flex flex-column justify-content-center align-items-center"},r.a.createElement(O.a,null),r.a.createElement(c,{onClose:N,"aria-labelledby":"customized-dialog-title",open:f},r.a.createElement(F,{id:"customized-dialog-title",onClose:N},"Ready to Submit"),r.a.createElement(T.a,null,E?r.a.createElement("span",{style:{color:"red"}}," Found Duplicated rank number"):r.a.createElement("div",null,"Here is the summary, please review it. You can click confirm and submit button to save the voting."),r.a.createElement("br",null),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e.song}," ",e.song,"'s rank: ",e.rank,"  ")})))),r.a.createElement(q.a,null,r.a.createElement(W.a,{autoFocus:!0,onClick:function(){p(!1);var t=[];s.map((function(n){return t.push({_id:n._id,rank:n.rank,song:n.song,access_token:e.token}),n})),n(t)},disabled:E},"Confirm and Submit"))),r.a.createElement("div",{className:"bg-overlay-list"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 col-md-10 mx-auto col-12"},r.a.createElement("h3",{className:"text-white"},"Welcome to the NAAAC voting system"),r.a.createElement("br",null),r.a.createElement("p",{className:"text-white"},"You have ten songs to review and you are allowed to vote six out of them. The ranking is from 1 to 6 where 1 is the highest rank and 6 is the lowest rank . In the six songs that you vote, each ranking should be unique. By clicking Submit button, you will see a summary, you can commit your votes after confirming the summary. You are allowed to recast your votes before --------. After that, all the vots are final, not further submit will be saved."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-2  col-sm-12"}),r.a.createElement("div",{className:"col-lg-3 col-md-5 col-sm-12 "},r.a.createElement("button",{type:"button",className:"form-control",id:"submit-button",onClick:function(){!function(){for(var e=!1,t=[1,1,1,1,1,1,1],n=s.length-1;n>=0;n--)0!==parseInt(s[n].rank)&&(0===t[parseInt(s[n].rank)]?e=!0:t[parseInt(s[n].rank)]=0);return e}()?y(!1):y(!0),p(!0)}},"Submit my votes")),r.a.createElement("div",{className:"col-lg-3 col-md-5   col-sm-12 "},r.a.createElement("button",{type:"button",className:"form-control",onClick:function(){o()}},"logout"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 col-md-10 mx-auto col-12"},r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement(I.a,{columns:w,data:j,progressPending:e.loading}))))))},H=Object(b.a)(G||(G=Object(h.a)(["\nquery get_song_list($access_token: String!) {\n  songLists(query: {access_token: $access_token}) {\n    singer\n    song\n    rank\n    _id\n  }\n  }"])));var Q={settings:{layout:{}},routes:[{path:"/home",component:A},{path:"/list",component:function(e){var t=w(),n=Object(g.a)(t,1)[0],a=Object(v.c)(H,{variables:{access_token:n}}),o=a.loading,c=a.error,l=a.data;return c?r.a.createElement(C,{warning:!0}):"undefined"===typeof n||""===n?r.a.createElement(C,null):r.a.createElement(J,{loading:o,error:c,data:l,token:n})}},{path:"/logout",component:function(e){return r.a.createElement("section",{className:"hero d-flex flex-column justify-content-center align-items-center",id:"home"},r.a.createElement("div",{className:"bg-overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto col-12"},r.a.createElement("div",{className:"hero-text mt-5 text-center"},r.a.createElement("h4",{className:"text-white"},"Thank you for using NAAAC-North America Alumni Alliance Cup Singing Competition Voting System"),r.a.createElement("h4",{className:"text-white"},"Your votes is important to us."),r.a.createElement("h4",{className:"text-white"},"We will keep you update on the voting result. Wish you have a nice day!")),r.a.createElement("div",{className:"col-lg-4 col-md-4 mx-auto col-4"},r.a.createElement("button",{type:"button",onClick:function(){window.location.href="./"},className:"form-control",id:"submit-button",name:"submit"},"Sign in to vote"))))))}},{path:"/errors/404",component:f}]},K=[].concat(Object(m.a)(Q.routes),[{path:"/",exact:!0,component:A},{component:function(){return r.a.createElement(s.a,{to:"/errors/404"})}}]),X=n(446),Z=n(145);var ee=function(e){return r.a.createElement(u.Consumer,null,(function(e){var t=e.routes;return r.a.createElement("div",null,r.a.createElement(Z.a,null,Object(X.a)(t)))}))},te=n(59),ne=n(292),ae=n(833),re=n(834),oe=n(835),ce=new ne.a("naaac-app-ugrsu");function le(){return ie.apply(this,arguments)}function ie(){return(ie=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce.currentUser){e.next=5;break}return e.next=3,ce.logIn(ne.b.anonymous());case 3:e.next=7;break;case 5:return e.next=7,ce.currentUser.refreshCustomData();case 7:return e.abrupt("return",ce.currentUser.accessToken);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=new ae.a({link:new re.a({uri:"https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/naaac-app-ugrsu/graphql",fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(N.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:return a=e.sent,n.headers.Authorization="Bearer ".concat(a),e.abrupt("return",fetch(t,n));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),cache:new oe.a}),ue=function(){return r.a.createElement(te.a,{client:se},r.a.createElement(u.Provider,{value:{routes:K}},r.a.createElement(s.c,{history:i},r.a.createElement(ee,null))))},me=n(294),de=n(449),fe=n(448),ge=Object(fe.createLogger)(),pe=Object(me.b)(Object(me.a)(de.a,ge));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:pe},r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[464,1,2]]]);
//# sourceMappingURL=main.3c27a871.chunk.js.map