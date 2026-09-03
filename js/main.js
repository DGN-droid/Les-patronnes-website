
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

// Contenus éditoriaux : le français reste la source, l'anglais est appliqué
// à la demande sans dupliquer les pages HTML.
const englishCopy = {
  home: [
    [".home-hero__subtitle", "A project imagined by Michelin-starred chef Georgiana Viou, celebrating the women who bring Benin's markets to life."],
    [".home-manifesto > p:last-child", "A story of women, markets and transmission."]
  ],
  about: [
    [".about-hero__content .about-eyebrow", "The project"],
    [".about-hero__subtitle", "A living archive of Beninese markets"],
    [".about-hero__lead", "Les Patronnes celebrates the women who bring Cotonou's markets to life every day. Traders, cooks, keepers of know-how and neighbourhood figures: they feed a city, circulate materials and ideas, and sustain the ties that hold a community together."],
    [".about-hero__content > p:last-child", "Imagined by Georgiana Viou, the project gives these presences the place they deserve. It uses photography, fashion and gastronomy as ways of looking differently: attentively, respectfully and alongside the women whose gestures shape contemporary Benin."],
    [".about-timeline .about-eyebrow", "Our approach"],
    ["#journey-title", "Make visible, connect, pass on"],
    [".about-section-heading > p:last-child", "Les Patronnes begins with a simple gesture: taking the time to listen to women whose work is everywhere, yet whose stories are still too rarely written into our shared history."],
    [".about-accordion__item:nth-child(1) summary", "Creating an archive", "leading"],
    [".about-accordion__item:nth-child(1) p:nth-child(1)", "The portraits, conversations and images created by the project form a sensitive memory of the markets. They protect faces, voices and practices passed from one generation to the next from being forgotten."],
    [".about-accordion__item:nth-child(1) p:nth-child(2)", "Each documented presence affirms that these women matter today and will still matter when the market stalls have changed hands."],
    [".about-accordion__item:nth-child(2) summary", "Making the market a stage", "leading"],
    [".about-accordion__item:nth-child(2) p:nth-child(1)", "A market can become an open-air gallery, a runway or a banquet table. Les Patronnes turns daily space into a place of celebration without ever separating it from the women who sustain it."],
    [".about-accordion__item:nth-child(2) p:nth-child(2)", "Fashion reveals materials, photography offers a fair perspective and gastronomy brings people together: three languages for bringing voices into conversation."],
    [".about-accordion__item:nth-child(3) summary", "Honouring know-how", "leading"],
    [".about-accordion__item:nth-child(3) p:nth-child(1)", "Les Patronnes recognises the expertise of women who know how to select, prepare, negotiate and feed. These skills are not a detail of economic life: they are one of its deepest strengths."],
    [".about-accordion__item:nth-child(3) p:nth-child(2)", "The project pays tribute to the inventiveness, sovereignty and generosity of Beninese market women."],
    [".about-accordion__item:nth-child(4) summary", "Building a collective", "leading"],
    [".about-accordion__item:nth-child(4) p:nth-child(1)", "The project brings together market women, artists, cooks, partners and visitors around one shared ambition: recognising what already exists and giving it greater resonance."],
    [".about-accordion__item:nth-child(4) p:nth-child(2)", "Les Patronnes is a collective story, made to travel throughout Benin and far beyond its borders."],
    [".about-quote blockquote p", "Their faces matter, and they will still matter when their market stalls have changed hands."],
    [".about-quote blockquote footer", "— Les Patronnes"],
    [".about-portraits .about-section-heading .about-eyebrow", "The project's voices"],
    ["#portraits-title", "They carry Les Patronnes"],
    [".about-portraits__card:nth-child(1) .about-portraits__description", "Michelin-starred chef, writer, speaker and founder of Les Patronnes."],
    [".about-portraits__card:nth-child(2) .about-portraits__description", "Entrepreneur, speaker and builder of bridges between France and Benin."],
    [".about-portraits__card:nth-child(3) .about-portraits__description", "Opinion leader, bestselling essayist, TEDx speaker and cultural entrepreneur."],
    [".about-portraits__card:nth-child(4) .about-portraits__description", "Content creator and entrepreneur."],
    [".about-cta .about-eyebrow", "Take action"],
    ["#patronnes-title", "Follow the movement"],
    [".about-cta__content > p:nth-of-type(2)", "Through Stops, portraits, tables and conversations, discover how Les Patronnes makes the market a space for expression, recognition and transmission."],
    [".about-cta__content > p:nth-of-type(3)", "Each edition extends the story, broadens the collective and brings new light to the women who keep Cotonou alive."]
  ],
  events: [
    [".events-intro__content .events-eyebrow", "Les Patronnes in motion"],
    ["#events-title", "Events"],
    [".events-intro__content > p:last-child", "Every gathering offers a new way of seeing markets: a time to listen, celebrate and place the women who bring them to life at the heart of the conversation."],
    [".event-row--ganhi .event-row__name", "Les Patronnes<br>Stop 1", "html"],
    [".event-row--ganhi .event-row__place", "Ganhi Market<br><b>7 March 2026</b>", "html"],
    [".event-row--sofitel .event-row__name", "Les Patronnes<br>Round table", "html"],
    [".event-row--sofitel .event-row__place", "Sofitel Cotonou Marina<br><b>9 July 2026</b>", "html"],
    [".event-row--pk3 .event-row__name", "Les Patronnes<br>Stop 2", "html"],
    [".event-row--pk3 .event-row__place", "PK3 Market<br><b>11 July 2026</b>", "html"]
  ],
  actualites: [
    [".actualites-hero .actualites-eyebrow", "The project in the media"],
    ["#actualites-title", "News"],
    [".actualites-hero > p:last-child", "The media reach of Les Patronnes, through each publication."]
  ],
  shop: [
    [".shop-intro .shop-eyebrow", "Inaugural edition"],
    ["#shop-title", "Shop"],
    [".shop-intro > p:last-child", "Wearing Les Patronnes means carrying the project beyond the markets. A first collection imagined as a gesture of support, pride and conversation."],
    [".shop-product__content > .shop-eyebrow", "First drop"],
    ["#shirt-title", "The Les Patronnes<br>T-shirt", "html"],
    [".shop-product__content > p:not(.shop-eyebrow)", "A statement piece designed for market days and city life alike. A relaxed fit, a bold mark and four colours inspired by Cotonou's materials, spices and energy."],
    ["#shirt-colour-label", "Choose a colour <span data-selected-colour>Cotton white</span>", "html"],
    ["#shirt-size-label", "Choose a size <span data-selected-size>XS</span>", "html"],
    [".shop-product__details div:nth-child(1) dt", "Fit"],
    [".shop-product__details div:nth-child(1) dd", "Unisex · relaxed oversized fit"],
    [".shop-product__details div:nth-child(2) dt", "Material"],
    [".shop-product__details div:nth-child(2) dd", "240 g/m² cotton jersey"],
    [".shop-product__details div:nth-child(3) dt", "Finish"],
    [".shop-product__details div:nth-child(3) dd", "Chest print and woven label"],
    [".shop-product__details div:nth-child(4) dt", "Sizes"],
    [".shop-product__purchase span", "Availability"],
    [".shop-product__purchase strong", "Pre-order coming soon"],
    [".shop-product__cta", "Be notified at launch <span aria-hidden=\"true\"></span>", "html"],
    [".shop-product__delivery", "Collection in Cotonou and delivery coming soon. Proceeds support the reach of Les Patronnes."],
    [".shop-note p", "The collection will grow gradually. For this first chapter: a few carefully considered pieces and one shared desire to help Les Patronnes shine."]
  ],
  contact: [
    [".contact-hero .contact-eyebrow", "Partnerships, patronage & contact"],
    ["#contact-title", "Let's build<br>what comes next", "html"],
    [".contact-hero > p:last-child", "Les Patronnes brings together market women, creators, businesses and institutions around a shared story. Whether you want to support the project, talk about it or simply write to us, the conversation starts here."],
    [".contact-details .contact-eyebrow", "Partnerships & patronage"],
    [".contact-details h2", "Growing<br>the movement", "html"],
    [".contact-details > p:nth-of-type(2)", "Les Patronnes is a cultural, social and heritage project. It makes visible the essential role of women who keep Beninese markets alive and places their stories in a contemporary, living and shared memory."],
    [".contact-details > p:nth-of-type(3)", "Different levels of partnership can be considered according to each partner's objectives: patronage, operational support, visibility, production or the transmission of know-how."],
    [".contact-details__cta", "Become a partner <span class=\"contact-arrow contact-arrow--down\" aria-hidden=\"true\"></span>", "html"],
    [".contact-partners > p", "They already support the project"],
    [".contact-details__note", "Media relations & partnerships: Nere Consultants and Karl Lawson."],
    [".contact-form-wrap__heading .contact-eyebrow", "Write to us"],
    [".contact-form-wrap__heading h2", "Your enquiry"],
    [".contact-form-wrap__heading > p:last-child", "Tell us what you need; we will respond with the attention your message deserves."],
    [".contact-form label:nth-of-type(1)", "First and last name", "leading"],
    [".contact-form label:nth-of-type(2)", "Email address", "leading"],
    [".contact-form > label:nth-of-type(1)", "You are contacting us about", "leading"],
    [".contact-form > label:nth-of-type(2)", "Your message", "leading"],
    [".contact-form option[value=\"\"]", "Select a subject"],
    [".contact-form option[value=\"partnership\"]", "Partnership or patronage"],
    [".contact-form option[value=\"press\"]", "Media or press enquiry"],
    [".contact-form option[value=\"market\"]", "Project participation"],
    [".contact-form option[value=\"other\"]", "Other enquiry"],
    [".contact-form button", "Send your enquiry <span class=\"contact-arrow contact-arrow--right\" aria-hidden=\"true\"></span>", "html"],
    [".contact-form__notice", "The form will be connected to the project's mailbox when the website goes live. In the meantime, you can write to us directly."],
    [".contact-general .contact-eyebrow", "General contact"],
    [".contact-general > p:last-child", "For media enquiries, exchanges with markets or any other question."],
    [".contact-closing p", "A partnership is a way of ensuring the stories that matter can endure."],
    [".contact-closing a", "<span class=\"contact-arrow contact-arrow--left\" aria-hidden=\"true\"></span> Back to home", "html"]
  ]
};

