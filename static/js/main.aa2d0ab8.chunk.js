(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,a){e.exports={stat:"Statistics_stat__1JWEf",stat__title:"Statistics_stat__title__35mNL",stat__item:"Statistics_stat__item__2n3gb"}},,,,function(e,t,a){e.exports={app:"App_app__237EB",feedbackForm:"App_feedbackForm__2gAuf"}},function(e,t,a){e.exports={feedbackMenu:"Feedback-menu_feedbackMenu__19Y9l",feedbackBtn:"Feedback-menu_feedbackBtn__3LzA2"}},function(e,t,a){e.exports={section:"Section_section__3-4bA",section__title:"Section_section__title__2G6nK"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(8),i=a.n(n),r=(a(13),a(3)),o=a(5),l=a.n(o),b=a(6),d=a.n(b),_=a(0);var u=function(e){var t=e.feedbackBtnsOptions,a=e.onLeaveFeedback;return Object(_.jsx)("div",{className:d.a.feedbackMenu,children:t.map((function(e){return Object(_.jsxs)("button",{className:d.a.feedbackBtn,type:"button",value:e,onClick:a,children:[e," +1"]},e)}))})};var j=function(e){var t=e.message;return Object(_.jsx)("p",{children:t})},f=a(1),m=a.n(f);var p=function(e){var t=e.good,a=e.bad,c=e.neutral,s=e.total,n=e.positivePercentage;return Object(_.jsxs)("div",{className:m.a.stat,children:[Object(_.jsx)("h2",{className:m.a.stat__title,children:"Statistics:"}),0===s?Object(_.jsx)(j,{message:"No feedback given"}):Object(_.jsxs)("ul",{className:m.a.stat__list,children:[Object(_.jsxs)("li",{className:m.a.stat__item,children:["Good: ",t]}),Object(_.jsxs)("li",{className:m.a.stat__item,children:["Bad: ",a]}),Object(_.jsxs)("li",{className:m.a.stat__item,children:["Neutral: ",c]}),Object(_.jsxs)("li",{className:m.a.stat__item,children:["Total: ",s]}),Object(_.jsxs)("li",{className:m.a.stat__item,children:["Positive percentage: ",n,"%"]})]})]})},O=a(7),h=a.n(O);var v=function(e){var t=e.title,a=e.children;return Object(_.jsxs)("section",{className:h.a.section,children:[t&&Object(_.jsx)("h1",{className:h.a.section__title,children:t}),a]})};var x=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),o=i[0],b=i[1],d=Object(c.useState)(0),j=Object(r.a)(d,2),f=j[0],m=j[1];function O(){return a+o+f}return Object(_.jsx)("div",{className:l.a.app,children:Object(_.jsx)(v,{title:"Please leave feedback",children:Object(_.jsxs)("div",{className:l.a.feedbackForm,children:[Object(_.jsx)(u,{feedbackBtnsOptions:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.value){case"good":s((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:return}}}),Object(_.jsx)(p,{good:a,neutral:o,bad:f,total:O(),positivePercentage:function(){var e=O();return Math.round(a/e*100)||0}()})]})})})};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(x,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.aa2d0ab8.chunk.js.map