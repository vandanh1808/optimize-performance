window.addEventListener('load', () => {
    const images = document.querySelectorAll('.images__item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target.querySelector('img');
                if (image) {
                    image.src = image.dataset.src
                    observer.unobserve(entry.target)
                }
            }
        })

    }, {
        // root: document.querySelector('body'),
        rootMargin: '0px',
        threshold: 0,
    })

    images.forEach(image => observer.observe(image))
})