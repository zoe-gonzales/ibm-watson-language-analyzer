(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports=t(36)},36:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(3),s=t.n(c),r=function(e){return n.a.createElement("h3",null,e.children)},o=function(e){var a=e.type,t=e.text,l=e.results;return n.a.createElement("div",null,n.a.createElement(r,null,"Language Analyzer"),l?"Emotion"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},"Text"),n.a.createElement("div",{className:"col s8"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},a,"s"),n.a.createElement("div",{className:"col s4"},a),n.a.createElement("div",{className:"col s4"},"Score")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},"Anger",n.a.createElement("span",{role:"img","aria-label":"angry-face"},"\ud83d\ude20")),n.a.createElement("div",{className:"col s4"},l.Anger)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},"Disgust",n.a.createElement("span",{role:"img","aria-label":"disgusted-face"},"\ud83d\ude16")),n.a.createElement("div",{className:"col s4"},l.Disgust)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},"Fear",n.a.createElement("span",{role:"img","aria-label":"fearful-face"},"\ud83d\ude28")),n.a.createElement("div",{className:"col s4"},l.Fear)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},"Joy",n.a.createElement("span",{role:"img","aria-label":"joyful-face"},"\ud83d\ude04")),n.a.createElement("div",{className:"col s4"},l.Joy)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},"Sadness",n.a.createElement("span",{role:"img","aria-label":"sad-face"},"\ud83d\ude22")),n.a.createElement("div",{className:"col s4"},l.Sadness))):"Keyword"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3"},"Text"),n.a.createElement("div",{className:"col s9"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3"},a,"s"),n.a.createElement("div",{className:"col s3"},a),n.a.createElement("div",{className:"col s3"},"Relevance"),n.a.createElement("div",{className:"col s3"},"Count")),l.map(function(e){return n.a.createElement("div",{className:"row",key:e.id},n.a.createElement("div",{className:"col s3"}),n.a.createElement("div",{className:"col s3"},e.Text),n.a.createElement("div",{className:"col s3"},e.Relevance),n.a.createElement("div",{className:"col s3"},e.Count))})):"Category"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},"Text"),n.a.createElement("div",{className:"col s8"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},"Categories"),n.a.createElement("div",{className:"col s4"},a),n.a.createElement("div",{className:"col s4"},"Score")),l.map(function(e){return n.a.createElement("div",{className:"row",key:e.id},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4"},e.Label.substr(1)),n.a.createElement("div",{className:"col s4"},e.Score))})):void 0:n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},"Sorry, no results were found for your search. Please try again!")))},m=function(e){return e.dirs.map(function(e){return n.a.createElement("h5",{key:e.id},e.text)})},i=function(e){var a=e.name,t=e.placeholder,l=e.onChange;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:a},t),n.a.createElement("textarea",{id:a,className:"materialize-textarea",onChange:l}))},d=function(e){var a=e.name,t=e.options,l=e.onChange;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:a},"Select method"),n.a.createElement("select",{id:a,onChange:l,className:"browser-default"},t.map(function(e){return n.a.createElement("option",{value:e.name,key:e.id},e.name)})))},u=function(e){var a=e.onClick;return n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:a},n.a.createElement("i",{className:"material-icons right"},"send"))},E=t(2),v=function(e){var a=Object(l.useState)(""),t=Object(E.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)("Keywords"),r=Object(E.a)(s,2),o=r[0],m=r[1];return{text:n,select:o,handleInputChange:function(e){e.persist();var a=e.target.value;c(a)},handleSelectChange:function(e){e.persist();var a=e.target.value;m(a)},handleFormSubmit:function(a){a&&a.preventDefault(),e(),c("")}}},N=t(4),f=t.n(N),h=function(e){return f.a.post("http://localhost:1333/api/keywords",e)},p=function(e){return f.a.post("http://localhost:1333/api/categories",e)},g=function(e){return f.a.post("http://localhost:1333/api/emotions",e)},w=function(){var e=v(function(){"Keywords"===t?h(a).then(function(e){var t={};t.results=e.data.Results;var l=1;t.results.forEach(function(e){e.id=l,l++}),t.type="Keyword",t.text=a,s.a.render(n.a.createElement(b,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)}):"Categories"===t?p(a).then(function(e){var t={};t.results=e.data.Results;var l=1;t.results.forEach(function(e){e.id=l,l++}),t.type="Category",t.text=a,s.a.render(n.a.createElement(b,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)}):"Emotions"===t&&g(a).then(function(e){var t={};t.results=e.data.Results,t.type="Emotion",t.text=a,s.a.render(n.a.createElement(b,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)})}),a=e.text,t=e.select,l=e.handleInputChange,c=e.handleSelectChange,r=e.handleFormSubmit;return n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement(i,{name:"text",placeholder:"Enter text to analyze",value:a,onChange:l})),n.a.createElement("div",{className:"row"},n.a.createElement(d,{name:"select",options:[{name:"Keywords",id:1},{name:"Categories",id:2},{name:"Emotions",id:3}],value:t,onChange:c}),n.a.createElement(u,{onClick:r})))},y=function(e){var a=Object(l.useState)([]),t=Object(E.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)(""),r=Object(E.a)(s,2),o=r[0],m=r[1],i=Object(l.useState)(""),d=Object(E.a)(i,2),u=d[0],v=d[1];return Object(l.useEffect)(function(){e!=={}&&(c(e.results),m(e.type),v(e.text))},[]),{results:n,type:o,text:u}},b=function(e){var a=e.apiResults,t=y(a),l=t.results,c=t.type,s=t.text;return n.a.createElement("div",{className:"container"},l?n.a.createElement(o,{type:c,text:s,results:l}):n.a.createElement("div",null,n.a.createElement(r,null,"Language Analyzer"),n.a.createElement(m,{dirs:[{id:1,text:"Enter text to analyze"},{id:2,text:"Select method"},{id:3,text:"Get results!"}]}),n.a.createElement(w,null)))};var x=function(){return n.a.createElement(b,{apiResults:{}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.23f7094f.chunk.js.map