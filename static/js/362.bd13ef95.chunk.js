"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[362],{1362:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(4420),s=t(9439),r=t(2791),o=t(5705),i=t(8007),c=t(2564),l=(t(5462),t(6154)),u=t(3661),d=t(7445),m="FormPhonebook_form__yE3-g",h="FormPhonebook_label__actQR",x="FormPhonebook_input__iqqEB",_="FormPhonebook_btn__5b-dH",p="FormPhonebook_error__7SaV1",b=t(184),f=function(){var e=(0,u.Tn)(),n=(0,s.Z)(e,2),t=n[0],a=n[1],f=a.isLoading,g=a.isSuccess,j=a.isError,v=(0,u.Jx)().data;(0,r.useEffect)((function(){g&&(0,d.fI)()}),[g]),(0,r.useEffect)((function(){j&&(0,d.I3)()}),[j]);var C=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(20,"Too Long!").required("Name is required field"),phone:i.Rx().typeError("That does not look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").required("A phone number is required")});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.Ix,{autoClose:1e3,position:"top-center"}),(0,b.jsx)(o.J9,{initialValues:{name:"",phone:""},validationSchema:C,onSubmit:function(e,n){var a=n.resetForm,s=e.name,r=e.phone;v.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts!")):t({name:s,number:r})&&a()},children:(0,b.jsxs)(o.l0,{className:m,children:[(0,b.jsxs)("label",{className:h,children:["Name",(0,b.jsx)(o.gN,{className:x,type:"text",name:"name",placeholder:"Name"}),(0,b.jsx)(o.Bc,{className:p,name:"name",component:"div"})]}),(0,b.jsxs)("label",{className:h,children:["Number",(0,b.jsx)(o.gN,{className:x,type:"tel",name:"phone",placeholder:"phone"}),(0,b.jsx)(o.Bc,{className:p,name:"phone",component:"div"})]}),(0,b.jsxs)("button",{className:_,disabled:f,type:"submit",children:[f&&(0,b.jsx)(l.s5,{height:"20",width:"20"}),"Add contact"]})]})})]})},g=t(3628),j=t(6895),v=t(6351),C="Filter_label__vEd1E",N="Filter_input__N7T3z",w=function(){var e=(0,a.I0)(),n=(0,a.v9)(v.zK);return(0,b.jsxs)("label",{className:C,children:["Find contacts by name",(0,b.jsx)(g.DebounceInput,{minLength:1,debounceTimeout:300,className:N,type:"text",value:n,placeholder:"Search",onChange:function(n){var t;t=n.target.value,e((0,j.T)(t))}})]})},y="ContactList_contactList__UFVCg",k="ContactList_default__obqAl",S=t(1413),F=t(4925),L="button-styled_btn__eaOIc",A=["children","disabled","isLoading"],E=function(e){var n=e.children,t=e.disabled,a=e.isLoading,s=(0,F.Z)(e,A);return(0,b.jsxs)("button",(0,S.Z)((0,S.Z)({className:L,disabled:t},s),{},{type:"submit",children:[a&&(0,b.jsx)(l.s5,{height:"20",width:"20"}),n]}))},I="ContactItem_contactItem__aUSMv",P=function(e){var n=e.id,t=e.name,a=e.number,o=(0,r.useState)(!1),i=(0,s.Z)(o,2),d=i[0],m=i[1],h=(0,r.useState)(t),x=(0,s.Z)(h,2),_=x[0],p=x[1],f=(0,r.useState)(a),g=(0,s.Z)(f,2),j=g[0],v=g[1],C=(0,u.Nt)(),N=(0,s.Z)(C,2),w=N[0],y=N[1],k=y.isLoading,S=y.isSuccess,F=(0,u.wv)(),L=(0,s.Z)(F,2),A=L[0],P=L[1],Z=P.isLoading,T=P.isSuccess;(0,r.useEffect)((function(){S&&c.Am.success("Contact has been deleted!"),T&&(m(!1),c.Am.success("Contact has been updated!"))}),[S,T]);var q=function(e){"name"===e.target.name?p(e.target.value):"number"===e.target.name&&v(e.target.value)};return(0,b.jsx)("li",{className:I,children:d?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("input",{type:"text",name:"name",value:_,onChange:q}),(0,b.jsx)("input",{type:"text",name:"number",value:j,onChange:q}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(E,{onClick:function(){A({id:n,name:_,number:j})},disabled:Z,children:[Z&&(0,b.jsx)(l.s5,{height:"20",width:"20"}),"Save"]}),(0,b.jsx)(E,{onClick:function(){m(!1),p(t),v(a)},children:"Cancel"})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("span",{children:[t,":"]})," ",(0,b.jsx)("span",{children:a}),(0,b.jsxs)("div",{children:[(0,b.jsx)(E,{onClick:function(){m(!0)},children:"Edit"}),(0,b.jsxs)(E,{onClick:function(){window.confirm("Are you sure you want to delete this contact?")&&w(n)},disabled:k,children:[k&&(0,b.jsx)(l.s5,{height:"20",width:"20"}),"Delete"]})]})]})})},Z=function(){var e=(0,a.v9)(v.zK),n=(0,u.Jx)(),t=n.data,s=n.isLoading,r=n.error;return(0,b.jsxs)(b.Fragment,{children:[s&&(0,b.jsx)("p",{className:k,children:"...loading"}),r&&(0,b.jsx)("p",{className:k,children:"Sorry, something went wrong, please try again later!"}),t&&0===t.length&&(0,b.jsx)("p",{children:"There is no contact!"}),(0,b.jsx)("ul",{className:y,children:t&&(0,v.F4)(t,e).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,b.jsx)(P,{name:t,number:a,id:n},n)}))})]})},T="ContactsPage_wrapper__HYOyv",q="ContactsPage_titlePhone__ODE41",J="ContactsPage_titleCont__JLcCo",z=function(){return(0,a.v9)(v.M7)&&(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)("h1",{className:q,children:"Phonebook"}),(0,b.jsx)(f,{}),(0,b.jsx)("h2",{className:J,children:"Contacts"}),(0,b.jsx)(w,{}),(0,b.jsx)(Z,{})]})}},7445:function(e,n,t){t.d(n,{G$:function(){return r},I3:function(){return o},fI:function(){return i},oo:function(){return s}});var a=t(2564),s=function(){return a.Am.error("Sorry, wrong email or password!")},r=function(){return a.Am.error("Sorry, incorrect data entered!")},o=function(){return a.Am.error("Sorry, something went wrong, please try again later!")},i=function(){return a.Am.success("Contact added!")}}}]);
//# sourceMappingURL=362.bd13ef95.chunk.js.map