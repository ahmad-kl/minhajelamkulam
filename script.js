const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card'); 

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioCards.forEach(card => { 
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});
