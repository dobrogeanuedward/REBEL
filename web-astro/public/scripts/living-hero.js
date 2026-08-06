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

  const DISPLAY_MS = 5200;
  const TRANSITION_MS = 650;
  const SWIPE_THRESHOLD = 48;
  const mobileQuery = window.matchMedia('(max-width: 760px)');
  const siteAsset = (slot) => `/api/site-asset?slot=${encodeURIComponent(slot)}`;

  const slides = [
    {
      desktopImage: siteAsset('home.hero.method.desktop'),
      mobileImage: siteAsset('home.hero.method.mobile'),
      desktopPosition: 'center 32%',
      mobilePosition: '58% 34%',
      tone: 'ivory',
      title: 'Il Metodo Rebel parte dalla tua pelle.',
      lead: 'Nella prima visita definiamo priorità, risultato, trattamenti, frequenza e controlli. Tutto viene raccolto nella tua Mappa Rebel.',
      signature: 'Prima visita gratuita · Mappa Rebel · controlli',
      primary: { label: 'Scopri il Metodo Rebel', href: '/metodo-rebel' },
      secondary: { label: 'Prenota la prima visita', href: '/contatti' }
    },
    {
      desktopImage: siteAsset('home.hero.face.desktop'),
      mobileImage: siteAsset('home.hero.face.mobile'),
      desktopPosition: 'center 28%',
      mobilePosition: '55% 30%',
      tone: 'rose',
      title: 'Il trattamento viso parte da ciò che vediamo.',
      lead: 'Valutiamo idratazione, sensibilità, luminosità, uniformità e tono. Poi scegliamo manualità, attivi e tecnologie davvero utili.',
      signature: 'Viso · valutazione · protocollo personalizzato',
      primary: { label: 'Scopri i percorsi viso', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.longevity.desktop'),
      mobileImage: siteAsset('home.hero.longevity.mobile'),
      desktopPosition: 'center 38%',
      mobilePosition: '50% 30%',
      tone: 'longevity',
      title: 'Longevity lavora sulla qualità della pelle nel tempo.',
      lead: 'Perdita di tono, comfort, elasticità, compattezza e contorno occhi vengono trattati con protocolli scelti sulla risposta reale della pelle.',
      signature: 'Longevity · tono · elasticità · contorno occhi',
      primary: { label: 'Scopri il percorso Longevity', href: '/protocolli-epigenetici#longevity' },
      secondary: { label: 'Prenota una valutazione viso', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.body.desktop'),
      mobileImage: siteAsset('home.hero.body.mobile'),
      desktopPosition: 'center 38%',
      mobilePosition: '54% 30%',
      tone: 'sand',
      title: 'Il percorso corpo cambia in base a zona e tessuti.',
      lead: 'Drenaggio, tono e compattezza richiedono combinazioni diverse. Valutiamo la zona prima di inserire manualità, LPG, Tecar o pressomassaggio.',
      signature: 'Corpo · drenaggio · tono · compattezza',
      primary: { label: 'Scopri i percorsi corpo', href: '/protocolli-epigenetici#forma' },
      secondary: { label: 'Prenota una valutazione corpo', href: '/contatti?area=corpo' }
    },
    {
      desktopImage: siteAsset('home.hero.laser.desktop'),
      mobileImage: siteAsset('home.hero.laser.mobile'),
      desktopPosition: 'center 38%',
      mobilePosition: '62% 28%',
      tone: 'violet',
      title: 'Epilazione Laser Ice Polar a Carmagnola.',
      lead: 'Laser a diodo con tre lunghezze d’onda e raffreddamento attivo per viso e corpo. La valutazione definisce zone, parametri, frequenza e prezzo.',
      signature: 'Ice Polar · parametri personalizzati · valutazione gratuita',
      primary: { label: 'Scopri il Laser Ice Polar', href: '/epilazione-laser-carmagnola' },
      secondary: { label: 'Guarda prezzi e zone', href: '/listino-estetica-laser#laser' }
    },
    {
      desktopImage: siteAsset('home.hero.lamination.desktop'),
      mobileImage: siteAsset('home.hero.lamination.mobile'),
      desktopPosition: '50% 25%',
      mobilePosition: '50% 26%',
      tone: 'peach',
      title: 'Laminazione Coreana, ordine senza rigidità.',
      lead: 'Discipliniamo il pelo rispettandone direzione, forma e struttura per ottenere sopracciglia ordinate e un lifting naturale.',
      signature: 'Sopracciglia · ordine · effetto lifting naturale',
      primary: { label: 'Scopri la Laminazione Coreana', href: '/listino-estetica-laser#estetica' },
      secondary: { label: 'Prenota il trattamento', href: '/contatti?servizio=laminazione-coreana' }
    },
    {
      desktopImage: siteAsset('home.hero.epigenetics.desktop'),
      mobileImage: siteAsset('home.hero.epigenetics.mobile'),
      desktopPosition: 'center 34%',
      mobilePosition: '58% 34%',
      tone: 'mint',
      title: 'Gli attivi entrano nel percorso solo quando servono.',
      lead: 'Lift, Catalysis, Collagen, Cell Regen, Rebirth 60+ ed Eye Genesis vengono scelti in base alla priorità osservata e alla risposta della pelle.',
      signature: 'Estetica epigenetica · viso · protocolli avanzati',
      primary: { label: 'Scopri i protocolli epigenetici', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione viso', href: '/contatti?area=viso' }
    },
    {
      desktopImage: siteAsset('home.hero.technologies.desktop'),
      mobileImage: siteAsset('home.hero.technologies.mobile'),
      desktopPosition: 'center 40%',
      mobilePosition: '52% 32%',
      tone: 'tech',
      title: 'La tecnologia è uno strumento, non il punto di partenza.',
      lead: 'Laser Ice Polar, Tecar 448Revolution, LPG, Lumina K3, InfraPress X2 e CryoShape X2 vengono inseriti dopo aver definito zona e obiettivo.',
      signature: 'Laser · Tecar · LPG · Pressomassaggio · Crioterapia',
      primary: { label: 'Scopri le tecnologie Rebel', href: '/tecnologie-rebel' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti' }
    },
    {
      desktopImage: siteAsset('home.hero.studio.desktop'),
      mobileImage: siteAsset('home.hero.studio.mobile'),
      desktopPosition: 'center 30%',
      mobilePosition: '50% 30%',
      tone: 'warm',
      title: 'Professioniste, metodo e continuità ad ogni appuntamento.',
      lead: 'Prepariamo il trattamento, registriamo ciò che utilizziamo e controlliamo i cambiamenti. In studio ritrovi lo stesso metodo dalla prima visita al mantenimento.',
      signature: 'Viale Barbaroux 20 · Carmagnola · su appuntamento',
      primary: { label: 'Scopri lo studio Rebel', href: '/chi-siamo' },
      secondary: { label: 'Indicazioni e orari', href: '/contatti' }
    }
  ];

  function applyVisual(visual, slide) {
    const image = mobileQuery.matches ? slide.mobileImage : slide.desktopImage;
    visual.style.backgroundImage = `url('${image}')`;
    visual.style.setProperty('--hero-desktop-position', slide.desktopPosition);
    visual.style.setProperty('--hero-mobile-position', slide.mobilePosition);
  }

  function applyContent(slide) {
    title.textContent = slide.title;
    lead.textContent = slide.lead;
    if (signature) signature.textContent = slide.signature;
    primaryCta.textContent = slide.primary.label;
    primaryCta.setAttribute('href', slide.primary.href);
    secondaryCta.textContent = slide.secondary.label;
    secondaryCta.setAttribute('href', slide.secondary.href);
    hero.dataset.heroTone = slide.tone;
  }

  hero.querySelectorAll('.rebel-hero__living-visual, .rebel-hero__controls, .rebel-hero__counter').forEach((node) => node.remove());
  hero.classList.remove('rebel-hero--living');

  const visualA = document.createElement('div');
  const visualB = document.createElement('div');
  visualA.className = 'rebel-hero__living-visual is-active';
  visualB.className = 'rebel-hero__living-visual';
  applyVisual(visualA, slides[0]);
  applyVisual(visualB, slides[1]);
  hero.prepend(visualB);
  hero.prepend(visualA);
  hero.classList.add('rebel-hero--living');
  applyContent(slides[0]);

  const controls = document.createElement('div');
  controls.className = 'rebel-hero__controls';
  controls.setAttribute('aria-label', 'Cambia contenuto principale');

  const counter = document.createElement('span');
  counter.className = 'rebel-hero__counter';
  counter.setAttribute('aria-live', 'polite');
  controls.appendChild(counter);

  let current = 0;
  let activeVisual = visualA;
  let inactiveVisual = visualB;
  let timer = 0;
  let paused = false;
  let destroyed = false;
  let touchStartX = 0;
  let touchStartY = 0;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const buttons = slides.map((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rebel-hero__dot';
    button.setAttribute('aria-label', `Mostra ${slide.title}`);
    button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    button.addEventListener('click', () => show(index, true));
    controls.appendChild(button);
    return button;
  });
  copy.appendChild(controls);

  function updateControls() {
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', index === current ? 'true' : 'false');
    });
  }

  function schedule(delay = DISPLAY_MS) {
    window.clearTimeout(timer);
    if (!reduceMotion && !destroyed) {
      timer = window.setTimeout(tick, delay);
    }
  }

  function show(next, userInitiated = false) {
    if (destroyed) return;
    const normalized = (next + slides.length) % slides.length;
    if (normalized === current) {
      if (userInitiated) schedule();
      return;
    }

    const slide = slides[normalized];
    applyVisual(inactiveVisual, slide);
    inactiveVisual.classList.add('is-active');
    activeVisual.classList.remove('is-active');

    copy.classList.add('is-changing');
    window.setTimeout(() => {
      if (destroyed) return;
      applyContent(slide);
      copy.classList.remove('is-changing');
    }, reduceMotion ? 0 : 150);

    const previousVisual = activeVisual;
    activeVisual = inactiveVisual;
    inactiveVisual = previousVisual;
    current = normalized;
    updateControls();
    schedule(userInitiated ? DISPLAY_MS : DISPLAY_MS + TRANSITION_MS);
  }

  function tick() {
    if (paused) {
      schedule(250);
      return;
    }
    show(current + 1);
  }

  const onViewportChange = () => {
    applyVisual(activeVisual, slides[current]);
    applyVisual(inactiveVisual, slides[(current + 1) % slides.length]);
  };

  const canHover = window.matchMedia('(hover: hover)').matches;
  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; schedule(); };
  const onVisibility = () => {
    paused = document.hidden;
    if (!paused) schedule();
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

  if (canHover) {
    hero.addEventListener('mouseenter', onEnter);
    hero.addEventListener('mouseleave', onLeave);
  }
  hero.addEventListener('touchstart', onTouchStart, { passive: true });
  hero.addEventListener('touchend', onTouchEnd, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);
  mobileQuery.addEventListener?.('change', onViewportChange);

  window.__rebelLivingHeroCleanup = () => {
    destroyed = true;
    window.clearTimeout(timer);
    if (canHover) {
      hero.removeEventListener('mouseenter', onEnter);
      hero.removeEventListener('mouseleave', onLeave);
    }
    hero.removeEventListener('touchstart', onTouchStart);
    hero.removeEventListener('touchend', onTouchEnd);
    document.removeEventListener('visibilitychange', onVisibility);
    mobileQuery.removeEventListener?.('change', onViewportChange);
  };

  updateControls();
  schedule();
})();
