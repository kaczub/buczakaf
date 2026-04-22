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
      pl: "Interesuje sie fotografia, informatyka i muzyka. W wolnym czasie gram na gitarze i ucze sie programowania, ta strona jest obecnie napisana glownie przez AI, ale sukcesywnie zastepuje ten kod wlasnym.",
      en: "I'm interested in photography, computer science and music. In my free time I play guitar and learn programming. This website is currently written mostly with AI, but I'm gradually replacing that code with my own.",
    },
    aboutP2: {
      pl: 'W fotografii robie w zasadzie wszystko, ale docelowo chce skupic sie na koncertach, bo czuje, ze to moja glowna dziedzina. Mam juz za soba wspolprace z zespolem <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, dzialam tez jako fotograf w <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1. Jaroslawskiej Druzynie Harcerzy "Poscig"</a>.',
      en: 'In photography I shoot pretty much everything, but my goal is to focus on concerts because that feels like my main field. I have already worked with the band <a href="https://www.instagram.com/medeis_officiall/" target="_blank" rel="noopener">Medeis</a>, and I also work as a photographer for the <a href="https://www.instagram.com/1jdh_poscig/" target="_blank" rel="noopener">1st Jaroslaw Scout Troop "Poscig"</a>.',
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

/* ─── Lightbox (gallery pages) ────────────────────────────── */
const lightbox  = document.querySelector('.lightbox');
const lbImg     = lightbox?.querySelector('img');
const lbClose   = lightbox?.querySelector('.lb-close');
const lbPrev    = lightbox?.querySelector('.lb-prev');
const lbNext    = lightbox?.querySelector('.lb-next');

let photos = [];
let current = 0;

if (lightbox) {
  photos = [...document.querySelectorAll('.gallery-grid .photo img')];

  photos.forEach((img, i) => {
    img.parentElement.addEventListener('click', () => openLightbox(i));
  });

  function openLightbox(i) {
    current = i;
    lbImg.src = photos[i].src;
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
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.gallery-grid .photo').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
  observer.observe(el);
});
