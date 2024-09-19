const t=Math.floor(10*Math.random())+1,e=document.getElementById("card-two-btn"),n=document.querySelector(".card-two__text");e.addEventListener("click",(()=>{let e=document.getElementById("card-two-input").value;e=parseInt(e),e===t?n.innerHTML=`Вітаю, ви вгадали число ${t}!`:(n.style.color="#900",n.innerHTML=`Ви програли, комп’ютер загадав ${t}`)}));
//# sourceMappingURL=index.c046dc23.js.map
