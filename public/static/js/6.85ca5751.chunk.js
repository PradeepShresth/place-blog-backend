(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{47:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(50);a.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},50:function(e,a,t){},56:function(e,a,t){"use strict";var n=t(10),r=t(0),i=t.n(r),l=t(42);t(57);a.a=function(e){var a=Object(r.useState)(),t=Object(n.a)(a,2),s=t[0],c=t[1],u=Object(r.useState)(),o=Object(n.a)(u,2),p=o[0],m=o[1],d=Object(r.useState)(!1),v=Object(n.a)(d,2),f=v[0],b=v[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(s)}}),[s]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(a){var t,n=f;a.target.files&&1===a.target.files.length?(t=a.target.files[0],c(t),b(!0),n=!0):(b(!1),n=!1),e.onInput(e.id,t,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(l.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!f&&i.a.createElement("p",null,e.errorText))}},57:function(e,a,t){},71:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(43),r=t.n(n),i=t(44),l=t(55),s=t(10),c=t(0),u=t.n(c),o=t(47),p=t(54),m=t(42),d=t(45),v=t(15),f=t(56),b=t(53),O=t(58),g=t(46),E=t(11);t(71);a.default=function(){var e=Object(c.useContext)(E.a),a=Object(c.useState)(!0),t=Object(s.a)(a,2),n=t[0],j=t[1],h=Object(g.a)(),w=h.isLoading,x=h.error,y=h.sendRequest,I=h.clearError,k=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(s.a)(k,3),P=N[0],S=N[1],T=N[2],C=function(){var a=Object(i.a)(r.a.mark((function a(t){var i,l,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!n){a.next=13;break}return a.prev=2,a.next=5,y("http://localhost:8080/api/users/login","POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=a.sent,e.login(i.userId,i.token),a.next=11;break;case 9:a.prev=9,a.t0=a.catch(2);case 11:a.next=27;break;case 13:return a.prev=13,(l=new FormData).append("email",P.inputs.email.value),l.append("name",P.inputs.name.value),l.append("password",P.inputs.password.value),l.append("image",P.inputs.image.value),a.next=21,y("http://localhost:8080/api/users/signup","POST",l);case 21:s=a.sent,e.login(s.userId,s.token),a.next=27;break;case 25:a.prev=25,a.t1=a.catch(13);case 27:case"end":return a.stop()}}),a,null,[[2,9],[13,25]])})));return function(e){return a.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{error:x,onClear:I}),u.a.createElement(o.a,{className:"authentication"},w&&u.a.createElement(v.a,{asOverlay:!0}),u.a.createElement("h2",null,"Login Required"),u.a.createElement("hr",null),u.a.createElement("form",{onSubmit:C},!n&&u.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(b.c)()],errorText:"Please enter a name.",onInput:S}),!n&&u.a.createElement(f.a,{center:!0,id:"image",onInput:S,errorText:"Please provide an image"}),u.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(b.a)()],errorText:"Please enter a valid email address.",onInput:S}),u.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(b.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:S}),u.a.createElement(m.a,{type:"submit",disabled:!P.isValid},n?"LOGIN":"SIGNUP")),u.a.createElement(m.a,{inverse:!0,onClick:function(){n?T(Object(l.a)(Object(l.a)({},P.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):T(Object(l.a)(Object(l.a)({},P.inputs),{},{name:void 0,image:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),j((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=6.85ca5751.chunk.js.map