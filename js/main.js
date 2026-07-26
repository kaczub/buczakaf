

/* ─── Split into two columns, balancing height ────────────── */
(function splitGrid() {
  document.querySelectorAll('.gallery-grid').forEach((grid) => {
    const items = [...grid.children].filter((el) => el.matches('.photo'));
    if (items.length < 2) return;

    const tall = [];
    const wide = [];

    items.forEach((el) => {
      const img = el.querySelector('img');
      const w = Number(img?.getAttribute('width')) || 1;
      const h = Number(img?.getAttribute('height')) || 1;
      el.dataset.ratio = h / w;
      (h > w * 1.1 ? tall : wide).push(el);
    });

    const mixed = [];
    let ti = 0, wi = 0;
    while (ti < tall.length || wi < wide.length) {
      if (ti < tall.length) mixed.push(tall[ti++]);
      if (wi < wide.length) mixed.push(wide[wi++]);
    }

    const colA = document.createElement('div');
    colA.className = 'gallery-col';
    const colB = document.createElement('div');
    colB.className = 'gallery-col';
    let hA = 0, hB = 0;

    mixed.forEach((el) => {
      const ratio = Number(el.dataset.ratio) || 1;
      if (hA <= hB) { colA.appendChild(el); hA += ratio; }
      else { colB.appendChild(el); hB += ratio; }
    });

    grid.replaceChildren(colA, colB);
  });
})();

