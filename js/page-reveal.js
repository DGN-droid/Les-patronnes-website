const eventProgrammes = {
  "event-stop-1.html": {
    eyebrow: "Trois temps pour se rencontrer",
    title: "Le programme",
    items: [
      ["Exposition photo", "Des portraits consacrés aux femmes du marché, pour faire entrer leurs visages dans l’histoire visuelle contemporaine."],
      ["Défilé de savoir-faire", "Des créations, des tissus locaux et l’upcycling pour célébrer les gestes qui habillent la ville."],
      ["Banquet à ciel ouvert", "Un grand déjeuner populaire imaginé comme un moment de transmission et de partage."]
    ]
  },
  "event-table-ronde.html": {
    eyebrow: "Le cercle de parole",
    title: "Une conversation située",
    items: [
      ["Regarder", "Donner de l’espace aux expériences, aux histoires et aux visages qui font les marchés."],
      ["Écouter", "Faire circuler une parole de femmes, libre, exigeante et attentive aux réalités de terrain."],
      ["Relier", "Créer des alliances entre initiatives culturelles, entrepreneuriat et transmission."]
    ]
  },
  "event-stop-2.html": {
    eyebrow: "Une journée entière",
    title: "Les temps forts",
    items: [
      ["Yè djè, l’exposition", "Une exposition documentaire à ciel ouvert, consacrée à celles qui habillent et nourrissent la ville."],
      ["Défilé & masterclass", "La mode et la transmission se rencontrent pour mettre en lumière les matières et les savoir-faire."],
      ["Grand banquet", "Une table populaire pensée avec les cuisinières du marché, où la gastronomie devient langage commun."]
    ]
  }
};

const eventGalleries = {
  "event-stop-1.html": {
    eyebrow: "Regards sur le premier stop",
    title: "Une présence à raconter",
    images: [
      ["../assets/images/img1.jpeg", "Le collectif Les Patronnes réuni à Cotonou", "Le collectif"],
      ["../assets/images/img53.png", "Les participantes du Stop 1 au Marché Ganhi", "Les visages"],
      ["../assets/images/img16.jpeg", "Le manifeste du projet Les Patronnes", "Le manifeste"]
    ]
  },
  "event-table-ronde.html": {
    eyebrow: "Sofitel Cotonou Marina",
    title: "Des voix réunies",
    images: [
      ["../assets/images/img12.jpeg", "Les intervenantes de la table ronde Les Patronnes", "La scène"],
      ["../assets/images/img13.jpeg", "Deux participantes de la table ronde", "Les rencontres"],
      ["../assets/images/img15.jpeg", "Le public de la table ronde Les Patronnes", "L'écoute"]
    ]
  },
  "event-stop-2.html": {
    eyebrow: "Marché PK3",
    title: "La ville en mouvement",
    images: [
      ["../assets/images/img18.jpeg", "Les Patronnes en route vers le marché PK3", "En mouvement"],
      ["../assets/images/img22.jpeg", "Les Patronnes devant le véhicule du projet", "Les silhouettes"],
      ["../assets/images/img31.jpeg", "L'exposition photographique au marché PK3", "L'exposition"]
    ]
  }
};

const pageName = window.location.pathname.split("/").pop();
const programme = eventProgrammes[pageName];
const gallery = eventGalleries[pageName];
const detailNavigation = document.querySelector(".event-detail__back");

if (gallery && detailNavigation) {
  const section = document.createElement("section");
  section.className = "event-gallery";
  section.dataset.eventsReveal = "";
  section.innerHTML = `
    <div class="event-gallery__heading">
      <p class="events-eyebrow">${gallery.eyebrow}</p>
      <h2>${gallery.title}</h2>
    </div>
    <div class="event-gallery__grid">
      ${gallery.images.map(([src, alt, label], index) => `
        <figure class="event-gallery__item event-gallery__item--${index + 1}">
          <img src="${src}" alt="${alt}" loading="lazy">
          <figcaption>${label}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
  detailNavigation.before(section);
}

if (programme && detailNavigation) {
  const section = document.createElement("section");
  section.className = "event-programme";
  section.dataset.eventsReveal = "";
  section.innerHTML = `
    <div>
      <p class="events-eyebrow">${programme.eyebrow}</p>
      <h2>${programme.title}</h2>
    </div>
    <ol>${programme.items.map(([title, text], index) => `
      <li><span>0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></li>
    `).join("")}</ol>
  `;
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
