
const carousel = document.querySelector("[data-hero-carousel]");

if (carousel && window.gsap) {
  const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
  const AUTO_DELAY = 6000;
  const TRANSITION_DURATION = 1.4;
  let currentIndex = 0;
  let isAnimating = false;
  let autoTimer;
  let resumeTimer;

  const modulo = (value) => (value + slides.length) % slides.length;

  const getGeometry = () => {
    const stageWidth = carousel.clientWidth;
    const mobile = window.matchMedia("(max-width: 600px)").matches;

    return {
      active: {
        x: 0,
        width: mobile
          ? Math.min(window.innerWidth * 0.72, 340)
          : Math.min(Math.max(window.innerWidth * 0.4, 300), 620),
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 3,
        scale: 1
      },
      prev: {
        x: -stageWidth * (mobile ? 0.39 : 0.38),
        width: mobile
          ? window.innerWidth * 0.38
          : Math.min(Math.max(window.innerWidth * 0.24, 190), 380),
        opacity: 0.5,
        filter: "blur(4px)",
        zIndex: 1,
        scale: 1
      },
      next: {
        x: stageWidth * (mobile ? 0.39 : 0.38),
        width: mobile
          ? window.innerWidth * 0.38
          : Math.min(Math.max(window.innerWidth * 0.24, 190), 380),
        opacity: 0.5,
        filter: "blur(4px)",
        zIndex: 1,
        scale: 1
      },
      hidden: {
        x: 0,
        width: mobile ? window.innerWidth * 0.3 : window.innerWidth * 0.2,
        opacity: 0,
        filter: "blur(6px)",
        zIndex: 0,
        scale: 0.9
      }
    };
  };

  const roleFor = (index, activeIndex = currentIndex) => {
    if (index === activeIndex) return "active";
    if (index === modulo(activeIndex - 1)) return "prev";
    if (index === modulo(activeIndex + 1)) return "next";
    return "hidden";
  };

  const updateClasses = (activeIndex = currentIndex) => {
    slides.forEach((slide, index) => {
      const role = roleFor(index, activeIndex);
      slide.classList.toggle("is-active", role === "active");
      slide.classList.toggle("is-prev", role === "prev");
      slide.classList.toggle("is-next", role === "next");
    });
  };

  const positionSlides = () => {
    const geometry = getGeometry();
    slides.forEach((slide, index) => {
      gsap.set(slide, {
        xPercent: -50,
        yPercent: 0,
        ...geometry[roleFor(index)]
      });
    });
    updateClasses();
  };

  const transitionTo = (direction) => {
    if (isAnimating || slides.length < 2) return;

    isAnimating = true;
    const geometry = getGeometry();
    const newIndex = modulo(currentIndex + direction);
    const incomingIndex = newIndex;
    const outgoingIndex = currentIndex;
    const newSideRole = direction > 0 ? "next" : "prev";
    const outgoingRole = direction > 0 ? "prev" : "next";
    const oldSideRole = direction > 0 ? "prev" : "next";
    const oldSideIndex = modulo(currentIndex - direction);
    const newSideIndex = modulo(newIndex + (direction > 0 ? 1 : -1));
    const wrapDistance = carousel.clientWidth * 0.18;
    const timeline = gsap.timeline({
      defaults: {
        duration: TRANSITION_DURATION,
        ease: "power2.inOut",
        overwrite: true
      },
      onComplete: () => {
        currentIndex = newIndex;
        updateClasses();
        positionSlides();
        isAnimating = false;
      }
    });

    slides.forEach((slide, index) => {
      if (
        index !== outgoingIndex
        && index !== incomingIndex
        && index !== oldSideIndex
      ) {
        timeline.to(slide, { opacity: 0, duration: 0.45 }, 0);
      }
    });

    timeline.to(slides[outgoingIndex], geometry[outgoingRole], 0);
    timeline.to(slides[incomingIndex], geometry.active, 0);

    if (oldSideIndex !== outgoingIndex && oldSideIndex !== incomingIndex) {
      timeline.to(slides[oldSideIndex], {
        x: geometry[oldSideRole].x - direction * wrapDistance,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
      }, 0);
    }

    if (newSideIndex !== outgoingIndex && newSideIndex !== incomingIndex) {
      timeline.set(slides[newSideIndex], {
        ...geometry[newSideRole],
        x: geometry[newSideRole].x + direction * wrapDistance,
        opacity: 0
      }, 0.5);
      timeline.to(slides[newSideIndex], {
        x: geometry[newSideRole].x,
        opacity: geometry[newSideRole].opacity,
        duration: 0.9,
        ease: "power2.out"
      }, 0.5);
    }
  };

  const stopAuto = () => {
    window.clearInterval(autoTimer);
    autoTimer = undefined;
  };

  const startAuto = () => {
    stopAuto();
    autoTimer = window.setInterval(() => transitionTo(1), AUTO_DELAY);
  };

  const pauseAuto = () => {
    stopAuto();
    window.clearTimeout(resumeTimer);
  };

  const resumeAuto = (delay = 0) => {
    window.clearTimeout(resumeTimer);

    if (delay > 0) {
      resumeTimer = window.setTimeout(startAuto, delay);
    } else {
      startAuto();
    }
  };

  const previewDrag = (distance) => {
    if (isAnimating) return;
    const geometry = getGeometry();
    const maxDistance = carousel.clientWidth * 0.3;
    const dragDistance = Math.max(
      -maxDistance,
      Math.min(maxDistance, distance * 0.65)
    );

    slides.forEach((slide, index) => {
      const role = roleFor(index);
      if (role !== "hidden") {
        gsap.set(slide, {
          x: geometry[role].x + dragDistance,
          overwrite: true
        });
      }
    });
  };

  const resetDrag = () => {
    if (isAnimating) return;
    const geometry = getGeometry();
    slides.forEach((slide, index) => {
      const role = roleFor(index);
      if (role !== "hidden") {
        gsap.to(slide, {
          x: geometry[role].x,
          duration: TRANSITION_DURATION,
          ease: "power2.inOut",
          overwrite: "auto"
        });
      }
    });
  };

  window.heroCarousel = {
    element: carousel,
    next: () => transitionTo(1),
    previous: () => transitionTo(-1),
    pauseAuto,
    resumeAuto,
    previewDrag,
    resetDrag
  };

  positionSlides();
  startAuto();

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (!isAnimating) positionSlides();
    }, 150);
  });
}

