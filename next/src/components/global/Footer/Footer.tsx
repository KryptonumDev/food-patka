import sanityFetch from '@/utils/sanity.fetch';
import Newsletter from './Newsletter';
import styles from './Footer.module.scss';
import type { FooterQueryTypes } from './Footer.types';

export default async function Footer() {
  const { footer, privacyPolicy, termsAndConditions } = await query();

  return (
    <>
      <div className={styles['Decoration']}>
        <WaveSvg className={styles.WaveSvg} />
        <Decoration1Icon className={styles.Decoration1Icon} />
        <Decoration2Icon className={styles.Decoration2Icon} />
        <Decoration3Icon className={styles.Decoration3Icon} />
      </div>
      <footer className={styles['Footer']}>
        <div className='max-width'>
          <Newsletter data={footer} />
          <div className={styles.info}>
            <p className={styles.copyright}>
              <span>Ⓒ Stworzone przez </span>
              <a href="https://kryptonum.eu/pl" className="link" target='_blank' rel='noreferrer'>Kryptonum</a>
            </p>
            <div className={styles.legal}>
              <a
                href={privacyPolicy}
                target='_blank'
                rel='noreferrer'
                className='link'
              >
                Polityka prywatności
              </a>
              <a
                href={termsAndConditions}
                target='_blank'
                rel='noreferrer'
                className='link'
              >
                Regulamin
              </a>
              <button className="link">Zarządzaj ciasteczkami</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const query = async (): Promise<FooterQueryTypes> => {
  return await sanityFetch<FooterQueryTypes>({
    query: /* groq */ `
      *[_id == 'global'][0] {
        footer {
          heading,
          paragraph,
        },
        privacyPolicy,
        termsAndConditions,
      }
    `,
    tags: ['global'],
  });
};

const WaveSvg = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width='100%'
    viewBox='0 0 1366 175'
    preserveAspectRatio='none'
    fill="none"
    {...props}
  >
    <path
      d="M263 40.28c-111.341 57.812-207.333 98-262 78l-1 56h1365l1-8c-123-179-342-77-455-56-75.901 14.106-170-4-232-48s-260-103-416-22Z"
      fill="#FFF6F9"
    />
  </svg>
);

const Decoration1Icon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={165}
    height={167}
    viewBox='0 0 165 167'
    fill="#FFD7E4"
    {...props}
  >
    <path d="M87.917 43.987c-4.73 3.099-6.765 1.383-6.27-5.202.44-5.643 4.84-8.908 6.38-4.814 1.43 3.708 1.32 9.075-.11 10.016Z" />
    <path d="M100.732 48.8c-2.31 1.273-9.68 1.44-11.22.333-3.355-2.435 7.315-5.645 12.21-3.653 1.76.665 1.32 2.048-.99 3.32Z" />
    <path d="M89.457 52.065c3.3 5.367-2.53 14.83-6.325 10.237-1.1-1.328-.495-7.802.88-9.186 1.375-1.328 4.84-2.047 5.445-1.05Z" />
    <path d="M72.737 49.796c-6.16-.83-6.71-.995-6.71-2.157 0-2.49 6.6-3.542 12.265-2.048 7.095 1.992 2.64 5.312-5.555 4.205Z" />
    <path d="M52.167 54.777c7.26 3.044 15.565 10.182 26.125 15.162 8.36 3.928 13.31 3.762 18.975.608 6.71-3.652 10.23-2.932 6.985 1.439-4.84 6.53-3.96 14.663 2.255 20.418 5.335 4.925-.55 7.968-8.745 4.537-5.445-2.268-6.05-2.213-12.76 1.328-8.14 4.316-9.845 4.095-10.12-1.106-.22-5.202-1.815-10.514-4.18-13.944-3.685-5.478-17.105-19.588-21.56-22.687-6.05-4.205-5.885-9.462 3.025-5.755Zm27.06 24.513c2.31 3.486 3.465 6.806 3.74 10.513.44 6.308.22 2.767 9.35.886 3.08-.609 3.41-.83 3.135-1.826-1.595-5.589-1.595-7.858.055-12.229.22-.553-.66-.443-3.19.387-1.925.609-4.84 1.162-6.49 1.218-3.465.11-5.995-.443-7.81-.775l1.21 1.826Z" />
    <path d="M86.157 114.371c2.805-1.328 12.375-1.273 12.375.11 0 1.826-3.19 3.099-8.36 3.376-6.545.276-8.47-1.384-4.015-3.486Z" />
    <path d="M98.588 112.766c-1.32-3.597-1.266-6.419.164-7.858 1.705-1.715 4.95-1.936 5.775-.442.66 1.217.275 2.711.165 5.533-.165 3.541-5.004 5.755-6.104 2.767Z" />
    <path d="M104.252 121.176c1.1 1.771.55 10.679-.715 11.731-4.07 3.32-6.326.332-5.06-6.751.825-4.537 4.235-7.47 5.775-4.98Z" />
    <path d="M118.717 113.265c1.54.332 1.595 1.383.055 2.711-1.65 1.494-11.88 1.937-12.375.498-.99-2.545 6.38-4.482 12.32-3.209Z" />
  </svg>
);

