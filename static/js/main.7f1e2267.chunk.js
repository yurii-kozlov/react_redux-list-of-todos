(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(7),r=c(17),l=c(6),o=c(14),i=c(15),d=c(4),j=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return Object(d.a)({},t.payload);default:return e}},h={query:"",status:"all"},m=function(e){return{type:"filter/SET_QUERY",payload:e}},O=function(e){return{type:"filter/SET_STATUS",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(d.a)(Object(d.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.payload});default:return e}},x={addTodos:function(e){return{type:"todos/ADD",payload:e}}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:b,filter:f,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),N=c(16),g=c(3),T=c(12),E=c.n(T),S=c(0),k=(c(26),c(27),c(5)),w=c.n(k),C=n.b,_=n.c,A=c(1),D=function(){var e=_((function(e){return e.currentTodo})),t=_((function(e){return e.todos})),c=_((function(e){return e.filter})),a=c.status,s=c.query,n=t.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())})).filter((function(e){switch(a){case"active":return!e.completed;case"completed":return e.completed;default:return e}})),r=C();return Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:n.map((function(t){return Object(A.jsxs)("tr",{"data-cy":"todo",className:w()(e&&e.id===t.id&&"has-background-info-light"),children:[Object(A.jsx)("td",{className:"is-vcentered",children:t.id}),Object(A.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:w()(t.completed?"has-text-success":"has-text-danger"),children:t.title})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){return r(j(e))}(t)},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:w()((null===e||void 0===e?void 0:e.id)===t.id?"far fa-eye-slash":"far fa-eye")})})})})]},t.id)}))})]})},R=function(){var e=_((function(e){return e.filter})),t=e.query,c=e.status,a=C();return Object(A.jsxs)("form",{className:"field has-addons",children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){a(O(e.target.value))},children:[Object(A.jsx)("option",{value:"all",children:"All"}),Object(A.jsx)("option",{value:"active",children:"Active"}),Object(A.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){a(m(e.target.value))}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.length>0&&Object(A.jsx)("button",{onClick:function(){a(m(""))},"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},q=(c(29),function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var U=function(){var e=_((function(e){return e.currentTodo})),t=C(),c=Object(S.useState)(null),a=Object(g.a)(c,2),s=a[0],n=a[1];return Object(S.useEffect)((function(){var t;(t=(null===e||void 0===e?void 0:e.userId)||0,L("/users/".concat(t))).then(n)}),[]),Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),e&&s?Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(e.id)}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){t(u())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:e.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(A.jsx)("strong",{className:w()(e.completed?"has-text-success":"has-text-danger"),children:e.completed?"Done":"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]}):Object(A.jsx)(q,{})]})},B=function(){var e=Object(S.useState)(!0),t=Object(g.a)(e,2),c=t[0],a=t[1],s=_((function(e){return e.currentTodo})),n=C();return Object(S.useEffect)((function(){Object(N.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("/todos");case 2:t=e.sent,n(x.addTodos(t)),a(!1);case 5:case"end":return e.stop()}}),e)})))()}),[a,x.addTodos]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(R,{})}),Object(A.jsx)("div",{className:"block",children:c?Object(A.jsx)(q,{}):Object(A.jsx)(D,{})})]})})}),s&&Object(A.jsx)(U,{})]})},I=function(){return Object(A.jsx)(n.a,{store:y,children:Object(A.jsx)(r.a,{children:Object(A.jsx)(B,{})})})};s.a.render(Object(A.jsx)(I,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7f1e2267.chunk.js.map