const kabineti = [
{
    naziv: "IT Kabinet 1",
    ikona: "💻",
    opis: "30 računarskih mesta • Najnovija oprema",
    kategorija: "it"
},
{
    naziv: "IT Kabinet 2",
    ikona: "🖥️",
    opis: "30 računarskih mesta • Projektor i pametna tabla",
    kategorija: "it"
},
{
    naziv: "Elektro lab",
    ikona: "⚡",
    opis: "Laboratorija za elektroniku i električna merenja",
    kategorija: "elektro"
},
{
    naziv: "Mehatronika",
    ikona: "🤖",
    opis: "PLC sistemi, senzori i industrijska automatika",
    kategorija: "mehatronika"
},
{
    naziv: "Energetika",
    ikona: "🔋",
    opis: "Energetska postrojenja i elektroenergetski sistemi",
    kategorija: "energetika"
}
];

let trenutniIndex = 0;
let aktivniNiz = [...kabineti];
let autoSlider;

const sliderIkona = document.getElementById("sliderIkona");
const sliderNaslov = document.getElementById("sliderNaslov");
const sliderOpis = document.getElementById("sliderOpis");
const brojac = document.getElementById("brojac");

const prethodni = document.getElementById("prethodni");
const sledeci = document.getElementById("sledeci");

/* =========================================
   PRIKAZ KABINETA
========================================= */

function prikaziKabinet(index){

    const slider =
    document.querySelector(".slider-sadrzaj");

    slider.classList.add("fade-out");

    setTimeout(() => {

        const kabinet = aktivniNiz[index];

        sliderIkona.textContent = kabinet.ikona;
        sliderNaslov.textContent = kabinet.naziv;
        sliderOpis.textContent = kabinet.opis;

        brojac.textContent =
        `${index + 1}/${aktivniNiz.length}`;

        document
        .querySelectorAll(".mini-kartica")
        .forEach(k =>
            k.classList.remove("aktivna-kartica")
        );

        const originalniIndex =
        kabineti.findIndex(
            k => k.naziv === kabinet.naziv
        );

        document
        .querySelectorAll(".mini-kartica")
        [originalniIndex]
        ?.classList.add("aktivna-kartica");

        slider.classList.remove("fade-out");

    }, 300);
}

/* =========================================
   AUTO SLIDER
========================================= */

function pokreniAutoSlider() {

    clearInterval(autoSlider);

    autoSlider = setInterval(() => {

        trenutniIndex++;

        if(trenutniIndex >= aktivniNiz.length){
            trenutniIndex = 0;
        }

        prikaziKabinet(trenutniIndex);

    }, 6000);
}

/* =========================================
   STRELICE
========================================= */

sledeci.addEventListener("click", () => {

    trenutniIndex++;

    if(trenutniIndex >= aktivniNiz.length){
        trenutniIndex = 0;
    }

    prikaziKabinet(trenutniIndex);

    pokreniAutoSlider();
});

prethodni.addEventListener("click", () => {

    trenutniIndex--;

    if(trenutniIndex < 0){
        trenutniIndex = aktivniNiz.length - 1;
    }

    prikaziKabinet(trenutniIndex);

    pokreniAutoSlider();
});

/* =========================================
   MINI KARTICE
========================================= */

document
.querySelectorAll(".mini-kartica")
.forEach(kartica => {

    kartica.addEventListener("click", () => {

        const index =
        Number(kartica.dataset.index);

        const trazeni =
        kabineti[index];

        const noviIndex =
        aktivniNiz.findIndex(
            k => k.naziv === trazeni.naziv
        );

        if(noviIndex !== -1){

            trenutniIndex = noviIndex;

            prikaziKabinet(trenutniIndex);

            pokreniAutoSlider();
        }

    });

});

/* =========================================
   FILTERI
========================================= */

const filteri =
document.querySelectorAll(".filter");

filteri.forEach(filter => {

    filter.addEventListener("click", () => {

        filteri.forEach(f =>
            f.classList.remove("aktivan")
        );

        filter.classList.add("aktivan");

        const tip =
        filter.dataset.filter;

        if(tip === "sve"){

            aktivniNiz = [...kabineti];

        }else{

            aktivniNiz =
            kabineti.filter(
                kabinet =>
                kabinet.kategorija === tip
            );
        }

        trenutniIndex = 0;

        prikaziKabinet(trenutniIndex);

        pokreniAutoSlider();

    });

});

/* =========================================
   START
========================================= */

prikaziKabinet(0);
pokreniAutoSlider();