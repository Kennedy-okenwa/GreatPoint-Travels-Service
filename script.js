// Configuration Object
const CONFIG = {
    business: {
        name: 'GreatPoint Travels & Tour',
        email: 'greatpointtravelsandtours@gmail.com',
        phone: '+2347068713839',
        whatsapp: '2347068713839',
        location: 'Kaduna, Nigeria'
    },
    brevo: {
        listId: 'YOUR_BREVO_LIST_ID',
        apiKey: 'YOUR_BREVO_API_KEY'
    },
    flutterwave: {
        publicKey: 'FLWPUBK_TEST-BB11e739c478f3b65e3dc781413',
        paymentLink: 'https://flutterwave.com/pay/jdozorfca6zj'
    },
    analytics: {
        gaId: 'GA_ID',
        gtmId: 'GTM_ID'
    }
};

// Destinations Data
const destinations = [
    {
        id: 1,
        name: 'Dubai Experience',
        country: 'UAE',
        category: ['luxury', 'beach', 'family'],
        description: 'Experience the luxury and grandeur of Dubai with world-class shopping, stunning beaches, and iconic landmarks.',
        price: '$2,499',
        image: 'assets/tours/dubai.jpg'
    },
    {
        id: 2,
        name: 'Paris Vacation',
        country: 'France',
        category: ['luxury', 'adventure'],
        description: 'Discover the City of Light with romantic walks along the Seine, iconic museums, and exquisite French cuisine.',
        price: '$2,899',
        image: 'assets/tours/paris.jpg'
    },
    {
        id: 3,
        name: 'Maldives Getaway',
        country: 'Maldives',
        category: ['luxury', 'beach', 'couples'],
        description: 'Escape to paradise with crystal-clear waters, white sandy beaches, and world-class diving experiences.',
        price: '$3,299',
        image: 'assets/tours/maldives.jpg'
    },
    {
        id: 4,
        name: 'Egypt Adventure',
        country: 'Egypt',
        category: ['adventure', 'family'],
        description: 'Explore ancient wonders including the Pyramids, Sphinx, and the mysteries of the Nile River.',
        price: '$1,899',
        image: 'assets/tours/egypt.jpg'
    },
    {
        id: 5,
        name: 'London Experience',
        country: 'UK',
        category: ['adventure', 'family'],
        description: 'Immerse yourself in British culture with Big Ben, Tower of London, and world-renowned museums.',
        price: '$2,299',
        image: 'assets/tours/london.jpg'
    },
    {
        id: 6,
        name: 'Cape Town Escape',
        country: 'South Africa',
        category: ['adventure', 'beach'],
        description: 'Discover stunning landscapes, Table Mountain, pristine beaches, and vibrant local culture.',
        price: '$1,699',
        image: 'assets/tours/cape-town.jpg'
    }
];

// Resorts Data
const resorts = [
    {
        id: 1,
        name: 'Nike Lake Resort – Enugu',
        location: 'Enugu, Nigeria',
        description: 'Luxurious lakeside resort with premium amenities and pristine views.',
        facilities: ['Pool', 'Restaurant', 'Spa', 'Conference Hall'],
        image: 'assets/resorts/nike-lake.jpg'
    },
    {
        id: 2,
        name: 'Obudu Mountain Resort',
        location: 'Cross River, Nigeria',
        description: 'Premier mountain destination offering breathtaking views and adventure activities.',
        facilities: ['Cable Car', 'Hiking', 'Restaurant', 'Accommodation'],
        image: 'assets/resorts/obudu-mountain.jpg'
    },
    {
        id: 3,
        name: 'La Campagne Tropicana – Lagos',
        location: 'Lagos, Nigeria',
        description: 'Tropical paradise resort combining comfort with natural beauty.',
        facilities: ['Pool', 'Spa', 'Restaurant', 'Water Sports'],
        image: 'assets/resorts/la-campagne.jpg'
    },
    {
        id: 4,
        name: 'Yankari Game Reserve',
        location: 'Bauchi, Nigeria',
        description: 'Wildlife sanctuary and resort with warm springs and safari experiences.',
        facilities: ['Safari Tours', 'Warm Springs', 'Accommodation', 'Restaurant'],
        image: 'assets/resorts/yankari.jpg'
    },
    {
        id: 5,
        name: 'Tinapa Resort – Calabar',
        location: 'Calabar, Nigeria',
        description: 'Modern entertainment and resort complex with diverse attractions.',
        facilities: ['Cinema', 'Shopping', 'Restaurant', 'Accommodation'],
        image: 'assets/resorts/tinapa.jpg'
    },
    {
        id: 6,
        name: 'Eko Hotels & Suites',
        location: 'Lagos, Nigeria',
        description: 'Premium hotel offering world-class hospitality and amenities.',
        facilities: ['Spa', 'Restaurant', 'Conference', 'Beach Access'],
        image: 'assets/resorts/eko-hotels.jpg'
    }
];

