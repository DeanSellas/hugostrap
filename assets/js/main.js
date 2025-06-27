document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.scroll-fade-in');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        card.style.transition = "opacity 1s, transform 1s";
    });

    function fadeInCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', fadeInCards);
    fadeInCards();
});

// Smooth scroll effect for anchor links
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});