(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),l=a(4),i=a(3),c=a(5),o=a(0),r=a.n(o),u=a(7),m=a.n(u),d=(a(14),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={deleteBtnFlag:"delete-off"},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({noMouse:window.innerWidth<=1024,deleteBtnFlag:window.innerWidth<=1024?"delete-on":"delete-off"})}},{key:"deleteOn",value:function(){this.state.noMouse||this.setState({deleteBtnFlag:"delete-on",liFlag:"highlight-on"})}},{key:"deleteOff",value:function(){this.state.noMouse||this.setState({deleteBtnFlag:"delete-off",liFlag:"highlight-off"})}},{key:"render",value:function(){var e=this;return r.a.createElement("li",{key:this.props.value,className:this.props.className+" "+this.state.liFlag,onMouseEnter:function(){return e.deleteOn()},onMouseOver:function(){return e.deleteOn()},onMouseLeave:function(){return e.deleteOff()}},r.a.createElement("div",{className:"col-9 col-md-10"},this.props.value),r.a.createElement("button",{className:"col-2 col-md-1 btn btn-danger "+this.state.deleteBtnFlag,onClick:function(){return e.props.onClick()}},r.a.createElement("i",{className:"fa fa-remove"})))}}]),t}(r.a.Component)),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={listItems:["apples","oranges","cheese"]},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"renderListItem",value:function(e){var t=this,a=this.state.listItems;return r.a.createElement(d,{value:a[e],key:a[e],className:"list-item row",onClick:function(){return t.removeItem(e)}})}},{key:"removeItem",value:function(e){var t=this.state.listItems,a=t.slice();0===e?a.shift():e===t.length-1?a.pop():a=t.slice(0,e).concat(t.slice(e+1,t.length)),this.setState({listItems:a})}},{key:"addItem",value:function(){var e=this.state.listItems,t=document.getElementById("new-item");t.value&&""!==t.value&&-1===e.indexOf(t.value)&&(this.setState({listItems:e.concat([t.value])}),t.value="")}},{key:"handleEnter",value:function(e){"Enter"===e.key&&this.addItem()}},{key:"render",value:function(){for(var e=this,t=this.state.listItems,a=[],n=0;n<t.length;n++)a.push(this.renderListItem(n));return r.a.createElement("div",{className:"row app"},r.a.createElement("div",{className:"col-12 text-center display-4",id:"title"},"react-list"),r.a.createElement("div",{className:"card lead col-11 col-md-8 col-lg-6 col-md-offset-2",id:"list-card"},r.a.createElement("ul",{id:"list"},a,r.a.createElement("li",{className:"row list-item list-add"},r.a.createElement("input",{className:"col-9 col-md-10 lead",id:"new-item",onKeyPress:function(t){return e.handleEnter(t)},placeholder:"enter a new item here..."}),r.a.createElement("button",{className:"btn btn-success col-2 col-md-1",onClick:function(){return e.addItem()}},r.a.createElement("i",{className:"fa fa-plus"}))))),r.a.createElement("div",{className:"col-12 text-center mx-auto signature"},"made by ",r.a.createElement("a",{className:"name",href:"https://github.com/kokkonisd"},"kokkonisd")," using ",r.a.createElement("a",{className:"source",href:"https://reactjs.org/"},"react.js")))}}]),t}(r.a.Component);m.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.5457287f.chunk.js.map