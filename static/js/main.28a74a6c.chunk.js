(this["webpackJsonptunadragon-website"]=this["webpackJsonptunadragon-website"]||[]).push([[0],{53:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c(0),s=c(12),r=c.n(s),n=c(56),l=c(24);c(72);var o=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),c=t[0],s=t[1],r=function(){s(!1)},o=function(e){var t=.08*document.documentElement.clientHeight,c=e.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo(0,c)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("div",{className:"nav-logo",children:Object(i.jsx)(l.HashLink,{to:"/#home",children:"PATRICIA LEE"})}),Object(i.jsxs)("ul",{className:"nav-links ".concat(c?"nav-menu-active":""),children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.HashLink,{to:"/#home",className:"",onClick:r,scroll:function(e){return o(e)},children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.HashLink,{to:"/#about",className:"",onClick:r,scroll:function(e){return o(e)},children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.HashLink,{to:"/#experience",className:"",onClick:r,scroll:function(e){return o(e)},children:"Experience"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.HashLink,{to:"/#projects",className:"",onClick:r,scroll:function(e){return o(e)},children:"Projects"})})]}),Object(i.jsx)("div",{className:"nav-menu-icon",onClick:function(){return s(!c)},children:Object(i.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})})]})})},j=(c(73),function(e){var t=e.children,c=e.category;return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("span",{className:"skill-category",children:c}),Object(i.jsx)("span",{className:"skills-list",children:t})]})}),d=(c(53),function(e){var t=e.children,c=e.title,a=e.location,s=e.date,r=e.separator;return Object(i.jsxs)("div",{className:"experience-entry ".concat(r?"bottom-separator":""),children:[Object(i.jsx)("div",{className:"experience-title",children:Object(i.jsx)("h3",{children:c})}),Object(i.jsxs)("div",{className:"experience-info",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fas fa-map-marker-alt"})," ",a]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"far fa-calendar"})," ",s]})})]}),Object(i.jsx)("div",{className:"experience-details",children:t})]})}),b=function(e){var t=e.children,c=e.title,a=e.date,s=e.githubLink,r=e.url,n=e.tools,l=r.replace("https://","");return Object(i.jsxs)("div",{className:"project-entry bottom-separator",children:[Object(i.jsxs)("div",{className:"project-title",children:[Object(i.jsxs)("h3",{children:[c," "]}),Object(i.jsxs)("p",{className:"project-details",children:[Object(i.jsx)("i",{className:"far fa-calendar"})," ",a]})]}),Object(i.jsxs)("div",{className:"project-details",children:[t,Object(i.jsxs)("div",{className:"tools-used",children:[Object(i.jsx)("i",{className:"fas fa-toolbox"})," ",Object(i.jsx)("b",{children:"Tools used:"})," ",n]}),s||r?Object(i.jsxs)("div",{className:"project-links",children:[r?Object(i.jsxs)("p",{children:[Object(i.jsxs)("b",{children:[Object(i.jsx)("i",{className:"fas fa-link"})," Link: "]}),Object(i.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:l})]}):"",s?Object(i.jsxs)("p",{children:[Object(i.jsxs)("b",{children:[Object(i.jsx)("i",{className:"fab fa-github"})," Github: "]}),Object(i.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"Repository Link"})]}):""]}):""]})]})};c(74);function h(e){var t=e.title,c=e.imageUrl,a=e.imageUrl2,s=e.date,r=e.bgColor,n=e.description,l=e.link;return Object(i.jsxs)("div",{className:"carousel-item",style:{background:r},children:[Object(i.jsx)("div",{className:"ci-image",children:Object(i.jsx)("img",{src:c,alt:t})}),Object(i.jsxs)("div",{className:"ci-render",children:[a?Object(i.jsx)("img",{src:a,alt:t,className:"ci-image2"}):"",Object(i.jsxs)("div",{className:"ci-description",children:[Object(i.jsxs)("h4",{children:[t," (",s,")"]}),Object(i.jsx)("p",{children:n}),l?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"ci-link",children:"Link to project"})," "]}):""]})]})]})}c(75);var m=c(55),x=c.n(m);var O=function(){return Object(i.jsxs)("div",{className:"page-content",children:[Object(i.jsxs)("div",{id:"home",children:[Object(i.jsx)("h1",{children:"Hi, I'm Patricia."}),Object(i.jsx)("p",{children:"Welcome to my website!"}),Object(i.jsx)(l.HashLink,{to:"/#about",scroll:function(e){return function(e){var t=.08*document.documentElement.clientHeight,c=e.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo(0,c)}(e)},children:Object(i.jsx)("button",{className:"btn btn-outline",children:"About Me"})})]}),Object(i.jsxs)("div",{id:"about",className:"section",children:[Object(i.jsxs)("h1",{className:"section-title",children:[Object(i.jsx)("i",{className:"far fa-user"})," About Me"]}),Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsxs)("div",{className:"profile-pic-container",children:[Object(i.jsx)("img",{className:"profile-pic-large",src:"".concat("/tunadragon.github.io","/images/pfp_large.jpg"),alt:"Profile"}),Object(i.jsx)("a",{href:"https://linkedin.com/in/patricia-lee-934177120",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-linkedin social-icon"})}),Object(i.jsx)("a",{href:"https://github.com/tunadragon",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-github social-icon"})})]}),Object(i.jsxs)("div",{className:"profile-text",children:[Object(i.jsx)("h2",{children:"Patricia Lee"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"I am a graduating Computer Science student from the University of Toronto and have been studying computer science in high school and university for over 5 years. I have also have previously worked at Ontario Power Generation as a Co-op Computer-based Training Developer. Outside of programming, I enjoy drawing, 3d modelling and playing video games."}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"fas fa-home"})," Scarborough, Ontario"]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"fas fa-envelope"})," patricia.e.lee.work@gmail.com"]}),Object(i.jsx)("br",{})]})]}),Object(i.jsx)("h2",{children:"Education"}),Object(i.jsx)("div",{className:"card-container education-entry",children:Object(i.jsxs)(d,{title:"Honours Bachelor of Science",location:"University of Toronto",date:"September 2016 - December 2020",children:[Object(i.jsx)("p",{children:"Computer Science Specialist Co-op (Software Engineering Stream)"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"cGPA:"})," 3.79/4.0"]})]})}),Object(i.jsx)("h2",{children:"Skills"}),Object(i.jsx)("div",{className:"card-container skills-container",children:Object(i.jsxs)("div",{className:"skill-list",children:[Object(i.jsx)(j,{category:"Programming Languages",children:"Java, JavaScript, Python, Haskell"}),Object(i.jsx)(j,{category:"Markup and Style Sheet",children:"HTML, CSS, XML "}),Object(i.jsx)(j,{category:"Web Development Frameworks",children:"React, Angular, jQuery, Express "}),Object(i.jsx)(j,{category:"Databases",children:"PostgreSQL, MongoDB "}),Object(i.jsx)(j,{category:"Development Concepts",children:"Agile workflows (Scrum and Kanban), RESTful API, Responsive design "}),Object(i.jsx)(j,{category:"Version Control",children:"Git, SVN "}),Object(i.jsx)(j,{category:"Microsoft Office",children:"Word, Excel, PowerPoint, Outlook "}),Object(i.jsx)(j,{category:"Adobe Creative Cloud",children:"Photoshop, Illustrator, Animate, InDesign "}),Object(i.jsx)(j,{category:"Other",children:"Blender, Unity "})]})})]}),Object(i.jsxs)("div",{id:"experience",className:"section",children:[Object(i.jsxs)("h1",{className:"section-title",children:[Object(i.jsx)("i",{className:"fas fa-briefcase"})," Experience"]}),Object(i.jsx)("h2",{children:"Work Experience"}),Object(i.jsx)(d,{title:"Computer-based Training Developer / eLearning Multimedia Designer (Co-op)",location:"Ontario Power Generation - Pickering, Ontario",date:"September 2018 - May 2019",separator:!0}),Object(i.jsx)(d,{title:"Information Security Coordinator (Co-op)",location:"CIBC - Toronto, Ontario",date:"January 2018 - April 2018",separator:!0}),Object(i.jsx)(d,{title:"Co-op Student",location:"Fish Out of Water Design - Toronto, Ontario",date:"September 2016 - December 2020",separator:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{children:"Volunteer Experience"}),Object(i.jsx)(d,{title:"Volunteer Note Taker",location:"UofT Accessibility Services - Toronto, Ontario",date:"September 2016 - May 2017",separator:!0})]}),Object(i.jsxs)("div",{id:"projects",className:"section",children:[Object(i.jsxs)("h1",{className:"section-title",children:[Object(i.jsx)("i",{className:"fas fa-tools"})," Projects"]}),Object(i.jsx)("h2",{children:"Programming"}),Object(i.jsx)(b,{title:"Personal Website",date:"January 2021",tools:"React, HTML, CSS, JavaScript, Git",githubLink:"https://github.com/tunadragon/tunadragon.github.io",url:"https://patriciaelee.me",children:Object(i.jsx)("p",{children:"A website developed to display my skills, experience and projects."})}),Object(i.jsx)(b,{title:"Architect 3D",date:"April 2020",tools:"Angular, Three.js, NodeJs, GraphQL, Git",githubLink:"",url:"https://www.architect3d.me",children:Object(i.jsx)("p",{children:"A web app where users can collaboratively create and edit 3D scenes."})}),Object(i.jsx)(b,{title:"Mozilla Firefox DevTools Contributions",date:"April 2020",tools:"JavaScript, Mochitest framework, Mercurial",githubLink:"",url:"",children:Object(i.jsx)("p",{children:"Fixed bugs and developed small features for Firefox DevTools."})}),Object(i.jsx)(b,{title:"The Web Gallery",date:"February 2020",tools:"HTML, CSS, Node.js, Express, NeDB NoSQL database",githubLink:"",url:"",children:Object(i.jsx)("p",{children:"A local web app where users can share photos and comments."})}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{children:"3D Modelling and Game Development"}),Object(i.jsxs)(x.a,{className:"carousel",navButtonsAlwaysInvisible:!0,interval:"8000",children:[Object(i.jsx)(h,{title:"Rainey Model",imageUrl:"/tunadragon.github.io/images/3d/1_turnaround.gif",imageUrl2:"/tunadragon.github.io/images/3d/1_render.gif",bgColor:"#242424",date:"Jan 2021",description:"A model of an original character compatible with VR apps. Made with Blender and Unity."}),Object(i.jsx)(h,{title:"Qiqi Model",imageUrl:"/tunadragon.github.io/images/3d/2_turnaround.gif",imageUrl2:"/tunadragon.github.io/images/3d/2_render.gif",bgColor:"#474251",date:"Dec 2020",description:"A low-poly model of the character Qiqi from the video game Genshin Impact. Made with Blender."}),Object(i.jsx)(h,{title:"Dragon Model",imageUrl:"/tunadragon.github.io/images/3d/3_turnaround.gif",imageUrl2:"/tunadragon.github.io/images/3d/3_render.png",bgColor:"#A1A3A0",date:"July 2020",description:"A low-poly model of a dragon. Made with Blender."}),Object(i.jsx)(h,{title:"Wolf Run",imageUrl:"/tunadragon.github.io/images/3d/4_screencap.png",bgColor:"#242424",date:"March 2019",description:"An endless runner game created in Unity. Art and assets were with Photoshop.",link:"https://simmer.io/@tunadragon/~4a585bea-aa40-e790-a7a5-778cd61deb81"})]})]})]})};c(89);var u=function(){return Object(i.jsxs)("footer",{children:[Object(i.jsx)("h3",{children:"Contact Me"}),Object(i.jsxs)("div",{className:"links-container",children:[Object(i.jsx)("a",{href:"mailto: patricia.e.lee.work@gmail.com",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fas fa-envelope social-icon"})}),Object(i.jsx)("a",{href:"https://linkedin.com/in/patricia-lee-934177120",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-linkedin social-icon"})}),Object(i.jsx)("a",{href:"https://github.com/tunadragon",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-github social-icon"})})]})]})},g=c(48),p=c(5);c(90);var f=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(g.BrowserRouter,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(p.g,{children:Object(i.jsx)(p.d,{path:"/",exact:!0,component:O})}),Object(i.jsx)(u,{})]})})})};r.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.28a74a6c.chunk.js.map