document.addEventListener('DOMContentLoaded', function() {
    
    // 1. NAVIGACIJA - BOJENJE NA SKROL
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { 
                header.classList.add('skrolovan');
            } else { 
                header.classList.remove('skrolovan');
            }
        });
    }

    // 2. MOBILNI MENI (Radi na obe varijante - klase i ID-jevi)
    const hamburger = document.getElementById('otvori-meni');
    const closeBtn = document.getElementById('zatvori-meni');
    const menu = document.querySelector('.overlay-meni');

    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.add('otvoren'); // Ovo mora biti 'otvoren' da bi CSS reagovao
            document.body.style.overflow = 'hidden'; 
        });
    }

    if (closeBtn && menu) {
        closeBtn.addEventListener('click', function() {
            menu.classList.remove('otvoren'); // Uklanjamo istu klasu
            document.body.style.overflow = ''; 
        });
    }

    // 3. MODAL "UPIŠI ME"
    const otvoriModal = document.getElementById('UpisiMe') || document.getElementById('OtvoriModal');
    const zatvoriModal = document.getElementById('ZatvoriModal');
    const modal = document.getElementById('Modal');

    if (otvoriModal && zatvoriModal && modal) {
        otvoriModal.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        zatvoriModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});