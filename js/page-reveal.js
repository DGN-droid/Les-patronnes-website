const eventNarratives = {
  "event-stop-1.html": {
    eyebrow: "Le récit",
    title: "Un seuil, pas&nbsp;une parenthèse",
    paragraphs: [
      "Au Marché Ganhi, Les Patronnes prend le temps de nommer ce qui est déjà là : une économie quotidienne, des solidarités minutieuses et des femmes dont les gestes organisent la ville. Le premier Stop ne cherche pas à transformer le marché en décor. Il l’écoute, le regarde et le reconnaît comme un lieu de savoir.",
      "La photographie y devient une manière de faire archive. Les portraits donnent à voir des visages, mais aussi des trajectoires, des métiers et une présence qui ne doit plus rester hors-champ. La mode et la gastronomie prolongent ce geste : elles créent un espace de célébration, sans jamais séparer la fête de celles qui la rendent possible.",
      "Ce premier rendez-vous pose une promesse : aller de marché en marché, recueillir les récits et faire circuler une histoire collective qui appartient d’abord à celles qui la vivent."
    ]
  },
  "event-table-ronde.html": {
    eyebrow: "Le récit",
    title: "La parole comme levier",
    paragraphs: [
      "Le 9 juillet, le Sofitel Cotonou Marina accueille une table ronde qui fait de l’écoute un acte concret. Autour de la cheffe Georgiana Viou, des entrepreneuses, créatrices, penseuses et femmes engagées croisent leurs expériences pour interroger ce qui change lorsque des voix, des réseaux et des savoir-faire se mettent au service des autres.",
      "Il ne s’agit pas seulement de raconter les femmes des marchés, mais de leur accorder la place qu’elles méritent dans les récits économiques, culturels et politiques. L’hospitalité devient alors une méthode : accueillir des paroles, relier des parcours et donner le temps nécessaire à une conversation exigeante.",
      "La rencontre ouvre le deuxième chapitre des Patronnes. Elle rappelle que le collectif ne se décrète pas : il se construit dans les alliances, les attentions et les engagements que l’on choisit de faire durer."
    ]
  },
  "event-stop-2.html": {
    eyebrow: "Le récit",
    title: "PK3, une mémoire qui se porte",
    image: "../assets/images/img95.jpeg",
    paragraphs: [
      "Au Marché PK3, le textile est une archive en mouvement. Les pagnes, les étoffes, les gestes de vente et les silhouettes racontent une histoire de commerce, d’invention et de transmission. En choisissant ce lieu, Les Patronnes rend hommage aux femmes qui font du marché un espace de travail, de style et de souveraineté.",
      "Le temps d’une journée, PK3 devient une galerie à ciel ouvert, un podium, une salle de transmission et une longue table. L’exposition documentaire Yè djè invite à regarder les visages de celles qui nourrissent et habillent la ville ; le défilé et la masterclass mettent les savoir-faire locaux au premier plan.",
      "Le grand banquet prolonge cette conversation par la cuisine. Autour de la même table, les femmes du marché, les artistes, les invités et les visiteurs partagent un moment populaire où reconnaissance, plaisir et mémoire ne font plus qu’un."
    ]
  }
};

const eventProgrammes = {
  "event-stop-2.html": {
    eyebrow: "Une journée entière",
    title: "Les temps forts",
    items: [
      ["Yè djè, l’exposition", "Une exposition documentaire à ciel ouvert, consacrée à celles qui habillent et nourrissent la ville."],
      ["Défilé & masterclass", "La mode et la transmission se rencontrent pour mettre en lumière les matières et les savoir-faire."],
      ["Grand banquet", "Une table populaire pensée avec les cuisinières du marché, où la gastronomie devient langage commun."]
    ],
    video: "../assets/images/PK3.mp4"
  }
};

