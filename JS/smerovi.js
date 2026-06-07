
window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            
            if (window.scrollY > 50) { 
                // Ako je skrolovano više od 50px na dole, dodaj klasu
                header.classList.add('skrolovan');
            } else { 
                // Ako se vrati na sam vrh stranice, skini klasu da ponovo bude providno
                header.classList.remove('skrolovan');
            }
        });

        //za overlay kad se klikne UPISI ME

        const otvoriModal = document.getElementById('OtvoriModal');
const zatvoriModal = document.getElementById('ZatvoriModal');
const modal = document.getElementById('Modal');

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