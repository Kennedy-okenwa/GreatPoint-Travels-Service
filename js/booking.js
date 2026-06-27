// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Honeypot field check
        if (bookingForm.website.value) {
            console.log('Spam detected');
            return;
        }
        
        // Collect form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            departure: document.getElementById('departure').value,
            destination: document.getElementById('destination').value,
            travelType: document.getElementById('travelType').value,
            departureDate: document.getElementById('departureDate').value,
            returnDate: document.getElementById('returnDate').value,
            adults: document.getElementById('adults').value,
            children: document.getElementById('children').value,
            infants: document.getElementById('infants').value,
            travelClass: document.getElementById('travelClass').value,
            airline: document.getElementById('airline').value,
            hotelRating: document.getElementById('hotelRating').value,
            visaRequired: document.getElementById('visaRequired').value,
            passportReady: document.getElementById('passportReady').value,
            budget: document.getElementById('budget').value,
            specialRequests: document.getElementById('specialRequests').value,
            bookingReference: generateBookingReference(),
            timestamp: new Date().toISOString()
        };
        
        // Store booking locally
        localStorage.setItem('lastBooking', JSON.stringify(formData));
        
        try {
            // Send to Brevo
            await sendBookingNotification(formData);
            
            // Redirect to payment or thank you page
            window.location.href = `thank-you.html?ref=${formData.bookingReference}`;
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('There was an error processing your booking. Please try again.');
        }
    });
}

// Send Booking Notification via Brevo
async function sendBookingNotification(formData) {
    try {
        // Send to Brevo (placeholder - requires backend)
        const response = await fetch('/.netlify/functions/send-booking-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                booking: formData,
                customerEmail: formData.email,
                businessEmail: CONFIG.business.email
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send booking notification');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Brevo notification error:', error);
        // Continue even if email fails
    }
}

// Validate Travel Date
const departureDate = document.getElementById('departureDate');
const returnDate = document.getElementById('returnDate');

if (departureDate) {
    departureDate.addEventListener('change', () => {
        const depDate = new Date(departureDate.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (depDate < today) {
            departureDate.value = '';
            alert('Please select a future date');
            return;
        }
        
        if (returnDate) {
            returnDate.min = departureDate.value;
        }
    });
}

// Validate Return Date
if (returnDate) {
    returnDate.addEventListener('change', () => {
        const depDate = new Date(departureDate.value);
        const retDate = new Date(returnDate.value);
        
        if (retDate <= depDate) {
            returnDate.value = '';
            alert('Return date must be after departure date');
            return;
        }
    });
}

// Format phone number
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 13) {
            value = value.slice(0, 13);
        }
        e.target.value = value ? '+' + value : '';
    });
}

// Validate form before submit
function validateBookingForm() {
    const requiredFields = [
        'fullName', 'email', 'phone', 'country', 
        'departure', 'destination', 'travelType',
        'departureDate', 'adults', 'travelClass'
    ];
    
    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element || !element.value.trim()) {
            alert(`Please fill in all required fields`);
            return false;
        }
    }
    
    return true;
}
