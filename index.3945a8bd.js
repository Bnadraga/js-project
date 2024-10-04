!function(){let e,t,o;document.querySelector(".dino");let n=document.querySelector(".dino-player"),l=document.querySelector(".dino-cactus"),r=document.querySelector(".dino-points"),i=document.querySelector(".dino-overlay"),d=document.querySelector(".dino-results"),s=document.querySelector(".dino-but"),a=Math.floor(n.getBoundingClientRect().x+n.getBoundingClientRect().width/2),c=(n.getBoundingClientRect().y,n.getBoundingClientRect().width,0),y=!1,g=()=>{n.style.left="100px",n.style.bottom="15px",l.style.right="-50px",l.style.bottom="15px",c=0},u=()=>{l.style.right=`${Number(l.style.right.split("px")[0])+8+.05*c}px`,a=Math.floor(l.getBoundingClientRect().x+l.getBoundingClientRect().width/2),l.getBoundingClientRect().y,l.getBoundingClientRect().width,a<0&&(l.style.display="none",l.style.right="-50px",setTimeout(()=>l.style.display="block",200))},p=()=>{let a=n.getBoundingClientRect(),y=l.getBoundingClientRect(),u=Math.floor(a.x),p=Math.floor(a.y),m=Math.floor(a.width),h=Math.floor(a.height),R=Math.floor(y.x),v=Math.floor(y.y),b=Math.floor(y.width),x=Math.floor(y.height);u<R+b&&u+m>R&&p<v+x&&p+h>v&&(i.style.display="flex",n.style.display="none",r.style.display="none",s.style.display="flex",c>=localStorage.getItem("dinoRecord")&&localStorage.setItem("dinoRecord",c),d.innerHTML=` 
        Game over  
        <br> 
        ${c} points 
        <br> 
        Record ${localStorage.getItem("dinoRecord")} 
        `,clearInterval(e),clearInterval(t),clearInterval(o),g())};document.addEventListener("keydown",e=>{"ArrowUp"!==e.key||y||(y=!0,n.style.bottom="105px",setTimeout(()=>n.style.bottom="15px",600),setTimeout(()=>y=!1,500))}),s.addEventListener("click",()=>{i.style.display="none",n.style.display="block",r.style.display="block",e=setInterval(u,50),t=setInterval(p,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50)});let m=n=>{"g"===n.key&&(i.style.display="none",i.style.backgroundColor="rgba(0, 0, 0, 0.5)",e=setInterval(u,50),t=setInterval(p,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50),document.removeEventListener("keydown",m))};document.addEventListener("keydown",m),d.innerHTML=`Press 'g' to start the game 
<br> 
Press 'ArrowUp' to jump 
<br> 
Record ${null===localStorage.getItem("dinoRecord")?0:localStorage.getItem("dinoRecord")}`}();
//# sourceMappingURL=index.3945a8bd.js.map
