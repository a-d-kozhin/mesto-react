(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo-2.e889e45f.svg"},21:function(e,t,a){e.exports=a.p+"static/media/edit-avatar.d476a8b8.svg"},22:function(e,t,a){e.exports=a.p+"static/media/success.e38b395c.svg"},23:function(e,t,a){e.exports=a.p+"static/media/fail.4072126c.svg"},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),u=(a(33),a(26)),i=a(1),l=a(19),s=a.n(l),p=a(4),m=a(2);var _=function(e){var t=e.email,a=e.onLogOut;return o.a.createElement("header",{className:"header"},o.a.createElement("a",{href:"# ",className:"link"},o.a.createElement("img",{src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto Russia",className:"logo logo_place_header"})),o.a.createElement("div",{className:"navbar"},o.a.createElement(m.b,{path:"/sign-up"},o.a.createElement(p.b,{to:"./sign-in",className:"button navbar__button"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(m.b,{path:"/sign-in"},o.a.createElement(p.b,{to:"./sign-up",className:"button navbar__button"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(m.b,{exact:!0,path:"/"},o.a.createElement("p",{className:"navbar__email"},t),o.a.createElement(p.b,{to:"./sign-in",onClick:a,className:"button navbar__button navbar__button_type_logout"},"\u0412\u044b\u0439\u0442\u0438"))))},d=a(21),h=a.n(d),f=o.a.createContext();var b=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(f),u=t.owner._id===c._id,i="button element__remove-button ".concat(u?"element__remove-button_visible":"element__remove-button_hidden"),l=t.likes.some((function(e){return e._id===c._id})),s="button ".concat(l?"element__like-button element__like-button_active":"element__like-button");return o.a.createElement(f.Provider,{value:c},o.a.createElement("li",{className:"element"},o.a.createElement("button",{type:"button",className:i,onClick:function(){r(t)}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(t.link,")")},className:"element__image",alt:t.name,onClick:function(){a(t)}}),o.a.createElement("div",{className:"element__wrapper_horizontal"},o.a.createElement("h2",{className:"element__title"},"".concat(t.name)),o.a.createElement("div",{className:"element__wrapper_vertical"},o.a.createElement("button",{type:"button",className:s,onClick:function(){n(t)}}),o.a.createElement("p",{className:"element__likes-count"},"".concat(t.likes.length))))))};var v=function(e){var t=e.onEditAvatar,a=e.onAddPlace,n=e.onCardClick,r=e.onEditProfile,c=e.cards,u=e.onCardLike,i=e.onCardDelete,l=o.a.useContext(f);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"profile__avatar-button",onClick:t},o.a.createElement("img",{className:"profile__avatar-edit-icon",src:h.a,alt:""}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(l.avatar,")")},alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"}))),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},l.name),o.a.createElement("button",{type:"button",className:"button profile__edit-button",onClick:r}),o.a.createElement("p",{className:"profile__job"},l.about)),o.a.createElement("button",{type:"button",className:"button profile__add-button",onClick:a})),o.a.createElement("ul",{className:"elements"},c.map((function(e){return o.a.createElement(b,{card:e,onCardClick:n,key:e._id,onCardLike:u,onCardDelete:i})}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u0421\u0430\u0448\u0430 \u041a\u043e\u0436\u0438\u043d"))},g=a(22),N=a.n(g),y=a(23),O=a.n(y);var C=function(e){var t=e.toolTipSuccess,a=e.isOpen,n=e.onClose,r=e.message;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup popup-info ".concat(a?"popup_opened":""," ")},o.a.createElement("div",{className:"popup__overlay popup-profile__overlay",onClick:n}),o.a.createElement("div",{className:"popup__container popup-info__container"},t?o.a.createElement("img",{src:N.a}):o.a.createElement("img",{src:O.a}),o.a.createElement("h3",{className:"popup__title popup-info__title"},r),o.a.createElement("button",{type:"button",className:"button popup__close-button popup-info__close-button",onClick:n}))))};var k=function(e){var t=e.name,a=e.title,n=e.children,r=e.isOpen,c=e.onClose,u=e.onSubmit;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup popup-".concat(t," ").concat(r?"popup_opened":""," ")},o.a.createElement("div",{className:"popup__overlay popup-profile__overlay",onClick:c}),o.a.createElement("form",{className:"popup__container popup__form popup__form_type_".concat(t),name:"edit-profile",action:"#",method:"post",noValidate:!0,onSubmit:u},o.a.createElement("h3",{className:"popup__title"},a),n,o.a.createElement("button",{type:"button",className:"button popup__close-button popup-profile__close-button",onClick:c}))))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(i.a)(r,2),u=c[0],l=c[1],s=o.a.useState(""),p=Object(i.a)(s,2),m=p[0],_=p[1],d=o.a.useContext(f);return o.a.useEffect((function(){l(d.name),_(d.about)}),[t,d.name,d.about]),o.a.createElement(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:u,about:m})}},o.a.createElement("input",{onChange:function(e){l(e.target.value)},value:u,className:"popup__input popup__input_type_name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input"}),o.a.createElement("span",{id:"name-input-error",className:"popup__error"},"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),o.a.createElement("input",{onChange:function(e){_(e.target.value)},value:m,className:"popup__input popup__input_type_job",type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",name:"about",required:!0,minLength:"2",maxLength:"200",id:"job-input"}),o.a.createElement("span",{id:"job-input-error",className:"popup__error"},"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),o.a.createElement("button",{type:"submit",className:"popup__submit-button popup-profile__submit-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var S=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("input",{ref:r,className:"popup__input popup__input_type_avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"avatar-input",name:"avatar",required:!0}),o.a.createElement("span",{id:"avatar-input-error",className:"popup__error"},"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),o.a.createElement("button",{type:"submit",className:"popup__submit-button popup-avatar__submit_button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var w=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useRef(),c=o.a.useRef();return o.a.createElement(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({title:r.current.value,url:c.current.value})}},o.a.createElement("input",{ref:r,className:"popup__input popup__input_type_title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"title",required:!0,id:"title-input",minLength:"2",maxLength:"30"}),o.a.createElement("span",{id:"title-input-error",className:"popup__error"},"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),o.a.createElement("input",{ref:c,className:"popup__input popup__input_type_url",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"url-input",name:"url",required:!0}),o.a.createElement("span",{id:"url-input-error",className:"popup__error"},"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"),o.a.createElement("button",{type:"submit",className:"popup__submit-button popup-element__submit_button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var x=function(e){var t=e.card,a=e.onClose,n="",r="";return t&&(n=t.name,r=t.link),o.a.createElement("section",{className:"popup popup-image ".concat(t?"popup_opened":""," ")},o.a.createElement("div",{className:"popup__overlay popup-image__overlay",onClick:a}),o.a.createElement("div",{className:"popup-image__wrapper"},o.a.createElement("div",{style:{backgroundImage:"url(".concat(r,")")},alt:n,className:"popup-image__image"}),o.a.createElement("p",{className:"popup-image__caption"},n),o.a.createElement("button",{type:"button",className:"button popup__close-button popup-image__close-button",onClick:a})))},L=a(27),P=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return o.a.createElement(m.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(m.a,{to:"./sign-in"})}))};var I=function(e){var t=e.onLogin,a=Object(m.g)(),r=Object(n.useState)(""),c=Object(i.a)(r,2),u=c[0],l=c[1],s=Object(n.useState)(""),_=Object(i.a)(s,2),d=_[0],h=_[1];return o.a.createElement("div",{className:"auth"},o.a.createElement("h2",{className:"auth__header"},"\u0412\u0445\u043e\u0434"),o.a.createElement("form",{className:"auth__form auth__form_type_login",onSubmit:function(e){e.preventDefault(),t(u,d).then((function(){return l(""),void h("")})).then((function(){return a.push("/")})).catch((function(e){return console.log(e)}))}},o.a.createElement("input",{className:"auth__input",id:"email",required:!0,name:"email",type:"email",placeholder:"Email",value:u,onChange:function(e){return l(e.target.value)}}),o.a.createElement("input",{className:"auth__input",id:"password",required:!0,name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d,onChange:function(e){return h(e.target.value)}}),o.a.createElement("button",{className:"auth__submit",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(p.b,{to:"./sign-up",className:"button auth__link"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))};var R=function(e){var t=e.onRegister,a=(Object(m.g)(),Object(n.useState)("")),r=Object(i.a)(a,2),c=r[0],u=r[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),_=s[0],d=s[1];return o.a.createElement("div",{className:"auth"},o.a.createElement("h2",{className:"auth__header"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("form",{className:"auth__form auth__form_type_register",onSubmit:function(e){e.preventDefault(),t(c,_).then((function(){return u(""),void d("")})).catch((function(e){return console.log(e)}))}},o.a.createElement("input",{className:"auth__input",id:"email",name:"email",type:"email",placeholder:"Email",value:c,onChange:function(e){return u(e.target.value)}}),o.a.createElement("input",{className:"auth__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:_,onChange:function(e){return d(e.target.value)}}),o.a.createElement("button",{className:"auth__submit",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),o.a.createElement(p.b,{to:"./sign-in",className:"button auth__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"))},A=a(24),T=a(25),D=new(function(){function e(t){var a=t.url,n=t.headers,o=void 0===n?{}:n;Object(A.a)(this,e),this.url=a,this.headers=o,this.authorization=o.authorization}return Object(T.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Oops, response is not ok. Status: ".concat(e.status))}},{key:"_handleError",value:function(e){return console.error("Oops, an error occured: ".concat(e)),Promise.reject(e.message)}},{key:"getInfo",value:function(){var e=this;return fetch("".concat(this.url,"users/me"),{headers:this.headers}).then((function(t){return e._handleResponse(t)})).catch(this._handleError)}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"cards"),{headers:this.headers}).then((function(t){return e._handleResponse(t)})).catch(this._handleError)}},{key:"editInfo",value:function(e){var t=this;return fetch("".concat(this.url,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}},{key:"sendElement",value:function(e){var t=this;return fetch("".concat(this.url,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.title,link:e.url})}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this.url,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.url,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._handleResponse(e)})).catch(this._handleError)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-13/",headers:{authorization:"9b4159b0-f593-4984-be9b-af6528533bd7","Content-Type":"application/json"}}),q=a(15),J="https://auth.nomoreparties.co",U={"Content-Type":"application/json"};var z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(i.a)(c,2),s=l[0],p=l[1],d=Object(n.useState)(!1),h=Object(i.a)(d,2),b=h[0],g=h[1],N=Object(n.useState)(!1),y=Object(i.a)(N,2),O=y[0],L=y[1],A=Object(n.useState)(),T=Object(i.a)(A,2),z=T[0],B=T[1],F=Object(n.useState)({name:"",about:""}),H=Object(i.a)(F,2),M=H[0],W=H[1],G=Object(n.useState)([]),V=Object(i.a)(G,2),$=V[0],K=V[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)({email:"",_id:""}),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)(!1),re=Object(i.a)(oe,2),ce=re[0],ue=re[1],ie=Object(n.useState)(""),le=Object(i.a)(ie,2),se=le[0],pe=le[1];function me(){document.querySelector(".popup_opened")&&(document.querySelector(".popup_opened").classList.remove("popup_opened"),p(!1),r(!1),g(!1),B(null))}Object(n.useEffect)((function(){Promise.all([D.getInfo(),D.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];W(a),K(n)}))}),[]);var _e=Object(m.g)(),de=function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(J,"/users/me"),{method:"GET",headers:Object(q.a)(Object(q.a)({},U),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){e&&(Z(!0),ne(e.data)),_e.push("/")})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){de()}),[]),o.a.createElement(f.Provider,{value:M},o.a.createElement("div",{className:"project"},o.a.createElement("div",{className:"page"},o.a.createElement(_,{email:ae.email,onLogOut:function(){localStorage.removeItem("jwt"),Z(!1),ne({email:"",_id:""})}}),o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/sign-in"},o.a.createElement(I,{onLogin:function(e,t){return function(e,t){return fetch("".concat(J,"/signin"),{method:"POST",headers:U,body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e.token?(localStorage.setItem("jwt",e.token),e):void 0}))}(e,t).then((function(e){e?de():(ue(!1),pe("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. \ud83d\ude14"),L(!0))}))}})),o.a.createElement(m.b,{exact:!0,path:"/sign-up"},o.a.createElement(R,{onRegister:function(e,t){return function(e,t){return fetch("".concat(J,"/signup"),{method:"POST",headers:U,body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e),e}))}(e,t).then((function(e){e.data?(ue(!0),pe("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c! \ud83d\udd25"),L(!0)):(ue(!1),pe("".concat(e.error," \ud83d\ude14")),L(!0))})).catch((function(e){return console.log(e)}))},loggedIn:Y})),o.a.createElement(m.b,null,o.a.createElement(P,{onCardClick:function(e){B(e)},onEditProfile:function(){r(!0)},onAddPlace:function(){g(!0)},onEditAvatar:function(){p(!0)},cards:$,onCardLike:function(e){e.likes.some((function(e){return e._id===M._id}))?D.dislikeCard(e._id).then((function(t){var a=$.map((function(a){return a._id===e._id?t:a}));K(a)})):D.likeCard(e._id).then((function(t){var a=$.map((function(a){return a._id===e._id?t:a}));K(a)}))},onCardDelete:function(e){D.removeCard(e._id).then((function(){K($.filter((function(t){return e._id!==t._id})))}))},component:v,exact:!0,path:"/",loggedIn:Y})),o.a.createElement(m.b,null,Y?o.a.createElement(m.a,{to:"./"}):o.a.createElement(m.a,{to:"./sign-in"}))),o.a.createElement(E,null),o.a.createElement(j,{isOpen:a,onClose:me,onUpdateUser:function(e){D.editInfo(e).then((function(e){return W(e)})).then((function(){return me()}))}}),o.a.createElement(w,{isOpen:b,onClose:me,onAddPlace:function(e){D.sendElement(e).then((function(e){return K([].concat(Object(u.a)($),[e]))})).then((function(){return me()}))}}),o.a.createElement(S,{isOpen:s,onClose:me,onUpdateAvatar:function(e){D.changeAvatar(e).then((function(e){return W(e)})).then((function(){return me()}))}}),o.a.createElement(k,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",onClose:me},o.a.createElement("button",{type:"button",className:"popup__submit-button popup-confirm__button"},"\u0414\u0430")),o.a.createElement(x,{card:z,onClose:me}),o.a.createElement(C,{isOpen:O,onClose:me,toolTipSuccess:ce,message:se}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,null,o.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9f578a4c.chunk.js.map