// Travel Deals Data
const travelDeals = [
    {
        id: 1,
        title: 'Dubai Special',
        originalPrice: '$3,299',
        salePrice: '$2,199',
        discount: '33%',
        expiryDays: 5,
        image: 'assets/tours/dubai-deal.jpg'
    },
    {
        id: 2,
        title: 'London Promo',
        originalPrice: '$2,899',
        salePrice: '$1,899',
        discount: '34%',
        expiryDays: 3,
        image: 'assets/tours/london-deal.jpg'
    },
    {
        id: 3,
        title: 'Paris Escape',
        originalPrice: '$3,499',
        salePrice: '$2,399',
        discount: '31%',
        expiryDays: 7,
        image: 'assets/tours/paris-deal.jpg'
    },
    {
        id: 4,
        title: 'Maldives Honeymoon',
        originalPrice: '$4,999',
        salePrice: '$3,299',
        discount: '34%',
        expiryDays: 10,
        image: 'assets/tours/maldives-deal.jpg'
    },
    {
        id: 5,
        title: 'Egypt Adventure',
        originalPrice: '$2,499',
        salePrice: '$1,499',
        discount: '40%',
        expiryDays: 4,
        image: 'assets/tours/egypt-deal.jpg'
    },
    {
        id: 6,
        title: 'Cape Town Discount',
        originalPrice: '$2,299',
        salePrice: '$1,399',
        discount: '39%',
        expiryDays: 6,
        image: 'assets/tours/cape-town-deal.jpg'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        author: 'Chioma Adeyemi',
        country: 'Nigeria',
        rating: 5,
        text: 'GreatPoint Travels made my dream vacation to Dubai unforgettable. Excellent service from booking to return.',
        image: 'assets/testimonials/testimonial-1.jpg'
    },
    {
        id: 2,
        author: 'Olawale Okonkwo',
        country: 'Nigeria',
        rating: 5,
        text: 'Professional team, amazing deals, and seamless booking experience. Highly recommended!',
        image: 'assets/testimonials/testimonial-2.jpg'
    },
    {
        id: 3,
        author: 'Zainab Hassan',
        country: 'Ghana',
        rating: 5,
        text: 'Best travel agency ever! They organized my family trip perfectly with great attention to detail.',
        image: 'assets/testimonials/testimonial-3.jpg'
    },
    {
        id: 4,
        author: 'David Okafor',
        country: 'UK',
        rating: 5,
        text: 'Affordable prices, excellent customer support, and reliable services. Will book again!',
        image: 'assets/testimonials/testimonial-4.jpg'
    },
    {
        id: 5,
        author: 'Amina Malik',
        country: 'Canada',
        rating: 5,
        text: 'From visa assistance to complete tour packages, GreatPoint handled everything perfectly.',
        image: 'assets/testimonials/testimonial-5.jpg'
    }
];

