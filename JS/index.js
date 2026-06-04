document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SLAJDER ZA VESTI
    let kontejner = document.querySelector(".vesticontainer");
    let dugmeLevo = document.getElementById("prethodna-vest");
    let dugmeDesno = document.getElementById("sledeca-vest");

    if (kontejner && dugmeLevo && dugmeDesno) {
        dugmeDesno.onclick = function() {
            kontejner.scrollTo({
                left: kontejner.scrollLeft + 410,
                behavior: "smooth"
            });
        }
        dugmeLevo.onclick = function() {
            kontejner.scrollTo({
                left: kontejner.scrollLeft - 410,
                behavior: "smooth"
            });
        }
    }

    // 2. ANIMACIJA BROJEVA
    function animirajBroj(id, cilj, korak, brzina) {
        let element = document.getElementById(id);
        if (!element) return;
        
        let trenutni = 0;
        let tajmer = setInterval(function() {
            trenutni += korak;
            
            if (trenutni >= cilj) {
                trenutni = cilj;
                clearInterval(tajmer);
            }
            
            element.innerText = trenutni;
        }, brzina);
    }

    // Pokretanje animacija na početnoj
    animirajBroj("brucenika", 950, 10, 20); 
    animirajBroj("brsmerova", 7, 1, 150);   
    animirajBroj("brgodina", 87, 1, 30);    

});