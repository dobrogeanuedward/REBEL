(() => {
  const hero = document.querySelector('.rebel-hero');
  if (!hero) return;

  if (typeof window.__rebelLivingHeroCleanup === 'function') {
    window.__rebelLivingHeroCleanup();
  }

  const title = hero.querySelector('.rebel-display');
  const lead = hero.querySelector('.rebel-lead');
  const signature = hero.querySelector('.rebel-hero__signature span');
  const copy = hero.querySelector('.rebel-hero__copy');
  const primaryCta = hero.querySelector('.rebel-hero__actions .btn--primary');
  const secondaryCta = hero.querySelector('.rebel-hero__actions .btn--secondary');

  if (!title || !lead || !copy || !primaryCta || !secondaryCta) return;

  const DISPLAY_MS = 6400;
  const TRANSITION_MS = 720;
  const SWIPE_THRESHOLD = 48;
  const portraitImageQuery = window.matchMedia('(max-width: 860px) and (orientation: portrait)');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const siteAsset = (slot) => `/api/site-asset?slot=${encodeURIComponent(slot)}`;
  const preloadedSources = new Set();
  const addMediaListener = (query, listener) => {
    if (typeof query.addEventListener === 'function') query.addEventListener('change', listener);
    else query.addListener?.(listener);
  };
  const removeMediaListener = (query, listener) => {
    if (typeof query.removeEventListener === 'function') query.removeEventListener('change', listener);
    else query.removeListener?.(listener);
  };

  const slides = [
    {
      desktopImage: siteAsset('home.hero.method.desktop'),
      mobileImage: siteAsset('home.hero.method.mobile'),
      desktopPosition: 'center 34%',
      mobilePosition: '58% 35%',
      tone: 'ivory',
      title: 'Il Metodo Rebel parte dalla tua pelle.',
      accent: 'pelle',
      lead: 'Nella prima visita definiamo priorità, risultato, trattamenti, frequenza e controlli. Tutto viene raccolto nella tua Mappa Rebel.',
      signature: 'Prima visita gratuita · Mappa Rebel · controlli',
      primary: { label: 'Scopri il Metodo Rebel', href: '/metodo-rebel' },
      secondary: { label: 'Prenota la prima visita', href: '/contatti' }
    },
    {
      desktopImage: siteAsset('home.hero.face.desktop'),
      mobileImage: siteAsset('home.hero.face.mobile'),
      desktopPosition: 'center 30%',
      mobilePosition: '56% 29%',
      tone: 'rose',
      title: 'Il trattamento viso parte da ciò che vediamo.',
      accent: 'viso',
      lead: 'Valutiamo idratazione, sensibilità, luminosità, uniformità e tono. Poi scegliamo manualità, attivi e tecnologie davvero utili.',
      signature: 'Viso · valutazione · protocollo personalizzato',
      primary: { label: 'Scopri i percorsi viso', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.longevity.desktop'),
      mobileImage: siteAsset('home.hero.longevity.mobile'),
      desktopPosition: 'center 39%',
      mobilePosition: '50% 28%',
      tone: 'longevity',
      title: 'Longevity lavora sulla qualità della pelle nel tempo.',
      accent: 'Longevity',
      lead: 'Perdita di tono, comfort, elasticità, compattezza e contorno occhi vengono trattati con protocolli scelti sulla risposta reale della pelle.',
      signature: 'Longevity · tono · elasticità · contorno occhi',
      primary: { label: 'Scopri il percorso Longevity', href: '/protocolli-epigenetici#longevity' },
      secondary: { label: 'Prenota una valutazione viso', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.body.desktop'),
      mobileImage: siteAsset('home.hero.body.mobile'),
      desktopPosition: 'center 40%',
      mobilePosition: '53% 31%',
      tone: 'sand',
      title: 'Il percorso corpo cambia in base a zona e tessuti.',
      accent: 'corpo',
      lead: 'Drenaggio, tono e compattezza richiedono combinazioni diverse. Valutiamo la zona prima di inserire manualità, LPG, Tecar o pressomassaggio.',
      signature: 'Corpo · drenaggio · tono · compattezza',
      primary: { label: 'Scopri i percorsi corpo', href: '/protocolli-epigenetici#forma' },
      secondary: { label: 'Prenota una valutazione corpo', href: '/contatti?area=corpo' }
    },
    {
      desktopImage: siteAsset('home.hero.laser.desktop'),
      mobileImage: siteAsset('home.hero.laser.mobile'),
      desktopPosition: 'center 40%',
      mobilePosition: '63% 28%',
      tone: 'violet',
      title: 'Epilazione Laser ICE Polar a Carmagnola.',
      accent: 'ICE Polar',
      lead: 'La valutazione definisce zone, parametri e frequenza. ICE Polar accompagna il trattamento con un raffreddamento pensato per il comfort.',
      signature: 'ICE Polar · comfort · parametri personalizzati',
      primary: { label: 'Scopri il Laser ICE Polar', href: '/epilazione-laser-carmagnola' },
      secondary: { label: 'Guarda prezzi e zone', href: '/listino-estetica-laser#laser' }
    },
    {
      desktopImage: siteAsset('home.hero.lamination.desktop'),
      mobileImage: siteAsset('home.hero.lamination.mobile'),
      desktopPosition: '50% 27%',
      mobilePosition: '50% 25%',
      tone: 'peach',
      title: 'Laminazione Coreana, ordine senza rigidità.',
      accent: 'Laminazione Coreana',
      lead: 'Discipliniamo il pelo rispettandone direzione, forma e struttura per ottenere sopracciglia ordinate e un effetto lifting naturale.',
      signature: 'Sopracciglia · ordine · effetto lifting naturale',
      primary: { label: 'Scopri la Laminazione Coreana', href: '/listino-estetica-laser#estetica' },
      secondary: { label: 'Prenota il trattamento', href: '/contatti?servizio=laminazione-coreana' }
    },
    {
      desktopImage: siteAsset('home.hero.epigenetics.desktop'),
      mobileImage: siteAsset('home.hero.epigenetics.mobile'),
      desktopPosition: 'center 35%',
      mobilePosition: '58% 34%',
      tone: 'mint',
      title: 'Gli attivi entrano nel percorso solo quando servono.',
      accent: 'attivi',
      lead: 'Lift, Catalysis, Collagen, Cell Regen, Rebirth 60+ ed Eye Genesis vengono scelti in base alla priorità osservata e alla risposta della pelle.',
      signature: 'Estetica epigenetica · viso · protocolli avanzati',
      primary: { label: 'Scopri i protocolli epigenetici', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione viso', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.technologies.desktop'),
      mobileImage: siteAsset('home.hero.technologies.mobile'),
      desktopPosition: 'center 42%',
      mobilePosition: '52% 32%',
      tone: 'tech',
      title: 'La tecnologia è uno strumento, non il punto di partenza.',
      accent: 'tecnologia',
      lead: 'THORY Lumina X1 Pro, ICE Polar e LPG vengono inseriti soltanto dopo aver definito zona, priorità e obiettivo del percorso.',
      signature: 'THORY Lumina X1 Pro · ICE Polar · LPG',
      primary: { label: 'Scopri le tecnologie Rebel', href: '/tecnologie-rebel' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti' }
    },
    {
      desktopImage: siteAsset('home.hero.studio.desktop'),
      mobileImage: siteAsset('home.hero.studio.mobile'),
      desktopPosition: 'center 32%',
      mobilePosition: '50% 30%',
      tone: 'warm',
      title: 'Metodo e continuità, sempre.',
      accent: 'Metodo',
      lead: 'Prepariamo il trattamento, registriamo ciò che utilizziamo e controlliamo i cambiamenti. In studio ritrovi lo stesso metodo dalla prima visita al mantenimento.',
      signature: 'Viale Barbaroux 20 · Carmagnola · su appuntamento',
      primary: { label: 'Scopri lo studio Rebel', href: '/chi-siamo' },
      secondary: { label: 'Indicazioni e orari', href: '/contatti' }
    }
  ];

  const renderTitle = (slide) => {
    const accentIndex = slide.title.toLocaleLowerCase('it').indexOf(slide.accent.toLocaleLowerCase('it'));
    title.replaceChildren();

    if (accentIndex < 0) {
      title.textContent = slide.title;
      return;
    }

    const before = slide.title.slice(0, accentIndex);
    const accentText = slide.title.slice(accentIndex, accentIndex + slide.accent.length);
    const after = slide.title.slice(accentIndex + slide.accent.length);
    const accent = document.createElement('span');
    accent.className = 'rebel-prism-word';
    accent.textContent = accentText;

    if (before) title.append(document.createTextNode(before));
    title.append(accent);
    if (after) title.append(document.createTextNode(after));
    title.setAttribute('aria-label', slide.title);
  };

  const applyVisual = (visual, slide) => {
    const image = portraitImageQuery.matches ? slide.mobileImage : slide.desktopImage;
    visual.style.backgroundImage = `url('${image}')`;
    visual.style.setProperty('--hero-desktop-position', slide.desktopPosition);
    visual.style.setProperty('--hero-mobile-position', slide.mobilePosition);
  };

  const applyContent = (slide, index) => {
    renderTitle(slide);
    lead.textContent = slide.lead;
    if (signature) signature.textContent = slide.signature;
    primaryCta.textContent = slide.primary.label;
    primaryCta.setAttribute('href', slide.primary.href);
    secondaryCta.textContent = slide.secondary.label;
    secondaryCta.setAttribute('href', slide.secondary.href);
    hero.dataset.heroTone = slide.tone;
    hero.dataset.heroIndex = String(index);
  };

  hero.querySelectorAll('.rebel-hero__living-visual, .rebel-hero__controls').forEach((node) => node.remove());
  hero.classList.remove('rebel-hero--living');

  const visualA = document.createElement('div');
  const visualB = document.createElement('div');
  visualA.className = 'rebel-hero__living-visual is-active';
  visualB.className = 'rebel-hero__living-visual';
  visualA.setAttribute('aria-hidden', 'true');
  visualB.setAttribute('aria-hidden', 'true');

  const requestedInitial = Number.parseInt(hero.dataset.initialHero || '0', 10);
  let current = Number.isFinite(requestedInitial)
    ? Math.min(Math.max(requestedInitial, 0), slides.length - 1)
    : 0;

  applyVisual(visualA, slides[current]);
  applyVisual(visualB, slides[(current + 1) % slides.length]);
  hero.prepend(visualB);
  hero.prepend(visualA);
  hero.classList.add('rebel-hero--living');
  hero.setAttribute('role', 'region');
  hero.setAttribute('aria-roledescription', 'carousel');
  hero.setAttribute('aria-label', 'Contenuti in evidenza Rebel');
  applyContent(slides[current], current);

  const controls = document.createElement('div');
  controls.className = 'rebel-hero__controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Controlli contenuto principale');

  const previous = document.createElement('button');
  previous.type = 'button';
  previous.className = 'rebel-hero__arrow rebel-hero__arrow--previous';
  previous.setAttribute('aria-label', 'Contenuto precedente');
  const previousIcon = document.createElement('span');
  previousIcon.setAttribute('aria-hidden', 'true');
  previousIcon.textContent = '←';
  previous.appendChild(previousIcon);

  const counter = document.createElement('span');
  counter.className = 'rebel-hero__counter';
  counter.setAttribute('aria-live', 'off');
  counter.setAttribute('aria-atomic', 'true');

  const dots = document.createElement('div');
  dots.className = 'rebel-hero__dots';
  dots.setAttribute('role', 'group');
  dots.setAttribute('aria-label', 'Seleziona contenuto');

  const pause = document.createElement('button');
  pause.type = 'button';
  pause.className = 'rebel-hero__arrow rebel-hero__pause';
  const pauseIcon = document.createElement('span');
  pauseIcon.setAttribute('aria-hidden', 'true');
  pause.appendChild(pauseIcon);

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'rebel-hero__arrow rebel-hero__arrow--next';
  next.setAttribute('aria-label', 'Contenuto successivo');
  const nextIcon = document.createElement('span');
  nextIcon.setAttribute('aria-hidden', 'true');
  nextIcon.textContent = '→';
  next.appendChild(nextIcon);

  controls.append(previous, counter, dots, pause, next);
  copy.appendChild(controls);

  let activeVisual = visualA;
  let inactiveVisual = visualB;
  let timer = 0;
  let contentTimer = 0;
  let preloadHandle = 0;
  let preloadUsesIdleCallback = false;
  let paused = false;
  let manualPaused = false;
  let destroyed = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let reduceMotion = reduceMotionQuery.matches;

  const updatePauseControl = () => {
    pause.hidden = reduceMotion;
    pause.setAttribute('aria-pressed', manualPaused ? 'true' : 'false');
    pause.setAttribute('aria-label', manualPaused ? 'Avvia rotazione automatica' : 'Pausa rotazione automatica');
    pauseIcon.textContent = manualPaused ? '▶' : 'Ⅱ';
  };

  const buttons = slides.map((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rebel-hero__dot';
    button.setAttribute('aria-label', `Mostra: ${slide.title}`);
    button.setAttribute('aria-current', index === current ? 'true' : 'false');
    button.addEventListener('click', () => show(index, true));
    dots.appendChild(button);
    return button;
  });

  const updateControls = () => {
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', index === current ? 'true' : 'false');
    });

    const activeButton = buttons[current];
    if (activeButton && dots.scrollWidth > dots.clientWidth) {
      const left = activeButton.offsetLeft - ((dots.clientWidth - activeButton.offsetWidth) / 2);
      dots.scrollTo({
        left: Math.max(0, left),
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  const preloadSource = (source) => {
    if (!source || preloadedSources.has(source)) return;
    preloadedSources.add(source);
    const image = new Image();
    image.decoding = 'async';
    image.src = source;
  };

  const preloadAround = (index) => {
    [0, 1, 2].forEach((offset) => {
      const slide = slides[(index + offset) % slides.length];
      preloadSource(portraitImageQuery.matches ? slide.mobileImage : slide.desktopImage);
    });
  };

  const schedule = (delay = DISPLAY_MS) => {
    window.clearTimeout(timer);
    if (!reduceMotion && !manualPaused && !destroyed) {
      timer = window.setTimeout(tick, delay);
    }
  };

  function show(nextIndex, userInitiated = false) {
    if (destroyed) return;

    const normalized = (nextIndex + slides.length) % slides.length;
    if (normalized === current) {
      if (userInitiated) schedule();
      return;
    }

    const slide = slides[normalized];
    window.clearTimeout(contentTimer);
    applyVisual(inactiveVisual, slide);
    inactiveVisual.classList.add('is-active');
    activeVisual.classList.remove('is-active');
    copy.classList.add('is-changing');

    const previousVisual = activeVisual;
    activeVisual = inactiveVisual;
    inactiveVisual = previousVisual;
    current = normalized;
    hero.dataset.heroIndex = String(current);
    updateControls();
    preloadAround(current);

    contentTimer = window.setTimeout(() => {
      if (destroyed) return;
      applyContent(slide, current);
      copy.classList.remove('is-changing');
    }, reduceMotion ? 0 : 170);

    schedule(userInitiated ? DISPLAY_MS : DISPLAY_MS + TRANSITION_MS);
  }

  function tick() {
    if (paused || manualPaused) {
      return;
    }
    show(current + 1);
  }

  const onViewportChange = () => {
    applyVisual(activeVisual, slides[current]);
    applyVisual(inactiveVisual, slides[(current + 1) % slides.length]);
    preloadAround(current);
  };
  const canHover = window.matchMedia('(hover: hover)').matches;
  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; schedule(); };
  const onFocusIn = () => { paused = true; };
  const onFocusOut = (event) => {
    if (!hero.contains(event.relatedTarget)) {
      paused = false;
      schedule();
    }
  };
  const onVisibility = () => {
    paused = document.hidden;
    if (!paused) schedule();
  };
  const onPauseToggle = () => {
    manualPaused = !manualPaused;
    updatePauseControl();
    if (manualPaused) {
      window.clearTimeout(timer);
    } else {
      schedule();
    }
  };
  const onReduceMotionChange = () => {
    reduceMotion = reduceMotionQuery.matches;
    updatePauseControl();
    window.clearTimeout(timer);

    if (reduceMotion) {
      window.clearTimeout(contentTimer);
      applyContent(slides[current], current);
      copy.classList.remove('is-changing');
      return;
    }

    schedule();
  };
  const onTouchStart = (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    paused = true;
  };
  const onTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
      show(current + (deltaX < 0 ? 1 : -1), true);
    }
    paused = false;
    schedule();
  };
  const onTouchCancel = () => {
    paused = false;
    schedule();
  };
  const onControlsKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current - 1, true);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + 1, true);
    }
  };

  previous.addEventListener('click', () => show(current - 1, true));
  next.addEventListener('click', () => show(current + 1, true));
  pause.addEventListener('click', onPauseToggle);
  controls.addEventListener('keydown', onControlsKeydown);
  hero.addEventListener('focusin', onFocusIn);
  hero.addEventListener('focusout', onFocusOut);

  if (canHover) {
    hero.addEventListener('mouseenter', onEnter);
    hero.addEventListener('mouseleave', onLeave);
  }

  hero.addEventListener('touchstart', onTouchStart, { passive: true });
  hero.addEventListener('touchend', onTouchEnd, { passive: true });
  hero.addEventListener('touchcancel', onTouchCancel, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);
  addMediaListener(portraitImageQuery, onViewportChange);
  addMediaListener(reduceMotionQuery, onReduceMotionChange);

  const onBeforeSwap = () => {
    if (typeof window.__rebelLivingHeroCleanup === 'function') {
      window.__rebelLivingHeroCleanup();
    }
  };
  document.addEventListener('astro:before-swap', onBeforeSwap);

  if ('requestIdleCallback' in window) {
    preloadUsesIdleCallback = true;
    preloadHandle = window.requestIdleCallback(() => preloadAround(current), { timeout: 1800 });
  } else {
    preloadHandle = window.setTimeout(() => preloadAround(current), 900);
  }

  const cleanup = () => {
    if (destroyed) return;
    destroyed = true;
    window.clearTimeout(timer);
    window.clearTimeout(contentTimer);
    if (preloadHandle) {
      if (preloadUsesIdleCallback) window.cancelIdleCallback?.(preloadHandle);
      else window.clearTimeout(preloadHandle);
    }
    if (canHover) {
      hero.removeEventListener('mouseenter', onEnter);
      hero.removeEventListener('mouseleave', onLeave);
    }
    hero.removeEventListener('touchstart', onTouchStart);
    hero.removeEventListener('touchend', onTouchEnd);
    hero.removeEventListener('touchcancel', onTouchCancel);
    hero.removeEventListener('focusin', onFocusIn);
    hero.removeEventListener('focusout', onFocusOut);
    controls.removeEventListener('keydown', onControlsKeydown);
    pause.removeEventListener('click', onPauseToggle);
    document.removeEventListener('visibilitychange', onVisibility);
    document.removeEventListener('astro:before-swap', onBeforeSwap);
    removeMediaListener(portraitImageQuery, onViewportChange);
    removeMediaListener(reduceMotionQuery, onReduceMotionChange);

    if (window.__rebelLivingHeroCleanup === cleanup) {
      window.__rebelLivingHeroCleanup = undefined;
    }
  };
  window.__rebelLivingHeroCleanup = cleanup;

  updateControls();
  updatePauseControl();
  schedule();
})();
