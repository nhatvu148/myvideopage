(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(13),r=a.n(c),l=a(3),s=a.n(l),m=a(14),u=a(2),o=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1];return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onFormSubmit(c)},className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:c,onChange:function(e){r(e.target.value)}}))))},d=a(15),v=a.n(d),p=(a(39),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(p,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},f=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),l=Object(u.a)(r,2),d=l[0],p=l[1];Object(n.useEffect)((function(){b("buildings")}),[]);var b=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://www.googleapis.com/youtube/v3/search",{params:{q:t,part:"snippet",maxResults:5,key:"AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg"}});case 2:a=e.sent,c(a.data.items),p(a.data.items[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"ui container"},i.a.createElement(o,{onFormSubmit:b}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(f,{video:d})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:function(e){p(e)},videos:a})))))};r.a.render(i.a.createElement(b,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.814d1878.chunk.js.map