/* ─── Back to top ──────────────────────────────────────────── */
const backTop = document.querySelector('.back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 300);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Language switcher ────────────────────────────────────── */
const translations = {
  common: {
    metaTitle: {
      pl: "buczakaf — Fotograf",
      en: "buczakaf — Photographer",
    },
    navPortfolio: { pl: "Portfolio", en: "Portfolio" },
    navAbout: { pl: "O mnie", en: "About" },
    photographerLabel: { pl: "Fotograf", en: "Photographer" },
    footerCopyright: { pl: "&copy; 2026 buczakaf. Wszelkie prawa zastrzeżone.", en: "&copy; 2026 buczakaf. All rights reserved." },
    langSwitcherLabel: { pl: "Przełącznik języka", en: "Language switcher" },
    menuOpenLabel: { pl: "Otwórz menu", en: "Open menu" },
    menuCloseLabel: { pl: "Zamknij menu", en: "Close menu" },
    backToTopLabel: { pl: "Wróć na górę", en: "Back to top" },
    lightboxImageAlt: { pl: "Powiększone zdjęcie", en: "Enlarged image" },
    lightboxCloseLabel: { pl: "Zamknij", en: "Close" },
    lightboxPrevLabel: { pl: "Poprzednie", en: "Previous" },
    lightboxNextLabel: { pl: "Następne", en: "Next" },
    navContact: { pl: "Kontakt", en: "Contact" },
  },
  home: {
    metaTitle: {
      pl: "buczakaf — Fotograf",
      en: "buczakaf — Photographer",
    },
    heroTitle: { pl: "Fotografia koncertowa i reportażowa", en: "Concert & documentary photography" },
    heroSubtitle: { pl: "Fotograf", en: "Photographer" },
    worksKicker: { pl: "Portfolio", en: "Portfolio" },
    worksTitle: { pl: "Moje prace", en: "My work" },
    filterAll: { pl: "Wszystkie", en: "All" },
    filterDni2026: { pl: "Dni Jarosławia 2026", en: "Dni Jarosławia 2026" },
    filterJuwenalia: { pl: "Juwenalia Jarosław 2026", en: "Juwenalia Jarosław 2026" },
    filterSpiewogranie: { pl: "Śpiewogranie 2026", en: "Śpiewogranie 2026" },
    filterDni2025: { pl: "Dni Jarosławia 2025", en: "Dni Jarosławia 2025" },
    filterSesja: { pl: "Sesje", en: "Sessions" },
    eventNameDniJaroslawia2026: { pl: "Dni Jarosławia 2026", en: "Dni Jarosławia 2026" },
    eventNameDniJaroslawia2025: { pl: "Dni Jarosławia 2025", en: "Dni Jarosławia 2025" },
    eventNameSesja: { pl: "Sesje — Medeis 2025", en: "Sessions — Medeis 2025" },
    eventNameSesja2026: { pl: "Sesje — Medeis 2026", en: "Sessions — Medeis 2026" },
    eventNameSpiewogranie: { pl: "Śpiewogranie 2026", en: "Śpiewogranie 2026" },
    eventNameJuwenalia: { pl: "Juwenalia Jarosław 2026", en: "Juwenalia Jarosław 2026" },

  },
  contact: {
    metaTitle: {
      pl: "Kontakt — buczakaf",
      en: "Contact — buczakaf",
    },
    contactPageKicker: { pl: "Kontakt", en: "Contact" },
    contactPageTitle: { pl: "Napisz do mnie", en: "Contact me" },
    contactIG: { pl: "Instagram", en: "Instagram" },
    contactEmail: { pl: "Email", en: "Email" },
  },
  about: {
    metaTitle: {
      pl: "O mnie — buczakaf",
      en: "About — buczakaf",
    },
    aboutHeader: { pl: "O mnie", en: "About" },
    aboutKicker: {
      pl: "Fotograf koncertowy",
      en: "Concert photographer",
    },
    aboutP1: {
      pl: "Cześć, mam na imię Kamil. Jestem pasjonatem fotografii, informatyki i muzyki oraz komputerowym geekiem. Zdjęcia robię od kwietnia 2024 roku, a moją największą pasją są koncerty i wydarzenia na żywo. To właśnie pod sceną najlepiej czuję energię kadru i potrafię złapać prawdziwe emocje chwili.",
      en: "Hi, I'm Kamil. I'm passionate about photography, computer science, music, and I'm a total computer geek. I've been taking photos since April 2024, and my greatest passion is concerts and live events. It's under the stage where I feel the energy of the frame and capture the real emotions of the moment.",
    },
    aboutP2: {
      pl: '<p class="about-events-head">Wydarzenia, które uwieczniłem:</p><ul class="about-list"><li>Dni Jarosławia (2025, 2026)</li><li><a href="https://www.instagram.com/juwenalia_pans_jaroslaw/" target="_blank" rel="noopener">III Jarosławskie Juwenalia PANS</a></li><li>Służba medialna na <a href="https://lednica.zhr.pl" target="_blank" rel="noopener">HSL Lednica</a></li><li>Służba medialna w <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1. Jarosławskiej Drużynie Harcerzy „Pościg”</a></li><li>Stała współpraca z zespołem <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a></li></ul><p class="about-cta">Chcesz zdjęcia ze swojego koncertu, festiwalu lub wydarzenia? <a href="kontakt.html">Napisz!</a></p>',
      en: "<p class=\"about-events-head\">Events I've captured:</p><ul class=\"about-list\"><li>Dni Jarosławia (2025, 2026)</li><li><a href=\"https://www.instagram.com/juwenalia_pans_jaroslaw/\" target=\"_blank\" rel=\"noopener\">III Jarosławskie Juwenalia PANS</a></li><li>Media service at <a href=\"https://lednica.zhr.pl\" target=\"_blank\" rel=\"noopener\">HSL Lednica</a></li><li>Media service at <a href=\"https://www.instagram.com/1jdh_poscig/\" target=\"_blank\" rel=\"noopener\">1st Jarosław Scout Troop \"Pościg\"</a></li><li>Ongoing collaboration with <a href=\"https://www.instagram.com/medeis_officiall/\" target=\"_blank\" rel=\"noopener\">Medeis</a></li></ul><p class=\"about-cta\">Want photos from your concert, festival, or event? <a href=\"kontakt.html\">Contact me!</a></p>",
    },
    gearHeader: { pl: "Mój sprzęt", en: "My gear" },
    gearCamera: {
      pl: "Sony A6400 + SIGMA 18-50mm F2.8",
      en: "Sony A6400 + SIGMA 18-50mm F2.8",
    },
    gearHelios: {
      pl: "Helios 58mm f/2",
      en: "Helios 58mm f/2",
    },
    gearMac: { pl: "Mac Mini M4", en: "Mac Mini M4" },
    gearThinkPad: {
      pl: "ThinkPad T490",
      en: "ThinkPad T490",
    },
    workflowHeader: { pl: "Praca i edycja", en: "Work and editing" },
    workflowLightroom: { pl: "Lightroom Classic", en: "Lightroom Classic" },
    workflowPhotoshop: { pl: "Photoshop", en: "Photoshop" },
  },
};

const pageKey = document.body?.dataset.page;
const preferredLang = localStorage.getItem("site-lang") || document.documentElement.lang || "pl";

function getTranslation(key, lang) {
  const pageTranslations = pageKey ? translations[pageKey] || {} : {};
  return pageTranslations[key]?.[lang] || translations.common[key]?.[lang] || null;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("site-lang", lang);

  const titleText = getTranslation("metaTitle", lang);
  if (titleText) document.title = titleText;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = getTranslation(key, lang);
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    const value = getTranslation(key, lang);
    if (value) node.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    const value = getTranslation(key, lang);
    if (value) node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    const value = getTranslation(key, lang);
    if (value && !node.dataset.altOverride) node.setAttribute("alt", value);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateNavToggleLabel();
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function updateNavToggleLabel() {
  if (!navToggle) return;

  const isOpen = mobileMenu?.classList.contains("open");
  const labelKey = isOpen ? "menuCloseLabel" : "menuOpenLabel";
  const label = getTranslation(labelKey, document.documentElement.lang);

  if (label) {
    navToggle.setAttribute("aria-label", label);
  }

  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
}

function closeMobileMenu() {
  if (!mobileMenu) return;

  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  updateNavToggleLabel();
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !mobileMenu.classList.contains("open");

    mobileMenu.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
    updateNavToggleLabel();
  });

  mobileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("open")) return;
    if (navToggle.contains(event.target)) return;
    if (mobileMenu.contains(event.target)) return;
    closeMobileMenu();
  });

  mobileMenu.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

