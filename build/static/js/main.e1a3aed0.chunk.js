(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),l=t.n(r),o=t(1),i=t(2),s=t(4),m=t(3),u=t(5),d=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={showContactInfo:!1},t.onDeleteClick=function(){t.props.deleteHandler()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.name,n=a.email,r=a.phone,l=this.state.showContactInfo;return c.a.createElement("div",{className:"card card-body mb-3 contact-card"},c.a.createElement("h4",null,t," ",c.a.createElement("i",{className:"fa "+(l?"fa-sort-up":"fa-sort-down"),onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})}}),c.a.createElement("i",{className:"fa fa-times float-right text-danger",onClick:this.onDeleteClick})),l?c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Email: ",n),c.a.createElement("li",{className:"list-group-item"},"Phone: ",r)):null)}}]),a}(n.Component),h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={contacts:[{id:1,name:"Ahmed Med",email:"ahmed@gmail.com",phone:"444-444-4444"},{id:2,name:"Med Abdullah",email:"med@gmail.com",phone:"333-333-3333"},{id:3,name:"Abdullah Amine",email:"abdullah@gmail.com",phone:"111-111-1111"}]},t.onDeleteClick=function(e){var a=t.state.contacts.filter(function(a){return a.id!==e});t.setState({contacts:a})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,this.state.contacts.map(function(a){return c.a.createElement(d,{deleteHandler:e.onDeleteClick.bind(e,a.id),key:a.id,contact:a})}))}}]),a}(n.Component),f=function(e){var a=e.branding;return c.a.createElement("nav",{className:"navbar navbar-expend-ms navbar-dark bg-danger py-0 mb-3"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"/",className:"navbar-brand"},a),c.a.createElement("div",null,c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home"))))))};f.defaultProps={branding:"My App"};var p=f,b=(t(14),t(15),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,{branding:"Contact Manager"}),c.a.createElement("div",{className:"container"},c.a.createElement(h,null)))}}]),a}(n.Component));l.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e1a3aed0.chunk.js.map