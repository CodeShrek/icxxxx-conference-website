document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect & ScrollSpy ---
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        const sections = document.querySelectorAll('section, header, footer');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                if (id) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    // --- Countdown Timer (Set to April 1, 2026) ---
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        // Updated deadline to April 01, 2026
        const deadline = new Date("Apr 01, 2026 23:59:59").getTime();
        
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const t = deadline - now;
            
            if (t < 0) {
                clearInterval(timer);
                timerElement.innerHTML = "SUBMISSION CLOSED";
                return;
            }

            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((t % (1000 * 60)) / 1000);
            
            timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }, 1000);
    }

    // --- Intersection Observer for Fade-in Animations ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});