const eventGalleries = {
  "event-table-ronde.html": {
    eyebrow: "Sofitel Cotonou Marina",
    title: "Des voix réunies",
    images: [
      ["../assets/images/img44.jpg", "La table ronde Les Patronnes au Sofitel Cotonou Marina", "La scène"],
      ["../assets/images/img55.jpg", "Les intervenantes de la table ronde Les Patronnes", "Les voix"],
      ["../assets/images/img92.jpeg", "Un moment de partage lors de la table ronde", "Les rencontres"],
      ["../assets/images/img58.jpg", "Le public de la table ronde Les Patronnes", "L’écoute"],
      ["../assets/images/img42.jpg", "Les Patronnes au Sofitel Cotonou Marina", "La trace"]
    ]
  },
  "event-stop-2.html": {
    eyebrow: "Marché PK3",
    title: "La ville en mouvement",
    images: [
      ["../assets/images/img29.jpg", "Les Patronnes au Marché PK3", "Le mouvement"],
      ["../assets/images/img16.jpg", "Un moment de la journée Les Patronnes", "Les rencontres"],
      ["../assets/images/img17.jpg", "Les femmes réunies pour Les Patronnes", "Le collectif"],
      ["../assets/images/img11.jpg", "Un portrait lors de l’événement PK3", "Les visages"],
      ["../assets/images/img21.jpg", "La communauté des Patronnes au marché PK3", "La communauté"],
      ["../assets/images/img26.jpg", "Les invités des Patronnes", "Les voix"],
      ["../assets/images/img94.jpeg", "Un instant de célébration au Marché PK3", "La célébration"]
    ]
  }
};

const eventVideos = {
  "event-stop-1.html": {
    eyebrow: "Le film du Stop 1",
    title: "Ganhi en mouvement",
    embed: "https://player.vimeo.com/video/1223832115?autoplay=1&muted=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
  }
};

const pageName = window.location.pathname.split("/").pop();
const narrative = eventNarratives[pageName];
const programme = eventProgrammes[pageName];
const gallery = eventGalleries[pageName];
const video = eventVideos[pageName];
const detailNavigation = document.querySelector(".event-detail__back");

if (narrative && detailNavigation) {
  const section = document.createElement("section");
  section.className = narrative.image ? "event-narrative event-narrative--pk3" : "event-narrative";
  section.dataset.eventsReveal = "";
  section.innerHTML = narrative.image
    ? `<div class="event-narrative__heading"><p class="events-eyebrow">${narrative.eyebrow}</p><h2>${narrative.title}</h2></div><figure class="event-narrative__media"><img class="image-fade-in" src="${narrative.image}" alt="Les Patronnes au marché PK3" loading="lazy" decoding="async"></figure><div class="event-narrative__copy">${narrative.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>`
    : `<div><p class="events-eyebrow">${narrative.eyebrow}</p><h2>${narrative.title}</h2></div><div>${narrative.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>`;
  section.querySelectorAll("img").forEach((image) => window.prepareImageFade?.(image));
  detailNavigation.before(section);
}

if (gallery && detailNavigation) {
  const section = document.createElement("section");
  section.className = "event-gallery";
  section.dataset.eventsReveal = "";
  section.innerHTML = `<div class="event-gallery__heading"><p class="events-eyebrow">${gallery.eyebrow}</p><h2>${gallery.title}</h2></div><div class="event-gallery__grid">${gallery.images.map(([src, alt, label], index) => `<figure class="event-gallery__item event-gallery__item--${index + 1}"><img class="image-fade-in" src="${src}" alt="${alt}" loading="lazy" decoding="async"><figcaption>${label}</figcaption></figure>`).join("")}</div>`;
  section.querySelectorAll("img").forEach((image) => window.prepareImageFade?.(image));
  detailNavigation.before(section);
}

if (video && detailNavigation) {
  const section = document.createElement("section");
  section.className = "event-film";
  section.dataset.eventsReveal = "";
  section.innerHTML = `<div class="event-film__heading"><p class="events-eyebrow">${video.eyebrow}</p><h2>${video.title}</h2></div><iframe class="event-film__player" src="${video.embed}" title="Film du Stop 1 des Patronnes au Marché Ganhi" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  detailNavigation.before(section);
}

if (programme && detailNavigation) {
  const section = document.createElement("section");
  section.className = "event-programme";
  section.dataset.eventsReveal = "";
  section.innerHTML = `<div><p class="events-eyebrow">${programme.eyebrow}</p><h2>${programme.title}</h2></div><ol>${programme.items.map(([title, text], index) => `<li><span>0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join("")}</ol>${programme.video ? `<video class="event-programme__player" autoplay muted loop playsinline controls preload="auto" aria-label="Film des Patronnes au marché PK3"><source src="${programme.video}">Votre navigateur ne prend pas en charge la lecture de cette vidéo.</video>` : ""}`;
  section.querySelectorAll("video").forEach((player) => player.addEventListener("canplay", () => player.play().catch(() => {}), { once: true }));
  detailNavigation.before(section);
}

const revealElements = document.querySelectorAll("[data-events-reveal]");

if (revealElements.length && window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.gsap.set(revealElements, { autoAlpha: 0, y: 26 });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      window.gsap.to(entry.target, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power2.out" });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
}
