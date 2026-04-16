document.addEventListener('DOMContentLoaded', () => {
  
  // Navbar blur effect on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
      navbar.style.background = 'rgba(250, 249, 246, 0.95)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.background = 'rgba(250, 249, 246, 0.85)';
    }
  });

  // Filter Pill buttons toggling
  const pillBtns = document.querySelectorAll('.pill-btn');
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  // Search Button Simulation
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const originalText = searchBtn.innerHTML;
    
    // Simulate API lookup
    searchBtn.innerHTML = '<span class="loader" style="display:inline-block; border: 2px solid white; border-top: 2px solid transparent; border-radius: 50%; width: 1rem; height: 1rem; animation: spin 1s linear infinite;"></span> Mapping...';
    searchBtn.style.opacity = '0.8';

    setTimeout(() => {
      searchBtn.innerHTML = 'Locations Found!';
      searchBtn.style.background = 'var(--green)';
      
      // Reset after showing success
      setTimeout(() => {
        searchBtn.innerHTML = originalText;
        searchBtn.style.background = '';
        searchBtn.style.opacity = '1';
        
        // Scroll to directory
        document.getElementById('directory').scrollIntoView({ behavior: 'smooth' });
      }, 1500);
      
    }, 1200);
  });

  // Newsletter Form Simulation
  const ctaForm = document.querySelector('.cta-form');
  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = ctaForm.querySelector('button');
    const input = ctaForm.querySelector('input');
    
    button.innerHTML = 'Subscribed! 🐾';
    button.style.background = 'var(--green)';
    input.value = '';
    
    setTimeout(() => {
      button.innerHTML = 'Subscribe Now';
      button.style.background = '';
    }, 3000);
  });
  
});

// Adding spin animation to document stylesheet dynamically
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
