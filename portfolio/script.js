(() => {
  const doc = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  body.classList.add("reveal-ready");

  const translations = {
    en: {
      metaTitle: "Elvis Tezen | Data Engineer & Software Developer",
      metaDescription:
        "Professional portfolio of Elvis Tezen, Data Engineer and Software Developer specialized in Python, SQL/PLSQL, Azure, Oracle, .NET and Angular.",
      ogDescription: "Data engineering, automation, enterprise backend and scalable solutions on Azure, Oracle and .NET.",
      skipLink: "Skip to content",
      navAria: "Primary navigation",
      brandAria: "Go to home",
      navIconAria: "Go to technology stack",
      navIconAlt: "Developer coding icon",
      menuToggle: "Open menu",
      languageToggleLabel: "Switch language to Spanish",
      navHome: "Home",
      navProfile: "Profile",
      navStack: "Stack",
      navExperience: "Experience",
      navProjects: "Projects",
      navEducation: "Education",
      navContact: "Contact",
      heroEyebrow: "Data Engineer / Software Developer",
      heroRole: "Data Engineer | Python, SQL/PLSQL and Azure",
      heroLead:
        "I build data and software solutions for demanding enterprise environments, combining automation, .NET/C# backend, relational databases and deployments focused on quality, consistency and scalability.",
      heroActionsAria: "Primary actions",
      btnContact: "Contact me",
      heroChipsAria: "Core technologies",
      portraitAria: "Photo and contact details",
      portraitAlt: "Professional portrait of Elvis Tezen Villanueva",
      location: "Lima, Peru",
      signalAria: "Professional highlights",
      signalBankLabel: "Banking and insurance",
      signalBankText: "Experience in critical sectors",
      signalDataLabel: "Data",
      signalDataText: "Extraction, validation and reporting",
      signalBackendText: ".NET/C#, Oracle and SQL/PLSQL",
      signalCloudText: "Azure and Azure Data Factory",
      profileEyebrow: "Professional profile",
      profileTitle: "Data engineering with product judgment",
      profileTextOne:
        "I am a Data Engineer and Software Developer focused on extracting, validating, processing and analyzing information on SQL engines. I have worked on banking and insurance projects, building scripts, improving backend processes and working with scalable solutions on .NET, Oracle, Azure and relational databases.",
      profileTextTwo:
        "My profile combines development, automation and data focus: I translate technical processes into maintainable, consistent solutions prepared to operate in enterprise contexts.",
      valueOneTitle: "Reliable data",
      valueOneText: "Extraction, validation, information treatment, queries and optimization over relational databases.",
      valueTwoTitle: "Enterprise backend",
      valueTwoText: ".NET/C# solutions integrated with Oracle, SQL/PLSQL and business rules on transactional flows.",
      valueThreeTitle: "Automation",
      valueThreeText: "Scripts, reporting, technical processes and services that reduce manual work and improve consistency.",
      stackEyebrow: "Technology stack",
      stackTitle: "Real technologies from my experience",
      stackIntro: "Tools and platforms consolidated through data, backend, cloud, frontend and mobile application projects.",
      stackLanguages: "Languages and scripting",
      stackDataTitle: "Data and engineering",
      chipExtraction: "Data extraction",
      chipValidation: "Data validation",
      chipAutomation: "Automation",
      chipTreatment: "Information treatment",
      chipSqlOptimization: "SQL optimization",
      chipRelational: "Relational databases",
      stackCloudTitle: "Cloud and platform",
      stackToolsTitle: "Tools",
      experienceEyebrow: "Professional experience",
      experienceTitle: "Applied work in banking, insurance and enterprise software",
      timelineAria: "Professional timeline",
      materiaRole: "Programmer Analyst",
      materiaBulletOne: "Updated data access libraries in .NET/C# backend integrated with Oracle.",
      materiaBulletTwo: "Handled SCTR product incidents with SQL/PLSQL, Oracle and business validations.",
      materiaBulletThree: "Optimized backend processes and controllers to improve response time, maintainability and consistency.",
      materiaBulletFour: "Led the initial frontend migration stage toward Angular 21 with JavaScript/TypeScript.",
      softtekCompany: "Softtek Peru",
      softtekBulletOne: "Performed extraction, loading and validation of information with SQL/PLSQL and Oracle.",
      softtekBulletTwo: "Developed analysis and reporting scripts with Python and SQL for operational tracking.",
      softtekBulletThree: "Maintained enterprise solutions on .NET/C# with automation and business logic.",
      softtekBulletFour: "Participated in solutions for Banco Santander Peru with Azure and Angular/JavaScript components.",
      softtekBulletFive: "Developed mobile apps for Autoplan with Dart/Flutter and a Windows service in .NET/C#.",
      unprgOffice: "UNPRG Agreements Office",
      unprgRole: "Programmer",
      unprgBulletOne: "Organized agreement requests for Universidad Nacional Pedro Ruiz Gallo.",
      unprgBulletTwo: "Analyzed requirements and user stories for institutional communication solutions.",
      unprgBulletThree: "Proposed solutions to expose the university's international agreements.",
      projectsEyebrow: "Projects and specialties",
      projectsTitle: "Value blocks built from real experience",
      specialtyLabel: "Specialty",
      projectOneTitle: "Data engineering and reporting",
      projectOneText: "Extraction, validation, analysis, scripting, reporting and information treatment for technical operations.",
      projectTwoText: "Controllers, backend processes, SQL/PLSQL, query stability and enterprise business logic.",
      projectThreeText: "Pipelines, triggers, activities, linked services, datasets, data flows and Integration Runtime.",
      projectFourTitle: "Modern frontend",
      projectFourText: "Work with Angular, JavaScript and TypeScript for migrations and sustainable web components.",
      appsEyebrow: "Apps listed in CV",
      appsTitle: "Mobile applications",
      appOne: "Philosophical quotes app | 2022 | Play Store",
      appTwo: "Movie listings app | 2023 | Play Store",
      appThree: "University agreements app | 2021 | Not published due to permissions",
      appFour: "ChatGPT clone app | 2023 | Not published",
      educationEyebrow: "Education",
      educationTitle: "Academic foundation and applied learning",
      educationOneTitle: "Bachelor's Degree in Computer and Information Engineering",
      educationOneText: "Universidad Nacional Pedro Ruiz Gallo, Lambayeque.",
      educationTwoTitle: "Microservices in .NET 6 and Azure",
      languagesLabel: "Languages",
      educationThreeTitle: "Native Spanish and advanced English",
      educationThreeText: "Technical communication and collaboration in professional contexts.",
      contactEyebrow: "Contact",
      contactTitle: "Let's build solutions with data, backend and automation",
      contactIntro:
        "I am ready to discuss opportunities where I can contribute experience in SQL/PLSQL, Python, Azure, Oracle, .NET and enterprise software development.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      footerText: "Software, data and automation with professional precision.",
      backTop: "Back to top"
    },
    es: {
      metaTitle: "Elvis Tezen | Data Engineer & Software Developer",
      metaDescription:
        "Portfolio profesional de Elvis Tezen, Data Engineer y Software Developer especializado en Python, SQL/PLSQL, Azure, Oracle, .NET y Angular.",
      ogDescription: "Ingeniería de datos, automatización, backend empresarial y soluciones escalables sobre Azure, Oracle y .NET.",
      skipLink: "Saltar al contenido",
      navAria: "Navegación principal",
      brandAria: "Ir al inicio",
      navIconAria: "Ir al stack tecnológico",
      navIconAlt: "Ícono de programador escribiendo código",
      menuToggle: "Abrir menú",
      languageToggleLabel: "Cambiar idioma a inglés",
      navHome: "Inicio",
      navProfile: "Perfil",
      navStack: "Stack",
      navExperience: "Experiencia",
      navProjects: "Proyectos",
      navEducation: "Formación",
      navContact: "Contacto",
      heroEyebrow: "Ingeniero de Datos / Desarrollador de Software",
      heroRole: "Data Engineer | Python, SQL/PLSQL y Azure",
      heroLead:
        "Desarrollo soluciones de datos y software para entornos empresariales exigentes, combinando automatización, backend .NET/C#, bases de datos relacionales y despliegues orientados a calidad, consistencia y escalabilidad.",
      heroActionsAria: "Acciones principales",
      btnContact: "Contactarme",
      heroChipsAria: "Tecnologías principales",
      portraitAria: "Foto y datos de contacto",
      portraitAlt: "Retrato profesional de Elvis Tezen Villanueva",
      location: "Lima, Perú",
      signalAria: "Resumen profesional destacado",
      signalBankLabel: "Banca y seguros",
      signalBankText: "Experiencia en sectores críticos",
      signalDataLabel: "Datos",
      signalDataText: "Extracción, validación y reporting",
      signalBackendText: ".NET/C#, Oracle y SQL/PLSQL",
      signalCloudText: "Azure y Azure Data Factory",
      profileEyebrow: "Perfil profesional",
      profileTitle: "Ingeniería de datos con criterio de producto",
      profileTextOne:
        "Soy Data Engineer y Software Developer orientado a la extracción, validación, procesamiento y análisis de información sobre motores SQL. He participado en proyectos para banca y seguros, desarrollando scripts, mejorando procesos backend y trabajando con soluciones escalables sobre .NET, Oracle, Azure y bases de datos relacionales.",
      profileTextTwo:
        "Mi perfil combina desarrollo, automatización y foco en datos: traduzco procesos técnicos en soluciones mantenibles, consistentes y preparadas para operar en contextos empresariales.",
      valueOneTitle: "Datos confiables",
      valueOneText: "Extracción, validación, tratamiento de información, consultas y optimización sobre bases relacionales.",
      valueTwoTitle: "Backend empresarial",
      valueTwoText: "Soluciones .NET/C# integradas con Oracle, SQL/PLSQL y reglas de negocio sobre flujos transaccionales.",
      valueThreeTitle: "Automatización",
      valueThreeText: "Scripts, reporting, procesos técnicos y servicios para reducir trabajo manual y elevar consistencia.",
      stackEyebrow: "Stack tecnológico",
      stackTitle: "Tecnologías reales de mi experiencia",
      stackIntro: "Herramientas y plataformas consolidadas desde proyectos de datos, backend, cloud, frontend y aplicaciones móviles.",
      stackLanguages: "Lenguajes y scripting",
      stackDataTitle: "Datos e ingeniería",
      chipExtraction: "Extracción de datos",
      chipValidation: "Validación de datos",
      chipAutomation: "Automatización",
      chipTreatment: "Tratamiento de información",
      chipSqlOptimization: "Optimización SQL",
      chipRelational: "Bases relacionales",
      stackCloudTitle: "Cloud y plataforma",
      stackToolsTitle: "Herramientas",
      experienceEyebrow: "Experiencia profesional",
      experienceTitle: "Trabajo aplicado en banca, seguros y software empresarial",
      timelineAria: "Línea de tiempo profesional",
      materiaRole: "Analista Programador",
      materiaBulletOne: "Actualicé librerías de acceso a datos en backend .NET/C# integradas con Oracle.",
      materiaBulletTwo: "Atendí incidentes del producto SCTR con SQL/PLSQL, Oracle y validaciones de negocio.",
      materiaBulletThree: "Optimicé procesos y controladores backend para mejorar respuesta, mantenibilidad y consistencia.",
      materiaBulletFour: "Lideré la etapa inicial de migración frontend hacia Angular 21 con JavaScript/TypeScript.",
      softtekCompany: "Softtek Perú",
      softtekBulletOne: "Realicé extracción, carga y validación de información con SQL/PLSQL y Oracle.",
      softtekBulletTwo: "Desarrollé scripts de análisis y reporting con Python y SQL para seguimiento operativo.",
      softtekBulletThree: "Mantuve soluciones empresariales sobre .NET/C# con automatización y lógica de negocio.",
      softtekBulletFour: "Participé en soluciones para Banco Santander Perú con Azure y componentes Angular/JavaScript.",
      softtekBulletFive: "Desarrollé apps móviles para Autoplan con Dart/Flutter y un servicio Windows en .NET/C#.",
      unprgOffice: "Oficina de Convenios UNPRG",
      unprgRole: "Programador",
      unprgBulletOne: "Organicé solicitudes de convenios de la Universidad Nacional Pedro Ruiz Gallo.",
      unprgBulletTwo: "Analicé requerimientos e historias de usuario para soluciones de divulgación institucional.",
      unprgBulletThree: "Propuse soluciones para exponer convenios internacionales de la universidad.",
      projectsEyebrow: "Proyectos y especialidades",
      projectsTitle: "Bloques de valor construidos desde experiencia real",
      specialtyLabel: "Especialidad",
      projectOneTitle: "Ingeniería de datos y reporting",
      projectOneText: "Extracción, validación, análisis, scripting, reporting y tratamiento de información para operación técnica.",
      projectTwoText: "Controladores, procesos backend, SQL/PLSQL, estabilidad de consultas y lógica de negocio empresarial.",
      projectThreeText: "Pipelines, triggers, activities, linked services, datasets, data flows e Integration Runtime.",
      projectFourTitle: "Frontend moderno",
      projectFourText: "Trabajo con Angular, JavaScript y TypeScript para migraciones y componentes web sostenibles.",
      appsEyebrow: "Apps registradas en CV",
      appsTitle: "Aplicaciones móviles",
      appOne: "App de frases filosóficas | 2022 | Play Store",
      appTwo: "App de cartelera de películas | 2023 | Play Store",
      appThree: "App de convenios universitarios | 2021 | No publicada por permisos",
      appFour: "App clon de ChatGPT | 2023 | No publicada",
      educationEyebrow: "Formación",
      educationTitle: "Base académica y aprendizaje aplicado",
      educationOneTitle: "Bachiller en Ingeniería en Computación e Informática",
      educationOneText: "Universidad Nacional Pedro Ruiz Gallo, Lambayeque.",
      educationTwoTitle: "Microservicios en .NET 6 y Azure",
      languagesLabel: "Idiomas",
      educationThreeTitle: "Español nativo e inglés avanzado",
      educationThreeText: "Comunicación técnica y colaboración en contextos profesionales.",
      contactEyebrow: "Contacto",
      contactTitle: "Construyamos soluciones con datos, backend y automatización",
      contactIntro:
        "Estoy listo para conversar sobre oportunidades donde pueda aportar experiencia en SQL/PLSQL, Python, Azure, Oracle, .NET y desarrollo de software empresarial.",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      footerText: "Software, datos y automatización con precisión profesional.",
      backTop: "Volver arriba"
    }
  };

  const languageToggle = document.querySelector("#languageToggle");
  const languageCurrent = document.querySelector("[data-lang-current]");
  const languageNext = document.querySelector("[data-lang-next]");
  const languageStorageKey = "elvis-portfolio-language";
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  const getStoredLanguage = () => {
    try {
      return localStorage.getItem(languageStorageKey);
    } catch {
      return null;
    }
  };
  const storedLanguage = getStoredLanguage();
  let currentLanguage = urlLanguage === "es" || urlLanguage === "en" ? urlLanguage : storedLanguage === "es" ? "es" : "en";

  const applyLanguage = (language, persist = true) => {
    const dictionary = translations[language] || translations.en;
    currentLanguage = language;
    doc.lang = language;
    body.dataset.language = language;
    document.title = dictionary.metaTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) element.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key]) element.setAttribute("alt", dictionary[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const key = element.dataset.i18nContent;
      if (dictionary[key]) element.setAttribute("content", dictionary[key]);
    });

    if (languageToggle && languageCurrent && languageNext) {
      const nextLanguage = language === "en" ? "es" : "en";
      languageCurrent.textContent = language.toUpperCase();
      languageNext.textContent = nextLanguage.toUpperCase();
      languageToggle.setAttribute("aria-label", dictionary.languageToggleLabel);
      languageToggle.setAttribute("title", dictionary.languageToggleLabel);
    }

    if (persist) {
      try {
        localStorage.setItem(languageStorageKey, language);
      } catch {
        /* Language still changes for the current session if storage is unavailable. */
      }
    }
  };

  languageToggle?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "es" : "en");
  });

  applyLanguage(currentLanguage, false);

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#navMenu");
  const navLinks = [...document.querySelectorAll(".nav-link")];

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    };

    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      navMenu.classList.toggle("is-open", !open);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
    );
    sections.forEach((section) => activeObserver.observe(section));
  }

  const cursorLight = document.querySelector(".cursor-light");
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let cursorFrame = null;

  const moveCursorLight = () => {
    cursorFrame = null;
    if (cursorLight) {
      cursorLight.style.transform = `translate3d(${cursorX - 260}px, ${cursorY - 260}px, 0)`;
    }
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") return;
      body.classList.add("has-pointer");
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (!cursorFrame) cursorFrame = requestAnimationFrame(moveCursorLight);
    },
    { passive: true }
  );

  if (!reducedMotion) {
    const cards = [...document.querySelectorAll(".tilt-card")];
    cards.forEach((card) => {
      let tiltFrame = null;
      let nextX = 0;
      let nextY = 0;
      let glowX = 50;
      let glowY = 0;

      const applyTilt = () => {
        tiltFrame = null;
        card.style.setProperty("--tilt-x", `${nextY}deg`);
        card.style.setProperty("--tilt-y", `${nextX}deg`);
        card.style.setProperty("--card-x", `${glowX}%`);
        card.style.setProperty("--card-y", `${glowY}%`);
      };

      card.addEventListener(
        "pointermove",
        (event) => {
          if (event.pointerType === "touch") return;
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          nextX = (x - 0.5) * 8;
          nextY = (0.5 - y) * 8;
          glowX = x * 100;
          glowY = y * 100;
          if (!tiltFrame) tiltFrame = requestAnimationFrame(applyTilt);
        },
        { passive: true }
      );

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--card-x", "50%");
        card.style.setProperty("--card-y", "0%");
      });
    });

    const magneticItems = [...document.querySelectorAll(".magnetic")];
    magneticItems.forEach((item) => {
      item.addEventListener(
        "pointermove",
        (event) => {
          if (event.pointerType === "touch") return;
          const rect = item.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          item.style.transform = `translate3d(${x * 0.09}px, ${y * 0.16}px, 0)`;
        },
        { passive: true }
      );

      item.addEventListener("pointerleave", () => {
        item.style.transform = "";
      });
    });
  }

  const canvas = document.querySelector("#networkCanvas");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx || reducedMotion) return;

  let width = 0;
  let height = 0;
  let ratio = 1;
  let particles = [];
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

  const palette = [
    "rgba(47, 255, 208, 0.72)",
    "rgba(255, 209, 102, 0.62)",
    "rgba(167, 139, 250, 0.52)",
    "rgba(98, 168, 255, 0.48)"
  ];

  const createParticle = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.34,
    vy: (Math.random() - 0.5) * 0.34,
    radius: Math.random() * 1.7 + 0.7,
    color: palette[Math.floor(Math.random() * palette.length)]
  });

  const resizeCanvas = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const targetCount = Math.min(72, Math.max(28, Math.floor((width * height) / 22000)));
    particles = Array.from({ length: targetCount }, createParticle);
  };

  const drawLine = (a, b, distance, maxDistance) => {
    const opacity = (1 - distance / maxDistance) * 0.34;
    ctx.strokeStyle = `rgba(47, 255, 208, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(7, 9, 15, 0.08)";
    ctx.fillRect(0, 0, width, height);

    const maxDistance = width < 720 ? 104 : 138;

    particles.forEach((particle, index) => {
      if (pointer.active) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 150 && distance > 0.01) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.018;
          particle.vy += (dy / distance) * force * 0.018;
        }
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.992;
      particle.vy *= 0.992;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < maxDistance) drawLine(particle, other, distance, maxDistance);
      }

      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    if (pointer.active) {
      ctx.strokeStyle = "rgba(255, 209, 102, 0.16)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 96, 0, Math.PI * 2);
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
})();
