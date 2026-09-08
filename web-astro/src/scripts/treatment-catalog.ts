function initCatalog() {
  const found = document.querySelector<HTMLElement>("[data-treatment-menu]");
  if (!found || found.dataset.ready) return;
  const root: HTMLElement = found;
  root.dataset.ready = "true";
  const header = document.querySelector<HTMLElement>(".site-header");
  if (header && typeof ResizeObserver !== "undefined") {
    const updateOffset = () =>
      root.style.setProperty(
        "--catalog-header-height",
        `${Math.ceil(header.getBoundingClientRect().height)}px`,
      );
    const observer = new ResizeObserver(updateOffset);
    observer.observe(header);
    updateOffset();
    document.addEventListener(
      "astro:before-swap",
      () => observer.disconnect(),
      { once: true },
    );
  }
  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const navigation = root.querySelector<HTMLDetailsElement>(
        ".catalog-navigation",
      )!;
      if (navigation.open) {
        navigation.open = false;
        navigation.querySelector<HTMLElement>("summary")?.focus();
      }
    }
  });
  const search = root.querySelector<HTMLInputElement>("[data-catalog-search]")!;
  const result = root.querySelector<HTMLElement>("[data-catalog-result]")!;
  const clear = root.querySelector<HTMLButtonElement>("[data-catalog-clear]")!;
  const empty = root.querySelector<HTMLElement>("[data-catalog-empty]")!;
  const items = [...root.querySelectorAll<HTMLElement>("[data-catalog-item]")];
  const sections = [
    ...root.querySelectorAll<HTMLElement>("[data-catalog-section]"),
  ];
  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("it");
  const previousOpen = new Map<HTMLDetailsElement, boolean>();
  let searching = false;
  function filter() {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const active = terms.length > 0;
    if (active && !searching)
      root
        .querySelectorAll<HTMLDetailsElement>("details[data-category]")
        .forEach((d) => previousOpen.set(d, d.open));
    items.forEach((item) => {
      item.hidden = !terms.every((term) =>
        normalize(item.dataset.search ?? "").includes(term),
      );
    });
    sections.forEach((section) => {
      const own = section.dataset.search;
      section.hidden = own
        ? !terms.every((term) => normalize(own).includes(term))
        : !section.querySelector("[data-catalog-item]:not([hidden])");
      if (section instanceof HTMLDetailsElement)
        section.open = active
          ? !section.hidden
          : (previousOpen.get(section) ?? section.open);
    });
    searching = active;
    const count = items.filter((i) => !i.hidden).length;
    clear.hidden = !active;
    empty.hidden =
      count > 0 || !root.querySelector<HTMLElement>(".catalog-promo")!.hidden;
    result.textContent = active
      ? `${count} trattamenti e percorsi trovati${!root.querySelector<HTMLElement>(".catalog-promo")!.hidden ? " · promo laser disponibile" : ""}`
      : "85 trattamenti beauty · 9 percorsi REBEL · promo laser";
  }
  search.addEventListener("input", filter);
  root
    .querySelectorAll("[data-catalog-clear], [data-catalog-reset]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        search.value = "";
        filter();
        search.focus();
      }),
    );
  function revealHash() {
    let id = location.hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (!target || !root.contains(target)) return;
    if (search.value) {
      search.value = "";
      filter();
    }
    let current: HTMLElement | null = target;
    while (current && current !== root) {
      if (current instanceof HTMLDetailsElement) current.open = true;
      current = current.parentElement;
    }
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
  root
    .querySelectorAll<HTMLAnchorElement>(".catalog-navigation a")
    .forEach((a) =>
      a.addEventListener("click", () => {
        root.querySelector<HTMLDetailsElement>(".catalog-navigation")!.open =
          false;
        if (location.hash === a.hash) revealHash();
      }),
    );
  window.addEventListener("hashchange", revealHash);
  document.addEventListener(
    "astro:before-swap",
    () => window.removeEventListener("hashchange", revealHash),
    { once: true },
  );
  if (location.hash) revealHash();
}
initCatalog();
document.addEventListener("astro:page-load", initCatalog);
