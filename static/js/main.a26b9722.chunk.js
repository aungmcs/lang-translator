(this["webpackJsonplang-translator"]=this["webpackJsonplang-translator"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),l=(n(16),n(4),n(2)),c=n.n(l),s=n(6),u=n(7),d=n(1),h=n(10),p=n(9),m=n(8);function f(){return(f=Object(m.a)(c.a.mark((function e(){var t,n,a,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1"},redirect:"follow",referrerPolicy:"no-referrer",body:n});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={input:"",translation:"",flip:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(u.a)(n,[{key:"handleClick",value:function(){var e=this;(function(){return f.apply(this,arguments)})("https://cors-anywhere.herokuapp.com/translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&","sl=en&tl=de&q="+this.state.input).then((function(t){e.setState({translation:t.sentences[0].trans,flip:!e.state.flip,input:""})}))}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e={},t={};return this.state.flip&&(e={animation:"swap 1s linear"},t={zIndex:"1"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"English to German Translator"),r.a.createElement("div",{className:"stack"},r.a.createElement("textarea",{name:"input",id:"inputText",onChange:this.handleChange,style:e}),r.a.createElement("div",{className:"result",style:t},this.state.translation)),r.a.createElement("button",{className:"btn",onClick:this.handleClick},"Translate"))}}]),n}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.a26b9722.chunk.js.map