const storyView = document.querySelector("[data-story-view]");
const storyTriggers = Array.from(document.querySelectorAll("[data-story-trigger]"));

if (storyView && storyTriggers.length && window.gsap) {
  const storyScroller = storyView.querySelector("[data-story-scroller]");
  const storyClose = storyView.querySelector("[data-story-close]");
  const stories = {
    main: [
    {
      type: "image",
      src: "assets/images/img1.jpg",
      alt: "Les Patronnes, Georgiana Viou et le collectif",
      intro: true
    },
    {
      type: "chapter",
      eyebrow: "story.chapter1.eyebrow",
      title: "story.chapter1.title",
      text: "story.chapter1.text"
    },
    { type: "image", src: "assets/images/img4.jpg", alt: "Manifeste des panélistes des Patronnes" },
    { type: "image", src: "assets/images/img5.jpg", alt: "Texte sur la force des communautés" },
    { type: "image", src: "assets/images/img6.jpg", alt: "Portrait collectif des Patronnes" },
    {
      type: "chapter",
      eyebrow: "story.chapter2.eyebrow",
      title: "story.chapter2.title",
      text: "story.chapter2.text"
    },
    { type: "image", src: "assets/images/img7.jpg", alt: "Table ronde Les Patronnes à Cotonou" },
    { type: "image", src: "assets/images/img8.jpg", alt: "Récit de la conversation des Patronnes" },
    { type: "image", src: "assets/images/img9.jpg", alt: "Gladys et Constance" },
    {
      type: "chapter",
      eyebrow: "story.chapter3.eyebrow",
      title: "story.chapter3.title",
      text: "story.chapter3.text"
    },
    { type: "image", src: "assets/images/img10.jpg", alt: "Les Patronnes à Cotonou" },
    { type: "image", src: "assets/images/img11.jpg", alt: "Portrait d'une participante des Patronnes" },
    { type: "image", src: "assets/images/img12.jpg", alt: "La table ronde et son manifeste" },
    { type: "image", src: "assets/images/img13.jpg", alt: "Georgiana Viou et une membre du collectif" },
    { type: "image", src: "assets/images/img14.jpg", alt: "Le récit des Patronnes au Sofitel Cotonou Marina" },
    { type: "image", src: "assets/images/img15.jpg", alt: "Le public des Patronnes" },
    { type: "end" }
    ],
    markets: [
      {
        type: "image",
        src: "assets/images/img3.jpg",
        alt: "Les Patronnes au marché PK3",
        intro: true
      },
      {
        type: "chapter",
        eyebrow: "story.market.chapter1.eyebrow",
        title: "story.market.chapter1.title",
        text: "story.market.chapter1.text",
        fallback: {
          eyebrow: "Chapitre I",
          title: "Celles qui font le marché",
          text: "Au marché, les gestes se répètent sans jamais être les mêmes. Ils organisent les journées, relient les familles et font circuler les savoir-faire d’une génération à l’autre."
        }
      },
      {
        type: "image",
        src: "assets/images/img16.jpg",
        alt: "Manifeste de Georgiana Viou pour les femmes des marchés béninois"
      },
      {
        type: "chapter",
        eyebrow: "story.market.chapter2.eyebrow",
        title: "story.market.chapter2.title",
        text: "story.market.chapter2.text",
        fallback: {
          eyebrow: "Chapitre II",
          title: "Rendre la lumière",
          text: "Les Patronnes est né d’une volonté simple : reconnaître ces femmes comme des actrices majeures de la vie béninoise, raconter leurs histoires et inscrire leurs visages dans une mémoire qui se transmet."
        }
      },
      {
        type: "image",
        src: "assets/images/img17.jpg",
        alt: "Femmes des marchés réunies autour du projet Les Patronnes"
      },
      {
        type: "chapter",
        eyebrow: "story.market.chapter3.eyebrow",
        title: "story.market.chapter3.title",
        text: "story.market.chapter3.text",
        fallback: {
          eyebrow: "Chapitre III",
          title: "Un marché en mouvement",
          text: "À PK3, le textile, les rencontres et les mémoires composent un paysage vivant. Le temps d’une journée, le marché devient l’espace d’une célébration collective."
        }
      },
      { type: "image", src: "assets/images/img18.jpg", alt: "Participantes des Patronnes arrivant au marché PK3" },
      { type: "image", src: "assets/images/img19.jpg", alt: "Danse et célébration lors des Patronnes à PK3" },
      { type: "image", src: "assets/images/img20.jpg", alt: "Remerciements aux partenaires de l’édition Les Patronnes à PK3" },
      { type: "image", src: "assets/images/img21.jpg", alt: "Collectif des Patronnes devant leur véhicule au marché PK3" },
      { type: "image", src: "assets/images/img22.jpg", alt: "Portrait de trois Patronnes au marché PK3" },
      {
        type: "chapter",
        eyebrow: "story.market.chapter4.eyebrow",
        title: "story.market.chapter4.title",
        text: "story.market.chapter4.text",
        fallback: {
          eyebrow: "Chapitre IV",
          title: "Le marché devient scène",
          text: "Galerie à ciel ouvert, défilé, prise de parole et exposition : chaque geste élargit le regard porté sur celles qui tiennent le marché et inventent son avenir."
        }
      },
      { type: "image", src: "assets/images/img23.jpg", alt: "Présentation du marché PK3 de Cotonou et de ses inspirations" },
      { type: "image", src: "assets/images/img24.jpg", alt: "Récit du marché PK3 et hommage aux Nana Benz" },
      { type: "image", src: "assets/images/img25.jpg", alt: "Affiche de l’édition Les Patronnes au marché PK3" },
      { type: "image", src: "assets/images/img26.jpg", alt: "Texte et portraits des invitées de l’édition Les Patronnes" },
      { type: "image", src: "assets/images/img27.jpg", alt: "Citation d’Audre Lorde sur le partage et la joie" },
      { type: "image", src: "assets/images/img28.jpg", alt: "Manifeste des Patronnes au marché PK3" },
      { type: "image", src: "assets/images/img29.jpg", alt: "Prise de parole pendant l’événement Les Patronnes" },
      { type: "image", src: "assets/images/img30.jpg", alt: "Exposition photographique consacrée aux femmes des marchés" },
      {
        type: "chapter",
        eyebrow: "story.market.chapter5.eyebrow",
        title: "story.market.chapter5.title",
        text: "story.market.chapter5.text",
        fallback: {
          eyebrow: "Chapitre V",
          title: "La table comme langage",
          text: "Le banquet rassemble les voix, les saveurs et les gestes. Il donne une forme concrète à l’ambition des Patronnes : faire de la reconnaissance un moment partagé."
        }
      },
      { type: "image", src: "assets/images/img31.jpg", alt: "Portrait d’une participante dans le véhicule des Patronnes" },
      { type: "image", src: "assets/images/img32.jpg", alt: "Portrait collectif des Patronnes au marché PK3" },
      { type: "image", src: "assets/images/img33.jpg", alt: "Grand banquet populaire imaginé par Georgiana Viou" },
      { type: "image", src: "assets/images/img34.jpg", alt: "Hommage au regard photographique porté sur les femmes des marchés" },
      { type: "end" }
    ]
  };

  let revealObserver;
  let introImage;
  let scrollHint;
  let activeTrigger;

  const getStoryText = (key, fallback = "") => window.siteTranslate?.(key) || fallback;

  const createStory = (sequence) => {
    revealObserver?.disconnect();
    storyScroller.replaceChildren();

    sequence.forEach((item) => {
      const section = document.createElement("section");
      section.className = "story-item";

      if (item.type === "image") {
        section.classList.add("story-item--image");
        if (item.intro) section.classList.add("story-item--intro");

        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.alt;
        image.loading = item.intro ? "eager" : "lazy";
        image.decoding = "async";
        window.prepareImageFade?.(image);
        image.addEventListener("error", () => section.remove());
        section.appendChild(image);

        if (item.intro) {
          const hint = document.createElement("span");
          hint.className = "story-scroll-hint";
          hint.dataset.i18n = "story.scroll";
          hint.textContent = "Faire défiler";
          section.appendChild(hint);
        }
      }

      if (item.type === "chapter") {
        section.classList.add("story-item--chapter");
        section.innerHTML = `
          <div class="story-chapter">
            <p class="story-chapter__eyebrow" data-i18n="${item.eyebrow}">${getStoryText(item.eyebrow, item.fallback?.eyebrow)}</p>
            <h2 class="story-chapter__title" data-i18n="${item.title}">${getStoryText(item.title, item.fallback?.title)}</h2>
            <p class="story-chapter__text" data-i18n="${item.text}">${getStoryText(item.text, item.fallback?.text)}</p>
          </div>
        `;
      }

      if (item.type === "end") {
        section.classList.add("story-end");
        section.innerHTML = `
          <div>
            <h2 class="story-end__title" data-i18n="story.end.title">${getStoryText("story.end.title", "Les Patronnes")}</h2>
            <p class="story-end__text" data-i18n="story.end.text">${getStoryText("story.end.text", "Une histoire vivante, à suivre.")}</p>
          </div>
        `;
      }

      storyScroller.appendChild(section);
    });

    const revealItems = storyScroller.querySelectorAll(
      ".story-item:not(.story-item--intro)"
    );
    introImage = storyScroller.querySelector(".story-item--intro img");
    scrollHint = storyScroller.querySelector(".story-scroll-hint");
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out"
        });
        revealObserver.unobserve(entry.target);
      });
    }, {
      root: storyScroller,
      threshold: 0.18
    });

    revealItems.forEach((item) => revealObserver.observe(item));
  };

  let storyOpen = false;
  let scrollTicking = false;

  const updateIntroOnScroll = () => {
    const progress = Math.min(
      storyScroller.scrollTop / (window.innerHeight * 0.75),
      1
    );

    if (introImage) {
      gsap.set(introImage, {
        opacity: 1 - progress,
        y: -progress * 70,
        scale: 1 - progress * 0.05
      });
    }

    if (scrollHint) gsap.set(scrollHint, { opacity: 1 - progress * 1.5 });
    scrollTicking = false;
  };

  storyScroller.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateIntroOnScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  const openStory = (trigger) => {
    if (storyOpen) return;
    activeTrigger = trigger;
    createStory(stories[trigger.dataset.storyTrigger] || stories.main);
    storyOpen = true;
    storyScroller.scrollTop = 0;
    document.body.classList.add("story-open");
    storyView.classList.add("is-open");
    storyView.setAttribute("aria-hidden", "false");
    window.heroCarousel?.pauseAuto();
    updateIntroOnScroll();

    gsap.fromTo(storyView, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 0.55,
      ease: "power2.out"
    });

    if (introImage) {
      gsap.fromTo(introImage, {
        scale: 0.94,
        y: 35
      }, {
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });
    }

    window.setTimeout(() => storyClose.focus(), 250);
  };

  const closeStory = () => {
    if (!storyOpen) return;
    storyOpen = false;

    gsap.to(storyView, {
      autoAlpha: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        storyView.classList.remove("is-open");
        storyView.setAttribute("aria-hidden", "true");
        document.body.classList.remove("story-open");
        window.heroCarousel?.resumeAuto();
        activeTrigger?.focus();
      }
    });
  };

  storyTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openStory(trigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openStory(trigger);
      }
    });
  });
  storyClose.addEventListener("click", closeStory);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && storyOpen) closeStory();
  });

  window.storyExperience = { open: () => openStory(storyTriggers[0]), close: closeStory };
}
