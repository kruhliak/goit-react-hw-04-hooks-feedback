(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var c,r=t(1),o=t.n(r),a=t(6),s=t.n(a),i=(t(13),t(4)),d=t(2),u=t(3),b=u.a.div(c||(c=Object(d.a)([""]))),l=t(0);var j,f=function(e){var n=e.good,t=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(l.jsxs)(b,{children:[Object(l.jsxs)("p",{children:["Good: ",n]}),Object(l.jsxs)("p",{children:["Neutral: ",t]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",r()]}),Object(l.jsxs)("p",{children:["Positive feedback: ",n&&o(),"%"]})]})},h=u.a.button(j||(j=Object(d.a)(["\n  border: 1px solid #000;\n  border-radius: 4px;\n\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n  :last-child {\n    background-color: #f58484;\n    &:hover,\n    :focus {\n      background-color: #eb4c4c;\n    }\n  }\n  :first-of-type {\n    background-color: #a4eea4;\n    &:hover,\n    :focus {\n      background-color: #5af05a;\n    }\n  }\n  :not(:last-child, :first-of-type) {\n    background-color: #f0f092;\n    &:hover,\n    :focus {\n      background-color: #f3f34b;\n    }\n  }\n"])));var O=function(e){var n=e.options,t=e.onLeaveFeedback;return Object(l.jsx)("div",{children:n.map((function(e){return Object(l.jsx)(h,{type:"button",name:e,onClick:t,children:e.toUpperCase()},e)}))})};var p,x=function(e){var n=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:n})})},v=u.a.section(p||(p=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var g=function(e){var n=e.title,t=e.children;return Object(l.jsxs)(v,{children:[Object(l.jsx)("p",{children:n}),t]})};function k(){var e=Object(r.useState)(0),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(0),a=Object(i.a)(o,2),s=a[0],d=a[1],u=Object(r.useState)(0),b=Object(i.a)(u,2),j=b[0],h=b[1],p=function(){return t+s+j},v=Object.keys({good:t,neutral:s,bad:j});return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(g,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:v,onLeaveFeedback:function(e){switch(e.target.name){case"good":return c((function(e){return e+1}));case"neutral":return d((function(e){return e+1}));case"bad":return h((function(e){return e+1}));default:console.log("default")}}})}),Object(l.jsx)(g,{title:"Statistics",children:p()?Object(l.jsx)(f,{good:t,neutral:s,bad:j,total:p,positivePercentage:function(){return Math.round(100*t/(t+s+j))}}):Object(l.jsx)(x,{message:"No feedback given"})})]})}s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a746e171.chunk.js.map