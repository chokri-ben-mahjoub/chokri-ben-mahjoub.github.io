// ============================================================
// WhatsApp config
// ============================================================
var WHATSAPP_NUMBER = '21695636012'; // +216 95 636 012, format international sans "+"

// ============================================================
// i18n — dictionnaire de traduction FR / EN / AR
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
        'nav.education': 'Formation',
        'nav.contact': 'Contact',
        'nav.cta': 'Me contacter',

        'hero.role': 'Développeur Full Stack',
        'home.available': 'Disponible pour de nouvelles opportunités',
        'home.greeting': '👋 Bonjour, je suis',
        'home.imPrefix': 'Je suis',
        'home.typed': ['Développeur Full Stack', 'Développeur .NET / C#', 'Développeur Vue.js', 'Intégrateur Sage 100'],
        'home.desc': "Développeur Full Stack passionné par la résolution de problèmes complexes. Expérimenté en développement .NET, applications de gestion Sage et intégration de passerelles de facturation électronique connectées à TTN.",
        'home.contactBtn': 'Me contacter',
        'home.cvBtn': 'Télécharger CV',

        'about.tag': 'À propos',
        'about.title': 'Qui suis-je ?',
        'about.subtitle': 'Un aperçu rapide de mon profil et de ce qui me motive au quotidien.',
        'about.headline': 'Développeur Full Stack basé à <span>Sfax, Tunisie</span>',
        'about.desc': "Polyvalent et autonome, j'interviens aussi bien sur le frontend que le backend, en m'adaptant rapidement aux différents contextes métier et technologies. Motivé par la recherche de solutions innovantes, je m'investis pleinement dans chaque projet pour livrer des résultats concrets et de qualité.",
        'about.stat.years': "Ans d'expérience",
        'about.stat.companies': 'Entreprises',
        'about.stat.tech': 'Technologies maîtrisées',
        'about.cvBtn': 'Télécharger mon CV',
        'about.info.name': 'Nom',
        'about.info.experience': 'Expérience',
        'about.info.experienceValue': '4+ ans',
        'about.info.website': 'Site',
        'about.info.degree': 'Diplôme',
        'about.info.degreeValue': 'Master Génie Logiciel',
        'about.info.phone': 'Téléphone',
        'about.info.email': 'Email',
        'about.info.city': 'Ville',
        'about.info.cityValue': 'Sfax, Tunisie',
        'about.info.status': 'Statut',
        'about.info.statusValue': 'Disponible',

        'exp.tag': 'Parcours',
        'exp.title': 'Expérience professionnelle',
        'exp.subtitle': 'Les étapes clés de mon parcours professionnel.',
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
        'skills.subtitle': 'Les technologies et outils que j\'utilise au quotidien.',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.db': 'Bases de données',
        'skills.erp': 'ERP & Intégration',
        'skills.tools': 'Outils & DevOps',
        'skills.data': 'Data & Automatisation',

        'projects.tag': 'Réalisations',
        'projects.title': 'Projets',
        'projects.subtitle': 'Une sélection de projets sur lesquels j\'ai travaillé.',
        'projects.featured': 'Client officiel',
        'projects.srtk': 'Application web dynamique développée pour la Société Régionale de Transport de Sfax (SRTK).',
        'projects.caisse.title': 'Gestion de Caisse',
        'projects.caisse': 'Application de gestion de caisse moderne et intuitive pour optimiser les opérations de point de vente.',
        'projects.internal': 'Projet interne',
        'projects.kidtrack': 'Plateforme de gestion de garderie : suivi quotidien des enfants, présences, facturation et communication avec les parents.',
        'projects.fashionshop': 'Boutique de vêtements en ligne : panier, favoris, recherche instantanée, filtres, paiement simulé et suivi de commande.',
        'projects.urbn': 'Site e-commerce streetwear au design minimaliste et éditorial : catalogue, fiche produit, panier, tunnel de commande et espace client.',
        'projects.taskflow': 'Tableau Kanban moderne avec drag & drop, tags, sous-tâches, palette de commandes, ajout rapide en langage naturel et tâches récurrentes.',
        'projects.orvatek': "Application mobile (Flutter + Firebase) de maintenance et SAV avec trois espaces : client, technicien et admin. Suivi du technicien en direct sur carte, devis avec signature, factures PDF, notifications push et trois langues (AR/FR/EN) avec RTL.",
        'projects.flagship': 'Projet phare',
        'home.stat.years': "ans d'expérience",
        'home.stat.projects': 'projets en ligne',
        'home.stat.langs': 'langues (AR · FR · EN)',
        'home.projectsBtn': 'Voir mes projets',
        'projects.demo': 'Voir la démo',
        'projects.view': 'Voir le site',

        'edu.tag': 'Formation',
        'edu.title': 'Études & Langues',
        'edu.subtitle': 'Mon parcours académique et les langues que je parle.',
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
        'contact.subtitle': 'N\'hésitez pas à me contacter, je réponds rapidement.',
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

        'footer.text': 'Conçu & développé par',

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
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        'nav.cta': 'Contact me',

        'hero.role': 'Full Stack Developer',
        'home.available': 'Available for new opportunities',
        'home.greeting': "👋 Hi, I'm",
        'home.imPrefix': "I'm a",
        'home.typed': ['Full Stack Developer', '.NET / C# Developer', 'Vue.js Developer', 'Sage 100 Integrator'],
        'home.desc': 'Full Stack Developer passionate about solving complex problems. Experienced in .NET development, Sage management applications and integrating electronic invoicing gateways connected to TTN.',
        'home.contactBtn': 'Contact me',
        'home.cvBtn': 'Download CV',

        'about.tag': 'About',
        'about.title': 'Who am I?',
        'about.subtitle': 'A quick overview of my profile and what drives me every day.',
        'about.headline': 'Full Stack Developer based in <span>Sfax, Tunisia</span>',
        'about.desc': "Versatile and autonomous, I work on both frontend and backend, quickly adapting to different business contexts and technologies. Driven by the search for innovative solutions, I fully commit to every project to deliver concrete, quality results.",
        'about.stat.years': 'Years of experience',
        'about.stat.companies': 'Companies',
        'about.stat.tech': 'Technologies mastered',
        'about.cvBtn': 'Download my CV',
        'about.info.name': 'Name',
        'about.info.experience': 'Experience',
        'about.info.experienceValue': '4+ years',
        'about.info.website': 'Website',
        'about.info.degree': 'Degree',
        'about.info.degreeValue': "Master's in Software Engineering",
        'about.info.phone': 'Phone',
        'about.info.email': 'Email',
        'about.info.city': 'City',
        'about.info.cityValue': 'Sfax, Tunisia',
        'about.info.status': 'Status',
        'about.info.statusValue': 'Available',

        'exp.tag': 'Experience',
        'exp.title': 'Professional experience',
        'exp.subtitle': 'The key milestones of my professional journey.',
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
        'skills.subtitle': 'The technologies and tools I use every day.',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.db': 'Databases',
        'skills.erp': 'ERP & Integration',
        'skills.tools': 'Tools & DevOps',
        'skills.data': 'Data & Automation',

        'projects.tag': 'Achievements',
        'projects.title': 'Projects',
        'projects.subtitle': 'A selection of projects I have worked on.',
        'projects.featured': 'Official client',
        'projects.srtk': 'Dynamic web application developed for the Sfax Regional Transport Company (SRTK).',
        'projects.caisse.title': 'Point of Sale Management',
        'projects.caisse': 'Modern, intuitive point-of-sale management application to optimize store operations.',
        'projects.internal': 'Internal project',
        'projects.kidtrack': 'Daycare management platform: daily child tracking, attendance, billing and parent communication.',
        'projects.fashionshop': 'Online clothing store: cart, wishlist, instant search, filters, simulated payment and order tracking.',
        'projects.urbn': 'Minimalist, editorial-style streetwear e-commerce site: catalog, product page, cart, checkout flow and customer account.',
        'projects.taskflow': 'Modern Kanban board with drag & drop, tags, subtasks, command palette, natural-language quick add and recurring tasks.',
        'projects.orvatek': 'Mobile maintenance & after-sales app (Flutter + Firebase) with three spaces: customer, technician and admin. Live technician tracking on a map, signed quotes, PDF invoices, push notifications and three languages (AR/FR/EN) with RTL.',
        'projects.flagship': 'Flagship project',
        'home.stat.years': "years of experience",
        'home.stat.projects': 'live projects',
        'home.stat.langs': 'languages (AR · FR · EN)',
        'home.projectsBtn': 'View my projects',
        'projects.demo': 'View demo',
        'projects.view': 'View site',

        'edu.tag': 'Education',
        'edu.title': 'Education & Languages',
        'edu.subtitle': 'My academic background and the languages I speak.',
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
        'contact.subtitle': "Feel free to reach out, I respond quickly.",
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

        'footer.text': 'Designed & built by',

        'whatsapp.message': "Hello Chokri, I'm reaching out from your portfolio.",

        'form.notConfigured': 'Form not configured: add your Web3Forms key in index.html.',
        'form.sending': 'Sending...',
        'form.success': 'Message sent successfully, thank you!',
        'form.error': 'Failed to send, please try again later.',
        'form.networkError': 'Network error, please try again later.'
    }
