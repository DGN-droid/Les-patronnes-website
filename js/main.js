
window.prepareImageFade = (image) => {
  image.classList.add("image-fade-in");
  const reveal = () => image.classList.add("is-loaded");
  const revealError = () => image.classList.add("is-error");

  if (image.complete) {
    image.naturalWidth > 0 ? reveal() : revealError();
  } else {
    image.addEventListener("load", reveal, { once: true });
    image.addEventListener("error", revealError, { once: true });
  }
};

document.querySelectorAll("img").forEach(window.prepareImageFade);

const translations = {
  fr: {
    "nav.main": "Navigation principale",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.events": "Événements",
    "nav.actualites": "Actualités",
    "nav.shop": "Boutique",
    "nav.stop1": "Stop 1",
    "nav.stop2": "Stop 2",
    "nav.patronnes": "Patronnes",
    "nav.press": "Presse",
    "nav.contact": "Contact",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    search: "Rechercher",
    "hero.title": "Les Patronnes",
    "hero.subtitle": "Un projet imaginé par la cheffe étoilée Georgiana Viou, qui célèbre les femmes qui font vivre les marchés béninois",
    "hero.cta": "Voir",
    "story.open": "Découvrir le récit",
    "story.openLabel": "Découvrir le récit Les Patronnes",
    "story.market.openLabel": "Découvrir le récit des marchés",
    "story.close": "Fermer",
    "story.closeLabel": "Fermer le récit",
    "story.scroll": "Faire défiler",
    "story.chapter1.eyebrow": "Chapitre I",
    "story.chapter1.title": "Faire archive",
    "story.chapter1.text": "Rendre visibles celles qui font vivre les marchés, et inscrire leurs visages dans une mémoire qui se transmet.",
    "story.chapter2.eyebrow": "Chapitre II",
    "story.chapter2.title": "Mettre les voix en commun",
    "story.chapter2.text": "De la solitude du geste à la force du collectif : les expériences se rencontrent, les récits circulent et une communauté prend forme.",
    "story.chapter3.eyebrow": "Chapitre III",
    "story.chapter3.title": "Transmettre",
    "story.chapter3.text": "La conversation devient une trace. Chaque portrait, chaque parole et chaque regard prolongent une histoire appelée à voyager.",
    "story.market.chapter1.eyebrow": "Chapitre I",
    "story.market.chapter1.title": "Celles qui font le marché",
    "story.market.chapter1.text": "Au marché, les gestes se répètent sans jamais être les mêmes. Ils organisent les journées, relient les familles et font circuler les savoir-faire d’une génération à l’autre.",
    "story.market.chapter2.eyebrow": "Chapitre II",
    "story.market.chapter2.title": "Rendre la lumière",
    "story.market.chapter2.text": "Les Patronnes est né d’une volonté simple : reconnaître ces femmes comme des actrices majeures de la vie béninoise, raconter leurs histoires et inscrire leurs visages dans une mémoire qui se transmet.",
    "story.market.chapter3.eyebrow": "Chapitre III",
    "story.market.chapter3.title": "Un marché en mouvement",
    "story.market.chapter3.text": "À PK3, le textile, les rencontres et les mémoires composent un paysage vivant. Le temps d’une journée, le marché devient l’espace d’une célébration collective.",
    "story.market.chapter4.eyebrow": "Chapitre IV",
    "story.market.chapter4.title": "Le marché devient scène",
    "story.market.chapter4.text": "Galerie à ciel ouvert, défilé, prise de parole et exposition : chaque geste élargit le regard porté sur celles qui tiennent le marché et inventent son avenir.",
    "story.market.chapter5.eyebrow": "Chapitre V",
    "story.market.chapter5.title": "La table comme langage",
    "story.market.chapter5.text": "Le banquet rassemble les voix, les saveurs et les gestes. Il donne une forme concrète à l’ambition des Patronnes : faire de la reconnaissance un moment partagé.",
    "story.end.title": "Les Patronnes",
    "story.end.text": "Une histoire vivante, à suivre.",
    "theme.system": "Système",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "title.home": "Accueil | Cheffe étoilée Michelin",
    "title.about": "À propos | Cheffe étoilée Michelin",
    "title.patronnes": "Les Patronnes | Cheffe étoilée Michelin",
    "title.press": "Presse et médias | Cheffe étoilée Michelin",
    "title.contact": "Contact | Cheffe étoilée Michelin"
    ,"title.actualites": "Actualités | Les Patronnes"
    ,"title.events": "Événements | Les Patronnes"
    ,"title.event-detail": "Événement | Les Patronnes"
    ,"title.shop": "Boutique | Les Patronnes"
  },
  en: {
    "nav.main": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.events": "Events",
    "nav.actualites": "News",
    "nav.shop": "Shop",
    "nav.stop1": "Stop 1",
    "nav.stop2": "Stop 2",
    "nav.patronnes": "Patronnes",
    "nav.press": "Press",
    "nav.contact": "Contact",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    search: "Search",
    "hero.title": "Les Patronnes",
    "hero.subtitle": "A project created by Michelin-starred chef Georgiana Viou, celebrating the women who bring Benin's markets to life",
    "hero.cta": "Discover",
    "story.open": "Discover the story",
    "story.openLabel": "Discover the Les Patronnes story",
    "story.market.openLabel": "Discover the markets story",
    "story.close": "Close",
    "story.closeLabel": "Close the story",
    "story.scroll": "Scroll to explore",
    "story.chapter1.eyebrow": "Chapter I",
    "story.chapter1.title": "Creating an archive",
    "story.chapter1.text": "Making the women who sustain the markets visible, and preserving their faces within a memory that can be passed on.",
    "story.chapter2.eyebrow": "Chapter II",
    "story.chapter2.title": "Bringing voices together",
    "story.chapter2.text": "From the solitude of individual work to the power of the collective: experiences meet, stories circulate and a community takes shape.",
    "story.chapter3.eyebrow": "Chapter III",
    "story.chapter3.title": "Passing it on",
    "story.chapter3.text": "The conversation becomes a record. Every portrait, every word and every gaze carries forward a story made to travel.",
    "story.market.chapter1.eyebrow": "Chapter I",
    "story.market.chapter1.title": "The women who make the market",
    "story.market.chapter1.text": "At the market, gestures are repeated but never identical. They shape the day, connect families and pass knowledge from one generation to the next.",
    "story.market.chapter2.eyebrow": "Chapter II",
    "story.market.chapter2.title": "Bringing them into the light",
    "story.market.chapter2.text": "Les Patronnes was born from a simple intention: to recognise these women as major figures in Beninese life, tell their stories and preserve their faces in a memory that can be passed on.",
    "story.market.chapter3.eyebrow": "Chapter III",
    "story.market.chapter3.title": "A market in motion",
    "story.market.chapter3.text": "At PK3, textiles, encounters and memories make up a living landscape. For one day, the market becomes a place of collective celebration.",
    "story.market.chapter4.eyebrow": "Chapter IV",
    "story.market.chapter4.title": "The market becomes a stage",
    "story.market.chapter4.text": "An open-air gallery, a runway, conversations and an exhibition: each gesture expands the way we see the women who sustain the market and shape its future.",
    "story.market.chapter5.eyebrow": "Chapter V",
    "story.market.chapter5.title": "The table as a language",
    "story.market.chapter5.text": "The banquet brings together voices, flavours and gestures. It gives tangible form to Les Patronnes’ ambition: turning recognition into a moment shared by all.",
    "story.end.title": "Les Patronnes",
    "story.end.text": "A living story, to be continued.",
    "theme.system": "System",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "title.home": "Home | Michelin-starred chef",
    "title.about": "About | Michelin-starred chef",
    "title.patronnes": "Les Patronnes | Michelin-starred chef",
    "title.press": "Press and media | Michelin-starred chef",
    "title.contact": "Contact | Michelin-starred chef"
    ,"title.actualites": "News | Les Patronnes"
    ,"title.events": "Events | Les Patronnes"
    ,"title.event-detail": "Event | Les Patronnes"
    ,"title.shop": "Shop | Les Patronnes"
  }
};

