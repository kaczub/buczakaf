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
    footerMade: { pl: "Made with love in Jaroslaw", en: "Made with love in Jaroslaw" },
    langSwitcherLabel: { pl: "Przełącznik języka", en: "Language switcher" },
    backToTopLabel: { pl: "Wróć na górę", en: "Back to top" },
    lightboxImageAlt: { pl: "Powiekszone zdjecie", en: "Enlarged image" },
    lightboxCloseLabel: { pl: "Zamknij", en: "Close" },
    lightboxPrevLabel: { pl: "Poprzednie", en: "Previous" },
    lightboxNextLabel: { pl: "Nastepne", en: "Next" },
  },
  home: {
    metaTitle: {
      pl: "buczakaf — Fotograf",
      en: "buczakaf — Photographer",
    },
    heroTitle: { pl: "Czesc, jestem Kamil", en: "Hi, I'm Kamil" },
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
    aboutP1: {
      pl: "Interesuję się fotografią, informatyką i muzyką. W wolnym czasie gram na gitarze i uczę się programowania – ta strona jest obecnie napisana głównie przez AI, ale sukcesywnie zastępuję ten kod własnym.",
      en: "I'm interested in photography, computer science, and music. In my free time I play guitar and learn programming - this website is currently written mostly by AI, but I'm gradually replacing that code with my own.",
    },
    aboutP2: {
      pl: 'W fotografii robię w zasadzie wszystko, ale docelowo chcę skupić się na koncertach, bo czuję, że to moja główna dziedzina. Mam już za sobą współpracę z zespołem <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, działam też jako zastępowy i fotograf w <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1. Jarosławskiej Drużynie Harcerzy „Pościg”</a>.',
      en: 'In photography I shoot a bit of everything, but ultimately I want to focus on concerts, because I feel that is my main field. I have already worked with the band <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, and I also serve as a patrol leader and photographer in the <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1st Jaroslaw Scout Troop “Pościg”</a>.',
    },
    gearHeader: { pl: "Moj sprzet", en: "My gear" },
    gearCamera: {
      pl: "Nikon D3100 + Nikkor 18-105mm",
      en: "Nikon D3100 + Nikkor 18-105mm",
    },
    gearMac: { pl: "Mac Mini M4", en: "Mac Mini M4" },
    gearThinkPad: {
      pl: "ThinkPad T490 (Arch Linux + Windows dual boot)",
      en: "ThinkPad T490 (Arch Linux + Windows dual boot)",
    },
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
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(preferredLang);

document.querySelectorAll("[data-fallback-label]").forEach((img) => {
  img.addEventListener("error", () => {
    const label = img.dataset.fallbackLabel;
    if (label && img.parentElement) {
      img.parentElement.innerHTML = `<div class="placeholder">${label}</div>`;
    }
  }, { once: true });
});

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
    if (window.matchMedia('(max-width: 480px)').matches) return 1;
    if (window.matchMedia('(max-width: 768px)').matches) return 2;
    return 3;
  }

  function layoutGalleryColumns() {
    if (!galleryGrid) return;

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
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.gallery-grid .photo').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'none';
  el.style.transition = `opacity 0.5s ease ${i * 0.04}s`;
  observer.observe(el);
});
