(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports=t(37)},19:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(3),s=t.n(c),r=function(e){return n.a.createElement("h3",null,e.children)},m=(t(19),function(e){var a=e.type,t=e.text,l=e.results;return n.a.createElement("div",null,n.a.createElement(r,null,"Language Analyzer"),l?"Emotion"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 txt"},"Text"),n.a.createElement("div",{className:"col s8 txt"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 txt"},a,"s"),n.a.createElement("div",{className:"col s4 txt"},a),n.a.createElement("div",{className:"col s4 txt"},"Score")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},"Anger",n.a.createElement("span",{role:"img","aria-label":"angry-face",className:"emoji"},"\ud83d\ude20")),n.a.createElement("div",{className:"col s4 txt"},l.Anger)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},"Disgust",n.a.createElement("span",{role:"img","aria-label":"disgusted-face",className:"emoji"},"\ud83d\ude16")),n.a.createElement("div",{className:"col s4 txt"},l.Disgust)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},"Fear",n.a.createElement("span",{role:"img","aria-label":"fearful-face",className:"emoji"},"\ud83d\ude28")),n.a.createElement("div",{className:"col s4 txt"},l.Fear)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},"Joy",n.a.createElement("span",{role:"img","aria-label":"joyful-face",className:"emoji"},"\ud83d\ude04")),n.a.createElement("div",{className:"col s4 txt"},l.Joy)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},"Sadness",n.a.createElement("span",{role:"img","aria-label":"sad-face",className:"emoji"},"\ud83d\ude22")),n.a.createElement("div",{className:"col s4 txt"},l.Sadness))):"Keyword"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 txt"},"Text"),n.a.createElement("div",{className:"col s9 txt"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s3 txt"},a,"s"),n.a.createElement("div",{className:"col s3 txt"},a),n.a.createElement("div",{className:"col s3 txt"},"Relevance"),n.a.createElement("div",{className:"col s3 txt"},"Count")),l.map(function(e){return n.a.createElement("div",{className:"row",key:e.id},n.a.createElement("div",{className:"col s3 txt"}),n.a.createElement("div",{className:"col s3 txt"},e.Text),n.a.createElement("div",{className:"col s3 txt"},e.Relevance),n.a.createElement("div",{className:"col s3 txt"},e.Count))})):"Category"===a?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 txt"},"Text"),n.a.createElement("div",{className:"col s8 txt"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 txt"},"Categories"),n.a.createElement("div",{className:"col s4 txt"},a),n.a.createElement("div",{className:"col s4 txt"},"Score")),l.map(function(e){return n.a.createElement("div",{className:"row",key:e.id},n.a.createElement("div",{className:"col s4"}),n.a.createElement("div",{className:"col s4 txt"},e.Label.substr(1)),n.a.createElement("div",{className:"col s4 txt"},e.Score))})):void 0:n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},"Sorry, no results were found for your search. Please try again!")))}),o=function(e){return e.dirs.map(function(e){return n.a.createElement("h5",{key:e.id},e.text)})},i=function(e){var a=e.name,t=e.placeholder,l=e.onChange;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:a},t),n.a.createElement("textarea",{id:a,className:"materialize-textarea",onChange:l}))},u=function(e){var a=e.name,t=e.options,l=e.onChange;return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:a},"Select method"),n.a.createElement("select",{id:a,onChange:l,className:"browser-default"},t.map(function(e){return n.a.createElement("option",{value:e.name,key:e.id},e.name)})))},d=function(e){var a=e.onClick;return n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:a,style:{marginTop:"1rem",backgroundColor:"#008080"}},n.a.createElement("i",{className:"material-icons"},"arrow_forward"))},E=t(2),v=function(e){var a=Object(l.useState)(""),t=Object(E.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)("Keywords"),r=Object(E.a)(s,2),m=r[0],o=r[1];return{text:n,select:m,handleInputChange:function(e){e.persist();var a=e.target.value;c(a)},handleSelectChange:function(e){e.persist();var a=e.target.value;o(a)},handleFormSubmit:function(a){a&&a.preventDefault(),e(),c("")}}},N=t(4),x=t.n(N),p=function(e){return x.a.post("https://languageanalyzer.herokuapp.com/api/keywords",e)},f=function(e){return x.a.post("https://languageanalyzer.herokuapp.com/api/categories",e)},g=function(e){return x.a.post("https://languageanalyzer.herokuapp.com/api/emotions",e)},h=function(){var e=v(function(){"Keywords"===t?p(a).then(function(e){var t={};t.results=e.data.Results;var l=1;t.results.forEach(function(e){e.id=l,l++}),t.type="Keyword",t.text=a,s.a.render(n.a.createElement(w,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)}):"Categories"===t?f(a).then(function(e){var t={};t.results=e.data.Results;var l=1;t.results.forEach(function(e){e.id=l,l++}),t.type="Category",t.text=a,s.a.render(n.a.createElement(w,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)}):"Emotions"===t&&g(a).then(function(e){var t={};t.results=e.data.Results,t.type="Emotion",t.text=a,s.a.render(n.a.createElement(w,{apiResults:t}),document.getElementById("root"))}).catch(function(e){console.log(e)})}),a=e.text,t=e.select,l=e.handleInputChange,c=e.handleSelectChange,r=e.handleFormSubmit;return n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement(i,{name:"text",placeholder:"Enter text to analyze",value:a,onChange:l})),n.a.createElement("div",{className:"row"},n.a.createElement(u,{name:"select",options:[{name:"Keywords",id:1},{name:"Categories",id:2},{name:"Emotions",id:3}],value:t,onChange:c}),n.a.createElement(d,{onClick:r})))},y=function(e){var a=Object(l.useState)([]),t=Object(E.a)(a,2),n=t[0],c=t[1],s=Object(l.useState)(""),r=Object(E.a)(s,2),m=r[0],o=r[1],i=Object(l.useState)(""),u=Object(E.a)(i,2),d=u[0],v=u[1];return Object(l.useEffect)(function(){e!=={}&&(c(e.results),o(e.type),v(e.text))},[]),{results:n,type:m,text:d}},w=function(e){var a=e.apiResults,t=y(a),l=t.results,c=t.type,s=t.text;return n.a.createElement("div",{className:"container"},l?n.a.createElement(m,{type:c,text:s,results:l}):n.a.createElement("div",null,n.a.createElement(r,null,"Language Analyzer"),n.a.createElement(o,{dirs:[{id:1,text:"Enter text to analyze"},{id:2,text:"Select method"},{id:3,text:"Get results!"}]}),n.a.createElement(h,null)))};var b=function(){return n.a.createElement(w,{apiResults:{}})};s.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.80523108.chunk.js.map