const u=document.getElementById("card-two-btn"),t=document.querySelector(".card-two__text");u.addEventListener("click",()=>{let u=Math.floor(10*Math.random())+1,e=document.getElementById("card-two-input").value;(e=parseInt(e))===u?(t.innerHTML=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E} ${u}!`,t.style.color="#039900"):(t.style.color="#900",t.innerHTML=`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} ${u}`),document.getElementById("card-two-input").value=""});
//# sourceMappingURL=index.086710d3.js.map