const englishEventCopy = {
  "event-stop-1.html": [
    [".event-detail__hero header p", "Les Patronnes · Stop 1"],
    [".event-detail__hero header h1", "Ganhi Market"],
    [".event-detail__hero header span", "7 March 2026 · Cotonou"],
    [".event-detail__story > .events-eyebrow", "The first gathering"],
    [".event-detail__story > h2", "Making the market a place of memory"],
    [".event-detail__story > div p:nth-child(1)", "Stop 1 opens the Les Patronnes cycle at Ganhi Market. It is dedicated to the women whose presence and work animate the everyday circulation of Cotonou."],
    [".event-detail__story > div p:nth-child(2)", "Symbolically, the first Les Patronnes Stop was held on the eve of International Women's Rights Day."],
    [".event-detail__story > div p:nth-child(3)", "Through images, exchanges and shared gestures, the event opens the first chapter of a story made to travel from market to market."],
    [".event-narrative > div:first-child .events-eyebrow", "The story"],
    [".event-narrative > div:first-child h2", "A threshold, not an interlude"],
    [".event-narrative > div:last-child p:nth-child(1)", "At Ganhi Market, Les Patronnes takes the time to name what is already there: a daily economy, meticulous solidarities and women whose gestures organise the city. The first Stop does not turn the market into a backdrop. It listens to it, sees it and recognises it as a place of knowledge."],
    [".event-narrative > div:last-child p:nth-child(2)", "Photography becomes a way of creating an archive. The portraits reveal faces, but also journeys, professions and a presence that must no longer remain out of frame. Fashion and gastronomy extend this gesture: they create a space for celebration without ever separating the celebration from those who make it possible."],
    [".event-narrative > div:last-child p:nth-child(3)", "This first gathering makes a promise: to move from market to market, collect stories and circulate a collective history that first belongs to the women who live it."],
    [".event-film .events-eyebrow", "The Stop 1 film"],
    [".event-film h2", "Ganhi in motion"],
    [".event-detail__back a:first-child", "← All events"],
    [".event-detail__back a:last-child", "Next event →"]
  ],
  "event-table-ronde.html": [
    [".event-detail__hero header p", "Les Patronnes round table"],
    [".event-detail__hero header h1", "Sofitel Cotonou Marina"],
    [".event-detail__hero header span", "9 July 2026 · Cotonou"],
    [".event-detail__story-heading .events-eyebrow", "Voices together"],
    [".event-detail__story-heading h2", "Creating the conditions for listening"],
    [".event-detail__story-copy p:nth-child(1)", "At Sofitel Cotonou Marina, Les Patronnes opens a space for conversation where entrepreneurs, creators, chefs and market women meet. It is an exacting dialogue, nourished by the experience of women who act."],
    [".event-detail__story-copy p:nth-child(2)", "The round table makes hospitality an architecture of care: a time to share stories, circulate ideas and imagine lasting alliances."],
    [".event-gallery__heading .events-eyebrow", "Sofitel Cotonou Marina"],
    [".event-gallery__heading h2", "Voices gathered"],
    [".event-gallery__item--1 figcaption", "The stage"],
    [".event-gallery__item--2 figcaption", "The voices"],
    [".event-gallery__item--3 figcaption", "Encounters"],
    [".event-gallery__item--4 figcaption", "Listening"],
    [".event-gallery__item--5 figcaption", "The trace"],
    [".event-detail__back a:first-child", "← All events"],
    [".event-detail__back a:last-child", "Next event →"]
  ],
  "event-stop-2.html": [
    [".event-detail__hero header p", "Les Patronnes · Stop 2"],
    [".event-detail__hero header h1", "PK3 Market"],
    [".event-detail__hero header span", "11 July 2026 · Cotonou"],
    [".event-detail__story-heading .events-eyebrow", "A market in motion"],
    [".event-detail__story-heading h2", "Gallery, runway, banquet"],
    [".event-detail__story-copy p:nth-child(1)", "PK3 Market becomes an open-air gallery, a fashion show and an immense banquet table. This second step pays tribute to women who make textiles, trade and transmission a daily force."],
    [".event-detail__story-copy p:nth-child(2)", "A photography exhibition, masterclasses, talks and a popular banquet form a day in which the market tells its story through the women who hold it together."],
    [".event-narrative__heading .events-eyebrow", "The story"],
    [".event-narrative__heading h2", "PK3, a memory to wear"],
    [".event-narrative__copy p:nth-child(1)", "At PK3 Market, textiles are an archive in motion. Fabrics, selling gestures and silhouettes tell a story of trade, invention and transmission. By choosing this place, Les Patronnes pays tribute to women who make the market a space of work, style and sovereignty."],
    [".event-narrative__copy p:nth-child(2)", "For one day, PK3 becomes an open-air gallery, a runway, a place of learning and a long table. The documentary exhibition Ye dje invites visitors to look at the faces of those who feed and dress the city; the fashion show and masterclass put local know-how centre stage."],
    [".event-narrative__copy p:nth-child(3)", "The grand banquet continues the conversation through food. Around the same table, market women, artists, guests and visitors share a popular moment where recognition, pleasure and memory become one."],
    [".event-programme > div .events-eyebrow", "A full day"],
    [".event-programme > div h2", "Highlights"],
    [".event-programme li:nth-child(1) h3", "Ye dje, the exhibition"],
    [".event-programme li:nth-child(1) p", "An open-air documentary exhibition dedicated to the women who dress and feed the city."],
    [".event-programme li:nth-child(2) h3", "Fashion show & masterclass"],
    [".event-programme li:nth-child(2) p", "Fashion and transmission come together to spotlight materials and know-how."],
    [".event-programme li:nth-child(3) h3", "Grand banquet"],
    [".event-programme li:nth-child(3) p", "A popular table imagined with the market's cooks, where gastronomy becomes a shared language."],
    [".event-detail__back a:first-child", "← All events"],
    [".event-detail__back a:last-child", "Back to Stop 1 →"]
  ]
};

