// Testimonials Slider
let currentTestimonial = 0;

function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    if (!slider) return;
    
    if (testimonials.length === 0) return;
    
    // Create dots
    const dots = testimonials.map((_, index) => `
        <div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="showTestimonial(${index})"></div>
    `).join('');
    
    slider.innerHTML = `
        <div class="testimonial-slide" id="testimonial-${currentTestimonial}" data-aos="fade-up">
            <img src="${testimonials[currentTestimonial].image}" alt="${testimonials[currentTestimonial].author}" class="testimonial-image" onerror="this.src='https://via.placeholder.com/100x100?text=${testimonials[currentTestimonial].author}'">
            <p class="testimonial-text">"${testimonials[currentTestimonial].text}"</p>
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(testimonials[currentTestimonial].rating)}
            </div>
            <p class="testimonial-author">${testimonials[currentTestimonial].author}</p>
            <p class="testimonial-country">${testimonials[currentTestimonial].country}</p>
        </div>
        <div class="slider-nav">${dots}</div>
    `;
    
    // Auto rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        const slide = document.getElementById(`testimonial-${currentTestimonial}`);
        if (slide) {
            updateTestimonialDisplay();
        }
    }, 5000);
    
    AOS.refresh();
}

function showTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialDisplay();
}

function updateTestimonialDisplay() {
    const testimonial = testimonials[currentTestimonial];
    const slide = document.querySelector('.testimonial-slide');
    
    if (slide) {
        slide.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial-image" onerror="this.src='https://via.placeholder.com/100x100?text=${testimonial.author}'">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-author">${testimonial.author}</p>
            <p class="testimonial-country">${testimonial.country}</p>
        `;
    }
    
    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', renderTestimonials);
