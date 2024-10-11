document.getElementById("button").addEventListener("click",function(e){e.preventDefault();let t=parseInt(document.getElementById("input").value,10),n=document.getElementById("time");if(isNaN(t)||t<0)n.textContent="Введіть правильне число!",n.style.color="red";else{let e=Math.floor(t/60);n.textContent=`${e}:${t%60}`,n.style.color="black"}});
//# sourceMappingURL=index.c3fdb32f.js.map