const setLocalizedCopy = (element, value, mode = "text") => {
  if (!element) return;
  if (!element.dataset.i18nOriginal) element.dataset.i18nOriginal = element.innerHTML;
  if (activeLanguage !== "en") {
    element.innerHTML = element.dataset.i18nOriginal;
  } else if (mode === "html") {
    element.innerHTML = value;
  } else if (mode === "leading") {
    const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = value;
  } else {
    element.textContent = value;
  }
};

const applyPageCopy = () => {
  const entries = englishCopy[document.body.dataset.page] || [];
  entries.forEach(([selector, value, mode]) => setLocalizedCopy(document.querySelector(selector), value, mode));

  const eventEntries = englishEventCopy[window.location.pathname.split("/").pop()] || [];
  eventEntries.forEach(([selector, value, mode]) => setLocalizedCopy(document.querySelector(selector), value, mode));

  if (document.body.dataset.page === "actualites") {
    document.querySelectorAll(".actualites-feed__link").forEach((link) => setLocalizedCopy(link, "Read article <span class=\"actualites-feed__arrow\" aria-hidden=\"true\"></span>", "html"));
    document.querySelectorAll(".actualites-feed__date").forEach((date) => {
      if (!date.dataset.i18nOriginal) date.dataset.i18nOriginal = date.textContent;
      date.textContent = activeLanguage === "en" ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date.dateTime}T12:00:00`)) : date.dataset.i18nOriginal;
    });
  }
};

window.applyPageCopy = applyPageCopy;

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
  applyPageCopy();
  window.dispatchEvent(new CustomEvent("site:languagechange", { detail: { language: activeLanguage } }));
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
