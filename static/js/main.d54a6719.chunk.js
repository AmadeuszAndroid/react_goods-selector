(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(4),o=c(5),d=c(7),r=c(6),l=c(1),i=c.n(l),u=(c(12),c(13),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(d.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:j[8]},e.deleteGood=function(){e.setState({selectedGood:""})},e.addGood=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"generateHeader",value:function(){var e=this.state.selectedGood;return""===e?Object(u.jsx)("h1",{className:"title",children:"No goods selected"}):Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.deleteGood})]})}},{key:"render",value:function(){var e=this,t=0;return Object(u.jsxs)("main",{className:"section container",children:[this.generateHeader(),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:j.map((function(c){return t+=1,c===e.state.selectedGood?Object(u.jsxs)("tr",{"data-cy":"Good",className:"has-background-success-light",children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.deleteGood,children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},t):Object(u.jsxs)("tr",{"data-cy":"Good",children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGood(c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},t)}))})})]})}}]),c}(i.a.Component);a.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d54a6719.chunk.js.map