(() => {
  const hero = document.querySelector('.rebel-hero');
  if (!hero) return;

  // Astro view transitions can re-run page scripts. Always dispose the previous
  // instance before creating a new timer, otherwise the hero appears too fast.
  if (typeof window.__rebelLivingHeroCleanup === 'function') {
    window.__rebelLivingHeroCleanup();
  }

  const title = hero.querySelector('.rebel-display');
  const lead = hero.querySelector('.rebel-lead');
  const signature = hero.querySelector('.rebel-hero__signature span');
  const copy = hero.querySelector('.rebel-hero__copy');
  if (!title || !lead || !copy) return;

  const DISPLAY_MS = 3000;
  const TRANSITION_MS = 650;

  const slides = [
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      desktopPosition: 'center 32%',
      mobilePosition: '58% 34%',
      title: 'Trattamenti viso costruiti sulla tua pelle.',
      lead: 'Valutiamo idratazione, luminosità, uniformità, comfort e tono. Poi scegliamo trattamenti, attivi epigenetici e tecnologie adatti al risultato che vuoi raggiungere.',
      signature: 'Viso · valutazione iniziale · percorsi personalizzati'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public',
      desktopPosition: 'center 38%',
      mobilePosition: '54% 30%',
      title: 'Percorsi corpo per drenaggio, tono e compattezza.',
      lead: 'Manualità, pressomassaggio, LPG e Tecar vengono combinati in base alla zona, alle caratteristiche dei tessuti e al risultato desiderato.',
      signature: 'Corpo · rimodellamento · benessere'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public',
      desktopPosition: 'center 38%',
      mobilePosition: '62% 28%',
      title: 'Epilazione Laser Ice Polar a Carmagnola.',
      lead: 'Laser a diodo con tre lunghezze d’onda e raffreddamento attivo per viso e corpo. La valutazione definisce zone, parametri, frequenza e prezzo.',
      signature: 'Laser da 25,90 € · valutazione gratuita'
    }
  ];

  function applyVisual(visual, slide) {
    visual.style.backgroundImage = `url('${slide.image}')`;
    visual.style.setProperty('--hero-desktop-position', slide.desktopPosition);
    visual.style.setProperty('--hero-mobile-position', slide.mobilePosition);
  }

  // Remove remnants left by a prior view-transition render.
  hero.querySelectorAll('.rebel-hero__living-visual, .rebel-hero__controls').forEach((node) => node.remove());
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

  const controls = document.createElement('div');
  controls.className = 'rebel-hero__controls';
  controls.setAttribute('aria-label', 'Cambia contenuto principale');

  let current = 0;
  let activeVisual = visualA;
  let inactiveVisual = visualB;
  let timer = 0;
  let paused = false;
  let destroyed = false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const buttons = slides.map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rebel-hero__dot';
    button.setAttribute('aria-label', `Mostra contenuto ${index + 1}`);
    button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    button.addEventListener('click', () => show(index, true));
    controls.appendChild(button);
    return button;
  });
  copy.appendChild(controls);

  function schedule(delay = DISPLAY_MS) {
    window.clearTimeout(timer);
    if (!reduceMotion && !destroyed) {
      timer = window.setTimeout(tick, delay);
    }
  }

  function show(next, userInitiated = false) {
    if (destroyed || next === current) {
      if (userInitiated) schedule();
      return;
    }

    const slide = slides[next];
    applyVisual(inactiveVisual, slide);
    inactiveVisual.classList.add('is-active');
    activeVisual.classList.remove('is-active');

    copy.classList.add('is-changing');
    window.setTimeout(() => {
      if (destroyed) return;
      title.textContent = slide.title;
      lead.textContent = slide.lead;
      if (signature) signature.textContent = slide.signature;
      copy.classList.remove('is-changing');
    }, reduceMotion ? 0 : 160);

    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', index === next ? 'true' : 'false');
    });

    const previousVisual = activeVisual;
    activeVisual = inactiveVisual;
    inactiveVisual = previousVisual;
    current = next;

    // Three complete seconds of readable content after the fade has finished.
    schedule(userInitiated ? DISPLAY_MS : DISPLAY_MS + TRANSITION_MS);
  }

  function tick() {
    if (paused) {
      schedule(250);
      return;
    }
    show((current + 1) % slides.length);
  }

  const canHover = window.matchMedia('(hover: hover)').matches;
  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; schedule(); };
  const onVisibility = () => {
    paused = document.hidden;
    if (!paused) schedule();
  };

  if (canHover) {
    hero.addEventListener('mouseenter', onEnter);
    hero.addEventListener('mouseleave', onLeave);
  }
  document.addEventListener('visibilitychange', onVisibility);

  window.__rebelLivingHeroCleanup = () => {
    destroyed = true;
    window.clearTimeout(timer);
    if (canHover) {
      hero.removeEventListener('mouseenter', onEnter);
      hero.removeEventListener('mouseleave', onLeave);
    }
    document.removeEventListener('visibilitychange', onVisibility);
  };

  schedule();
})();
