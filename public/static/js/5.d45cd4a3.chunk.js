(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{42:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8);a(52);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},45:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(48),o=a(42);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(o.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(43),r=a.n(n),c=a(44),o=a(10),l=a(0),s=function(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(l.useRef)([]),f=Object(l.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,o,l,s,i,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{},n(!0),l=new AbortController,d.current.push(l),e.prev=6,e.next=9,fetch(t,{method:a,body:c,headers:o,signal:l.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(i=e.sent,d.current=d.current.filter((function(e){return e!==l})),s.ok){e.next=16;break}throw new Error(i.message);case 16:return n(!1),e.abrupt("return",i);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:u,sendRequest:f,clearError:function(){m(null)}}}},47:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(50);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(41),s=a(16),i=(a(51),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal_footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(s.a,{onClick:e.onCancel}),r.a.createElement(l.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(i,e)))}},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),c=a(44),o=a(10),l=a(0),s=a.n(l),i=a(1),u=a(47),m=a(42),d=a(48),f=a(65),E=a(66),p=a(73),h=a(72),b=a(67),v=a.n(b);a(68);v.a.accessToken="pk.eyJ1IjoicmVzaHJhcGRpcCIsImEiOiJja2E2bjR0NTgwOGpyMnJsNzMwbHR3YnB0In0.gBQ9gner0ZOWEsRSPYSPRQ";var g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={lng:e.lng,lat:e.lat,zoom:16},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){new v.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"map ".concat(this.props.className),style:this.props.style},s.a.createElement("div",{className:"sidebarStyle"},s.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom: ",this.state.zoom)),s.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}))}}]),a}(l.Component),C=a(15),O=a(45),j=a(11),N=a(46),k=(a(69),function(e){var t=Object(N.a)(),a=t.isLoading,n=t.error,i=t.sendRequest,f=t.clearError,E=Object(l.useContext)(j.a),p=Object(l.useState)(!1),h=Object(o.a)(p,2),b=h[0],v=h[1],k=Object(l.useState)(!1),y=Object(o.a)(k,2),w=y[0],_=y[1],x=function(){return v(!1)},I=function(){return _(!1)},S=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!1),t.prev=1,t.next=4,i("".concat("http://localhost:8080/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+E.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{error:n,onClear:f}),s.a.createElement(d.a,{show:b,onCancel:x,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:x},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(g,{lat:e.coordinates.lat,lng:e.coordinates.lng}))),s.a.createElement(d.a,{show:w,onCancel:I,header:"Are you sure?",contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:I},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:S},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that this cannot be undone thereafter")),s.a.createElement("li",{className:"place-item"},s.a.createElement(u.a,{className:"place-item__content"},a&&s.a.createElement(C.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("http://localhost:8080","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(m.a,{inverse:!0,onClick:function(){return v(!0)}},"VIEW ON MAP"),E.userId===e.creatorId&&s.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),E.userId===e.creatorId&&s.a.createElement(m.a,{danger:!0,onClick:function(){return _(!0)}},"DELETE")))))}),y=(a(70),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(u.a,null,s.a.createElement("h2",null,"No places found!! Maybe create one?"),s.a.createElement(m.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(k,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(e){var t=Object(l.useState)(),a=Object(o.a)(t,2),n=a[0],u=a[1],m=Object(N.a)(),d=m.isLoading,f=m.error,E=m.sendRequest,p=m.clearError,h=Object(i.h)().userId;Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat("http://localhost:8080/api","/places/user/").concat(h));case 3:t=e.sent,u(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[E,h]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{error:f,onClear:p}),d&&s.a.createElement("div",{className:"center"},s.a.createElement(C.a,null)),!d&&n&&s.a.createElement(y,{items:n,onDeletePlace:function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=5.d45cd4a3.chunk.js.map