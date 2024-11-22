document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const body = document.documentElement; // Change to documentElement instead of body
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    body.setAttribute('data-theme', currentTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        let switchToTheme = body.getAttribute('data-theme') === 'dark' 
                           ? 'light' 
                           : 'dark';
        
        body.setAttribute('data-theme', switchToTheme);
        localStorage.setItem('theme', switchToTheme);
        
        // Update particles color based on theme
        if (window.pJSDom && window.pJSDom[0]) {
            const particles = window.pJSDom[0].pJS.particles;
            particles.color.value = switchToTheme === 'dark' ? '#ffffff' : '#000000';
            particles.line_linked.color = switchToTheme === 'dark' ? '#ffffff' : '#000000';
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                out_mode: 'out'
            }
        }
    });

    const youtubeBtn = document.querySelector('.youtube-btn');
    const channelUrl = 'https://www.youtube.com/@learnsmartmaths';
    
    youtubeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(channelUrl, '_blank');
    });

    // Load the YouTube video
    loadYouTubeVideo();
});

function sendWhatsAppMessage() {
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('select').value;
    const message = document.querySelector('textarea').value;

    // Construct the message
    const whatsappMessage = 
        `Name: ${firstName} ${lastName}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Subject: ${subject}%0A` +
        `Message: ${message}`;

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/918104077997?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}