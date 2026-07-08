// ============================================================
// WhatsApp config
// ============================================================
var WHATSAPP_NUMBER = '21695636012'; // +216 95 636 012, format international sans "+"

// ============================================================
// i18n — dictionnaire de traduction FR / EN
// ============================================================
var translations = {
    fr: {
        'meta.title': 'Chokri Ben Mahjoub — Développeur Full Stack .NET / Vue.js',
        'meta.description': "Portfolio de Chokri Ben Mahjoub, Développeur Full Stack à Sfax, Tunisie. Spécialisé en .NET, Vue.js, intégration Sage 100 et facturation électronique TTN.",

        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.experience': 'Parcours',
        'nav.skills': 'Compétences',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'nav.cta': 'Me contacter',

        'home.greeting': '👋 Bonjour, je suis',
        'home.imPrefix': 'Je suis',
        'home.typed': ['Développeur Full Stack', 'Développeur .NET / C#', 'Développeur Vue.js', 'Intégrateur Sage 100'],
        'home.desc': "Développeur Full Stack passionné par la résolution de problèmes complexes. Expérimenté en développement .NET, applications de gestion Sage et intégration de passerelles de facturation électronique connectées à TTN.",
        'home.contactBtn': 'Me contacter',
        'home.cvBtn': 'Télécharger CV',

        'about.tag': 'À propos',
        'about.title': 'Qui suis-je ?',
        'about.headline': 'Développeur Full Stack basé à <span>Sfax, Tunisie</span>',
        'about.desc': "Polyvalent et autonome, j'interviens aussi bien sur le frontend que le backend, en m'adaptant rapidement aux différents contextes métier et technologies. Motivé par la recherche de solutions innovantes, je m'investis pleinement dans chaque projet pour livrer des résultats concrets et de qualité.",
        'about.stat.years': "Ans d'expérience",
        'about.stat.companies': 'Entreprises',
        'about.stat.tech': 'Technologies maîtrisées',
        'about.cvBtn': 'Télécharger mon CV',

        'exp.tag': 'Parcours',
        'exp.title': 'Expérience professionnelle',
        'exp.current': 'Poste actuel',
        'exp.0.date': 'Janv. 2024 – Présent',
        'exp.0.role': 'Développeur Full Stack',
        'exp.0.company': 'APBS Groupe — Intégrateur de Solutions de Gestion Sage, Sfax',
        'exp.0.b0': 'Développement web .NET au sein du secteur Sage : applications de gestion commerciale, stock, comptabilité, production.',
        'exp.0.b1': "Implémentation d'une passerelle de facturation électronique connectée à TTN (Tunisia TradeNet).",
        'exp.0.b2': "Conception d'interfaces interactives et ergonomiques avec Vue.js et PrimeVue.",
        'exp.0.b3': 'Reporting avec Metabase et automatisation des workflows avec n8n.',
        'exp.1.date': 'Déc. 2022 – Déc. 2023',
        'exp.1.role': 'Développeur Full Stack',
        'exp.1.company': 'Infotech Consulting Services (ICS), Sfax',
        'exp.1.b0': 'Création de nouvelles API REST, tests et validation avec Postman.',
        'exp.1.b1': 'Développement de services backend pour supporter les fonctionnalités métier.',
        'exp.1.b2': "Création d'interfaces frontend pour améliorer l'expérience utilisateur.",
        'exp.2.date': 'Nov. 2021 – Sep. 2022',
        'exp.2.role': 'Développeur',
        'exp.2.company': 'Logicom, Sfax',
        'exp.2.b0': 'Suivi et traitement des réclamations clients, développement sur les modules ERP (gestion commerciale, stocks, production, caisse).',
        'exp.2.b1': "Tests et déploiement d'états Crystal Report.",
        'exp.3.date': 'Fév. 2020 – Juil. 2020',
        'exp.3.role': 'Stagiaire (Projet de fin d\'études)',
        'exp.3.company': 'Leader Tec Engineering, Sfax',
        'exp.3.b0': "Développement d'une application de gestion de stock : fournisseurs, commandes clients, produits, factures, devis.",

        'skills.tag': 'Compétences',
        'skills.title': 'Stack technique',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.db': 'Bases de données',
        'skills.erp': 'ERP &amp; Intégration',
        'skills.tools': 'Outils &amp; DevOps',
        'skills.data': 'Data &amp; Automatisation',

        'projects.tag': 'Réalisations',
        'projects.title': 'Projets',
        'projects.srtk': 'Application web dynamique développée pour la Société Régionale de Transport de Sfax (SRTK).',
        'projects.bhub': 'Solution complémentaire à Sage 100 Gestion Commerciale offrant un accès moderne, ergonomique et sécurisé pour digitaliser les processus de vente.',
        'projects.caisse.title': 'Gestion de Caisse',
        'projects.caisse': 'Application de gestion de caisse moderne et intuitive pour optimiser les opérations de point de vente.',
        'projects.internal': 'Projet interne',
        'projects.kidtrack': 'Plateforme de gestion de garderie : suivi quotidien des enfants, présences, facturation et communication avec les parents.',
        'projects.view': 'Voir le site',

        'edu.tag': 'Formation',
        'edu.title': 'Études &amp; Langues',
        'edu.0.title': 'Master en Développement des Systèmes Informatiques et Réseaux',
        'edu.0.school': 'ISET Sfax — Génie Logiciel et Nouvelles Technologies',
        'edu.1.title': 'Licence Fondamentale en Informatique',
        'edu.1.school': 'ISIMS Sfax — Institut Supérieur d\'Informatique et Multimédia',
        'edu.2.title': 'Baccalauréat en Mathématiques',
        'edu.languages': 'Langues',
        'edu.lang.ar': 'Arabe',
        'edu.lang.arLevel': 'Langue maternelle',
        'edu.lang.fr': 'Français',
        'edu.lang.frLevel': 'Courant',
        'edu.lang.en': 'Anglais',
        'edu.lang.enLevel': 'Intermédiaire',

        'contact.tag': 'Contact',
        'contact.title': 'Discutons de votre projet',
        'contact.headline': 'Restons en contact',
        'contact.desc': "Rigoureux, dynamique, aussi à l'aise en autonomie qu'en équipe, je suis convaincu du bénéfice mutuel d'une future collaboration entre votre entreprise et moi.",
        'contact.email': 'Email',
        'contact.phone': 'Téléphone',
        'contact.location': 'Localisation',
        'contact.qrCaption': 'Scannez pour discuter sur WhatsApp',
        'contact.formTitle': 'Envoyez-moi un message',
        'contact.form.name': 'Nom',
        'contact.form.subject': 'Objet',
        'contact.form.message': 'Votre message...',
        'contact.form.send': 'Envoyer le message',

        'footer.text': 'Conçu &amp; développé par',

        'whatsapp.message': 'Bonjour Chokri, je vous contacte depuis votre portfolio.',

        'form.notConfigured': 'Formulaire non configuré : ajoute ta clé Web3Forms dans index.html.',
        'form.sending': 'Envoi en cours...',
        'form.success': 'Message envoyé avec succès, merci !',
        'form.error': "Échec de l'envoi, réessaie plus tard.",
        'form.networkError': 'Erreur réseau, réessaie plus tard.'
    },
    en: {
        'meta.title': 'Chokri Ben Mahjoub — Full Stack Developer .NET / Vue.js',
        'meta.description': 'Portfolio of Chokri Ben Mahjoub, Full Stack Developer based in Sfax, Tunisia. Specialized in .NET, Vue.js, Sage 100 integration and TTN electronic invoicing.',

        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.cta': 'Contact me',

        'home.greeting': "👋 Hi, I'm",
        'home.imPrefix': "I'm a",
        'home.typed': ['Full Stack Developer', '.NET / C# Developer', 'Vue.js Developer', 'Sage 100 Integrator'],
        'home.desc': 'Full Stack Developer passionate about solving complex problems. Experienced in .NET development, Sage management applications and integrating electronic invoicing gateways connected to TTN.',
        'home.contactBtn': 'Contact me',
        'home.cvBtn': 'Download CV',

        'about.tag': 'About',
        'about.title': 'Who am I?',
        'about.headline': 'Full Stack Developer based in <span>Sfax, Tunisia</span>',
        'about.desc': "Versatile and autonomous, I work on both frontend and backend, quickly adapting to different business contexts and technologies. Driven by the search for innovative solutions, I fully commit to every project to deliver concrete, quality results.",
        'about.stat.years': 'Years of experience',
        'about.stat.companies': 'Companies',
        'about.stat.tech': 'Technologies mastered',
        'about.cvBtn': 'Download my CV',

        'exp.tag': 'Experience',
        'exp.title': 'Professional experience',
        'exp.current': 'Current position',
        'exp.0.date': 'Jan. 2024 – Present',
        'exp.0.role': 'Full Stack Developer',
        'exp.0.company': 'APBS Groupe — Sage Management Solutions Integrator, Sfax',
        'exp.0.b0': 'Web development in .NET within the Sage ecosystem: sales, inventory, accounting and production management applications.',
        'exp.0.b1': 'Implementation of an electronic invoicing gateway connected to TTN (Tunisia TradeNet).',
        'exp.0.b2': 'Designing interactive, ergonomic interfaces with Vue.js and PrimeVue.',
        'exp.0.b3': 'Reporting with Metabase and workflow automation with n8n.',
        'exp.1.date': 'Dec. 2022 – Dec. 2023',
        'exp.1.role': 'Full Stack Developer',
        'exp.1.company': 'Infotech Consulting Services (ICS), Sfax',
        'exp.1.b0': 'Building new REST APIs, testing and validation with Postman.',
        'exp.1.b1': 'Developing backend services to support business features.',
        'exp.1.b2': 'Building frontend interfaces to improve user experience.',
        'exp.2.date': 'Nov. 2021 – Sep. 2022',
        'exp.2.role': 'Developer',
        'exp.2.company': 'Logicom, Sfax',
        'exp.2.b0': 'Follow-up and handling of customer complaints, development on ERP modules (sales, inventory, production, POS).',
        'exp.2.b1': 'Testing and deployment of Crystal Report statements.',
        'exp.3.date': 'Feb. 2020 – Jul. 2020',
        'exp.3.role': 'Intern (Final year project)',
        'exp.3.company': 'Leader Tec Engineering, Sfax',
        'exp.3.b0': 'Development of an inventory management application: suppliers, customer orders, products, invoices, quotes.',

        'skills.tag': 'Skills',
        'skills.title': 'Tech stack',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.db': 'Databases',
        'skills.erp': 'ERP &amp; Integration',
        'skills.tools': 'Tools &amp; DevOps',
        'skills.data': 'Data &amp; Automation',

        'projects.tag': 'Achievements',
        'projects.title': 'Projects',
        'projects.srtk': 'Dynamic web application developed for the Sfax Regional Transport Company (SRTK).',
        'projects.bhub': 'Complementary solution to Sage 100 Gestion Commerciale offering modern, ergonomic and secure access to digitalize sales processes.',
        'projects.caisse.title': 'Point of Sale Management',
        'projects.caisse': 'Modern, intuitive point-of-sale management application to optimize store operations.',
        'projects.internal': 'Internal project',
        'projects.kidtrack': 'Daycare management platform: daily child tracking, attendance, billing and parent communication.',
        'projects.view': 'View site',

        'edu.tag': 'Education',
        'edu.title': 'Education &amp; Languages',
        'edu.0.title': "Master's in Information Systems and Network Development",
        'edu.0.school': 'ISET Sfax — Software Engineering and New Technologies',
        'edu.1.title': "Bachelor's Degree in Computer Science",
        'edu.1.school': 'ISIMS Sfax — Higher Institute of Computer Science and Multimedia',
        'edu.2.title': 'Baccalaureate in Mathematics',
        'edu.languages': 'Languages',
        'edu.lang.ar': 'Arabic',
        'edu.lang.arLevel': 'Native language',
        'edu.lang.fr': 'French',
        'edu.lang.frLevel': 'Fluent',
        'edu.lang.en': 'English',
        'edu.lang.enLevel': 'Intermediate',

        'contact.tag': 'Contact',
        'contact.title': "Let's discuss your project",
        'contact.headline': "Let's stay in touch",
        'contact.desc': "Rigorous, dynamic, equally comfortable working independently or in a team, I'm confident in the mutual benefit of a future collaboration between your company and me.",
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.qrCaption': 'Scan to chat on WhatsApp',
        'contact.formTitle': 'Send me a message',
        'contact.form.name': 'Name',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your message...',
        'contact.form.send': 'Send message',

        'footer.text': 'Designed &amp; built by',

        'whatsapp.message': "Hello Chokri, I'm reaching out from your portfolio.",

        'form.notConfigured': 'Form not configured: add your Web3Forms key in index.html.',
        'form.sending': 'Sending...',
        'form.success': 'Message sent successfully, thank you!',
        'form.error': 'Failed to send, please try again later.',
        'form.networkError': 'Network error, please try again later.'
    }
};

