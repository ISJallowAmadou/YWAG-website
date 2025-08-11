// Form validation function
function validateForm(formId, successMessage) {
  const form = document.getElementById(formId);
  const messageEl = form.querySelector('.form-message');
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = '#e74c3c';
    } else {
      field.style.borderColor = '';
    }
  });

  if (!isValid) {
    messageEl.textContent = 'Please fill out all required fields.';
    messageEl.className = 'form-message error';
    return false;
  }

  messageEl.textContent = successMessage;
  messageEl.className = 'form-message success';
  form.reset();

  return false; // Prevent actual submission for demo
}

// Initialize form event listeners and mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Join form
  const joinForm = document.querySelector('.join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', e => {
      e.preventDefault();
      validateForm('joinForm', 'Your membership application was submitted successfully!');
    });
  }

  // Submissions form
  const submissionsForm = document.querySelector('.submissions-form');
  if (submissionsForm) {
    submissionsForm.addEventListener('submit', e => {
      e.preventDefault();
      validateForm('submissionsForm', 'Your work has been submitted. Thank you!');
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const message = document.getElementById('formMessage');
      message.textContent = '✅ Your message has been sent successfully!';
      message.className = 'form-message success';
      contactForm.reset();

      setTimeout(() => {
        message.textContent = '';
        message.className = 'form-message';
      }, 5000);
    });
  }

  // Mobile menu toggle
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (burgerMenu && navMenu) {
    const toggleMenu = () => {
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    burgerMenu.addEventListener('click', toggleMenu);

    // Close menu on nav link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close menu if clicking outside menu and burger
    document.addEventListener('click', e => {
      if (
        navMenu.classList.contains('active') &&
        !e.target.closest('.nav-menu') &&
        !e.target.closest('.burger-menu')
      ) {
        toggleMenu();
      }
    });
  }
});

