// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update active navigation link
    function updateActiveNavLink() {
        let currentSection = '';
        
        // Find the current section based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for fixed nav
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
        });
        
        // Add active class to current section link
        if (currentSection) {
            const activeLink = document.querySelector(`.nav__link[href="#${currentSection}"]`);
            if (activeLink) {
                activeLink.classList.add('nav__link--active');
            }
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Update on page load
    updateActiveNavLink();
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.nav__hamburger');
    
    if (mobileMenu.style.display === 'flex') {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.nav__hamburger');
    
    if (mobileMenu && hamburger) {
        mobileMenu.style.display = 'flex';
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.nav__hamburger');
    
    if (mobileMenu && hamburger) {
        mobileMenu.style.display = 'none';
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}