applyLanguage(preferredLang);

function clampChannel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function rgbaString(rgb, alpha) {
  return `rgba(${clampChannel(rgb.r)}, ${clampChannel(rgb.g)}, ${clampChannel(rgb.b)}, ${alpha})`;
}

function scaleColor(rgb, factor) {
  return {
    r: clampChannel(rgb.r * factor),
    g: clampChannel(rgb.g * factor),
    b: clampChannel(rgb.b * factor),
  };
}

function mixColor(rgb, target, amount) {
  return {
    r: rgb.r + (target.r - rgb.r) * amount,
    g: rgb.g + (target.g - rgb.g) * amount,
    b: rgb.b + (target.b - rgb.b) * amount,
  };
}

function readImageColor(img) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;

  const sampleWidth = 28;
  const sampleHeight = 28;
  canvas.width = sampleWidth;
  canvas.height = sampleHeight;

  try {
    context.drawImage(img, 0, 0, sampleWidth, sampleHeight);
    const { data } = context.getImageData(0, 0, sampleWidth, sampleHeight);

    let r = 0;
    let g = 0;
    let b = 0;
    let weight = 0;

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3] / 255;
      if (alpha < 0.1) continue;

      const pixelWeight = ((data[i] + data[i + 1] + data[i + 2]) / 3) / 255 + 0.35;
      r += data[i] * pixelWeight;
      g += data[i + 1] * pixelWeight;
      b += data[i + 2] * pixelWeight;
      weight += pixelWeight;
    }

    if (!weight) return null;

    return {
      r: r / weight,
      g: g / weight,
      b: b / weight,
    };
  } catch {
    return null;
  }
}

function applyPageGlow(primary, secondary = primary, tertiary = primary) {
  const rootStyle = document.documentElement.style;
  const glowOne = scaleColor(mixColor(primary, { r: 255, g: 255, b: 255 }, 0.08), 1.08);
  const glowTwo = scaleColor(mixColor(secondary, { r: 120, g: 140, b: 255 }, 0.14), 1.06);
  const glowThree = scaleColor(mixColor(tertiary, { r: 255, g: 90, b: 120 }, 0.1), 1.04);

  rootStyle.setProperty("--glow-1", rgbaString(glowOne, 0.34));
  rootStyle.setProperty("--glow-2", rgbaString(glowTwo, 0.26));
  rootStyle.setProperty("--glow-3", rgbaString(glowThree, 0.22));
}

function applyPhotoAccent(frame, color) {
  if (!frame) return;

  const border = mixColor(scaleColor(color, 1.12), { r: 255, g: 255, b: 255 }, 0.08);
  const halo = mixColor(scaleColor(color, 1.08), { r: 255, g: 255, b: 255 }, 0.04);

  frame.style.setProperty("--photo-accent", rgbaString(border, 0.62));
  frame.style.setProperty("--photo-accent-soft", rgbaString(color, 0.26));
  frame.style.setProperty("--photo-accent-glow", rgbaString(halo, 0.2));
}

function whenImageReady(img, callback) {
  if (img.complete && img.naturalWidth > 0) {
    callback();
    return;
  }
  img.addEventListener("load", callback, { once: true });
}

