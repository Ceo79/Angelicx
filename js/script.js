document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const itemsToShow = 5; // Number of items visible at a time
    const totalItems = items.length;
    let currentIndex = 0;

    // Update the carousel position
    function updateCarousel() {
        const offset = currentIndex * -100; // Move by 100% of the container width
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Next button functionality
    next.addEventListener('click', () => {
        if (currentIndex < Math.ceil(totalItems / itemsToShow) - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Previous button functionality
    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.innerHTML = question.innerHTML.replace('▲', '▼');
            } else {
                answer.style.display = 'block';
                question.innerHTML = question.innerHTML.replace('▼', '▲');
            }
        });
    });
});
