import Link from 'next/link';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import Pagination from '@/components/ui/Pagination';
import ProductCard from '@/components/global/ProductCard';
import styles from './Listing.module.scss';
import type { ListingTypes } from './Listing.types';

export default async function Listing({
  heading,
  paragraph,
  categories,
  products,
  totalPages,
  currentPage,
  mainCategorySlug,
  subCategorySlug,
}: ListingTypes) {
  const currentCategorySlug = subCategorySlug || mainCategorySlug;

  return (
    <section className={styles['Listing']}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown>{paragraph}</Markdown>
      </header>
      {categories.length > 0 && (
        <div className={styles.categories}>
          <ul>
            {categories.map(({ name, slug, productCount, thumbnail }, i) => (
              <li key={i}>
                <Link
                  href={slug === subCategorySlug
                    ? `/sklep/kategoria/${mainCategorySlug}`
                    : slug === mainCategorySlug
                      ? '/sklep'
                      : `/sklep/kategoria/${mainCategorySlug ? `${mainCategorySlug}/` : ''}${slug}`
                  }
                  aria-current={slug === currentCategorySlug ? 'page' : undefined}
                  scroll={false}
                >
                  <Img data={thumbnail} sizes='48px' />
                  <span>{name} ({productCount})</span>
                </Link>
              </li>
            ))}
          </ul>
          <Brushes className={styles.Brushes} />
        </div>
      )}
      <div className={styles['Products']} id='strona'>
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        slugBase={`/sklep${mainCategorySlug ? `/kategoria/${mainCategorySlug}` : ''}`}
      />
    </section>
  );
}

const Brushes = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={72}
    height={81}
    viewBox='0 0 72 81'
    fill='#FFB8CE'
    {...props}
  >
    <path d='M7.747 23.21c-3.985-9.426-5.6-12.487-6.874-12.895-1.035-.351-.966.34.276 2.761 1.08 2.055 2.854 5.969 4.499 9.888 1.347 3.215 1.762 3.87 2.632 4.34 1.217.619 1.089-.261-.533-4.093Z' />
    <path d='M14.786 21.394c-.37-.023-.444.23-.59 1.593-.205 2.03.855 4.184 1.69 3.45.669-.615-.274-4.99-1.1-5.043Z' />
    <path d='M15.058 12.435c-.038 2.1-.644 3.276.34 4.396 1.584 1.8 1.772 1.769 2.052-2.287C17.971 7.03 17.41.762 16.176.399c-1.194-.318-.48 4.258-1.118 12.036Z' />
    <path d='M32.532 7.587c-.5.197-1.67 2.997-3.035 7.256-4.644 14.574-5.427 13.867-4.482 14.941 1.011 1.15 1.29.61 4.726-8.636 3.681-9.918 4.578-14.22 2.79-13.561Z' />
    <path d='M46.697 16.324c-.484.184-3.264 3.997-4.805 6.56-.37.62-1.442 2.153-2.367 3.395-1.816 2.402-1.87 2.584-1.112 3.447.718.817.688.843 3.525-3.395 4.944-7.38 6.502-10.655 4.759-10.007Z' />
    <path d='M60.16 32.493c-1.944.878-5.98 3.57-15.274 8.388-1.85.956-1.88.983-1.91 1.867-.018.714.51 1.59 1.086 1.755.477.144 13.318-6.667 17.506-9.277 1.613-1.042.818-3.751-1.407-2.733Z' />
    <path d='M67.256 46.403c-.666.13-2.543.412-7.823.924-2.388.221-6.965 1.134-7.33 1.455-.727.64 3.6.483 11.724-.436 1.757-.204 3.439-.341 3.75-.293 1.462.163.924-1.886-.32-1.65Z' />
    <path d='M66.553 64.326c1.982.296 3.648.172 4.195-.308.758-.667.161-1.805-1.136-2.087-8.595-1.912-19.049-2.297-19.037-.724.013 1.544 1.374 1.93 8.645 2.458 3.2.244 6.498.537 7.333.661Z' />
    <path d='M66.256 76.686c-5.334-3.466-16.088-8.873-17.274-8.661-.824.134-.155 1.934.962 2.561l4.18 2.307c6.43 3.549 14.774 7.532 15.123 7.225.7-.642-.112-1.565-2.991-3.432Z' />
  </svg>
);
