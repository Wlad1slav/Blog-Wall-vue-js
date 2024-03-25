(function(){"use strict";var e={7166:function(e,t,n){var i=n(5130),s=n(6768);const o={id:"posts"};function a(e,t,n,i,a,l){const r=(0,s.g2)("post-write"),c=(0,s.g2)("post");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(r,{onPostCreate:l.postCreate},null,8,["onPostCreate"]),a.posts.length>0?((0,s.uX)(!0),(0,s.CE)(s.FK,{key:0},(0,s.pI)(l.getPosts,((e,t)=>((0,s.uX)(),(0,s.Wv)(c,{title:e.title,content:e.content,key:t,reactions:e.reactions,"date-time-create":e.date},null,8,["title","content","reactions","date-time-create"])))),128)):(0,s.Q3)("",!0)])}n(4114);var l=n(4232);const r={class:"date"};function c(e,t,n,i,o,a){const c=(0,s.g2)("post-menu"),u=(0,s.g2)("post-reaction");return(0,s.uX)(),(0,s.CE)("div",{class:"post",key:n.index},[(0,s.Lk)("p",r,(0,l.v_)(n.dateTimeCreate),1),(0,s.Lk)("h3",null,(0,l.v_)(n.title),1),(0,s.Lk)("p",null,(0,l.v_)(n.content),1),(0,s.bF)(c),(0,s.bF)(u,{likes:n.reactions?.amounts.likes,dislikes:n.reactions?.amounts.dislikes,views:n.reactions?.amounts.views,comments:n.reactions?.amounts.comments,"is-liked":n.reactions?.reacted.isLiked,"is-disliked":n.reactions?.reacted.isDisliked},null,8,["likes","dislikes","views","comments","is-liked","is-disliked"])])}const u=(0,s.Fv)('<a href="#"><li>Pin</li></a><a href="#"><li>Edit</li></a><a href="#"><li class="warn">Hide</li></a><a href="#"><li class="danger">Delete</li></a>',4),d=[u];function p(e,t,n,i,o,a){return(0,s.uX)(),(0,s.CE)("div",{class:"more",onPointerleave:t[1]||(t[1]=e=>o.activeMenu=!1)},[(0,s.Lk)("span",{class:"material-symbols-outlined hover-icon",onPointerenter:t[0]||(t[0]=e=>o.activeMenu=!0)}," more_horiz ",32),(0,s.Lk)("ul",{class:(0,l.C4)({hidden:!o.activeMenu})},d,2)],32)}var k={data(){return{activeMenu:!1}}},f=n(1241);const v=(0,f.A)(k,[["render",p]]);var h=v;const m={class:"post--reactions"},b={class:"reaction"},g=(0,s.Lk)("span",{class:"material-symbols-outlined"}," bar_chart ",-1),C={class:"material-symbols-outlined"},L={class:"reaction"},y=(0,s.Lk)("span",{class:"material-symbols-outlined"}," comment ",-1);function w(e,t,n,o,a,r){return(0,s.bo)(((0,s.uX)(),(0,s.CE)("div",m,[(0,s.bo)((0,s.Lk)("div",b,[g,(0,s.Lk)("p",null,(0,l.v_)(n.views),1)],512),[[i.aG,e.$configReactions.enable?.views]]),(0,s.bo)((0,s.Lk)("div",{class:(0,l.C4)(["reaction",[n.isLiked?"active":null,e.$configReactions.enable?.dislikes?null:"important clickable"]]),onClick:t[0]||(t[0]=()=>{n.isLiked?(n.isLiked=!1,n.likes--):(n.isLiked=!0,n.likes++),n.isDisliked&&(n.isDisliked=!1,n.dislikes--)})},[(0,s.Lk)("span",{class:(0,l.C4)(["material-symbols-outlined",n.isLiked?"yo-yo":null])},(0,l.v_)(e.$configReactions.enable?.dislikes?"thumb_up":"favorite"),3),(0,s.Lk)("p",null,(0,l.v_)(n.likes),1)],2),[[i.aG,e.$configReactions.enable?.likes]]),(0,s.bo)((0,s.Lk)("div",{class:(0,l.C4)(["reaction important",n.isLiked||n.isDisliked?"active":null])},[(0,s.Lk)("span",C,(0,l.v_)(n.isDisliked?"heart_broken":"favorite"),1),(0,s.Lk)("p",null,(0,l.v_)(n.likes-n.dislikes),1)],2),[[i.aG,e.$configReactions.enable?.likes&&e.$configReactions.enable?.dislikes]]),(0,s.bo)((0,s.Lk)("div",{class:(0,l.C4)(["reaction",[n.isDisliked?"active":null,e.$configReactions.enable?.likes?null:"important clickable"]]),onClick:t[1]||(t[1]=()=>{n.isDisliked?(n.isDisliked=!1,n.dislikes--):(n.isDisliked=!0,n.dislikes++),n.isLiked&&(n.isLiked=!1,n.likes--)})},[(0,s.Lk)("span",{class:(0,l.C4)(["material-symbols-outlined",n.isDisliked?"yo-yo":null])},(0,l.v_)(e.$configReactions.enable?.likes?"thumb_down":"heart_broken"),3),(0,s.Lk)("p",null,(0,l.v_)(n.dislikes),1)],2),[[i.aG,e.$configReactions.enable?.dislikes]]),(0,s.bo)((0,s.Lk)("div",L,[y,(0,s.Lk)("p",null,(0,l.v_)(n.comments),1)],512),[[i.aG,e.$configReactions.enable?.comments]])],512)),[[i.aG,e.$configReactions.enable?.actions]])}const _={type:Number,default(e){return 0}},P={type:Boolean,default(e){return!1}};var $={props:{likes:_,dislikes:_,views:_,comments:_,isLiked:P,isDisliked:P}};const D=(0,f.A)($,[["render",w]]);var x=D,R={components:{PostMenu:h,PostReaction:x},props:{title:{type:String},content:{type:String},index:{type:Number},reactions:{type:Object},dateTimeCreate:{type:String}}};const j=(0,f.A)(R,[["render",c]]);var O=j;const E={class:"characters-counter"},F=["disabled"];function X(e,t,n,o,a,r){return(0,s.uX)(),(0,s.CE)("form",{class:(0,l.C4)(["post--write",a.postContent.length>a.maxPostLength?"error":null])},[(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.postContent=e),placeholder:"Here's what I think...",style:(0,l.Tr)(a.postContent.length>150?`height: ${a.postContent.length/1.9}px`:null)},null,4),[[i.Jo,a.postContent]]),(0,s.Lk)("div",null,[(0,s.Lk)("p",E,(0,l.v_)(a.postContent.length)+" / "+(0,l.v_)(a.maxPostLength),1),(0,s.Lk)("button",{class:(0,l.C4)(["btn",a.postContent.length>a.maxPostLength?"btn-dangerous":"btn-primary"]),onClick:t[1]||(t[1]=(0,i.D$)((e=>r.validation()),["prevent"])),disabled:0===a.postContent.length||a.postContent.length>a.maxPostLength},"Send",10,F)])],2)}var G={props:["postCreate"],data(){return{postContent:"",maxPostLength:500}},methods:{validation(){this.postContent?(this.$emit("postCreate",this.postContent),this.postContent=""):alert("Please fill the post input field.")}}};const M=(0,f.A)(G,[["render",X],["__scopeId","data-v-ca9a28f6"]]);var A=M,S={components:{Post:O,PostWrite:A},created(){this.loadPosts()},computed:{getPosts(){return[...this.posts].sort((function(e,t){let n=new Date(e.date),i=new Date(t.date);return i-n}))}},data(){return{posts:[]}},methods:{async loadPosts(){let e=await fetch("posts.json");this.posts=await e.json()},postCreate(e){const t=(new Date).toLocaleString(this.$config.dateFormat.locales,this.$config.dateFormat);this.posts.push({content:e,date:t})}}};const T=(0,f.A)(S,[["render",a]]);var I=T;async function H(e="config.json"){try{const t=await fetch(e);return await t.json()}catch(t){throw console.log("Error loading config:",t),t}}async function N(){const e=(0,i.Ef)(I);e.config.globalProperties.$config=await H(),e.config.globalProperties.$configReactions=await H("configReactions.json"),e.mount("#app")}N()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,o){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,a=i[0],l=i[1],r=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var u=r(n)}for(t&&t(i);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkblog_wall_vue"]=self["webpackChunkblog_wall_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(7166)}));i=n.O(i)})();
//# sourceMappingURL=app.3e554174.js.map