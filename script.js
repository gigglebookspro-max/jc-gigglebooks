// Template URLs - Replace these with your actual Canva template links
const templateUrls = {
    alphabet: 'https://www.canva.com/design/your-alphabet-template-id/edit',
    shapes: 'https://www.canva.com/design/your-shapes-template-id/edit',
    counting: 'https://www.canva.com/design/your-counting-template-id/edit',
    weather: 'https://www.canva.com/design/your-weather-template-id/edit',
    dressup: 'https://www.canva.com/design/your-dressup-template-id/edit',
    lacing: 'https://www.canva.com/design/your-lacing-template-id/edit',
    texture: 'https://www.canva.com/design/your-texture-template-id/edit',
    memory: 'https://www.canva.com/design/your-memory-template-id/edit',
    patterns: 'https://www.canva.com/design/your-patterns-template-id/edit',
    tracing: 'https://www.canva.com/design/your-tracing-template-id/edit',
    colors: 'https://www.canva.com/design/your-colors-template-id/edit',
    ocean: 'https://www.canva.com/design/your-ocean-template-id/edit',
    farm: 'https://www.canva.com/design/your-farm-template-id/edit',
    clock: 'https://www.canva.com/design/your-clock-template-id/edit',
    emotions: 'https://www.canva.com/design/your-emotions-template-id/edit'
};

function openCanvaTemplate(activityType) {
    const url = templateUrls[activityType];
    if (url) {
        const button = event.target;
        const originalText = button.innerHTML;
        button.innerHTML = '🚀 Opening...';
        button.style.transform = 'scale(0.95)';
        
        window.open(url, '_blank');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.transform = 'scale(1)';
        }, 1000);
    } else {
        alert('Template URL not configured yet! Please update the templateUrls object with your Canva template links.');
    }
}

function processPayment() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '🔄 Processing...';
    button.disabled = true;
    
    // Replace 'DSoon744' with your actual PayPal username
    const paypalMeUrl = 'https://paypal.me/DSoon744/499';
    
    setTimeout(() => {
        window.open(paypalMeUrl, '_blank');
        
        button.innerHTML = originalText;
        button.disabled = false;
        
        showPaymentMessage();
        
        setTimeout(() => {
            unlockContent();
        }, 5000);
    }, 1000);
}

function showPaymentMessage() {
    const message = document.createElement('div');
    message.className = 'fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    message.innerHTML = '🚀 Redirecting to PayPal...';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function unlockContent() {
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successMessage.innerHTML = '🎉 Payment successful! Welcome to GiggleBooks!';
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const canvaButtons = document.querySelectorAll('.canva-btn');
    canvaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('pulse-animation');
        });
        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse-animation');
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.activity-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});