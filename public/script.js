/**
 * script.js - Interactividad Vanilla JavaScript optimizada
 * Perfil: Docente Universitario, Consultor EdTech y Director Académico
 * Cumplimiento WCAG 2.1 AA sin librerías pesadas
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initMobileMenu();
  initWorkshopsAccordion();
  initContactFormValidation();
});

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden');
  });
}

function initWorkshopsAccordion() {
  const accordionButtons = document.querySelectorAll('.accordion-btn');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const contentId = btn.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      const icon = btn.querySelector('.accordion-icon');

      if (!content) return;

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.textContent = '+';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.textContent = '−';
      }
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

function initContactFormValidation() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success-box');
  const errorBanner = document.getElementById('form-error-banner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const nameInput = document.getElementById('fullName');
    const nameErr = document.getElementById('fullName-err');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      showError(nameInput, nameErr, 'Ingrese su nombre y apellidos (mínimo 3 caracteres).');
      isValid = false;
    } else {
      clearError(nameInput, nameErr);
    }

    const emailInput = document.getElementById('institutionEmail');
    const emailErr = document.getElementById('institutionEmail-err');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailErr, 'Ingrese un correo electrónico válido (ej. nombre@universidad.edu).');
      isValid = false;
    } else {
      clearError(emailInput, emailErr);
    }

    const instInput = document.getElementById('institutionName');
    const instErr = document.getElementById('institutionName-err');
    if (!instInput.value.trim()) {
      showError(instInput, instErr, 'Indique el nombre de su institución u organización.');
      isValid = false;
    } else {
      clearError(instInput, instErr);
    }

    const roleInput = document.getElementById('roleTitle');
    const roleErr = document.getElementById('roleTitle-err');
    if (!roleInput.value.trim()) {
      showError(roleInput, roleErr, 'Indique su cargo o función académica.');
      isValid = false;
    } else {
      clearError(roleInput, roleErr);
    }

    const msgInput = document.getElementById('message');
    const msgErr = document.getElementById('message-err');
    if (!msgInput.value.trim() || msgInput.value.trim().length < 20) {
      showError(msgInput, msgErr, 'Por favor detalle su solicitud con al menos 20 caracteres.');
      isValid = false;
    } else {
      clearError(msgInput, msgErr);
    }

    const termsInput = document.getElementById('termsAccepted');
    const termsErr = document.getElementById('termsAccepted-err');
    if (!termsInput.checked) {
      termsErr.textContent = 'Debe autorizar el tratamiento confidencial de los datos.';
      termsErr.classList.remove('hidden');
      isValid = false;
    } else {
      termsErr.classList.add('hidden');
    }

    if (!isValid) {
      if (errorBanner) errorBanner.classList.remove('hidden');
      return;
    }

    if (errorBanner) errorBanner.classList.add('hidden');

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando requerimiento...';
    }

    setTimeout(() => {
      form.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');
    }, 800);
  });
}

function showError(input, errorElement, message) {
  input.classList.add('border-red-500');
  input.setAttribute('aria-invalid', 'true');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
  }
}

function clearError(input, errorElement) {
  input.classList.remove('border-red-500');
  input.removeAttribute('aria-invalid');
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
  }
}