,
    ar: {
        'meta.title': 'شكري بن محجوب — مطوّر Full Stack ‏.NET / Vue.js',
        'meta.description': 'الموقع الشخصي لشكري بن محجوب، مطوّر Full Stack في صفاقس، تونس. متخصص في .NET وVue.js وربط Sage 100 والفوترة الإلكترونية TTN.',

        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة عني',
        'nav.experience': 'المسار المهني',
        'nav.skills': 'المهارات',
        'nav.projects': 'المشاريع',
        'nav.education': 'التكوين',
        'nav.contact': 'اتصال',
        'nav.cta': 'تواصل معي',

        'hero.role': 'مطوّر Full Stack',
        'home.available': 'متاح لفرص جديدة',
        'home.greeting': '👋 مرحبًا، أنا',
        'home.imPrefix': 'أنا',
        'home.typed': ['مطوّر Full Stack', 'مطوّر .NET / C#', 'مطوّر Vue.js', 'مُدمج أنظمة Sage 100'],
        'home.desc': 'مطوّر Full Stack شغوف بحل المشكلات المعقدة. لدي خبرة في تطوير .NET وتطبيقات التسيير Sage وربط بوابات الفوترة الإلكترونية المتصلة بـ TTN.',
        'home.contactBtn': 'تواصل معي',
        'home.cvBtn': 'تحميل السيرة الذاتية',

        'about.tag': 'نبذة عني',
        'about.title': 'من أنا؟',
        'about.subtitle': 'لمحة سريعة عن ملفي المهني وما يحفزني كل يوم.',
        'about.headline': 'مطوّر Full Stack مقيم في <span>صفاقس، تونس</span>',
        'about.desc': 'متعدد المهارات ومستقل، أشتغل على الواجهات الأمامية والخلفية معًا وأتكيّف بسرعة مع مختلف المجالات والتقنيات. يدفعني البحث عن حلول مبتكرة، وألتزم بكل مشروع لتحقيق نتائج ملموسة وعالية الجودة.',
        'about.stat.years': 'سنوات من الخبرة',
        'about.stat.companies': 'شركات',
        'about.stat.tech': 'تقنيات متقنة',
        'about.cvBtn': 'تحميل سيرتي الذاتية',
        'about.info.name': 'الاسم',
        'about.info.experience': 'الخبرة',
        'about.info.experienceValue': 'أكثر من 4 سنوات',
        'about.info.website': 'الموقع',
        'about.info.degree': 'الشهادة',
        'about.info.degreeValue': 'ماجستير في هندسة البرمجيات',
        'about.info.phone': 'الهاتف',
        'about.info.email': 'البريد الإلكتروني',
        'about.info.city': 'المدينة',
        'about.info.cityValue': 'صفاقس، تونس',
        'about.info.status': 'الحالة',
        'about.info.statusValue': 'متاح',

        'exp.tag': 'المسار المهني',
        'exp.title': 'الخبرة المهنية',
        'exp.subtitle': 'أهم محطات مساري المهني.',
        'exp.current': 'المنصب الحالي',
        'exp.0.date': 'جانفي 2024 – إلى اليوم',
        'exp.0.role': 'مطوّر Full Stack',
        'exp.0.company': 'APBS Groupe — مدمج حلول التسيير Sage، صفاقس',
        'exp.0.b0': 'تطوير الويب بتقنية .NET ضمن منظومة Sage: تطبيقات تسيير المبيعات والمخزون والمحاسبة والإنتاج.',
        'exp.0.b1': 'إنجاز بوابة فوترة إلكترونية متصلة بـ TTN (Tunisia TradeNet).',
        'exp.0.b2': 'تصميم واجهات تفاعلية وسهلة الاستخدام باستعمال Vue.js وPrimeVue.',
        'exp.0.b3': 'التقارير باستعمال Metabase وأتمتة سير العمل باستعمال n8n.',
        'exp.1.date': 'ديسمبر 2022 – ديسمبر 2023',
        'exp.1.role': 'مطوّر Full Stack',
        'exp.1.company': 'Infotech Consulting Services (ICS)، صفاقس',
        'exp.1.b0': 'بناء واجهات REST API جديدة واختبارها والتحقق منها باستعمال Postman.',
        'exp.1.b1': 'تطوير خدمات خلفية لدعم الوظائف المهنية.',
        'exp.1.b2': 'بناء واجهات أمامية لتحسين تجربة المستخدم.',
        'exp.2.date': 'نوفمبر 2021 – سبتمبر 2022',
        'exp.2.role': 'مطوّر',
        'exp.2.company': 'Logicom، صفاقس',
        'exp.2.b0': 'متابعة شكاوى الحرفاء ومعالجتها، والتطوير على وحدات ERP (المبيعات، المخزون، الإنتاج، نقاط البيع).',
        'exp.2.b1': 'اختبار ونشر تقارير Crystal Report.',
        'exp.3.date': 'فيفري 2020 – جويلية 2020',
        'exp.3.role': 'متربّص (مشروع نهاية الدراسة)',
        'exp.3.company': 'Leader Tec Engineering، صفاقس',
        'exp.3.b0': 'تطوير تطبيق لتسيير المخزون: الموردون، طلبات الحرفاء، المنتجات، الفواتير، عروض الأسعار.',

        'skills.tag': 'المهارات',
        'skills.title': 'التقنيات المستعملة',
        'skills.subtitle': 'التقنيات والأدوات التي أستعملها يوميًا.',
        'skills.frontend': 'الواجهة الأمامية',
        'skills.backend': 'الواجهة الخلفية',
        'skills.db': 'قواعد البيانات',
        'skills.erp': 'ERP والربط',
        'skills.tools': 'الأدوات وDevOps',
        'skills.data': 'البيانات والأتمتة',

        'projects.tag': 'الإنجازات',
        'projects.title': 'المشاريع',
        'projects.subtitle': 'مجموعة مختارة من المشاريع التي اشتغلت عليها.',
        'projects.featured': 'حريف رسمي',
        'projects.srtk': 'تطبيق ويب ديناميكي تم تطويره للشركة الجهوية للنقل بصفاقس (SRTK).',
        'projects.caisse.title': 'تسيير الصندوق',
        'projects.caisse': 'تطبيق عصري وسهل الاستعمال لتسيير الصندوق لتحسين عمليات نقاط البيع.',
        'projects.internal': 'مشروع داخلي',
        'projects.kidtrack': 'منصة لتسيير الحضانة: المتابعة اليومية للأطفال والحضور والفوترة والتواصل مع الأولياء.',
        'projects.fashionshop': 'متجر ملابس إلكتروني: سلة مشتريات، مفضلة، بحث فوري، مرشحات، دفع تجريبي وتتبع الطلبات.',
        'projects.urbn': 'موقع تجارة إلكترونية لملابس الشارع بتصميم بسيط وأنيق: كتالوج، صفحة المنتج، سلة، إتمام الطلب وفضاء الحريف.',
        'projects.taskflow': 'لوحة Kanban عصرية مع السحب والإفلات، وسوم، مهام فرعية، لوحة أوامر، إضافة سريعة بلغة طبيعية ومهام متكررة.',
        'projects.orvatek': 'تطبيق موبايل (Flutter + Firebase) للصيانة وخدمة ما بعد البيع بثلاثة فضاءات: حريف وفني ومسؤول. تتبع الفني مباشرة على الخريطة، عروض أسعار بتوقيع، فواتير PDF، إشعارات فورية وثلاث لغات مع دعم RTL.',
        'projects.flagship': 'مشروع مميز',
        'home.stat.years': "سنوات من الخبرة",
        'home.stat.projects': 'مشاريع منشورة',
        'home.stat.langs': 'لغات (عربية · فرنسية · إنجليزية)',
        'home.projectsBtn': 'عرض مشاريعي',
        'projects.demo': 'عرض النسخة التجريبية',
        'projects.view': 'زيارة الموقع',

        'edu.tag': 'التكوين',
        'edu.title': 'التكوين واللغات',
        'edu.subtitle': 'مساري الدراسي واللغات التي أتحدثها.',
        'edu.0.title': 'ماجستير في نظم المعلومات وتطوير الشبكات',
        'edu.0.school': 'المعهد العالي للدراسات التكنولوجية بصفاقس — هندسة البرمجيات والتقنيات الحديثة',
        'edu.1.title': 'إجازة في الإعلامية',
        'edu.1.school': 'المعهد العالي للإعلامية والملتيميديا بصفاقس',
        'edu.2.title': 'باكالوريا شعبة الرياضيات',
        'edu.languages': 'اللغات',
        'edu.lang.ar': 'العربية',
        'edu.lang.arLevel': 'اللغة الأم',
        'edu.lang.fr': 'الفرنسية',
        'edu.lang.frLevel': 'بطلاقة',
        'edu.lang.en': 'الإنجليزية',
        'edu.lang.enLevel': 'متوسط',

        'contact.tag': 'اتصال',
        'contact.title': 'لنتحدث عن مشروعك',
        'contact.subtitle': 'لا تتردد في مراسلتي، أردّ بسرعة.',
        'contact.headline': 'لنبقَ على تواصل',
        'contact.desc': 'جدّي وحيوي، أرتاح للعمل بشكل مستقل كما ضمن فريق، وأؤمن بالفائدة المتبادلة لتعاون مستقبلي بين مؤسستكم وبيني.',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.location': 'الموقع',
        'contact.qrCaption': 'امسح الرمز للدردشة عبر واتساب',
        'contact.formTitle': 'أرسل لي رسالة',
        'contact.form.name': 'الاسم',
        'contact.form.subject': 'الموضوع',
        'contact.form.message': 'رسالتك...',
        'contact.form.send': 'إرسال الرسالة',

        'footer.text': 'تصميم وتطوير',

        'whatsapp.message': 'مرحبًا شكري، أتواصل معك من موقعك الشخصي.',

        'form.notConfigured': 'النموذج غير مهيأ: أضف مفتاح Web3Forms في index.html.',
        'form.sending': 'جارٍ الإرسال...',
        'form.success': 'تم إرسال الرسالة بنجاح، شكرًا لك!',
        'form.error': 'فشل الإرسال، حاول مرة أخرى لاحقًا.',
        'form.networkError': 'خطأ في الشبكة، حاول مرة أخرى لاحقًا.'
    }
};


