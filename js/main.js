

/* ─── Split into two columns, balancing height ────────────── */
(function splitGrid() {
  document.querySelectorAll('.gallery-grid').forEach((grid) => {
    const items = [...grid.children].filter((el) => el.matches('.photo'));
    if (items.length < 2) return;

    const colA = document.createElement('div');
    colA.className = 'gallery-col';
    const colB = document.createElement('div');
    colB.className = 'gallery-col';
    let hA = 0;
    let hB = 0;

    items.forEach((el) => {
      const img = el.querySelector('img');
      const w = Number(img?.getAttribute('width')) || 1;
      const h = Number(img?.getAttribute('height')) || 1;
      const ratio = h / w;
      el.dataset.ratio = ratio;

      if (hA <= hB) {
        colA.appendChild(el);
        hA += ratio;
      } else {
        colB.appendChild(el);
        hB += ratio;
      }
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
    skipToContent: { pl: "Przejdź do treści", en: "Skip to content" },
    mainNavLabel: { pl: "Główna nawigacja", en: "Main navigation" },
    filterGroupLabel: { pl: "Filtruj według wydarzenia", en: "Filter by event" },
    filterTriggerLabel: { pl: "Wydarzenie", en: "Event" },
    artistNavLabel: { pl: "Artyści", en: "Artists" },
    photoOpenLabel: { pl: "Powiększ zdjęcie", en: "Enlarge photo" },
    lightboxLabel: { pl: "Podgląd zdjęcia", en: "Image viewer" },
    lightboxLoadingLabel: { pl: "Wczytywanie…", en: "Loading…" },
  },
  home: {
    metaTitle: {
      pl: "buczakaf — Fotograf",
      en: "buczakaf — Photographer",
    },
    metaDescription: {
      pl: "Fotografia koncertowa i reportażowa — buczakaf, Jarosław. Koncerty, festiwale i sesje od 2024 roku, zawsze blisko sceny.",
      en: "Concert and documentary photography — buczakaf, Jarosław. Concerts, festivals and sessions since 2024, always close to the stage.",
    },
    heroTitle: { pl: "Fotografia koncertowa i reportażowa", en: "Concert & documentary photography" },
    heroMeta: {
      pl: "Jarosław / od 2024 / koncerty · reportaż",
      en: "Jarosław / since 2024 / concerts · documentary",
    },
    heroContactCta: { pl: "Napisz do mnie", en: "Get in touch" },
    viewAll: { pl: "Zobacz wszystkie", en: "View all" },
    filterAll: { pl: "Wszystkie", en: "All" },
    filterRnR: { pl: "Rock' n' Ryk 2026", en: "Rock' n' Ryk 2026" },
    filterJuwenalia: { pl: "Juwenalia Jarosław 2026", en: "Juwenalia Jarosław 2026" },
    filterDni2026: { pl: "Dni Jarosławia 2026", en: "Dni Jarosławia 2026" },
    filterSesja: { pl: "Sesje", en: "Sessions" },
    featuredTitle: { pl: "Najlepsze", en: "Featured" },
    featuredCta: { pl: "Zobacz najlepsze", en: "See the featured work" },
    latestCta: { pl: "Zobacz ostatnie prace", en: "See the latest work" },
    featuredSubtitle: { pl: "Wybór najlepszych kadrów", en: "A selection of my best shots" },
    archiveTitle: { pl: "Wszystkie prace", en: "All work" },
    archiveSubtitle: { pl: "Wybór według wydarzenia", en: "Browse by event" },
    archiveCtaText: {
      pl: "Pełne relacje z koncertów, festiwali i sesji.",
      en: "Full coverage of concerts, festivals and sessions.",
    },
    archiveCta: { pl: "Zobacz wszystkie prace", en: "View all work" },
    workCtaContact: { pl: "Napisz do mnie", en: "Get in touch" },
    archiveCollapse: { pl: "Zwiń archiwum", en: "Collapse archive" },
    artistFestiwal: { pl: "Festiwal", en: "Festival" },
    eventNameRnR: { pl: "Rock' n' Ryk 2026", en: "Rock' n' Ryk 2026" },
    eventNameDniJaroslawia2026: { pl: "Dni Jarosławia 2026", en: "Dni Jarosławia 2026" },
    eventNameSesja: { pl: "Sesje — Medeis 2025", en: "Sessions — Medeis 2025" },
    eventNameSesja2026: { pl: "Sesje — Medeis 2026", en: "Sessions — Medeis 2026" },
    eventNameJuwenalia: { pl: "Juwenalia Jarosław 2026", en: "Juwenalia Jarosław 2026" },

  },
  contact: {
    metaTitle: {
      pl: "Kontakt — buczakaf",
      en: "Contact — buczakaf",
    },
    metaDescription: {
      pl: "Kontakt z buczakaf — fotografem koncertowym z Jarosławia. Instagram @buczakaf i email buczakaf@gmail.com.",
      en: "Contact buczakaf — concert photographer from Jarosław. Instagram @buczakaf and email buczakaf@gmail.com.",
    },
    contactPageKicker: { pl: "Kontakt", en: "Contact" },
    contactPageTitle: { pl: "Napisz do mnie", en: "Contact me" },
    contactIntro: {
      pl: "Postaram się odpowiedzieć jak najszybciej.",
      en: "I'll reply as soon as I can.",
    },
    contactIG: { pl: "Instagram", en: "Instagram" },
    contactFB: { pl: "Facebook", en: "Facebook" },
    contactEmail: { pl: "Email", en: "Email" },
  },
  about: {
    metaTitle: {
      pl: "O mnie — buczakaf",
      en: "About — buczakaf",
    },
    metaDescription: {
      pl: "O mnie — buczakaf. Fotograf koncertowy z Jarosławia: koncerty, festiwale, wydarzenia i sesje od kwietnia 2024 roku.",
      en: "About — buczakaf. Concert photographer from Jarosław: concerts, festivals, events and sessions since April 2024.",
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
      pl: '<p class="about-events-head">Wydarzenia, które uwieczniłem:</p><ul class="about-list"><li>Dni Jarosławia (2025, 2026)</li><li><a href="https://www.instagram.com/juwenalia_pans_jaroslaw/" target="_blank" rel="noopener">III Jarosławskie Juwenalia PANS</a></li><li><a href="https://www.facebook.com/profile.php?id=61580775088060" target="_blank" rel="noopener">Rock\' n\' Ryk 2026</a></li><li><a href="https://www.facebook.com/mlodziezowy.podkarpacie/" target="_blank" rel="noopener">I Podkarpacki Festiwal Twórczości Młodzieżowej</a></li><li>Służba medialna na <a href="https://lednica.zhr.pl" target="_blank" rel="noopener">HSL Lednica</a></li><li>Stała współpraca z zespołem <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a></li></ul><p class="about-cta">Chcesz zdjęcia ze swojego koncertu, festiwalu lub wydarzenia? <a href="kontakt.html">Napisz!</a></p>',
      en: "<p class=\"about-events-head\">Events I've captured:</p><ul class=\"about-list\"><li>Dni Jarosławia (2025, 2026)</li><li><a href=\"https://www.instagram.com/juwenalia_pans_jaroslaw/\" target=\"_blank\" rel=\"noopener\">III Jarosławskie Juwenalia PANS</a></li><li><a href=\"https://www.facebook.com/profile.php?id=61580775088060\" target=\"_blank\" rel=\"noopener\">Rock' n' Ryk 2026</a></li><li><a href=\"https://www.facebook.com/mlodziezowy.podkarpacie/\" target=\"_blank\" rel=\"noopener\">I Podkarpacki Festiwal Twórczości Młodzieżowej</a></li><li>Media service at <a href=\"https://lednica.zhr.pl\" target=\"_blank\" rel=\"noopener\">HSL Lednica</a></li><li>Ongoing collaboration with <a href=\"https://www.instagram.com/medeis_officiall/\" target=\"_blank\" rel=\"noopener\">Medeis</a></li></ul><p class=\"about-cta\">Want photos from your concert, festival, or event? <a href=\"kontakt.html\">Contact me!</a></p>",
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

  const descriptionText = getTranslation("metaDescription", lang);
  if (descriptionText) {
    document.querySelectorAll('meta[name="description"]').forEach((node) => {
      node.setAttribute("content", descriptionText);
    });
  }

  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((node) => {
    if (titleText) node.setAttribute("content", titleText);
  });

  if (descriptionText) {
    document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach((node) => {
      node.setAttribute("content", descriptionText);
    });
  }

  document.querySelectorAll('meta[property="og:locale"]').forEach((node) => {
    node.setAttribute("content", lang === "pl" ? "pl_PL" : "en_US");
  });

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
  document.dispatchEvent(new CustomEvent("site:langchange", { detail: { lang } }));
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

/* ─── (per-photo colour sampling removed — the photos carry their own colour) ─── */

/* ─── Lightbox (gallery pages) ────────────────────────────── */
const lightbox  = document.querySelector('.lightbox');
const lbImg     = lightbox?.querySelector('img');
const lbClose   = lightbox?.querySelector('.lb-close');
const lbPrev    = lightbox?.querySelector('.lb-prev');
const lbNext    = lightbox?.querySelector('.lb-next');
const lbCounter = lightbox?.querySelector('.lb-counter');
let photos = [];
let current = 0;
let lastFocused = null;

// Everything behind the modal. `inert` removes it from the tab order and the
// accessibility tree, so screen-reader browse mode cannot leave the dialog.
const backgroundRegions = ['.skip-link', '.navbar', '.mobile-menu', '.hero', '#main', '.site-footer', '.back-top']
  .map((selector) => document.querySelector(selector))
  .filter(Boolean);

function setBackgroundInert(inert) {
  backgroundRegions.forEach((el) => {
    if (inert) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
  });
}

function rebuildPhotos() {
  // Only images the visitor can actually see: skip filtered-out events
  // (class) and any container hidden by the `hidden` attribute (archive).
  photos = [...document.querySelectorAll('.gallery-grid .photo img')]
    .filter((img) => !img.closest('.hidden') && !img.closest('[hidden]'));
}

if (lightbox) {
  rebuildPhotos();

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-grid .photo img');
    if (!img) return;
    const idx = photos.indexOf(img);
    if (idx !== -1) openLightbox(idx);
  });

  function showPhoto(i) {
    current = i;
    lightbox.classList.add('is-loading');
    const source = photos[i];
    lbImg.dataset.altOverride = "true";
    lbImg.alt = source.alt || getTranslation("lightboxImageAlt", document.documentElement.lang) || "";
    // Reuse the grid srcset so the viewer pulls a viewport-appropriate
    // variant instead of always the 2000w original.
    lbImg.srcset = source.getAttribute('srcset') || '';
    lbImg.sizes = '92vw';
    lbImg.src = source.src;
    if (lbCounter) lbCounter.textContent = `${i + 1} / ${photos.length}`;
  }

  lbImg.addEventListener('load', () => lightbox.classList.remove('is-loading'));
  lbImg.addEventListener('error', () => lightbox.classList.remove('is-loading'));

  function openLightbox(i) {
    lastFocused = document.activeElement;
    showPhoto(i);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    setBackgroundInert(true);
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setBackgroundInert(false);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }

  function stepLightbox(dir) {
    showPhoto((current + dir + photos.length) % photos.length);
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
    if (e.key === 'Tab') {
      const focusables = [lbClose, lbPrev, lbNext];
      const idx = focusables.indexOf(document.activeElement);
      e.preventDefault();
      if (e.shiftKey) {
        focusables[(idx <= 0 ? focusables.length : idx) - 1].focus();
      } else {
        focusables[(idx + 1) % focusables.length].focus();
      }
    }
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

/* ─── Gallery photos: keyboard operable, and named ────────── */
;(function makePhotosInteractive() {
  // Visible captions were removed, so a frame's name travels on data-artist and
  // on its archive group's heading. That name labels the button, and is written
  // to the image's alt so the lightbox and assistive-tech image lists read it.
  function nameFor(el) {
    const group = el.closest(".works-event") || el.closest("[data-artist]");
    const artist = el.dataset.artist
      || group?.querySelector(".works-artist")?.textContent.trim()
      || group?.dataset.artist
      || "";
    const event = group?.querySelector(".works-event-name")?.textContent.trim() || "";
    // "Medeis 2026" already names its session event; only join the two when the
    // event adds something the artist name does not carry.
    if (artist && event && !event.includes(artist) && !artist.includes(event)) {
      return `${artist} — ${event}`;
    }
    return artist || event || "";
  }

  function applyNames() {
    const base = getTranslation("photoOpenLabel", document.documentElement.lang) || "Powiększ zdjęcie";
    document.querySelectorAll(".gallery-grid .photo").forEach((el) => {
      const name = nameFor(el);
      el.setAttribute("aria-label", name ? `${base}: ${name}` : base);

      const img = el.querySelector("img");
      if (img && name) img.alt = name;
    });
  }

  document.querySelectorAll(".gallery-grid .photo").forEach((el) => {
    el.setAttribute("role", "button");
    el.tabIndex = 0;
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.querySelector("img")?.click();
      }
    });
  });

  applyNames();
  document.addEventListener("site:langchange", applyNames);
})();

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
  const filterTrigger = document.querySelector(".filter-trigger");
  const filterPanel = document.getElementById("eventFilter");
  const filterCurrent = document.querySelector(".filter-current");

  // The mobile switcher mirrors whichever tab is active (and its language).
  function syncFilterTrigger() {
    if (!filterCurrent) return;
    const active = document.querySelector(".filter-btn.active");
    if (active) filterCurrent.textContent = active.textContent.trim();
  }

  function closeFilterMenu() {
    if (!filterTrigger || !filterPanel) return;
    filterTrigger.setAttribute("aria-expanded", "false");
    filterPanel.classList.remove("open");
  }

  if (filterTrigger && filterPanel) {
    filterTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = filterTrigger.getAttribute("aria-expanded") !== "true";
      filterTrigger.setAttribute("aria-expanded", String(open));
      filterPanel.classList.toggle("open", open);
    });

    document.addEventListener("click", (event) => {
      if (!filterPanel.classList.contains("open")) return;
      if (filterTrigger.contains(event.target) || filterPanel.contains(event.target)) return;
      closeFilterMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeFilterMenu();
    });
  }

  function applyFilter(filter) {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b.dataset.filter === filter;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });

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

    // Keep the URL in sync for every entry point (buttons, hero openers, deep links).
    const hash = filter === "all" ? "#archiwum" : `#archiwum/${filter}`;
    if (location.hash !== hash) history.replaceState(null, "", hash);

    syncFilterTrigger();
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filter);
      closeFilterMenu();

      // Switching deep inside the archive: bring the start of the new
      // selection back under the sticky filter bar instead of leaving the
      // visitor stranded mid-list.
      const archive = document.getElementById("archiwum");
      if (archive && !archive.hidden && archive.getBoundingClientRect().top < 0) {
        archive.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  document.addEventListener("site:applyfilter", (e) => applyFilter(e.detail.filter));

  updateArtistNav("all", events);

  document.addEventListener("site:langchange", () => {
    const active = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    updateArtistNav(active, events);
    syncFilterTrigger();
  });

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

    // Same order as the artist groups appear within the event.
    const links = multi.flatMap((group) =>
      group.map((el) => {
        const name = el.querySelector(".works-artist")?.textContent.trim() || el.dataset.artist || "";
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
            (el.querySelector(".works-artist")?.textContent.trim() || el.dataset.artist) === name
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
})();

/* ─── Archive reveal (homepage) ───────────────────────────── */
;(function initArchive() {
  const archive = document.getElementById("archiwum");
  if (!archive) return;

  const toggleBtns = [...document.querySelectorAll("[data-archive-toggle]")];
  const openers = [...document.querySelectorAll("[data-archive-open]")];

  function setArchive(open) {
    archive.hidden = !open;

    toggleBtns.forEach((btn) => {
      btn.setAttribute("aria-expanded", String(open));
      const text = getTranslation(open ? "archiveCollapse" : "archiveCta", document.documentElement.lang);
      if (text) btn.textContent = text;
    });

    if (typeof rebuildPhotos === "function") rebuildPhotos();
  }

  function readHash() {
    const raw = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (raw !== "archiwum" && !raw.startsWith("archiwum/")) return null;

    // A hand-edited or stale link must not empty the archive: an unknown filter
    // falls back to the full set instead of rendering an event list of nothing.
    const requested = raw.split("/")[1] || "all";
    const known = [...document.querySelectorAll(".filter-btn")].some(
      (btn) => btn.dataset.filter === requested
    );
    return { filter: known ? requested : "all" };
  }

  const initial = readHash();
  if (initial) {
    setArchive(true);
    document.dispatchEvent(new CustomEvent("site:applyfilter", { detail: { filter: initial.filter } }));
    requestAnimationFrame(() => archive.scrollIntoView({ block: "start" }));
  }

  window.addEventListener("popstate", () => {
    const state = readHash();
    if (!state) return;
    setArchive(true);
    document.dispatchEvent(new CustomEvent("site:applyfilter", { detail: { filter: state.filter } }));
  });

  openers.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setArchive(true);
      // An opener may target a specific slice of the archive (e.g. the latest event).
      const filter = link.dataset.archiveFilter;
      if (filter) {
        document.dispatchEvent(new CustomEvent("site:applyfilter", { detail: { filter } }));
      }
      archive.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => setArchive(archive.hidden));
  });

  document.addEventListener("site:langchange", () => {
    if (!archive.hidden) setArchive(true);
  });
})();
