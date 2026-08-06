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
      title: 'Trattamenti viso costruiti sulla tua pelle.',
      lead: 'Valutiamo idratazione, luminosità, uniformità, comfort e tono. Poi scegliamo trattamenti, attivi epigenetici e tecnologie adatti all’obiettivo che vuoi raggiungere.',
      signature: 'Viso · valutazione iniziale · percorsi personalizzati'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/9d9033f2-f11f-4485-f69c-38d05556bb00/public',
      title: 'Percorsi corpo per drenaggio, tono e compattezza.',
      lead: 'Manualità, pressomassaggio, LPG, Tecar e altre tecnologie vengono combinate in base alla zona, alle caratteristiche dei tessuti e al risultato desiderato.',
      signature: 'Corpo · rimodellamento · benessere'
    },
    {
      image: 'https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/e63a6c84-f777-4f2d-995b-eef9c7e09900/public',
      title: 'Epilazione Laser Ice Polar a Carmagnola.',
      lead: 'Laser a diodo con tre lunghezze d’onda e raffreddamento attivo per viso e corpo. La valutazione iniziale definisce zone, parametri, frequenza e prezzo.',
      signature: 'Laser da 25,90 € · valutazione gratuita'
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
  controls.setAttribute('aria-label', 'Cambia contenuto principale');

  const buttons = slides.map((slide, index) => {
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
    }, reduceMotion ? 0 : 160);

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
    if (!reduceMotion) timer = window.setInterval(tick, 3000);
  }

  hero.addEventListener('mouseenter', () => { paused = true; });
  hero.addEventListener('mouseleave', () => { paused = false; });
  hero.addEventListener('focusin', () => { paused = true; });
  hero.addEventListener('focusout', () => { paused = false; });
  document.addEventListener('visibilitychange', () => { paused = document.hidden; });

  restart();
})();