// ---- theme (clair / sombre) ----
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}
(function () {
    var saved = null;
    try { saved = localStorage.getItem('site-theme'); } catch (e) { /* ignore */ }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

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
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
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
    if (langToggleEl) langToggleEl.setAttribute('data-lang', currentLang);

    updateWhatsappLinks();
    renderWhatsappQr();
    startTyped();

    try { localStorage.setItem('site-lang', currentLang); } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var sidebarOverlay = document.getElementById('sidebarOverlay');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var langToggle = document.getElementById('langToggle');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- scroll-up button + scrollspy (IntersectionObserver) ----
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.sidebar-link');

    function setActiveLink(id) {
        navLinks.forEach(function (link) {
            link.classList.toggle('active-link', link.getAttribute('data-section') === id);
        });
    }

    if ('IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) setActiveLink(entry.target.getAttribute('id'));
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
        sections.forEach(function (section) { spy.observe(section); });
    }

    function onScroll() {
        scrollUpBtn.classList.toggle('show', window.scrollY > 500);
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

    // ---- mobile sidebar toggle ----
    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
        sidebarToggle.setAttribute('aria-expanded', 'false');
    }
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
        sidebarToggle.setAttribute('aria-expanded', 'true');
    }
    sidebarToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
    });
    sidebarOverlay.addEventListener('click', closeSidebar);
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeSidebar);
    });

    // ---- hero orbit rotation ----
    var orbitRing = document.getElementById('orbitRing');
    if (orbitRing && !reduceMotion) {
        var orbitOffset = 0;
        var lastTs = null;
        function animateOrbit(ts) {
            if (lastTs == null) lastTs = ts;
            var dt = ts - lastTs;
            lastTs = ts;
            orbitOffset = (orbitOffset + dt * 0.015) % 360;
            orbitRing.style.setProperty('--orbit-offset', orbitOffset + 'deg');
            requestAnimationFrame(animateOrbit);
        }
        var orbitRaf = requestAnimationFrame(animateOrbit);
        window.addEventListener('beforeunload', function () { cancelAnimationFrame(orbitRaf); });

        // slight parallax reaction to mouse (desktop only)
        var orbitWrap = document.getElementById('orbitWrap');
        if (orbitWrap && window.matchMedia('(pointer: fine)').matches) {
            document.querySelector('.hero').addEventListener('mousemove', function (e) {
                var rect = orbitWrap.getBoundingClientRect();
                var cx = rect.left + rect.width / 2;
                var cy = rect.top + rect.height / 2;
                var dx = (e.clientX - cx) / rect.width;
                var dy = (e.clientY - cy) / rect.height;
                orbitWrap.style.transform = 'translate(' + (dx * 10).toFixed(1) + 'px,' + (dy * 10).toFixed(1) + 'px)';
            });
        }
    }

    // ---- tilt + spotlight micro-interaction on [data-tilt] cards (desktop only) ----
    if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
        var tiltEls = document.querySelectorAll('[data-tilt]');
        tiltEls.forEach(function (el) {
            el.addEventListener('mousemove', function (e) {
                var rect = el.getBoundingClientRect();
                var px = (e.clientX - rect.left) / rect.width;
                var py = (e.clientY - rect.top) / rect.height;
                var maxTilt = 6;
                el.style.setProperty('--rx', ((0.5 - py) * maxTilt * 2).toFixed(2) + 'deg');
                el.style.setProperty('--ry', ((px - 0.5) * maxTilt * 2).toFixed(2) + 'deg');
                el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
                el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
            });
            el.addEventListener('mouseleave', function () {
                el.style.setProperty('--rx', '0deg');
                el.style.setProperty('--ry', '0deg');
            });
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

    // ---- theme toggle ----
    var themeToggle = document.getElementById('themeToggle');
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try { localStorage.setItem('site-theme', next); } catch (e) { /* ignore */ }
        });
    }

    // ---- language toggle ----
    if (langToggle) {
        langToggle.addEventListener('click', function (e) {
            var opt = e.target.closest('.lang-option');
            if (opt) { applyLanguage(opt.getAttribute('data-lang')); return; }
            var order = ['fr', 'en', 'ar'];
            applyLanguage(order[(order.indexOf(currentLang) + 1) % order.length]);
        });
    }

    var savedLang = null;
    try { savedLang = localStorage.getItem('site-lang'); } catch (e) { /* ignore */ }
    applyLanguage(translations[savedLang] ? savedLang : 'fr');

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
