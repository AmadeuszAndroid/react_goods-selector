(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),a=c(5),l=c(7),d=c(6),r=c(1),i=c.n(r),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:b[8]},e.deleteGood=function(){e.setState({selectedGood:null})},e.addGood=function(t){e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[null===t?Object(u.jsx)("h1",{className:"title",children:"No goods selected"}):Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.deleteGood})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){var s=c===t;return Object(u.jsxs)("tr",{"data-cy":"Good",className:s?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":s?"RemoveButton":"AddButton",type:"button",className:"button ".concat(s?"is-info":""),onClick:s?e.deleteGood:function(){return e.addGood(c)},children:s?"-":"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e692bf3d.chunk.js.map