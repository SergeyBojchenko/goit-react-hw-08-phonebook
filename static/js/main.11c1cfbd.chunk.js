(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return c.a})),n.d(e,"b",(function(){return r}));var c=n(18),r={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getRefreshing:function(t){return t.auth.isRefreshing}}},18:function(t,e,n){"use strict";var c=n(9),r=n.n(c),a=n(19),u=n(16),i=n.n(u),o=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},l=Object(o.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(o.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(o.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:b(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),d=Object(o.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}());e.a={register:l,logIn:j,logOut:f,fetchCarrentUser:d}},24:function(t,e,n){t.exports={link:"Navigation_link__1c6su",activeLink:"Navigation_activeLink__16yBz"}},27:function(t,e,n){t.exports={user:"UserMenu_user__38dQ6",img:"UserMenu_img__3BRfM",text:"UserMenu_text__2-Fvt",button:"UserMenu_button__1NNgJ"}},28:function(t,e,n){t.exports={link:"AuthNav_link__27uTJ",activeLink:"AuthNav_activeLink__ysuTU"}},3:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return f}));var c=n(4),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),u=Object(c.b)("contacts/fetchContactError"),i=Object(c.b)("contacts/addContactRequest"),o=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),l=Object(c.b)("contacts/deleteContactSuccess"),j=Object(c.b)("contacts/deleteContactError"),f=Object(c.b)("contacts/changeFilter")},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return o.d}));var c=n(9),r=n.n(c),a=n(19),u=n(16),i=n.n(u),o=n(3),s={addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(a.a)(r.a.mark((function t(c){var a,u,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(Object(o.b)()),t.prev=2,t.next=5,i.a.post("/contacts",a);case 5:u=t.sent,s=u.data,c(Object(o.c)(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(Object(o.a)(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(o.f)()),i.a.delete("/contacts/".concat(t)).then((function(){return n(Object(o.g)(t))})).catch((function(t){return n(Object(o.e)(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.i)()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(o.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(o.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},b=n(22),l=function(t){return t.contacts.items},j=function(t){return t.contacts.filter},f={getContacts:l,getFilter:j,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(b.a)([l,j],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))}},39:function(t,e,n){"use strict";var c=n(49),r=n.n(c),a=n(1);e.a=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.Container,children:e})}},40:function(t,e,n){t.exports={container:"AppBar_container__1Wa5M",button:"AppBar_button__Al97K",Register:"AppBar_Register__cG7hg",form:"AppBar_form__mBe7Q",label:"AppBar_label__3RBoW",input:"AppBar_input__8fous"}},49:function(t,e,n){t.exports={Container:"Container_Container__2wEBo"}},85:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(29),u=n.n(a),i=n(39),o=n(7),s=n(17),b=n(10),l=n(24),j=n.n(l),f=n(1),d=function(){var t=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsxs)("nav",{className:j.a.nav,children:[Object(f.jsx)(s.b,{to:"/",exact:!0,className:j.a.link,activeClassName:j.a.activeLink,children:"Home"}),t&&Object(f.jsx)(s.b,{to:"/contacts",className:j.a.link,activeClassName:j.a.activeLink,children:"Contacts"})]})},O=n.p+"static/media/default-icon2.f2391c21.png",h=n(27),p=n.n(h);function g(){var t=Object(o.c)(),e=Object(o.d)(b.b.getUserName),n=O;return Object(f.jsxs)("div",{className:p.a.user,children:[Object(f.jsx)("img",{className:p.a.img,src:n,width:"32",alt:"avatar"}),Object(f.jsxs)("p",{className:p.a.text,children:["Welcome, ",e]}),Object(f.jsx)("button",{className:p.a.button,type:"button",variant:"success",onClick:function(){return t(b.a.logOut())},children:"Exit"})]})}var v=n(28),x=n.n(v),m=function(){return Object(f.jsxs)("nav",{children:[Object(f.jsx)(s.b,{to:"/login",className:x.a.link,activeClassName:x.a.activeLink,children:"Login"}),Object(f.jsx)(s.b,{to:"/register",className:x.a.link,activeClassName:x.a.activeLink,children:"Register"})]})},k=n(40),_=n.n(k);function C(){var t=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsxs)("header",{className:_.a.container,children:[Object(f.jsx)(d,{}),t?Object(f.jsx)(g,{}):Object(f.jsx)(m,{})]})}var y=n(37),L=n(6),w=(n(83),n(23)),N=n(32),I=["component","redirectTo","children"];function R(t){t.component;var e=t.redirectTo,n=t.children,c=Object(N.a)(t,I),r=Object(o.d)(b.b.getIsLoggedIn);return Object(f.jsx)(L.b,Object(w.a)(Object(w.a)({},c),{},{children:r?n:Object(f.jsx)(L.a,{to:e})}))}var B=["children","restricted","redirectTo"];function U(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,u=Object(N.a)(t,B),i=Object(o.d)(b.b.getIsLoggedIn)&&c;return Object(f.jsx)(L.b,Object(w.a)(Object(w.a)({},u),{},{children:i?Object(f.jsx)(L.a,{to:a}):e}))}var A=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,103))})),T=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,104))})),z=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,106))})),E=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,105))}));var M,S,J,W,q=Object(o.b)(null,(function(t){return{fetchContacts:function(){return t(y.b.fetchContacts())}}}))((function(){var t=Object(o.c)(),e=Object(o.d)(b.b.getRefreshing);return Object(c.useEffect)((function(){t(b.a.fetchCarrentUser())}),[t]),!e&&Object(f.jsxs)(i.a,{children:[Object(f.jsx)(C,{}),Object(f.jsx)(L.d,{children:Object(f.jsxs)(c.Suspense,{fallback:Object(f.jsx)("p",{children:"Loading..."}),children:[Object(f.jsx)(U,{exact:!0,path:"/",children:Object(f.jsx)(A,{})}),Object(f.jsx)(U,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(f.jsx)(T,{})}),Object(f.jsx)(U,{exact:!0,path:"/register",restricted:!0,children:Object(f.jsx)(E,{})}),Object(f.jsx)(R,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(z,{})})]})})]})})),F=(n(84),n(85),n(31)),Q=n(4),V=n(20),G=n(51),H=n.n(G),K=n(5),D=n(8),P=n(3),X=Object(Q.d)([],(M={},Object(K.a)(M,P.j,(function(t,e){return e.payload})),Object(K.a)(M,P.c,(function(t,e){var n=e.payload;return[].concat(Object(F.a)(t),[n])})),Object(K.a)(M,P.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),M)),Y=Object(Q.d)("",Object(K.a)({},P.d,(function(t,e){return e.payload}))),Z=Object(Q.d)(!1,(S={},Object(K.a)(S,P.i,(function(){return!0})),Object(K.a)(S,P.j,(function(){return!1})),Object(K.a)(S,P.h,(function(){return!1})),Object(K.a)(S,P.b,(function(){return!0})),Object(K.a)(S,P.c,(function(){return!1})),Object(K.a)(S,P.a,(function(){return!1})),Object(K.a)(S,P.f,(function(){return!0})),Object(K.a)(S,P.g,(function(){return!1})),Object(K.a)(S,P.e,(function(){return!1})),S)),$=Object(Q.d)(null,(J={},Object(K.a)(J,P.h,(function(t,e){return e.payload})),Object(K.a)(J,P.i,(function(){return null})),J)),tt=Object(D.b)({items:X,filter:Y,loading:Z,error:$}),et=n(18),nt=Object(Q.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1},extraReducers:(W={},Object(K.a)(W,et.a.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(K.a)(W,et.a.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(K.a)(W,et.a.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(K.a)(W,et.a.fetchCarrentUser.pending,(function(t){t.isRefreshing=!0})),Object(K.a)(W,et.a.fetchCarrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isRefreshing=!1})),Object(K.a)(W,et.a.fetchCarrentUser.rejected,(function(t){t.isRefreshing=!1})),W)}).reducer,ct=Object(F.a)(Object(Q.f)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),rt={key:"auth",storage:H.a,whitelist:["token"]},at=Object(Q.a)({reducer:{auth:Object(V.g)(rt,nt),contacts:tt},middleware:ct,devTools:!1}),ut=Object(V.h)(at),it=n(52);u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.a,{store:at,children:Object(f.jsx)(it.a,{loading:null,persistor:ut,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(q,{})})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.11c1cfbd.chunk.js.map