// Calendly popup functions
function openCalendlyPopup() {
    const popup = document.getElementById('calendly-popup');
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeCalendlyPopup() {
    const popup = document.getElementById('calendly-popup');
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Wait for Calendly to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if Calendly loaded after a delay
    setTimeout(function() {
        if (typeof Calendly === 'undefined') {
            console.log('Calendly failed to load, using fallback');
        } else {
            console.log('Calendly loaded successfully');
        }
    }, 3000);
});