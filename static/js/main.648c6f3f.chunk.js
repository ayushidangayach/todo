(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),c=a.n(n),l=a(4),r=a.n(l),i=(a(14),a(2)),d=a(5),o=a(6),u=a(8),j=a(7),m=(a(15),function(t){var e=t.task,a=t.taskStatusHandler,n=t.index,c=t.deleteTaskHandler,l=t.taskChangeHandler,r="Completed"===e.status?"completed":"";return Object(s.jsxs)("li",{className:r,children:[Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"checkbox",type:"checkbox",onChange:function(){return a(n)},checked:"Completed"===e.status?"checked":""})," ",Object(s.jsx)("label",{className:"form-check-label",children:"Active"===e.status?Object(s.jsx)("input",{type:"text",value:e.taskName,className:"form-control task-edit",onChange:function(t){return l(n,t.target.value)}}):e.taskName})]}),Object(s.jsx)("button",{className:"remove btn btn-danger btn-sm float-right",onClick:function(){return c(e.id)},children:"X"})]})});var h=function(t){var e=t.activeStatus===t.name?"active":"";return Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)("button",{className:"btn-sm btn-default btn ".concat(e),onClick:function(){return t.filterHandler(t.name)},children:t.name})})},b=function(t){Object(u.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={tasks:[],status:["Total","Active","Completed"],newTask:"",activeStatus:"Total"},t.filterHandler=function(e){t.setState({activeStatus:e})},t.addTaskHandler=function(e){var a;(e.preventDefault(),t.state.newTask)?(a=[].concat(Object(i.a)(t.state.tasks),[{id:t.state.tasks.length,taskName:t.state.newTask,status:"Active"}]),t.setState({tasks:a})):alert("Please fill the task field first!");t.setState({newTask:""})},t.taskInputHandler=function(e){t.setState({newTask:e})},t.taskStatusHandler=function(e){var a;(a=Object(i.a)(t.state.tasks))[e].status="Active"===a[e].status?"Completed":"Active",t.setState({tasks:a})},t.deleteTaskHandler=function(e){var a;a=(a=Object(i.a)(t.state.tasks)).filter((function(t){return t.id!==e})),t.setState({tasks:a})},t.taskChangeHandler=function(e,a){var s;(s=Object(i.a)(t.state.tasks))[e].taskName=a,t.setState({tasks:s})},t}return Object(o.a)(a,[{key:"render",value:function(){var t,e=this;t=this.state.status.map((function(t,a){return Object(s.jsx)(h,{name:t,filterHandler:e.filterHandler,activeStatus:e.state.activeStatus},a)}));var a=this.state.tasks;return"Total"!==this.state.activeStatus&&(a=a.filter((function(t){return t.status===e.state.activeStatus}))),a=a.map((function(t,a){return Object(s.jsx)(m,{task:t,taskStatusHandler:e.taskStatusHandler,index:a,deleteTaskHandler:e.deleteTaskHandler,taskChangeHandler:e.taskChangeHandler},a)})),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"page-content page-container",id:"page-content",children:Object(s.jsx)("div",{className:"padding",children:Object(s.jsxs)("div",{className:"row container d-flex justify-content-center",children:[Object(s.jsxs)("div",{className:"col-md-2",children:[this.state.tasks.length," Tasks"]}),Object(s.jsx)("div",{className:"col-md-4"}),t,Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsx)("div",{className:"card px-3",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{className:"card-title",children:"Awesome Todo list"}),Object(s.jsx)("div",{className:"add-items d-flex",children:Object(s.jsx)("form",{onSubmit:this.addTaskHandler,className:"col-md-12",children:Object(s.jsxs)("div",{class:"form-row",children:[Object(s.jsx)("div",{class:"form-group col-md-8",children:Object(s.jsx)("input",{type:"text",className:"form-control todo-list-input",placeholder:"What do you need to do today?",value:this.state.newTask,onChange:function(t){return e.taskInputHandler(t.target.value)}})}),Object(s.jsx)("div",{class:"form-group col-md-4",children:Object(s.jsx)("button",{className:"add btn btn-primary font-weight-bold todo-list-add-btn",children:"Add"})})]})})}),Object(s.jsx)("div",{className:"list-wrapper",children:Object(s.jsx)("ul",{className:"d-flex flex-column-reverse todo-list",children:this.state.tasks.length?a:Object(s.jsx)("p",{className:"text-center",children:"Is it a lazy day, or ya planning to do something?"})})})]})})})]})})})})}}]),a}(n.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,l=e.getTTFB;a(t),s(t),n(t),c(t),l(t)}))};a(16);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.648c6f3f.chunk.js.map