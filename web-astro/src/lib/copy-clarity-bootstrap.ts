import { competencePages, servicePages } from "@/lib/seo-content";
import { localAreaPages } from "@/lib/local-pages";
import { protocolPages } from "@/lib/protocol-pages";
import { clarifyContent, clarifyCopy } from "@/lib/copy-clarity";

for (const page of servicePages) {
  Object.assign(page, clarifyContent(page), {
    name: clarifyCopy(page.name),
    priceHint: clarifyCopy(page.priceHint),
    heroImage: page.heroImage
      ? { ...page.heroImage, alt: clarifyCopy(page.heroImage.alt) }
      : undefined,
    sourceLinks: page.sourceLinks?.map((source) => ({
      ...source,
      label: clarifyCopy(source.label),
    })),
  });
}

for (const page of competencePages) {
  Object.assign(page, clarifyContent(page), {
    title: clarifyCopy(page.title),
    localAngle: clarifyCopy(page.localAngle),
    heroImage: page.heroImage
      ? { ...page.heroImage, alt: clarifyCopy(page.heroImage.alt) }
      : undefined,
    sourceLinks: page.sourceLinks?.map((source) => ({
      ...source,
      label: clarifyCopy(source.label),
    })),
  });
}

for (const page of protocolPages) {
  Object.assign(page, clarifyContent(page), {
    name: clarifyCopy(page.name),
    price: clarifyCopy(page.price),
    relatedLinks: page.relatedLinks.map((link) => ({
      ...link,
      label: clarifyCopy(link.label),
      description: link.description ? clarifyCopy(link.description) : undefined,
    })),
  });
}

for (const area of localAreaPages) {
  area.title = clarifyCopy(area.title);
  area.description = clarifyCopy(area.description);
  area.intro = clarifyCopy(area.intro);
  area.whyRebel = area.whyRebel.map(clarifyCopy);
  area.directions = area.directions
    ? {
        ...area.directions,
        heading: clarifyCopy(area.directions.heading),
        paragraphs: area.directions.paragraphs.map(clarifyCopy),
      }
    : undefined;
  area.focus = area.focus
    ? {
        ...area.focus,
        heading: clarifyCopy(area.focus.heading),
        paragraphs: area.focus.paragraphs.map(clarifyCopy),
        links: area.focus.links?.map((link) => ({
          ...link,
          label: clarifyCopy(link.label),
          description: link.description ? clarifyCopy(link.description) : undefined,
        })),
      }
    : undefined;
  area.faqs = area.faqs?.map((faq) => ({
    q: clarifyCopy(faq.q),
    a: clarifyCopy(faq.a),
  }));
}
