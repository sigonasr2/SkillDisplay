(this.webpackJsonpskilldisplay=this.webpackJsonpskilldisplay||[]).push([[0],[,,,,,,,function(n,t,e){n.exports=e(16)},,,,,function(n,t,e){},,function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(2),c=e.n(r),i=e(1),s=e(4);function u(n){return/HOST_PORT=(wss?:\/\/.+)/.exec(window.location.search)?function n(t){var e=new URLSearchParams(window.location.search),a="".concat(e.get("HOST_PORT"),"BeforeLogLineRead")||!1,o=new WebSocket(a);return o.onerror=function(){return o.close()},o.onclose=function(){return setTimeout((function(){n(t)}),1e3)},o.onmessage=function(n,e){if("."===n.data)return o.send(".");var a=JSON.parse(n.data);return"SendCharName"===a.msgtype?t(a.msg):"Chat"===a.msgtype?t.apply(void 0,Object(s.a)(a.msg.split("|"))):void 0},function(){o.close()}}(n):function(n){var t=function(t){n.apply(void 0,Object(s.a)(t.detail))};return document.addEventListener("onLogLine",t),function(){document.removeEventListener("onLogLine",t)}}(n)}e(12);var l=e(3),d=e.n(l),f=e(6),m=(e(14),new Set([15997,15998,15999,16e3,16001,16002,16003,16004,16191,16192,16193,16194,16195,16196,7418,16484,16485,16486,2259,18805,2261,18806,2263,18807,2265,18873,18874,18875,2267,18877,2266,18876,2268,18878,16492,16471,2270,18880,2269,18879,2271,18881,2272])),v=new Set([3559,116,114]);function p(n){var t=n.actionId,e=n.additionalClasses,a=o.a.useState(),r=Object(i.a)(a,2),c=r[0],s=r[1];return o.a.useEffect((function(){var n=!0;return Object(f.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://xivapi.com/Action/".concat(t),{mode:"cors"});case 2:return e.next=4,e.sent.json();case 4:a=e.sent,n&&s(a);case 6:case"end":return e.stop()}}),e)})))(),function(){n=!1}}),[t]),void 0!==c&&c.Icon?o.a.createElement("img",{className:m.has(t)||!v.has(t)&&4!==c.ActionCategory.ID?"gcd ".concat(e):"ogcd ".concat(e),src:"https://xivapi.com/".concat(c.Icon),alt:c.Name||""}):null}e(15);function h(n){var t=n.encounterId,e=n.name,a=n.actionList,r=o.a.useState(!1),c=Object(i.a)(r,2),s=c[0],u=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:s?"rotation-button expanded":"rotation-button",onClick:function(){u((function(n){return!n}))}},0===t?"Current Rotation":e),o.a.createElement(g,{expanded:s,actionList:a}))}function g(n){var t=n.expanded,e=n.actionList;return t?o.a.createElement("div",{className:"rotation-list"},e.map((function(n,t){return o.a.createElement(p,{key:t,actionId:n,additionalClasses:"action-rotation"})}))):null}var w=new Set(["00","01","02","21","22","33"]);c.a.render(o.a.createElement((function(){var n=o.a.useState([]),t=Object(i.a)(n,2),e=t[0],a=t[1],r=o.a.useState([]),s=Object(i.a)(r,2),l=s[0],d=s[1];return o.a.useEffect((function(){var n,t="",e=-1,o="Unknown",r=1,i=u((function(){for(var i=function(){d((function(n){return n[0]&&n[0].rotation&&n[0].rotation.length<=0&&n.shift(),n.unshift({name:o,rotation:[]}),n.slice(0,3)}))},s=arguments.length,u=new Array(s),l=0;l<s;l++)u[l]=arguments[l];if(1===u.length&&u[0].charID)return n=u[0].charID,void i();var f=u[0],m=u[1],v=u[2],p=u[3],h=u[4];if(w.has(f)){switch(f){case"00":return void("0038"===v&&"end"===h&&i());case"01":return void(o=p);case"02":return n=parseInt(v,16),void i();case"33":return void("40000012"!==p&&"40000010"!==p||i())}if(void 0!==n&&parseInt(v,16)===n){var g=parseInt(h,16);if(!(g<=8||m===t&&g===e)){Date.now()-Date.parse(t)>12e4&&i(),t=m,e=g;var E=r%256+1;r=E,c.a.unstable_batchedUpdates((function(){a((function(n){return n.concat({action:g,key:E})})),d((function(n){return n[0]||(n[0]={name:o,rotation:[]}),n[0].rotation.push(g),n}))})),setTimeout((function(){a((function(n){return n.slice(1)}))}),1e4)}}}}));return function(){i()}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"actions"},e.map((function(n){var t=n.action,e=n.key;return o.a.createElement(p,{key:e,actionId:t,additionalClasses:"action-move"})}))),l.map((function(n,t){return o.a.createElement(h,{key:t,encounterId:t,name:n.name,actionList:n.rotation})}))))}),null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.53d33ba9.chunk.js.map