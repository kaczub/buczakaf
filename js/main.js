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
    footerMade: { pl: "Made with love in Jarosław", en: "Made with love in Jarosław" },
    langSwitcherLabel: { pl: "Przełącznik języka", en: "Language switcher" },
    menuOpenLabel: { pl: "Otwórz menu", en: "Open menu" },
    menuCloseLabel: { pl: "Zamknij menu", en: "Close menu" },
    backToTopLabel: { pl: "Wróć na górę", en: "Back to top" },
    lightboxImageAlt: { pl: "Powiększone zdjęcie", en: "Enlarged image" },
    lightboxCloseLabel: { pl: "Zamknij", en: "Close" },
    lightboxPrevLabel: { pl: "Poprzednie", en: "Previous" },
    lightboxNextLabel: { pl: "Następne", en: "Next" },
  },
  home: {
    metaTitle: {
      pl: "buczakaf — Fotograf",
      en: "buczakaf — Photographer",
    },
    heroTitle: { pl: "Cześć, jestem Kamil", en: "Hi, I'm Kamil" },
    heroSubtitle: { pl: "Fotograf", en: "Photographer" },
    catScouting: { pl: "Harcerstwo", en: "Scouting" },
    catConcerts: { pl: "Koncerty", en: "Concerts" },
  },
  about: {
    metaTitle: {
      pl: "O mnie — buczakaf",
      en: "About — buczakaf",
    },
    aboutHeader: { pl: "O mnie", en: "About" },
    aboutKicker: {
      pl: "Fotografia koncertowa, harcerska i reportażowa",
      en: "Concert, scouting, and documentary photography",
    },
    aboutP1: {
      pl: "Interesuję się fotografią, informatyką i muzyką. Zdjęcia robię od kwietnia 2024 roku. W wolnym czasie gram na gitarze i uczę się programowania. Ta strona jest na razie zrobiona głównie przez AI, ale mam zamiar stopniowo pisać coraz więcej własnego kodu.",
      en: "I'm interested in photography, computer science, and music. I've been taking photos since April 2024. In my free time I play guitar and learn programming. This website is currently built mostly with AI, but I plan to gradually write more and more of the code myself.",
    },
    aboutP2: {
      pl: 'Fotografuję różne tematy, ale najmocniej ciągnie mnie do koncertów, bo właśnie tam najlepiej czuję energię kadru i emocje chwili. Mam już za sobą współpracę z zespołem <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, działam też jako zastępowy i fotograf w <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1. Jarosławskiej Drużynie Harcerzy „Pościg”</a>.',
      en: 'I photograph different subjects, but I feel most drawn to concerts, because that is where I connect most with the energy of the frame and the emotion of the moment. I have already worked with the band <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, and I also serve as a patrol leader and photographer in the <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1st Jaroslaw Scout Troop “Pościg”</a>.',
    },
    gearHeader: { pl: "Mój sprzęt", en: "My gear" },
    gearCamera: {
      pl: "Sony A6400 + SIGMA 18-50mm F2.8",
      en: "Sony A6400 + SIGMA 18-50mm F2.8",
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
  scouting: {
    metaTitle: {
      pl: "Harcerstwo — buczakaf",
      en: "Scouting — buczakaf",
    },
    galleryScouting: { pl: "Harcerstwo", en: "Scouting" },
  },
  concerts: {
    metaTitle: {
      pl: "Koncerty — buczakaf",
      en: "Concerts — buczakaf",
    },
    galleryConcerts: { pl: "Koncerty", en: "Concerts" },
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

  if (typeof updateNavToggleLabel === "function") {
    updateNavToggleLabel();
  }
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

document.querySelectorAll("[data-fallback-label]").forEach((img) => {
  img.addEventListener("error", () => {
    const label = img.dataset.fallbackLabel;
    if (label && img.parentElement) {
      img.parentElement.innerHTML = `<div class="placeholder">${label}</div>`;
    }
  }, { once: true });
});

function normalizeGalleryAlts() {
  const labelByPage = {
    concerts: "Koncerty",
    scouting: "Harcerstwo",
  };
  const baseLabel = labelByPage[pageKey];
  if (!baseLabel) return;

  [...document.querySelectorAll(".gallery-grid .photo img")].forEach((img, index) => {
    img.alt = `${baseLabel} ${index + 1}`;
  });
}

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
  const cards = [...document.querySelectorAll(".cat-feature")];
  const galleryImages = [...document.querySelectorAll(".gallery-grid .photo img")];

  if (cards.length) {
    let defaultColor = null;

    cards.forEach((card, index) => {
      const img = card.querySelector("img");
      if (!img) return;

      whenImageReady(img, () => {
        const color = readImageColor(img);
        if (!color) return;

        card.dataset.glow = JSON.stringify(color);
        card.style.setProperty("--tile-glow", rgbaString(color, 0.24));

        if (!defaultColor || index === 0) {
          defaultColor = color;
          applyPageGlow(color);
        }
      });

      const activateCardGlow = () => {
        if (!card.dataset.glow) return;
        const color = JSON.parse(card.dataset.glow);
        const accent = mixColor(color, { r: 255, g: 255, b: 255 }, 0.04);
        applyPageGlow(color, accent, mixColor(color, { r: 255, g: 90, b: 120 }, 0.1));
      };

      card.addEventListener("pointerenter", activateCardGlow);
      card.addEventListener("focusin", activateCardGlow);
      card.addEventListener("pointerleave", () => {
        if (defaultColor) applyPageGlow(defaultColor);
      });
      card.addEventListener("focusout", () => {
        if (defaultColor) applyPageGlow(defaultColor);
      });
    });
  }

  if (!cards.length && galleryImages.length) {
    const defaultPalette = new Array(3).fill(null);

    const restoreDefaultGlow = () => {
      const [primary, secondary, tertiary] = defaultPalette;
      if (!primary) return;

      applyPageGlow(
        primary,
        secondary || primary,
        tertiary || primary,
      );
    };

    galleryImages.forEach((img, index) => {
      whenImageReady(img, () => {
        const color = readImageColor(img);
        if (!color) return;

        const frame = img.closest(".photo");
        applyPhotoAccent(frame, color);

        if (index < 3) {
          defaultPalette[index] = color;
          restoreDefaultGlow();
        }

        if (!frame) return;

        const activateGlow = () => {
          applyPageGlow(
            color,
            mixColor(color, { r: 90, g: 140, b: 255 }, 0.18),
            mixColor(color, { r: 255, g: 120, b: 90 }, 0.14),
          );
        };

        frame.addEventListener("pointerenter", activateGlow);
        frame.addEventListener("focusin", activateGlow);
        frame.addEventListener("pointerleave", restoreDefaultGlow);
        frame.addEventListener("focusout", restoreDefaultGlow);
      });
    });
  }
}

normalizeGalleryAlts();
setupDynamicGlow();

/* ─── Lightbox (gallery pages) ────────────────────────────── */
const lightbox  = document.querySelector('.lightbox');
const lbImg     = lightbox?.querySelector('img');
const lbClose   = lightbox?.querySelector('.lb-close');
const lbPrev    = lightbox?.querySelector('.lb-prev');
const lbNext    = lightbox?.querySelector('.lb-next');
const galleryGrid = document.querySelector('.gallery-grid');

let photos = [];
let current = 0;

if (lightbox) {
  photos = [...document.querySelectorAll('.gallery-grid .photo img')];

  photos.forEach((img) => {
    const width = Number(img.getAttribute('width'));
    const height = Number(img.getAttribute('height'));

    if (width > 0 && height > 0) {
      img.parentElement.style.aspectRatio = `${width} / ${height}`;
    }
  });

  function getGalleryColumnCount() {
    if (window.matchMedia('(max-width: 640px)').matches) return 1;
    return 2;
  }

  function layoutGalleryColumns() {
    if (!galleryGrid) return;

    galleryGrid.style.setProperty('--gallery-columns', String(currentGalleryColumnCount));

    const items = [...galleryGrid.querySelectorAll('.photo')];
    if (!items.length) return;

    const columnCount = getGalleryColumnCount();
    const columns = Array.from({ length: columnCount }, () => {
      const column = document.createElement('div');
      column.className = 'gallery-column';
      return column;
    });
    const columnHeights = new Array(columnCount).fill(0);

    items.forEach((item) => {
      const img = item.querySelector('img');
      const width = Number(img?.getAttribute('width')) || 1;
      const height = Number(img?.getAttribute('height')) || 1;
      const estimatedHeight = height / width;

      let targetColumnIndex = 0;
      for (let i = 1; i < columnCount; i += 1) {
        if (columnHeights[i] < columnHeights[targetColumnIndex]) {
          targetColumnIndex = i;
        }
      }

      columns[targetColumnIndex].appendChild(item);
      columnHeights[targetColumnIndex] += estimatedHeight;
    });

    galleryGrid.replaceChildren(...columns);
  }

  let currentGalleryColumnCount = getGalleryColumnCount();
  layoutGalleryColumns();

  window.addEventListener('resize', () => {
    const nextGalleryColumnCount = getGalleryColumnCount();
    if (nextGalleryColumnCount === currentGalleryColumnCount) return;

    currentGalleryColumnCount = nextGalleryColumnCount;
    layoutGalleryColumns();
  });

  photos.forEach((img, i) => {
    img.parentElement.addEventListener('click', () => openLightbox(i));
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
    const delay = Math.min(i * 0.014, 0.14);
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 10px, 0)';
    el.style.transition = `opacity 0.28s ease ${delay}s, transform 0.34s ease ${delay}s`;
    observer.observe(el);
  });
}