const Decoration2Icon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={111}
    height={112}
    viewBox='0 0 111 112'
    fill='none'
    {...props}
  >
    <path
      d='M60.002 40.929c-4.625-4.847-8.288-11.1-10.693-18.204-1.85-5.476-4.514-15.577-4.514-17.168 0-2.479-4.44-3.478-4.44 1.332 0 2.48-1.628 16.872-6.586 25.493-4.7 8.214-6.512 10.323-9.805 11.73-1.887.776-1.591 1.368 1.073 2.293 6.586 2.294 9.546 7.807 15.503 28.823 3.478 12.21 5.624 11.84 7.437-1.295 1.776-13.061 8.362-27.898 13.06-29.526 1.555-.518 1.444-.851-1.035-3.478Zm-15.54 23.606-.703 3.33c-.296-.777-4.144-17.094-10.915-21.46-1.85-1.184-2.183-1.665-1.11-1.665 3.44 0 8.806-9.139 10.434-17.945.777-4.033.888-4.181 1.85-1.665 1.998 5.365 5.29 10.434 9.805 15.133l2.96 3.108c-.407.481-8.732 3.737-12.321 21.164Z'
      fill='#FFD7E4'
    />
    <path
      d='M86.679 84.515c-5.81-4.736-10.064-13.135-10.064-20.054 0-3.034-4.033-6.512-5.55 2.109-1.85 10.693-3.071 13.616-7.252 17.797-3.441 3.404-3.478 3.182.85 4.366 4.034 1.11 7.03 6.438 8.992 16.021 1.22 5.957 5.624 6.216 5.809.148.259-8.547 2.22-13.32 6.66-16.132 2.812-1.813 2.886-2.368.555-4.255Zm-4.44 1.961c-1.295.444-4.81 3.515-5.624 4.847-1.11 1.887-1.073 1.887-2.368-.185-1.11-1.776-3.737-3.737-5.476-4.07-1.332-.296-1.295-.37.85-2.479 1.037-.999 2.48-3.034 3.22-4.514 1.665-3.22 1.443-3.182 3.034-.629 1.22 1.924 3.219 4.033 5.735 6.03.703.482.925.889.629 1Z'
      fill='#FFD7E4'
    />
  </svg>
);

const Decoration3Icon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={118}
    height={120}
    viewBox='0 0 118 120'
    fill='#FFB8CE'
    {...props}
  >
    <path d='M71.138 38.34c3.462.634 4.524-13.963 1.18-16.184-1.22-.833-2.517-.318-3.107 1.23-2.675 6.663-1.691 14.28 1.927 14.954Z' />
    <path d='M56.428 40.759c1.888.992 8.85 1.27 9.204.357.786-2.102-4.76-3.65-9.598-2.737-1.337.278-1.101 1.587.394 2.38Z' />
    <path d='M70.824 57.974c2.556 0 3.028-11.424.55-13.328-1.022-.754-3.146-.674-3.579.159-2.871 5.355-1.062 13.169 3.029 13.169Z' />
    <path d='M83.135 42.267c3.776.278 5.074-.238 4.288-1.745-.866-1.627-11.879-2.936-12.43-1.468-.629 1.626 2.36 2.777 8.142 3.213Z' />
    <path d='M70.076 63.25c-1.14.596-1.415 1.825-1.77 8.37-.353 7.18 5.665 13.487 6.766-2.42.314-4.76-1.967-7.457-4.996-5.95Z' />
    <path d='M62.446 78.403c-2.675-.318-7.04-.516-7.788-.318-3.265.794 1.023 3.253 6.332 3.69 6.726.555 8.103-2.54 1.456-3.372Z' />
    <path d='M67.402 85.662c-2.99 5.592-1.22 12.375 3.225 12.375 1.77 0 4.17-8.885 2.99-11.146-.866-1.626-5.546-2.538-6.215-1.23Z' />
    <path d='M87.698 80.307c-1.928-1.745-12.154-2.618-12.744-1.11-.67 1.785 1.927 2.816 7.984 3.133 5.743.318 6.844-.158 4.76-2.023Z' />
    <path d='M36.407 60.95c-3.854-.396-5.625-.793-6.647-.04-1.888 1.389 2.36 3.333 7.591 3.53 5.114.16 4.288-2.934-.944-3.49Z' />
    <path d='M45.532 66.86c-1.77-1.15-4.051-1.23-4.523-.119-.59 1.428-1.14 8.37-.708 9.203.786 1.587 5.467 2.538 5.978 1.23.748-2.063.236-9.68-.747-10.314Z' />
    <path d='M41.914 45.558c-1.849.318-2.439 9.837-.747 11.9 1.416 1.706 5.86 3.49 5.742-1.825-.157-7.616-.314-10.829-4.995-10.075Z' />
    <path d='M57.254 60.87c-1.888-.793-9.519-.754-9.794.08-.669 1.705 2.478 2.974 7.395 2.974 4.956 0 6.136-1.468 2.399-3.054Z' />
  </svg>
);