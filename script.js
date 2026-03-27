// Portfolio Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
// IVIDE MAATTI: .portfolio-item maatti .portfolio-card aakki
const portfolioCards = document.querySelectorAll('.portfolio-card'); 

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // IVIDE MAATTI: item maatti card aakki
        portfolioCards.forEach(card => { 
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});