function setupDynamicGlow() {
  const images = [...document.querySelectorAll(".gallery-grid .photo img")];
  if (!images.length) return;

  const palette = [null, null, null];

  const restore = () => {
    const [p, s, t] = palette;
    if (p) applyPageGlow(p, s || p, t || p);
  };

  images.forEach((img, i) => {
    whenImageReady(img, () => {
      const color = readImageColor(img);
      if (!color) return;

      const frame = img.closest(".photo");
      applyPhotoAccent(frame, color);

      if (i < 3) { palette[i] = color; restore(); }

      if (!frame) return;

      const activate = () => applyPageGlow(
        color,
        mixColor(color, { r: 90, g: 140, b: 255 }, 0.18),
        mixColor(color, { r: 255, g: 120, b: 90 }, 0.14),
      );

      frame.addEventListener("pointerenter", activate);
      frame.addEventListener("focusin", activate);
      frame.addEventListener("pointerleave", restore);
      frame.addEventListener("focusout", restore);
    });
  });
}

setupDynamicGlow();

/* ─── Lightbox (gallery pages) ────────────────────────────── */
const lightbox  = document.querySelector('.lightbox');
const lbImg     = lightbox?.querySelector('img');
const lbClose   = lightbox?.querySelector('.lb-close');
const lbPrev    = lightbox?.querySelector('.lb-prev');
const lbNext    = lightbox?.querySelector('.lb-next');
let photos = [];
let current = 0;

function rebuildPhotos() {
  photos = [...document.querySelectorAll('.gallery-grid .photo img')];
}

if (lightbox) {
  rebuildPhotos();

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-grid .photo img');
    if (!img) return;
    const idx = photos.indexOf(img);
    if (idx !== -1) openLightbox(idx);
  });

  function openLightbox(i) {
    current = i;
    lbImg.src = photos[i].src;
    lbImg.alt = photos[i].alt || getTranslation("lightboxImageAlt", document.documentElement.lang) || "";
    lbImg.dataset.altOverride = "true";
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function stepLightbox(dir) {
    current = (current + dir + photos.length) % photos.length;
    lbImg.src = photos[current].src;
    lbImg.alt = photos[current].alt || getTranslation("lightboxImageAlt", document.documentElement.lang) || "";
    lbImg.dataset.altOverride = "true";
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => stepLightbox(-1));
  lbNext.addEventListener('click', () => stepLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   stepLightbox(-1);
    if (e.key === 'ArrowRight')  stepLightbox(1);
  });

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    if (!lightbox.classList.contains('open')) return;
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) stepLightbox(diff > 0 ? 1 : -1);
  }, { passive: true });
}

/* ─── Staggered photo reveal on gallery pages ─────────────── */
const revealItems = [...document.querySelectorAll('.gallery-grid .photo')];

if (revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.02, rootMargin: '0px 0px -8% 0px' });

  revealItems.forEach((el, i) => {
    const delay = Math.min(i * 0.006, 0.07);
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 8px, 0)';
    el.style.transition = `opacity 0.15s ease ${delay}s, transform 0.18s ease ${delay}s`;
    observer.observe(el);
  });
}

/* ─── Event filter (homepage) ──────────────────────────────── */
;(function initEventFilter() {
  const events = [...document.querySelectorAll(".works-event")];

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      events.forEach((el) => {
        const show = filter === "all" || el.dataset.event === filter;
        el.classList.toggle("hidden", !show);
        if (show) {
          el.style.opacity = "0";
          el.style.transform = "translate3d(0, 12px, 0)";
          requestAnimationFrame(() => {
            el.style.transition = "opacity 0.2s ease, transform 0.25s ease";
            el.style.opacity = "1";
            el.style.transform = "none";
          });
        }
      });
      if (typeof rebuildPhotos === "function") rebuildPhotos();
      updateArtistNav(filter, events);
    });
  });

  updateArtistNav("all", events);

  function updateArtistNav(filter, allEvents) {
    const nav = document.getElementById("artistNav");
    if (!nav) return;

    if (filter === "all") {
      nav.classList.remove("has-artists");
      nav.innerHTML = "";
      return;
    }

    const visible = allEvents.filter((el) => el.dataset.event === filter);

    const groups = {};
    visible.forEach((el) => {
      const ev = el.dataset.event;
      if (!groups[ev]) groups[ev] = [];
      groups[ev].push(el);
    });

    const multi = Object.values(groups).filter((g) => g.length > 1);
    if (multi.length === 0) {
      nav.classList.remove("has-artists");
      nav.innerHTML = "";
      return;
    }

    const links = multi.flatMap((group) =>
      group.map((el) => {
        const name = el.querySelector(".works-artist")?.textContent || "";
        return `<a href="#" data-target="${name.replace(/\s+/g, "-")}">${name}</a>`;
      })
    );

    nav.innerHTML = links.join("");
    nav.classList.add("has-artists");

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const name = a.textContent;
        const target = [...allEvents].find(
          (el) => !el.classList.contains("hidden") &&
            el.querySelector(".works-artist")?.textContent === name
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
})();
