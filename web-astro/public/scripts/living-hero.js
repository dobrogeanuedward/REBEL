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

  const DISPLAY_MS = 3600;
  const TRANSITION_MS = 520;
  const SWIPE_THRESHOLD = 48;

  const slides = [
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: 'center 32%',
      mobilePosition: '58% 34%',
      tone: 'ivory',
      title: 'Il Metodo Rebel parte dalla tua pelle.',
      lead: 'La prima visita serve a capire priorità, obiettivi e sensibilità. Da lì nasce un percorso viso o corpo costruito su di te e aggiornato nel tempo.',
      signature: 'Metodo Rebel · valutazione iniziale · percorso personalizzato',
      primary: { label: 'Scopri il Metodo Rebel', href: '/metodo-rebel' },
      secondary: { label: 'Prenota la prima visita', href: '/contatti' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: 'center 28%',
      mobilePosition: '55% 30%',
      tone: 'rose',
      title: 'Trattamenti viso costruiti sulla tua pelle.',
      lead: 'Idratazione, luminosità, uniformità, comfort e tono vengono valutati prima di scegliere trattamento, attivi epigenetici e tecnologie.',
      signature: 'Viso · Skin Reset · attivi epigenetici',
      primary: { label: 'Scopri i percorsi viso', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti?area=viso' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public',
      desktopPosition: 'center 38%',
      mobilePosition: '54% 30%',
      tone: 'sand',
      title: 'Percorsi corpo per drenaggio, tono e compattezza.',
      lead: 'Manualità, pressomassaggio, LPG, Tecar e altre tecnologie vengono combinate in base alla zona, ai tessuti e al risultato desiderato.',
      signature: 'Corpo · rimodellamento · leggerezza',
      primary: { label: 'Scopri i percorsi corpo', href: '/protocolli-epigenetici#forma' },
      secondary: { label: 'Prenota una valutazione corpo', href: '/contatti?area=corpo' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public',
      desktopPosition: 'center 38%',
      mobilePosition: '62% 28%',
      tone: 'violet',
      title: 'Epilazione Laser Ice Polar a Carmagnola.',
      lead: 'Laser a diodo con tre lunghezze d’onda e raffreddamento attivo per viso e corpo. La valutazione definisce zone, parametri, frequenza e prezzo.',
      signature: 'Laser da 25,90 € · valutazione gratuita',
      primary: { label: 'Scopri il Laser Ice Polar', href: '/epilazione-laser-carmagnola' },
      secondary: { label: 'Guarda prezzi e zone', href: '/listino-estetica-laser#laser' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: '50% 25%',
      mobilePosition: '50% 26%',
      tone: 'peach',
      title: 'Laminazione Coreana per sopracciglia ordinate e naturali.',
      lead: 'Un trattamento delicato per disciplinare le sopracciglia, valorizzare la forma e ottenere un effetto lifting naturale.',
      signature: 'Sopracciglia · ordine · effetto lifting naturale',
      primary: { label: 'Scopri la Laminazione Coreana', href: '/listino-estetica-laser#estetica' },
      secondary: { label: 'Prenota il trattamento', href: '/contatti?servizio=laminazione-coreana' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: 'center 34%',
      mobilePosition: '58% 34%',
      tone: 'mint',
      title: 'Attivi epigenetici scelti in base alla priorità della pelle.',
      lead: 'Lift, Catalysis, Collagen, Cell Regen, Rebirth 60+ ed Eye Genesis entrano nel percorso quando rispondono davvero all’obiettivo della pelle.',
      signature: 'Estetica epigenetica · viso · protocolli avanzati',
      primary: { label: 'Scopri i protocolli epigenetici', href: '/protocolli-epigenetici' },
      secondary: { label: 'Prenota una valutazione viso', href: '/contatti?area=viso' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public',
      desktopPosition: 'center 40%',
      mobilePosition: '52% 32%',
      tone: 'tech',
      title: 'Tecnologie diverse, scelte per un obiettivo preciso.',
      lead: 'Laser Ice Polar, Tecar 448Revolution, LPG, Lumina K3, InfraPress X2 e CryoShape X2 vengono inseriti nel percorso quando servono davvero.',
      signature: 'Laser · Tecar · LPG · Pressomassaggio · Crioterapia',
      primary: { label: 'Scopri le tecnologie Rebel', href: '/tecnologie-rebel' },
      secondary: { label: 'Prenota una valutazione', href: '/contatti' }
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: 'center 30%',
      mobilePosition: '50% 30%',
      tone: 'warm',
      title: 'Quattro cabine nel centro di Carmagnola.',
      lead: 'In Viale Barbaroux 20 trovi uno studio dedicato a viso, corpo, laser e benessere, con spazi e tecnologie pensati per seguire ogni fase del percorso.',
      signature: 'Viale Barbaroux 20 · Carmagnola · Mar–Sab',
      primary: { label: 'Scopri lo studio Rebel', href: '/chi-siamo' },
      secondary: { label: 'Indicazioni e orari', href: '/contatti' }
    }
  ];

  function applyVisual(visual, slide) {
    visual.style.backgroundImage = `url('${slide.image}')`;
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
  };

  updateControls();
  schedule();
})();
