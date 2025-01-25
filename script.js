// script.js

// Intersection Observer to animate sections/elements on scroll
const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // add the "show" class to trigger CSS transition
        entry.target.classList.add('show');
        // we can unobserve once it's shown
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe each element with data-animate
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
  