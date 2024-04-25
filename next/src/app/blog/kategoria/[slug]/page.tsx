import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import Breadcrumbs from '@/components/global/Breadcrumbs';
import Components, { Components_Query } from '@/components/Components';
import Listing, { Listing_Query } from '@/components/_Blog/Listing';
import type { BlogPageQueryTypes } from './page.types';

const currentPath = '/blog';
const breadcrumbs = [
  { name: 'Blog', path: currentPath },
];

export default async function AboutPage() {
  const { listing, content } = await query();

  return (
    <>
      <Breadcrumbs data={breadcrumbs} />
      <Listing {...listing} />
      <Components data={content} />
    </>
  );
}

const query = async (): Promise<BlogPageQueryTypes> => {
  return await sanityFetch<BlogPageQueryTypes>({
    query: /* groq */ `
      *[_type == 'BlogCategory_Collection' && slug.current == $slug][0] {
        name,
        "filteredBlogPosts": *[_type=="BlogPost_Collection" && $slug in category[]->slug.current],
      }
      *[_type == "Blog_Page"][0] {
        ${Components_Query}
      }
    `,
    tags: ['Blog_Page'],
  });
};

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  return await QueryMetadata('Blog_Page', `/blog/kategoria/${slug}`, `${slug}`);
}