document.getElementById("card-two-btn").addEventLisener("click",()=>{let u=Math.floor(10*Math.random())+1,t=document.getElementById("card-two-input").value;(t=parseInt(t))===u?textTwo.innerHTML=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E} ${u}!`:(textTwo.style.color="#900",textTwo.innerHTML=`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} ${u}`),document.getElementById("card-two-input").value=""});
//# sourceMappingURL=index.15923fa1.js.map