// Airline Partners Data
const airlines = [
    {
        id: 1,
        name: 'Air Peace',
        logo: 'assets/airlines/air-peace.png',
        affiliate: 'https://airpeace.com?ref=greatpoint',
        description: 'Nigeria\'s foremost airline with excellent service and competitive rates.'
    },
    {
        id: 2,
        name: 'Ethiopian Airlines',
        logo: 'assets/airlines/ethiopian-airlines.png',
        affiliate: 'https://ethiopianairlines.com?ref=greatpoint',
        description: 'Africa\'s leading airline with extensive international network.'
    },
    {
        id: 3,
        name: 'Jetrader',
        logo: 'assets/airlines/jetrader.png',
        affiliate: 'https://jetrader.com?ref=greatpoint',
        description: 'Premium charter and scheduled flights across Africa and beyond.'
    }
];

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: 'Top 10 Places to Visit in Dubai',
        date: 'June 15, 2024',
        excerpt: 'Discover the must-see attractions in Dubai, from modern architecture to stunning beaches.',
        image: 'assets/blog/dubai-guide.jpg'
    },
    {
        id: 2,
        title: 'How to Prepare for Your Visa Interview',
        date: 'June 10, 2024',
        excerpt: 'Expert tips and guidelines to ensure a successful visa interview process.',
        image: 'assets/blog/visa-tips.jpg'
    },
    {
        id: 3,
        title: 'Best Beaches in Maldives',
        date: 'June 5, 2024',
        excerpt: 'Explore the paradise beaches of Maldives with crystal-clear waters and white sand.',
        image: 'assets/blog/maldives-beaches.jpg'
    },
    {
        id: 4,
        title: 'Travel Tips for First-Time Travelers',
        date: 'May 28, 2024',
        excerpt: 'Essential advice for making your first international trip smooth and enjoyable.',
        image: 'assets/blog/first-time-travel.jpg'
    },
    {
        id: 5,
        title: 'The Complete Guide to Obudu Mountain Resort',
        date: 'May 20, 2024',
        excerpt: 'Everything you need to know about Nigeria\'s premier mountain destination.',
        image: 'assets/blog/obudu-guide.jpg'
    },
    {
        id: 6,
        title: 'Budget Travel Hacks for Africa',
        date: 'May 12, 2024',
        excerpt: 'Smart ways to explore Africa without breaking the bank.',
        image: 'assets/blog/budget-travel.jpg'
    }
];

// FAQ Data
const faqItems = [
    {
        question: 'How do I book a trip with GreatPoint Travels?',
        answer: 'Booking is easy! Fill out our booking form with your travel details, select your preferred options, and submit. Our team will contact you within 24 hours to confirm and process your booking.'
    },
    {
        question: 'Can I pay in installments?',
        answer: 'Yes! We offer flexible payment plans. Contact our team to discuss installment options that work best for you.'
    },
    {
        question: 'Do you process visas?',
        answer: 'Absolutely! We provide comprehensive visa assistance services for all major destinations. Our team guides you through the entire visa process.'
    },
    {
        question: 'Do you arrange honeymoon trips?',
        answer: 'Yes, we specialize in romantic honeymoon packages to exotic destinations worldwide. Contact us for customized honeymoon experiences.'
    },
    {
        question: 'How long does the booking process take?',
        answer: 'The booking process typically takes 3-7 business days depending on complexity. For urgent bookings, contact us directly for expedited service.'
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'Cancellations are accepted up to 14 days before travel with a 10% administrative fee. Cancellations within 14 days may incur additional charges.'
    }
];

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
});

// Navigation Active Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll Functions
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToDestinations() {
    const destinationsSection = document.getElementById('destinations');
    destinationsSection?.scrollIntoView({ behavior: 'smooth' });
}

// Cookie Consent
const cookieConsent = document.getElementById('cookieConsent');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

function initCookieConsent() {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
        cookieConsent?.classList.add('show');
    }
}

cookieAccept?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent?.classList.remove('show');
});

cookieDecline?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent?.classList.remove('show');
});

initCookieConsent();

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCount, 50);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCount();
    });
}

// Intersect Observer for Counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'about') {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.getElementById('about') && observer.observe(document.getElementById('about'));

// Live Search
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');

const allSearchItems = [
    ...destinations.map(d => ({ name: d.name, type: 'destination' })),
    ...resorts.map(r => ({ name: r.name, type: 'resort' })),
    ...blogPosts.map(b => ({ name: b.title, type: 'blog' }))
];

searchBar?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
        searchResults?.classList.remove('active');
        return;
    }
    
    const matches = allSearchItems.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    
    if (matches.length > 0) {
        searchResults.innerHTML = matches.map(match => `
            <div class="search-result-item">
                <i class="fas fa-${match.type === 'destination' ? 'map' : match.type === 'resort' ? 'building' : 'newspaper'}"></i>
                ${match.name}
            </div>
        `).join('');
        searchResults.classList.add('active');
    } else {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        searchResults.classList.add('active');
    }
});

// Filter Destinations
function filterDestinations(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    renderDestinations(category);
}

