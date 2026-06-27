// Newsletter Subscription Handler
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value;
        
        try {
            // Send to Brevo via your backend
            const response = await fetch('/.netlify/functions/subscribe-newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    listId: CONFIG.brevo.listId
                })
            });
            
            if (response.ok) {
                newsletterMessage.textContent = '✓ Thank you for subscribing!';
                newsletterMessage.className = 'newsletter-message success';
                newsletterForm.reset();
                
                setTimeout(() => {
                    newsletterMessage.textContent = '';
                    newsletterMessage.className = 'newsletter-message';
                }, 3000);
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            newsletterMessage.textContent = '✗ Error subscribing. Please try again.';
            newsletterMessage.className = 'newsletter-message error';
            
            setTimeout(() => {
                newsletterMessage.textContent = '';
                newsletterMessage.className = 'newsletter-message';
            }, 3000);
        }
    });
}
