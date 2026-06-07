document.addEventListener('DOMContentLoaded', function() {
    

     //TOAST PORUKA NA KONTAKT STRANICI

    const kontaktForma = document.getElementById('kontaktForma');
    const toastElement = document.getElementById('uspehToast');

    if (kontaktForma) {
        kontaktForma.addEventListener('submit', function(event) {
            event.preventDefault(); 
            console.log("Forma je kliknuta!"); 

            if (toastElement) {
                toastElement.classList.add('show');
                
                setTimeout(function() {
                    toastElement.classList.remove('show');
                }, 4000);
            }

            kontaktForma.reset();
        });
    } else {
        console.error("Nisam našao 'kontaktForma' ID u HTML-u!");
    }

//HAMBURGER MENI
    const otvoriMeniBtn = document.getElementById('otvori-meni');
    const zatvoriMeniBtn = document.getElementById('zatvori-meni');
    const fullscreenMeni = document.getElementById('fullscreen-meni');

    // Kada se klikne na hamburger otvaramo meni
    if (otvoriMeniBtn && fullscreenMeni) {
        otvoriMeniBtn.addEventListener('click', function() {
            fullscreenMeni.classList.add('otvoren');
            document.body.style.overflow = 'hidden'; // Sprečava skrolovanje pozadine
        });
    }

    // Kada se klikne na Close dugme zatvaramo meni
    if (zatvoriMeniBtn && fullscreenMeni) {
        zatvoriMeniBtn.addEventListener('click', function() {
            fullscreenMeni.classList.remove('otvoren');
            document.body.style.overflow = ''; // Vraća skrolovanje
        });
    }
});