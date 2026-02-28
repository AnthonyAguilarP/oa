// Mobile Menu Toggle, Carousel, Tabs, Gallery Filter and Lightbox
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set active link on page load

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Reset currentSlide if out of bounds
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Next slide function
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous slide function
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event listeners for buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Auto slide function
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Reset interval function
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    // Start the carousel if it exists
    if (slides.length > 0) {
        startSlideInterval();
    }

    // Services Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentLightboxIndex = 0;
    let visibleGalleryItems = [];

    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Get all currently visible gallery items
            visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
            
            // Find index of clicked item in visible items
            const visibleIndex = visibleGalleryItems.indexOf(item);
            currentLightboxIndex = visibleIndex;
            
            // Set lightbox image and caption
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const location = item.querySelector('p').textContent;
            
            lightboxImg.src = img.src;
            lightboxCaption.textContent = `${title} - ${location}`;
            
            // Show lightbox
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }

    // Navigate lightbox
    if (lightboxPrev && lightboxNext) {
        lightboxPrev.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
            updateLightbox();
        });
        
        lightboxNext.addEventListener('click', () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length;
            updateLightbox();
        });
    }

    // Update lightbox content
    function updateLightbox() {
        const item = visibleGalleryItems[currentLightboxIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const location = item.querySelector('p').textContent;
        
        lightboxImg.src = img.src;
        lightboxCaption.textContent = `${title} - ${location}`;
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            } else if (e.key === 'ArrowLeft') {
                currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryItems.length;
                updateLightbox();
            }
        }
    });

    // Language Switching Functionality
    console.log("[v0] Initializing language switching functionality");
    const languageBtns = document.querySelectorAll('.language-btn');
    console.log("[v0] Found " + languageBtns.length + " language buttons");
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            console.log("[v0] Language button clicked, lang:", lang);
            console.log("[v0] changeLanguage type:", typeof changeLanguage);
            if (typeof changeLanguage === 'function') {
                console.log("[v0] Calling changeLanguage with lang:", lang);
                changeLanguage(lang);
            } else {
                console.log("[v0] ERROR: changeLanguage is not a function!");
            }
        });
    });

    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    console.log("[v0] Saved language preference:", savedLanguage);
    if (typeof changeLanguage === 'function') {
        console.log("[v0] Initializing with language:", savedLanguage);
        changeLanguage(savedLanguage);
    } else {
        console.log("[v0] ERROR: changeLanguage function not found!");
    }
});