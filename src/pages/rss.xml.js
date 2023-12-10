import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "complexité IA",
    description: "Les problème de sécurité d'IA",
    site: 'https://www.igongshang.cn/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}