// Navigation commune : Presse quitte le menu au profit de la boutique.
document.querySelectorAll(".site-nav__links").forEach((linksContainer) => {
  const aboutLink = linksContainer.querySelector('[data-i18n="nav.about"]');
  const eventsLink = linksContainer.querySelector('[data-i18n="nav.events"]');
  const actualitesLink = linksContainer.querySelector('[data-i18n="nav.actualites"]');
  const eventHref = eventsLink?.getAttribute("href") || "pages/events.html";
  const pagePrefix = eventHref.includes("/") ? eventHref.slice(0, eventHref.lastIndexOf("/") + 1) : "";

  linksContainer.replaceChildren(...[aboutLink, eventsLink, actualitesLink].filter(Boolean));

  const shopLink = document.createElement("a");
  shopLink.href = `${pagePrefix}boutique.html`;
  shopLink.dataset.i18n = "nav.shop";
  shopLink.textContent = "Boutique";
  linksContainer.appendChild(shopLink);
});

const readPreference = (key, fallback) => {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const savePreference = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Some browsers restrict localStorage for local file:// pages.
  }
};

document.querySelectorAll("[data-nav-preferences]").forEach((container) => {
  container.innerHTML = `
    <button class="site-nav__preference language-toggle" type="button" data-language-toggle>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"></path>
      </svg>
      <span data-language-label>FR</span>
    </button>
    <button class="site-nav__preference theme-toggle" type="button" data-theme-toggle>
      <span class="theme-toggle__icons" aria-hidden="true">
        <svg viewBox="0 0 24 24" data-theme-icon="light" hidden>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>
        </svg>
        <svg viewBox="0 0 24 24" data-theme-icon="dark" hidden>
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"></path>
        </svg>
      </span>
      <span class="theme-toggle__label" data-theme-label>Système</span>
    </button>
  `;
});

