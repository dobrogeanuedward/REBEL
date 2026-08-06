(() => {
  const hero = document.querySelector('.rebel-hero');
  if (!hero || hero.dataset.livingHeroReady === 'true') return;

  const title = hero.querySelector('.rebel-display');
  const lead = hero.querySelector('.rebel-lead');
  const signature = hero.querySelector('.rebel-hero__signature span');
  const copy = hero.querySelector('.rebel-hero__copy');
  if (!title || !lead || !copy) return;

  const slides = [
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/7dc5354b-33e1-4a9e-a21d-ff321ecf4500/public',
      title: 'La tua pelle cambia.',
      lead: 'Anche il percorso deve cambiare. Da Rebel ogni trattamento nasce da una valutazione della pelle, delle tue esigenze e del risultato che vuoi raggiungere.',
      signature: 'Prima la pelle. Poi la tecnologia.'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public',
      title: 'Il corpo ritrova il suo ritmo.',
      lead: 'Manualità e tecnologie vengono scelte per lavorare su leggerezza, tono e armonia, con un percorso costruito sulla tua risposta reale.',
      signature: 'Forma, leggerezza, continuità.'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public',
      title: 'Pelle liscia. Senza pensieri.',
      lead: 'Laser Ice Polar, valutazione iniziale e un calendario calibrato sulla zona: il percorso Libertà rende l’epilazione più confortevole e semplice da seguire.',
      signature: 'Be Cool. Be Rebel.'
    }
  ];

  const visualA = document.createElement('div');
  const visualB = document.createElement('div');
  visualA.className = 'rebel-hero__living-visual is-active';
  visualB.className = 'rebel-hero__living-visual';
  visualA.style.backgroundImage = `url('${slides[0].image}')`;
  visualB.style.backgroundImage = `url('${slides[1].image}')`;
  hero.prepend(visualB);
  hero.prepend(visualA);
  hero.classList.add('rebel-hero--living');
  hero.dataset.livingHeroReady = 'true';

  const controls = document.createElement('div');
  controls.className = 'rebel-hero__controls';
  controls.setAttribute('aria-label', 'Cambia messaggio principale');

  const buttons = slides.map((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rebel-hero__dot';
    button.setAttribute('aria-label', `Mostra messaggio ${index + 1}`);
    button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    button.addEventListener('click', () => show(index, true));
    controls.appendChild(button);
    return button;
  });
  copy.appendChild(controls);

  let current = 0;
  let activeVisual = visualA;
  let inactiveVisual = visualB;
  let timer;
  let paused = false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(next, userInitiated = false) {
    if (next === current) return;
    const slide = slides[next];

    inactiveVisual.style.backgroundImage = `url('${slide.image}')`;
    inactiveVisual.classList.add('is-active');
    activeVisual.classList.remove('is-active');

    copy.classList.add('is-changing');
    window.setTimeout(() => {
      title.textContent = slide.title;
      lead.textContent = slide.lead;
      if (signature) signature.textContent = slide.signature;
      copy.classList.remove('is-changing');
    }, reduceMotion ? 0 : 220);

    buttons.forEach((button, index) => {
      button.setAttribute('aria-current', index === next ? 'true' : 'false');
    });

    const previousVisual = activeVisual;
    activeVisual = inactiveVisual;
    inactiveVisual = previousVisual;
    current = next;

    if (userInitiated) restart();
  }

  function tick() {
    if (!paused) show((current + 1) % slides.length);
  }

  function restart() {
    window.clearInterval(timer);
    if (!reduceMotion) timer = window.setInterval(tick, 8500);
  }

  hero.addEventListener('mouseenter', () => { paused = true; });
  hero.addEventListener('mouseleave', () => { paused = false; });
  hero.addEventListener('focusin', () => { paused = true; });
  hero.addEventListener('focusout', () => { paused = false; });
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  restart();
})();
