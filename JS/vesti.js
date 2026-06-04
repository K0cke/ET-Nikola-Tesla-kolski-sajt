document.addEventListener('DOMContentLoaded', function() {
    // 1. Filtriranje vesti (OVO OSTAJE ISTO KAO ŠTO JE BILO)
    const dugmici = document.querySelectorAll('.kat-btn');
    const sveVesti = document.querySelectorAll('article');
    const glavniKontejner = document.querySelector('.vesti-kontejner');

    dugmici.forEach(dugme => {
        dugme.addEventListener('click', function(e) {
            e.preventDefault(); 
            dugmici.forEach(d => d.classList.remove('aktivno'));
            this.classList.add('aktivno');

            const filter = this.getAttribute('data-filter');

            if (filter === 'sve') {
                glavniKontejner.classList.remove('filtrirano-stanje');
            } else {
                glavniKontejner.classList.add('filtrirano-stanje');
            }

            sveVesti.forEach(vest => {
                const kategorijaVesti = vest.getAttribute('data-kategorija');
                if (filter === 'sve' || kategorijaVesti === filter) {
                    vest.style.display = '';
                } else {
                    vest.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // 2. LOGIKA ZA NOVI HARVARD FULLSCREEN MENI
    // ==========================================
    const otvoriMeniBtn = document.getElementById('otvori-meni');
    const zatvoriMeniBtn = document.getElementById('zatvori-meni');
    const fullscreenMeni = document.getElementById('fullscreen-meni');

    // Kada se klikne na hamburger otvaramo meni
    if (otvoriMeniBtn) {
        otvoriMeniBtn.addEventListener('click', function() {
            fullscreenMeni.classList.add('otvoren');
            document.body.style.overflow = 'hidden'; // Sprečava skrolovanje stranice u pozadini
        });
    }

    // Kada se klikne na 'Close' dugme zatvaramo meni
    if (zatvoriMeniBtn) {
        zatvoriMeniBtn.addEventListener('click', function() {
            fullscreenMeni.classList.remove('otvoren');
            document.body.style.overflow = ''; // Vraća skrolovanje
        });
    }
});