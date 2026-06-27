// Live Travel Deals with Countdown
function renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;
    
    grid.innerHTML = travelDeals.map((deal, index) => `
        <div class="deal-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <img src="${deal.image}" alt="${deal.title}" class="deal-image" onerror="this.src='https://via.placeholder.com/300x200?text=${deal.title}'">
            <div class="deal-badge">${deal.discount} OFF</div>
            <div class="deal-content">
                <h3 class="deal-title">${deal.title}</h3>
                <div class="deal-prices">
                    <span class="original-price">${deal.originalPrice}</span>
                    <span class="sale-price">${deal.salePrice}</span>
                </div>
                <div class="deal-countdown" id="countdown-${deal.id}">
                    <div class="countdown-item">
                        <div class="countdown-number" id="days-${deal.id}">0</div>
                        <div class="countdown-label">Days</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="hours-${deal.id}">0</div>
                        <div class="countdown-label">Hours</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="mins-${deal.id}">0</div>
                        <div class="countdown-label">Mins</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="secs-${deal.id}">0</div>
                        <div class="countdown-label">Secs</div>
                    </div>
                </div>
                <button class="btn btn-gold deal-btn" onclick="bookDeal('${deal.title}')">Book Now</button>
            </div>
        </div>
    `).join('');
    
    // Start countdowns
    travelDeals.forEach(deal => {
        startCountdown(deal.id, deal.expiryDays);
    });
    
    AOS.refresh();
}

function startCountdown(dealId, expiryDays) {
    const expiryTime = new Date().getTime() + (expiryDays * 24 * 60 * 60 * 1000);
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = expiryTime - now;
        
        if (distance < 0) {
            document.getElementById(`countdown-${dealId}`).innerHTML = '<p>Deal Expired</p>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById(`days-${dealId}`).textContent = days;
        document.getElementById(`hours-${dealId}`).textContent = hours;
        document.getElementById(`mins-${dealId}`).textContent = mins;
        document.getElementById(`secs-${dealId}`).textContent = secs;
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function bookDeal(dealTitle) {
    document.getElementById('destination').value = dealTitle;
    scrollToBooking();
}

// Initialize deals on page load
window.addEventListener('DOMContentLoaded', renderDeals);
