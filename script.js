document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var menu = document.querySelector('.navbar .menu');
    var menuBtn = document.querySelector('.menu-btn');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var cursorGlow = document.querySelector('.cursor-glow');

    // ---- sticky navbar + scroll-up button + active link ----
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.menu-link');

    function onScroll() {
        var y = window.scrollY;
        navbar.classList.toggle('sticky', y > 20);
        scrollUpBtn.classList.toggle('show', y > 500);

        var current = '';
        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            if (y >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active-link', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // ---- footer year ----
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---- scroll-up button click ----
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- mobile menu toggle ----
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-xmark');
    });
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });

    // ---- cursor glow (desktop only) ----
    if (window.matchMedia('(pointer: fine)').matches && cursorGlow) {
        document.addEventListener('mousemove', function (e) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ---- typing animation ----
    if (window.Typed) {
        new Typed('.typing', {
            strings: ['Développeur Full Stack', 'Développeur .NET / C#', 'Développeur Vue.js', 'Intégrateur Sage 100'],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1500,
            loop: true
        });
    }

    // ---- reveal on scroll ----
    var revealEls = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function (el) { observer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }

    // ---- contact form (Web3Forms) ----
    var form = document.getElementById('contactForm');
    var result = document.getElementById('formResult');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var submitBtn = form.querySelector('button[type="submit"]');
            var formData = new FormData(form);
            var accessKey = formData.get('access_key');

            if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
                result.textContent = "Formulaire non configuré : ajoute ta clé Web3Forms dans index.html.";
                result.className = 'error';
                return;
            }

            submitBtn.disabled = true;
            result.textContent = 'Envoi en cours...';
            result.className = '';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                    if (data.success) {
                        result.textContent = 'Message envoyé avec succès, merci !';
                        result.className = 'success';
                        form.reset();
                    } else {
                        result.textContent = data.message || "Échec de l'envoi, réessaie plus tard.";
                        result.className = 'error';
                    }
                })
                .catch(function () {
                    result.textContent = 'Erreur réseau, réessaie plus tard.';
                    result.className = 'error';
                })
                .finally(function () {
                    submitBtn.disabled = false;
                });
        });
    }
});
