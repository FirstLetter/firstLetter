(window.webpackJsonpfirstletter=window.webpackJsonpfirstletter||[]).push([[1],{1:function(e,t,a){"use strict";a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return d})),a.d(t,"a",(function(){return b})),a.d(t,"f",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return x})),a.d(t,"i",(function(){return y}));var n,r,o=a(12),l=a.n(o),c=a(15),i=a(4),s=a(20),u=a.n(s),m=a(6),p=function(e){var t=e.scheme,a=e.domain,n=e.appendables;return[[t,a].join("://"),n.join("/")].join("/")},d="https",b="api.github.com",f="firstLetter",g="firstLetterPosts",h="repos",E={CreateFork:"createFork",GetUserFork:"getUserFork",CreateNewFile:"createNewFile",GetPullForRepo:"getPullForRepo",CreatePullRequest:"createPullRequest",GetReadme:"getReadme",GetAllFiles:"getAllFiles",GetFile:"getFile"},v=(n={},Object(i.a)(n,E.CreateFork,{method:m.b.POST}),Object(i.a)(n,E.GetUserFork,{method:m.b.GET}),Object(i.a)(n,E.CreateNewFile,{method:m.b.PUT}),Object(i.a)(n,E.GetPullForRepo,{method:m.b.GET}),Object(i.a)(n,E.CreatePullRequest,{method:m.b.POST}),Object(i.a)(n,E.GetReadme,{method:m.b.GET}),Object(i.a)(n,E.GetAllFiles,{method:m.b.GET}),Object(i.a)(n,E.GetFile,{method:m.b.GET}),n),x=(r={},Object(i.a)(r,E.CreateFork,(function(e){var t=e.username,a=e.repo;return[h,t,a,"forks"]})),Object(i.a)(r,E.GetUserFork,(function(e){var t=e.username,a=e.repo;return[h,t,a]})),Object(i.a)(r,E.CreateNewFile,(function(e){var t=e.username,a=e.repo,n=e.filename;return[h,t,a,"contents",n]})),Object(i.a)(r,E.GetPullForRepo,(function(e){var t=e.username,a=e.repo;return[h,t,a,"pulls"]})),Object(i.a)(r,E.CreatePullRequest,(function(e){var t=e.username,a=e.repo;return[h,t,a,"pulls"]})),Object(i.a)(r,E.GetReadme,(function(e){var t=e.username,a=e.repo;return[h,t,a,"contents",t,"readme"]})),Object(i.a)(r,E.GetAllFiles,(function(e){var t=e.username,a=e.repo,n=e.filename;return[h,t,a,"contents",n]})),Object(i.a)(r,E.GetFile,(function(e){var t=e.username,a=e.repo,n=e.filename;return[h,t,a,"contents",n]})),r),y=function(){var e=Object(c.a)(l.a.mark((function e(t,a,n,r){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=null,e.t0=a,e.next=e.t0===m.b.GET?4:e.t0===m.b.POST?8:e.t0===m.b.PUT?12:16;break;case 4:return e.next=6,u.a.get(t,r);case 6:return o=e.sent,e.abrupt("break",17);case 8:return e.next=10,u.a.post(t,n,r);case 10:return o=e.sent,e.abrupt("break",17);case 12:return e.next=14,u.a.put(t,n,r);case 14:return o=e.sent,e.abrupt("break",17);case 16:throw Error(m.a);case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},10:function(e,t,a){},13:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(12),r=a.n(n),o=a(15),l=a(3),c=a(0),i=a(1),s=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u=Object(c.useState)(s),m=Object(l.a)(u,2),p=m[0],d=m[1],b=Object(c.useState)(null),f=Object(l.a)(b,2),g=f[0],h=f[1],E=Object(c.useState)(null),v=Object(l.a)(E,2),x=v[0],y=v[1],w=Object(c.useState)(-1),N=Object(l.a)(w,2),k=(N[0],N[1],function(){var l=Object(o.a)(r.a.mark((function o(){var l,c,s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=Object(i.h)({scheme:i.g,domain:i.a,appendables:i.d[e](t)}),console.log(l),c=i.c[e].method,r.prev=3,r.next=6,Object(i.i)(l,c,a,n);case 6:null===(s=r.sent).data?y("error"):h(s.data),d(!1),r.next=17;break;case 11:r.prev=11,r.t0=r.catch(3),console.log("..Error <-> Error.."),y(r.t0),h(null),d(!1);case 17:case"end":return r.stop()}}),o,null,[[3,11]])})));return function(){return l.apply(this,arguments)}}());return Object(c.useEffect)((function(){!0===p&&k()}),[p]),{loading:p,error:x,data:g,setLoading:d}}},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),l=a(49),c=a.n(l),i=(a(57),a(58),a(59),a(2)),s=a(5),u=a(12),m=a.n(u),p=a(15),d=a(3),b=function(e){return'\nquery {\n    githubUser(github_username: "'.concat(e,'") {\n        github_username\n        user_auth_token\n    }\n}').trim()},f=["repo","user"].join(","),g="https://gitobackend.herokuapp.com",h="graphql",E=a(1),v=a(6),x=a(8),y=(a(10),function(e){var t=e.username,a=Object(s.a)(),n=a.loggedIn,l=a.login,c=(a.user,Object(r.useState)(!0)),u=Object(d.a)(c,2),f=u[0],y=u[1],w=Object(r.useState)(null),N=Object(d.a)(w,2),k=N[0],O=N[1],j=Object(r.useState)(!1),F=Object(d.a)(j,2),S=F[0],P=F[1];Object(r.useEffect)((function(){!0===f?!0===n?Object(i.navigate)("/home"):C():!1===f&&null!=k&&(P(!0),l(k),Object(i.navigate)("/home"))}),[f]);var C=function(){var e=Object(p.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[g,h].join("/"),e.next=3,Object(E.i)(a,v.b.POST,{query:b(t)});case 3:n=e.sent,O(n.data.data.githubUser),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 text-center py-5"},f?o.a.createElement("div",{className:"app-text-blue-light font-ibm-plex-mono font-size-20"},o.a.createElement(x.a,null),o.a.createElement("div",null,"Signing you in"),o.a.createElement("div",null,"Stay With Us")):S?o.a.createElement("div",{className:"app-bg-main"},"Already Logged In"):o.a.createElement("div",{className:"app-bg-main"},o.a.createElement("button",{className:"app-text-background app-bg-blue-light-hover app-bg-indigo border-0 px-3 py-2 rounded-sm font-ibm-plex-mono font-weight-500",onClick:function(){return y(!0)}},"Retry")))))}),w=(a(88),a(51)),N=a.n(w),k=(a(89),function(e){return o.a.createElement("span",{className:"px-2 px-md-2"},o.a.createElement(i.A,Object.assign({className:"link ".concat(!0===e.isActive?"active-tab":"")},e),e.children))}),O=function(e){return o.a.createElement("span",{className:"px-1 px-md-2"},o.a.createElement("a",Object.assign({className:"link"},e),e.children))},j=function(){var e=Object(i.usePath)();console.log(e);var t=Object(s.a)(),a=t.loggedIn,n=t.logout;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{href:"/home",isActive:"/home"==e},"Home"),o.a.createElement(k,{href:"/explore",isActive:"/explore"==e},"Exlpore"),!1===a?o.a.createElement(O,{href:"".concat("https://github.com/login/oauth/authorize","?client_id=").concat("9cbb7a7341290f36318d","&scope=").concat(f).trim()},"Github ",o.a.createElement("i",{className:"fab fa-github"})," Log In"):null,!0===a?o.a.createElement(k,{isActive:"/content"==e,href:"/content"},"Content"):null,!0===a?o.a.createElement(k,{href:"#",onClick:function(){n(),Object(i.navigate)("/home",!0)}},"Logout"):null)},F=function(){return o.a.createElement("div",{className:"row py-2"},o.a.createElement("div",{className:"col-12 col-md-6 pl-2 pt-4"},o.a.createElement("img",{className:"hacktober-image",src:N.a,alt:"hacktober"})),o.a.createElement("div",{className:"col-12 col-md-6 pt-5 pr-md-5 pr-0 text-md-right"},o.a.createElement(j,null)))},S=(a(90),function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 rounded py-2 font-ibm-plex-mono font-size-18 text-light app-text-main w-100",style:{wordWrap:"break-word"}},o.a.createElement("h1",{className:"app-text-white"},"Introduction"),o.a.createElement("p",{className:"app-text-gray"},"Hi, I am ",o.a.createElement("a",{className:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"https://vermakartik.github.io"},"Kartik Verma"),". I am a web developer and an android developer. "),o.a.createElement("p",{className:"app-text-gray"},"This is my contribution towards the Hacktober fest. I am providing an easy way for techies as well as non-techies to contribute to open source. Open source is not just about writing code. When you share your knowledge ",o.a.createElement("strong",null,"openly")," then I consider it open source development."),o.a.createElement("br",null),o.a.createElement("h1",{className:"app-text-white"},"How to?"),o.a.createElement("p",{className:"app-text-gray"},"A simple three Step Process to win a free ",o.a.createElement("b",null,"Hacktober T-shirt")," this October:",o.a.createElement("ul",{style:{listStylePosition:"inside"}},o.a.createElement("li",null,"Create your ",o.a.createElement("a",{className:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"https://github.com/"},"Github")," account. "),o.a.createElement("li",null,"Register on ",o.a.createElement("a",{className:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"https://https://hacktoberfest.digitalocean.com/"},"hacktoberfest website")," to track your pull requests."),o.a.createElement("li",null,"Sign In to First Letter with your github account. And Share your knowledge about programming or any personal experiences that you would like to share using ",o.a.createElement("a",{className:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"https://guides.github.com/features/mastering-markdown/"},"markdown")))),o.a.createElement("p",{className:"app-text-gray"},"You have to make at least ",o.a.createElement("strong",null,"4 pull requests"),". To keep things simple please keep it ",o.a.createElement("strong",null,"One at a time. "),"i.e. create a file then send the pull request, and wait for your merge. To see details about your pull requests visit the link https://github.com/<your-github-username>."),o.a.createElement("p",{className:"app-text-gray"},o.a.createElement("a",{className:"text-decoration-none font-weight-bold font-size-20 app-text-bg-accent app-text-blue-light-hover",href:"https://firstletter.github.io/letter/vermakartik/Make%20your%20first%20pull%20request%20with%20FirstLetter"},"Read Here")," about how to make a pull request with FirstLetter."),o.a.createElement("p",{className:"app-text-gray"},"You must follow the ",o.a.createElement("a",{className:"text-decoration-none font-weight-bold font-size-20 app-text-bg-accent app-text-blue-light-hover",href:"https://firstletter.github.io/letter/vermakartik/Conventions"},"Conventions")," for your pull request to be merged."),o.a.createElement("br",null),o.a.createElement("h1",{className:"app-text-white"},"Why this project"),o.a.createElement("p",{className:"app-text-gray"},"As the world is moving fast paced towards the era of Artificial Intelligence, Virtual Reality/ Augumented Reality where the programming becomes too much complex to write, I believe that the traditional ways of doing development will not be able to cope up with it."),o.a.createElement("p",{className:"app-text-gray"},"Here I am trying to support GUI based programming, where as a developer, I will be able to focus on solving the main problem and not just write tons of code again and again."),o.a.createElement("p",{className:"app-text-gray"},"Here, by making this project, I am trying to make a small contribution towards the GUI based development by allowing people to make commits, and pull requests easily, without going to command line."))))}),P=Object(r.lazy)((function(){return a.e(0).then(a.bind(null,179))})),C=function(){var e=Object(s.a)(),t=(e.user,e.loggedIn);return o.a.createElement("div",{className:"container-fluid app-bg-main"},o.a.createElement(F,null),!1===t?o.a.createElement(S,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",{className:"font-space-mono"},"Loading your pulls ",o.a.createElement(x.a,null)," ")},o.a.createElement(P,{onClick:function(e){Object(i.navigate)("/letter/".concat(e.path))}})),o.a.createElement("div",{style:{height:"1px",borderRadius:"4px",width:"100%",backgroundColor:"var(--backgroundLight)"},className:"my-4"}),o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",{className:"font-space-mono"},"Loading your pulls ",o.a.createElement(x.a,null)," ")},o.a.createElement(P,{fromFork:!0,onClick:function(e){Object(i.navigate)("/letter/".concat(e.path))}}))))},A=(a(91),a(19)),G=a.n(A),I=a(13),T=(a(48),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),a=Object(d.a)(t,2),n=a[0],o=a[1];return Object(r.useEffect)((function(){if(!0===n){var e=setTimeout((function(){o(!1)}),2e3);return function(){return clearTimeout(e)}}}),[n]),{showing:n,setShowing:o}}),R=function(e){var t=e.text;return o.a.createElement("div",{style:{zIndex:100},className:"d-inline-block toast-message app-bg-color-gray app-text-background font-size-14 px-2 py-1 font-roboto-mono"},t)},q=Object(r.lazy)((function(){return a.e(0).then(a.bind(null,179))})),L=function(e){var t=e.deftitle,a=void 0===t?"":t,n=e.deftext,l=void 0===n?"":n,c=e.onSelectNew,i=void 0===c?null:c,u=e.istitleDisabled,m=void 0!==u&&u,p=e.sha,b=void 0===p?null:p,f=Object(s.a)().user,g=Object(r.useState)(a),h=Object(d.a)(g,2),v=h[0],y=h[1],w=Object(r.useState)(l),N=Object(d.a)(w,2),k=N[0],O=N[1],j=T(),F=j.showing,S=j.setShowing;Object(r.useEffect)((function(){O(l),y(a)}),[l,a]);var P=Object(I.a)(E.b.CreateNewFile,{username:f.username,repo:E.e,filename:"".concat(f.username,"/").concat(v)},{message:"fileupdated",commiter:{name:f.username,email:""===f.useremail||f.useremail?"".concat(f.username,"@github.com"):f.useremail},content:btoa(k),sha:null===b?"":b},{headers:{Authorization:"bearer ".concat(f.authtoken)}},!1),C=P.loading,A=(P.data,P.error,P.setLoading);return o.a.createElement("div",{className:"container-fluid app-bg-main w-100 shadow-lg"},F?o.a.createElement(R,{text:"Make sure Title and content are not empty"}):null,o.a.createElement("div",{className:"app-bg-main"},o.a.createElement("div",{className:"row px-1"},o.a.createElement("div",{className:"col-12 px-0"},o.a.createElement("button",{className:"px-3 py-2 font-weight-500 font-ibm-plex-mono app-bg-blue-light-hover border-0 app-text-bg-main-hover app-bg-indigo rounded-sm",onClick:function(){""!==v&&""!==k?A(!0):S(!0)}},"Save ",!0===C?o.a.createElement(x.a,null):""),i?o.a.createElement("button",{className:"ml-1 px-3 py-2 font-weight-500 font-ibm-plex-mono app-bg-blue-light-hover border-0 app-text-bg-main-hover app-bg-indigo rounded-sm",onClick:function(){return i()}},"Add New +"):""),o.a.createElement("div",{className:"col-12 px-0 app-text-bg-accent font-size-14 font-ibm-plex-mono"},"Please don't forget to save your content by clicking on the save button.")),o.a.createElement("div",{className:"row app-bg-light rounded-sm overflow-hidden"},o.a.createElement("div",{className:"col-12 px-0 border-title"},o.a.createElement("input",{className:"outline-none border-0 w-100 font-italic py-2 app-bg-light font-ibm-plex-mono font-weight-500 app-text-bg-accent px-2 border-bottom",type:k,placeholder:"Enter title...",value:v,onChange:function(e){return y(e.target.value)},required:!0,disabled:m})),o.a.createElement("div",{className:"col-md-6 col-12 border-content px-0"},o.a.createElement("div",{className:"px-2"},o.a.createElement("div",{className:"font-size-18 py-2 font-ibm-plex-mono app-text-blue-light",style:{borderBottom:"2px solid var(--color-blue-light)"}},"Enter Content Here...")),o.a.createElement("div",{className:"px-2 pt-1"},o.a.createElement("textarea",{required:!0,rows:"25",className:"edit-text-content w-100 border-0 app-bg-light app-text-gray-light font-roboto-mono",value:k,onChange:function(e){return O(e.target.value)}}))),o.a.createElement("div",{className:"col-md-6 col-12 px-0"},o.a.createElement("div",{className:"px-2"},o.a.createElement("div",{className:"font-size-18 font-ibm-plex-mono app-text-blue-light py-2 px-2",style:{borderBottom:"2px solid var(--color-blue-light)"}},"Output")),o.a.createElement("div",{className:"px-2 pt-1 output-article-content-editor"},o.a.createElement(G.a,{source:k,className:"font-roboto-mono app-text-gray-light"}))))))},z={MyPulls:"My Pulls",Editor:"Editor",MyForks:"My Forks"},U=function(){var e=Object(s.a)().user,t=T(),a=t.showing,n=t.setShowing,l=Object(r.useState)(!1),c=Object(d.a)(l,2),i=c[0],u=c[1],m=Object(I.a)(E.b.CreatePullRequest,{username:E.f,repo:E.e},{title:"Added New from ".concat(e.username),body:"Added New articles from ".concat(e.username),head:"".concat(e.username,":master"),base:"master"},{headers:{Authorization:"bearer ".concat(e.authtoken)}},!1),p=(m.data,m.loading),b=m.error,f=m.setLoading;Object(r.useEffect)((function(){!0===i&&(u(!1),n(!0))}),[p]);return o.a.createElement("div",{className:"container-fluid app-bg-main"},!0===a&&!1===p?b?o.a.createElement(R,{text:"Error Processing request"}):o.a.createElement(R,{text:"Pull Request Sent!"}):"",o.a.createElement("div",{className:"row px-0"},o.a.createElement("div",{className:"col-12"},o.a.createElement("button",{className:"px-3 py-2 font-weight-500 font-ibm-plex-mono app-bg-blue-light-hover border-0 app-text-bg-main-hover app-bg-indigo rounded-sm",onClick:function(){f(!0),u(!0)}},"+ Create a New Pull ",p?o.a.createElement(x.a,null):""))))},H=function(e){var t=e.onSelect;return o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",{className:"font-size-20 text-center font-space-mono app-text-bg-accent"},o.a.createElement("span",null,"Loading Files From Your Repo")," ",o.a.createElement(x.a,null))},o.a.createElement(q,{fromFork:!0,onClick:function(e){return t(e)}}))},M=function(e){var t,a=e.currentSelected,n=e.onSelectNew,r=Object(s.a)().user,l=Object(I.a)(E.b.GetFile,{username:r.username,repo:E.e,filename:[r.username,a?a.name:"readme.md"].join("/")},null,null,!!a),c=l.loading,i=l.data,u=l.error;return null===a||void 0===a?t=o.a.createElement(L,null):!0===c?t=o.a.createElement(x.a,null):!1===c&&null!==u?t=o.a.createElement("div",{className:"app-text-accent font-face-space-mono font-size-20"},"Error Loading Data..."):!1===c&&null!==i&&(t=o.a.createElement(L,{onSelectNew:function(){return n()},deftitle:i.name,deftext:atob(i.content),istitleDisabled:!0,sha:i.sha})),console.log(t),o.a.createElement("div",{className:"container-fluid app-bg-main"},t)},_=function(e){var t=e.text,a=e.isActive,n=e.onClick;return o.a.createElement("div",{onClick:n,className:"d-inline-block col-md-1 text-center col-12 tab-outlook px-2 py-1 ".concat(!0===a?"tab-outlook-is-active":"")},t)},D=function(e){var t=e.tabsList,a=e.currentTab,n=e.onClick;return o.a.createElement("div",{className:"tab-manager"},t.map((function(e,t){return o.a.createElement(_,{key:t,text:e,isActive:a===e,onClick:function(){return n(e)}})})))},W=(n=function(){var e,t=Object(r.useState)(z.MyForks),a=Object(d.a)(t,2),n=a[0],l=a[1],c=Object(r.useState)(null),i=Object(d.a)(c,2),s=i[0],u=i[1];return console.log(s),n===z.MyForks?e=o.a.createElement(H,{onSelect:function(e){u(e),l(z.Editor)}}):n===z.Editor?e=o.a.createElement(M,{currentSelected:s,onSelectNew:function(){return u(null)}}):n===z.MyPulls&&(e=o.a.createElement(U,null)),o.a.createElement("div",{className:"container-fluid app-bg-main"},o.a.createElement(F,null),o.a.createElement(D,{tabsList:[z.MyForks,z.Editor,z.MyPulls,z.AddNew],currentTab:n,onClick:function(e){return l(e)}}),o.a.createElement("br",null),e)},function(e){return!0===Object(s.a)().loggedIn?o.a.createElement(n,e):(Object(i.navigate)("/home",!0),o.a.createElement(C,null))}),B=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(F,null),o.a.createElement("div",{className:"py-3 app-text-gray-light font-ibm-plex-mono font-size-18"},"Coming Soon... Currenlty in development phase :-)"))},Y=function(e){var t,a=e.lettername,n=e.username,r=Object(s.a)(),l=(r.loggedIn,r.user,Object(I.a)(E.b.GetFile,{username:E.f,repo:E.e,filename:"".concat(n,"/").concat(a)},null,null)),c=l.loading,i=l.data,u=l.error;return console.log(n),console.log(a),console.log(i),!0===c?t=o.a.createElement("div",{className:"px-2 font-ibm-plex-mono font-size-18 app-text-blue-light"},"Fetching Letter ",o.a.createElement(x.a,null)):null!==i?t=o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:{backgroundColor:"#bdbdbd0f"},className:"font-ibm-plex-mono px-2 app-text-blue-light-light pb-3 pt-1 font-size-28"},o.a.createElement("span",{className:"font-italic app-text-accent"}),i.name.split(".")[0]),o.a.createElement("div",{className:"px-2"},o.a.createElement(G.a,{source:atob(i.content)}))):null!=u&&(t=o.a.createElement("div",{className:"font-ibm-plex-mono font-weight-500 px-2 py-2 app-text-gray-light"},"Failed to fetch article. Some Reasons can be:",o.a.createElement("ul",{style:{listStylePosition:"inside"}},o.a.createElement("li",null,"You have not sent pull request for this article."),o.a.createElement("li",null,"Your pull request is not yet merged."),o.a.createElement("li",null,"Article does not exists."),o.a.createElement("li",null,"Internet Problem. Check your internet connection.")))),o.a.createElement("div",{className:"container-fluid app-bg-main"},o.a.createElement(F,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{style:{backgroundColor:"#bdbdbd1f"},className:"col-12 px-0 py-0 shadow-lg rounded-sm font-roboto-mono app-text-gray-light"},o.a.createElement("div",{style:{backgroundColor:"#bdbdbd0f"},className:"app-text-main font-ibm-plex-mono font-weight-500 px-2 pb-1 pt-3"},o.a.createElement("span",{className:"font-italic app-text-indigo-light"},"Written By- "),n),t))))},J=function(){return o.a.createElement("div",{className:"container-fluid app-bg-main"},o.a.createElement(F,null),o.a.createElement(S,null))},K=function(){return o.a.createElement("div",{className:"container-fluid app-bg-main"},o.a.createElement(F,null),o.a.createElement(V,null))},V=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 rounded py-2 font-ibm-plex-mono font-size-18 text-light app-text-main w-100",style:{wordWrap:"break-word"}},o.a.createElement("h1",{className:"app-text-white"},"Terms Of Use"),o.a.createElement("p",{className:"app-text-gray"},"This app is just a means provided to users to make pull requests."),o.a.createElement("p",{className:"app-text-gray"},"Please Note that this website does not ensures that you will get a free limited edition hacktober t-shirt. The maintainers of the hacktoberfest is the sole authority which will decide based on your pull requests, wether if you have completed your hacktoberfest successfully."),o.a.createElement("p",{className:"app-text-gray"},"Also, this project is open source, completely owned by firstLetter Organisation. And has no tie up with hacktoberfest."),o.a.createElement("p",{className:"app-text-gray"},"So, If your pull requests are invalidated by hacktoberfest 2019 authorities, or you don't get a free limited edition t-shirt  then firstLetter is not responsible for this in any means."))))},$={"/user/signin/:username":function(e){var t=e.username;return o.a.createElement(y,{username:t})},"/home":function(){return o.a.createElement(C,null)},"/content":function(){return o.a.createElement(W,null)},"/explore":function(){return o.a.createElement(B,null)},"/letter/:username/:lettername":function(e){var t=e.username,a=e.lettername;return o.a.createElement(Y,{username:t,lettername:a})},"/howto":function(){return o.a.createElement(J,null)},"/terms-of-use":function(){return o.a.createElement(K,null)}},Q=(a(176),function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("h1",{className:"col-12 text-center app-text-accent font-space-mono py-md-5 py-3"},"404 ",o.a.createElement("br",null),"Not Found"),o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement(i.A,{className:"notfound-goHome",href:"/home"},"Go Home -"))))}),X=(a(177),a(40),function(){return o.a.createElement("div",{className:"text-center py-4 font-ibm-plex-mono font-weight-500 app-bg-main app-text-indigo-light"},o.a.createElement("div",{className:"app-text-white py-2 font-weight-400"},"By using this website you agree to ",o.a.createElement(i.A,{class:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"/terms-of-use"},"Our terms of use")),"Copyright \xa9 FirstLetter. 2019",o.a.createElement("div",{className:"py-2"},o.a.createElement("a",{class:"text-decoration-none app-text-bg-accent app-text-blue-light-hover",href:"https://vermakartik.github.io"},"Know About Developer ")," | ",o.a.createElement(i.A,{href:"/howto",className:"text-decoration-none app-text-bg-accent app-text-blue-light-hover font-ibm-plex-mono"},"Read How to.")))});var Z=function(){Object(i.useRedirect)("/","/home");var e=Object(i.useRoutes)($);return o.a.createElement("div",{className:"px-0 app-bg-main container-fluid h-100"},e||o.a.createElement(Q,null),o.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(s.a.Provider,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,a){},48:function(e,t,a){},5:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(4),o=a(0),l=a(50);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s="login",u="logout",m="user_details",p={user:{username:"",authtoken:"",useremail:""},loggedIn:!1,error:null},d=function(e,t){switch(console.log(e),t.type){case s:return{user:i({},e.user,{username:t.user.github_username,authtoken:t.user.user_auth_token}),loggedIn:!0};case u:return{user:i({},e.user,{username:"",authtoken:""}),loggedIn:!1};case m:return{user:i({},e.user,{useremail:t.user.useremail})};default:return e}},b=Object(l.a)((function(){var e=Object(o.useReducer)(d,p),t=Object(n.a)(e,2),a=t[0],r=t[1],l=a.user,c=a.loggedIn;return{user:l,loggedIn:c,login:function(e){!1===c&&(console.log("logging out.."),r({type:s,user:e}))},logout:function(){!0===c&&(console.log("logging out.."),r({type:u}))},setUserDetails:function(e){1==c&&r({type:m,user:e})}}}))},51:function(e,t,a){e.exports=a.p+"static/media/Hacktoberfest_19.c173c8fb.png"},52:function(e,t,a){e.exports=a(178)},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},59:function(e,t,a){},6:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={POST:"post",GET:"get",PUT:"put"},r="Not Found"},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=(a(10),a(40),function(){return r.a.createElement("i",{className:"app-text-blue-light fas fa-spinner fa-spin"})})},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[52,2,3]]]);
//# sourceMappingURL=main.e4af0d5e.chunk.js.map