// Palavra em Movimento - Landing Page Scripts
(function () {
  // Respect reduced motion for any future animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }

  // Smooth scrolling for scroll indicator
  document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const aboutSection = document.querySelector('.about-section');
    
    if (scrollIndicator && aboutSection) {
      scrollIndicator.addEventListener('click', function() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    const emailInput = document.querySelector('.email-input');
    const submitButton = document.querySelector('.submit-button');

    if (contactForm && emailInput && submitButton) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
          alert('Por favor, insira seu e-mail.');
          return;
        }

        if (!isValidEmail(email)) {
          alert('Por favor, insira um e-mail válido.');
          return;
        }

        // Simulate form submission
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
          alert('Obrigado! Em breve entraremos em contato com você.');
          emailInput.value = '';
          submitButton.textContent = 'Quero Participar';
          submitButton.disabled = false;
        }, 1500);
      });

      // Handle button click as well
      submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        contactForm.dispatchEvent(new Event('submit'));
      });
    }

    // CTA Button handling
    const ctaButton = document.querySelector('.cta-button');
    const contactSection = document.querySelector('.contact-section');

    if (ctaButton && contactSection) {
      ctaButton.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Focus on email input after scrolling
        setTimeout(() => {
          const emailInput = document.querySelector('.email-input');
          if (emailInput) {
            emailInput.focus();
          }
        }, 800);
      });
    }
  });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add animation on scroll for cards (if motion is not reduced)
  if (!prefersReducedMotion) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.about-card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
      });
    });
  }
})();
