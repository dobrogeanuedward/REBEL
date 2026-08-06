import {
  competencePages as rawCompetencePages,
  editorialImageAssets,
  servicePages as rawServicePages,
  type CompetencePage,
  type ServicePage,
} from "@/lib/seo-content";
import { clarifyContent, clarifyCopy } from "@/lib/copy-clarity";

const refineService = (page: ServicePage): ServicePage => ({
  ...clarifyContent(page),
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

const refineCompetence = (page: CompetencePage): CompetencePage => ({
  ...clarifyContent(page),
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

export const servicePages = rawServicePages.map(refineService);
export const competencePages = rawCompetencePages.map(refineCompetence);
export { editorialImageAssets };
export type { CompetencePage, ServicePage };