var currentLang = 'fr';
var typedInstance = null;

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

function buildWhatsappUrl() {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(t('whatsapp.message'));
}

function renderWhatsappQr() {
    var qrEl = document.getElementById('whatsappQr');
    if (!qrEl || !window.QRCode) return;
    qrEl.innerHTML = '';
    new QRCode(qrEl, {
        text: buildWhatsappUrl(),
        width: 128,
        height: 128,
        colorDark: '#0a0e17',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
    });
}

function updateWhatsappLinks() {
    var url = buildWhatsappUrl();
    document.querySelectorAll('.js-whatsapp-link, #whatsappFloat').forEach(function (el) {
        el.setAttribute('href', url);
    });
}

function startTyped() {
    if (!window.Typed) return;
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed('.typing', {
        strings: t('home.typed'),
        typeSpeed: 60,
        backSpeed: 35,
        backDelay: 1500,
        loop: true
    });
}

function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'fr';
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');
    var metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('.lang-toggle .lang-option').forEach(function (el) {
        el.classList.toggle('active', el.getAttribute('data-lang') === currentLang);
    });
    var langToggleEl = document.getElementById('langToggle');
    if (langToggleEl) langToggleEl.classList.toggle('is-en', currentLang === 'en');

    updateWhatsappLinks();
    renderWhatsappQr();
    startTyped();

    try { localStorage.setItem('site-lang', currentLang); } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var menu = document.querySelector('.navbar .menu');
    var menuBtn = document.querySelector('.menu-btn');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var cursorGlow = document.querySelector('.cursor-glow');
    var langToggle = document.getElementById('langToggle');

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

    // ---- language toggle ----
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
        });
    }

    var savedLang = null;
    try { savedLang = localStorage.getItem('site-lang'); } catch (e) { /* ignore */ }
    applyLanguage(savedLang === 'en' ? 'en' : 'fr');

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
                result.textContent = t('form.notConfigured');
                result.className = 'error';
                return;
            }

            submitBtn.disabled = true;
            result.textContent = t('form.sending');
            result.className = '';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                    if (data.success) {
                        result.textContent = t('form.success');
                        result.className = 'success';
                        form.reset();
                    } else {
                        result.textContent = data.message || t('form.error');
                        result.className = 'error';
                    }
                })
                .catch(function () {
                    result.textContent = t('form.networkError');
                    result.className = 'error';
                })
                .finally(function () {
                    submitBtn.disabled = false;
                });
        });
    }
});