const languageButtons = document.querySelectorAll("[data-language-toggle]");
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const themeOrder = ["light", "dark"];
const pageParameters = new URLSearchParams(window.location.search);
let activeLanguage = pageParameters.get("lang") || readPreference("site-language", "fr");
let activeTheme = pageParameters.get("theme") || readPreference("site-theme", "light");

if (!translations[activeLanguage]) activeLanguage = "fr";
if (!themeOrder.includes(activeTheme)) activeTheme = "light";

const translate = (key) => translations[activeLanguage][key] || key;
window.siteTranslate = translate;

const syncPreferenceLinks = () => {
  document.querySelectorAll('a[href*=".html"]').forEach((link) => {
    if (!link.dataset.preferenceHref) {
      link.dataset.preferenceHref = link.getAttribute("href").split("?")[0];
    }

    const parameters = new URLSearchParams({
      lang: activeLanguage,
      theme: activeTheme
    });
    link.setAttribute("href", `${link.dataset.preferenceHref}?${parameters}`);
  });
};

const updateThemeControls = () => {
  themeButtons.forEach((button) => {
    button.querySelectorAll("[data-theme-icon]").forEach((icon) => {
      icon.toggleAttribute("hidden", icon.dataset.themeIcon !== activeTheme);
    });

    const label = button.querySelector("[data-theme-label]");
    if (label) label.textContent = translate(`theme.${activeTheme}`);

    const currentTheme = translate(`theme.${activeTheme}`);
    button.setAttribute(
      "aria-label",
      activeLanguage === "fr"
        ? `Changer de thème. Thème actuel : ${currentTheme}`
        : `Change theme. Current theme: ${currentTheme}`
    );
    button.setAttribute("title", currentTheme);
  });
};

const applyTheme = (theme, persist = true) => {
  activeTheme = theme;
  document.documentElement.dataset.theme = activeTheme;
  if (persist) savePreference("site-theme", activeTheme);
  updateThemeControls();
  syncPreferenceLinks();
};

const applyLanguage = (language, persist = true) => {
  activeLanguage = language;
  document.documentElement.lang = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });

  const page = document.body.dataset.page;
  if (page) document.title = translate(`title.${page}`);

  languageButtons.forEach((button) => {
    const label = button.querySelector("[data-language-label]");
    if (label) label.textContent = activeLanguage.toUpperCase();
    button.setAttribute(
      "aria-label",
      activeLanguage === "fr" ? "Passer le site en anglais" : "Switch site to French"
    );
    button.setAttribute("title", activeLanguage === "fr" ? "English" : "Français");
  });

  if (persist) savePreference("site-language", activeLanguage);
  updateThemeControls();
  syncPreferenceLinks();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(activeLanguage === "fr" ? "en" : "fr");
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentIndex = themeOrder.indexOf(activeTheme);
    applyTheme(themeOrder[(currentIndex + 1) % themeOrder.length]);
  });
});

applyTheme(activeTheme, false);
applyLanguage(activeLanguage, false);

