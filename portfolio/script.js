(() => {
  const doc = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  body.classList.add("reveal-ready");

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
