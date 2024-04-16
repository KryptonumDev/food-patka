import { DOMAIN } from '@/global/constants';
import type { MetadataRoute } from 'next';

// type FetchTypes = {
//   landings: {
//     slug: string;
//   }[];
// };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const { landings } = await query();
  const sitemap = [
    // ...landings.map(({ slug }) => ({
    //   url: `${DOMAIN}/${slug}`,
    //   lastModified: new Date(),
    // })),
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
    },
  ];
  return sitemap;
}

// const query = async (): Promise<FetchTypes> => {
//   return await sanityFetch<FetchTypes>({
//     query: /* groq */ `
//       {
//         'landings': *[_type == 'landingPage_Collection'] {
//           'slug': slug.current
//         }
//       }
//     `,
//     tags: ['landingPage_Collection'],
//   });
// };