// Render Destinations
function renderDestinations(filter = 'all') {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' 
        ? destinations 
        : destinations.filter(d => d.category.includes(filter));
    
    grid.innerHTML = filtered.map(destination => `
        <div class="destination-card" data-aos="fade-up">
            <img src="${destination.image}" alt="${destination.name}" class="destination-image" onerror="this.src='https://via.placeholder.com/300x250?text=${destination.name}'">
            <div class="destination-content">
                <h3 class="destination-name">${destination.name}</h3>
                <p class="destination-description">${destination.description}</p>
                <p class="destination-price">From ${destination.price}</p>
                <div class="destination-buttons">
                    <button class="btn btn-outline" onclick="alert('Explore ${destination.name}')">Explore</button>
                    <button class="btn btn-gold" onclick="scrollToBooking()">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    AOS.refresh();
}

// Render Resorts
function renderResorts() {
    const grid = document.getElementById('resortsGrid');
    if (!grid) return;
    
    grid.innerHTML = resorts.map(resort => `
        <div class="resort-card" data-aos="fade-up">
            <img src="${resort.image}" alt="${resort.name}" class="resort-image" onerror="this.src='https://via.placeholder.com/300x250?text=${resort.name}'">
            <div class="resort-content">
                <h3 class="resort-name">${resort.name}</h3>
                <p class="resort-description">${resort.description}</p>
                <div class="resort-facilities">
                    ${resort.facilities.map(f => `<span class="facility-badge">${f}</span>`).join('')}
                </div>
                <div class="resort-buttons">
                    <button class="btn btn-outline" onclick="alert('Explore ${resort.name}')">Explore Resort</button>
                    <button class="btn btn-gold" onclick="scrollToBooking()">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
    
    AOS.refresh();
}

// Render Blog Posts
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    grid.innerHTML = blogPosts.map(post => `
        <div class="blog-card" data-aos="fade-up">
            <img src="${post.image}" alt="${post.title}" class="blog-image" onerror="this.src='https://via.placeholder.com/300x250?text=${post.title}'">
            <div class="blog-content">
                <p class="blog-date">${post.date}</p>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
    
    AOS.refresh();
}

// Render FAQ
function renderFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    container.innerHTML = faqItems.map((item, index) => `
        <div class="faq-item" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="faq-header" onclick="toggleFAQ(this)">
                <h3 class="faq-title">${item.question}</h3>
                <span class="faq-icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="faq-content">${item.answer}</div>
        </div>
    `).join('');
    
    AOS.refresh();
}

function toggleFAQ(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
    
    if (!isActive) {
        item.classList.add('active');
    }
}

// Render Airlines
function renderAirlines() {
    const grid = document.getElementById('airlinesGrid');
    if (!grid) return;
    
    grid.innerHTML = airlines.map(airline => `
        <div class="airline-card" data-aos="fade-up">
            <div class="airline-logo">
                <img src="${airline.logo}" alt="${airline.name}" onerror="this.src='https://via.placeholder.com/200x80?text=${airline.name}'">
            </div>
            <h3 class="airline-name">${airline.name}</h3>
            <p class="airline-description">${airline.description}</p>
            <a href="${airline.affiliate}" target="_blank" class="btn btn-gold airline-btn">Visit Partner</a>
        </div>
    `).join('');
    
    AOS.refresh();
}

// Reset Booking Form
function resetBookingForm() {
    document.getElementById('bookingForm')?.reset();
}

// Initialize all renders on page load
window.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderResorts();
    renderBlog();
    renderFAQ();
    renderAirlines();
});

// Generate Booking Reference
function generateBookingReference() {
    const timestamp = Date.now().toString().slice(-5);
    const random = Math.floor(Math.random() * 900) + 100;
    return `GPT-2024-${timestamp}${random}`;
}

// Export for use in other files
window.CONFIG = CONFIG;
window.destinations = destinations;
window.resorts = resorts;
window.travelDeals = travelDeals;
window.testimonials = testimonials;
window.airlines = airlines;
window.scrollToBooking = scrollToBooking;
window.scrollToDestinations = scrollToDestinations;
window.filterDestinations = filterDestinations;
window.resetBookingForm = resetBookingForm;
window.generateBookingReference = generateBookingReference;
window.toggleFAQ = toggleFAQ;
