import { defineField, defineType } from "sanity"

export default defineType({
  name: 'Shop_Page',
  type: 'document',
  title: 'Sklep',
  icon: () => '🛒',
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          type: 'markdown',
          title: 'Nagłówek',
        }),
        defineField({
          name: 'paragraph',
          type: 'markdown',
          title: 'Paragraf',
        }),
      ],
      title: 'Sekcja Hero',
      options: { collapsible: true },
    }),
    defineField({
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
      options: { collapsible: true },
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
});