// Menu plein écran pour la navigation mobile, partagé par toutes les pages.
document.querySelectorAll(".site-nav").forEach((nav) => {
  const burger = nav.querySelector(".site-nav__burger");
  const logo = nav.querySelector(".site-nav__logo");
  const links = Array.from(nav.querySelectorAll(".site-nav__links a"));
  if (!burger || !logo || !links.length) return;

  const menu = document.createElement("div");
  menu.className = "site-mobile-menu";
  menu.hidden = true;
  menu.setAttribute("data-mobile-menu", "");
  menu.setAttribute("aria-label", translate("nav.main"));

  const menuLinks = document.createElement("div");
  menuLinks.className = "site-mobile-menu__links";
  links.forEach((link) => {
    const mobileLink = link.cloneNode(true);
    if (mobileLink.dataset.i18n) mobileLink.textContent = translate(mobileLink.dataset.i18n);
    menuLinks.appendChild(mobileLink);
  });
  const contactLink = nav.querySelector(".site-nav__contact");
  if (contactLink) {
    const mobileContactLink = contactLink.cloneNode(true);
    if (mobileContactLink.dataset.i18n) {
      mobileContactLink.textContent = translate(mobileContactLink.dataset.i18n);
    }
    menuLinks.appendChild(mobileContactLink);
  }
  menu.appendChild(menuLinks);
  nav.closest(".site-header")?.appendChild(menu);

  const closeMenu = () => {
    menu.hidden = true;
    document.body.classList.remove("mobile-menu-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", translate("menu.open"));
  };

  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-controls", "mobile-menu");
  menu.id = "mobile-menu";
  burger.addEventListener("click", () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    document.body.classList.toggle("mobile-menu-open", opening);
    burger.setAttribute("aria-expanded", String(opening));
    burger.setAttribute("aria-label", translate(opening ? "menu.close" : "menu.open"));
  });
  menuLinks.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) closeMenu();
  });
});
syncPreferenceLinks();

const header = document.querySelector("[data-header]");

if (header) {
  let scrollTicking = false;

  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
    scrollTicking = false;
  };

  const handleScroll = () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateHeader);
      scrollTicking = true;
    }
  };

  updateHeader();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

const heroCarousel = window.heroCarousel;

if (heroCarousel) {
  const carouselElement = heroCarousel.element;
  const DRAG_THRESHOLD = 55;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let dragInput = null;
  let suppressCarouselClickUntil = 0;

  const beginDrag = (x, y = 0, input = "mouse") => {
    dragging = true;
    dragInput = input;
    startX = x;
    startY = y;
    currentX = x;
    carouselElement.classList.add("is-dragging");
    heroCarousel.pauseAuto();
  };

  const moveDrag = (x) => {
    if (!dragging) return;
    currentX = x;
    if (Math.abs(currentX - startX) >= DRAG_THRESHOLD) {
      suppressCarouselClickUntil = window.performance.now() + 500;
    }
    heroCarousel.previewDrag(currentX - startX);
  };

  const endDrag = () => {
    if (!dragging) return;
    const distance = currentX - startX;

    dragging = false;
    carouselElement.classList.remove("is-dragging");

    if (Math.abs(distance) < DRAG_THRESHOLD) {
      heroCarousel.resetDrag();
    } else if (distance < 0) {
      heroCarousel.next();
    } else {
      heroCarousel.previous();
    }

    if (dragInput === "touch") {
      heroCarousel.resumeAuto(500);
    } else if (!carouselElement.matches(":hover")) {
      heroCarousel.resumeAuto();
    }

    dragInput = null;
  };

  carouselElement.addEventListener("dragstart", (event) => event.preventDefault());
  carouselElement.addEventListener("click", (event) => {
    if (window.performance.now() > suppressCarouselClickUntil) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressCarouselClickUntil = 0;
  }, true);

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    carouselElement.addEventListener("mouseenter", () => {
      heroCarousel.pauseAuto();
    });

    carouselElement.addEventListener("mouseleave", () => {
      if (!dragging && !document.body.classList.contains("story-open")) {
        heroCarousel.resumeAuto();
      }
    });
  }

  carouselElement.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    beginDrag(event.clientX, event.clientY, "mouse");
  });

  window.addEventListener("mousemove", (event) => {
    moveDrag(event.clientX);
  });

  window.addEventListener("mouseup", endDrag);

  carouselElement.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    beginDrag(touch.clientX, touch.clientY, "touch");
  }, { passive: true });

  carouselElement.addEventListener("touchmove", (event) => {
    if (!dragging) return;
    const touch = event.touches[0];
    const distanceX = touch.clientX - startX;
    const distanceY = touch.clientY - startY;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      event.preventDefault();
      moveDrag(touch.clientX);
    }
  }, { passive: false });

  carouselElement.addEventListener("touchend", endDrag);
  carouselElement.addEventListener("touchcancel", () => {
    dragging = false;
    dragInput = null;
    carouselElement.classList.remove("is-dragging");
    heroCarousel.resetDrag();
    heroCarousel.resumeAuto(500);
  });
}
