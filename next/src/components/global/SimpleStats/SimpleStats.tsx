import Img from '@/components/ui/image';
import styles from './SimpleStats.module.scss';
import Counter from '@/components/ui/Counter';
import type { SimpleStatsTypes } from './SimpleStats.types';

export default function SimpleStats({ img, list }: SimpleStatsTypes) {
  return (
    <section className={styles['SimpleStats']}>
      <Img data={img} sizes='(max-width: 767px) 282px, 326px' />
      <div className={styles.innerCircle} />
      <Brushes className={styles.Brushes} />
      <Stars1 className={styles.Stars1} />
      <Stars2 className={styles.Stars2} />
      <Dot className={styles.Dot} />
      <ul className={styles.list}>
        {list?.map(({ number, label }, i) => (
          <li className={styles.item} key={i}>
            {i === 0 && <Item1 className={styles.Item1} />}
            {i === 1 && <Item2 className={styles.Item2} />}
            {i === 2 && <Item3 className={styles.Item3} />}
            <Counter value={number} />
            <p>{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const Item1 = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={198}
    height={198}
    viewBox='0 0 198 198'
    fill='none'
    {...props}
  >
    <path
      d='M26.789 128.911c-9.081 11.83-8.206 28.845 2.624 39.676 10.83 10.83 27.846 11.705 39.676 2.624 1.944 14.786 14.594 26.2 29.911 26.2s27.967-11.414 29.911-26.2c11.83 9.081 28.845 8.206 39.676-2.624 10.83-10.831 11.705-27.846 2.624-39.676 14.786-1.944 26.2-14.594 26.2-29.911s-11.414-27.967-26.2-29.91c9.081-11.83 8.206-28.846-2.624-39.677s-27.846-11.705-39.676-2.624C126.967 12.003 114.317.589 99 .589s-27.967 11.414-29.91 26.2c-11.83-9.081-28.846-8.206-39.677 2.624s-11.705 27.846-2.624 39.676C12.003 71.033.589 83.683.589 99s11.414 27.967 26.2 29.911Z'
      fill='#FFF6F9'
      stroke='#FFB8CE'
      strokeLinecap='round'
    />
  </svg>
);

const Item2 = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={229}
    height={229}
    viewBox='0 0 229 229'
    fill='none'
    {...props}
  >
    <path
      d='M30.805 148.471c-10.545 13.628-9.565 33.293 2.94 45.798 12.506 12.505 32.17 13.485 45.799 2.94 2.18 17.093 16.778 30.305 34.463 30.305s32.283-13.212 34.464-30.305c13.628 10.545 33.293 9.565 45.798-2.94s13.485-32.17 2.94-45.798c17.093-2.181 30.305-16.779 30.305-34.464s-13.212-32.283-30.305-34.463c10.545-13.628 9.565-33.293-2.94-45.799s-32.17-13.485-45.798-2.94C146.29 13.712 131.692.5 114.007.5S81.724 13.712 79.544 30.805C65.916 20.26 46.25 21.24 33.746 33.745 21.24 46.251 20.26 65.915 30.805 79.543 13.712 81.724.5 96.323.5 114.007c0 17.685 13.212 32.283 30.305 34.464Z'
      fill='#FFFDFD'
      stroke='#FFD7E4'
      strokeLinecap='round'
    />
  </svg>
);

const Item3 = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={148}
    height={148}
    viewBox='0 0 148 148'
    fill='none'
    {...props}
  >
    <path
      d='M20.19 96.29c-6.634 8.819-5.937 21.401 2.091 29.429s20.61 8.725 29.43 2.092c1.546 10.926 10.936 19.33 22.289 19.33s20.743-8.404 22.29-19.33c8.819 6.633 21.401 5.935 29.429-2.092 8.027-8.028 8.725-20.61 2.092-29.43 10.926-1.546 19.33-10.936 19.33-22.289s-8.404-20.743-19.33-22.29c6.633-8.819 5.935-21.4-2.092-29.429-8.028-8.027-20.61-8.725-29.43-2.092C94.743 9.263 85.353.859 74 .859s-20.743 8.404-22.29 19.33c-8.819-6.633-21.4-5.935-29.429 2.092-8.027 8.028-8.725 20.61-2.092 29.43C9.263 53.257.86 62.647.86 74s8.404 20.743 19.33 22.29Z'
      fill='#FFD7E4'
      stroke='#F489A9'
      strokeLinecap='round'
    />
  </svg>
);

const Brushes = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={118}
    height={118}
    fill='none'
    viewBox='0 0 118 118'
    {...props}
  >
    <path
      fill='#FFD7E4'
      d='M90.244 71.072c1.934.542 3.054-3.933 4.834-19.052 1.873-16.006 1.703-19.606-.7-19.425-3.302.288-7.24 37.52-4.134 38.477Z'
    />
    <path
      fill='#FFD7E4'
      d='M19.13 68.527c-1.205 5.888-.35 6.852 11.79 13.339 12.532 6.713 15.06 7.493 16.513 5.249 2.617-4.08-.132-6.922-15.219-15.998-11.135-6.69-12.195-6.936-13.084-2.59Z'
    />
    <path
      fill='#FFD7E4'
      d='M46.037 40.114c-.922 4.223-.397 5.937 3.601 11.956 11.928 17.808 19.035 31.474 20.666 23.218.688-3.364-1.188-6.904-14.447-28.197-7.385-11.737-8.548-12.618-9.82-6.977Z'
    />
  </svg>
);

const Stars1 = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={82}
    height={105}
    viewBox='0 0 82 105'
    fill='none'
    {...props}
  >
    <path
      d='M66.046 74.905c.056-.474.744-.474.8 0l.472 3.977a11.191 11.191 0 0 0 9.795 9.795l3.977.472c.474.056.474.744 0 .8l-3.977.473a11.191 11.191 0 0 0-9.795 9.794l-.472 3.978c-.056.474-.744.474-.8 0l-.472-3.978a11.191 11.191 0 0 0-9.795-9.794L51.8 89.95c-.474-.057-.474-.745 0-.801l3.978-.472a11.191 11.191 0 0 0 9.795-9.795l.472-3.977Z'
      fill='#F489A9'
    />
    <path
      d='M33.093.806c.127-1.075 1.687-1.075 1.814 0l1.07 9.016a25.367 25.367 0 0 0 22.201 22.2l9.016 1.07c1.075.128 1.075 1.688 0 1.815l-9.016 1.07a25.367 25.367 0 0 0-22.2 22.201l-1.07 9.016c-.128 1.075-1.688 1.075-1.815 0l-1.07-9.016a25.367 25.367 0 0 0-22.201-22.2l-9.016-1.07c-1.075-.128-1.075-1.688 0-1.815l9.016-1.07a25.367 25.367 0 0 0 22.2-22.201l1.07-9.016Z'
      fill='#FFB8CE'
    />
  </svg>
);

const Stars2 = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={57}
    height={110}
    viewBox='0 0 57 110'
    fill='#FFB8CE'
    {...props}
  >
    <path d='M27.74 53.093c.106-.901 1.414-.901 1.52 0l.897 7.557a21.263 21.263 0 0 0 18.61 18.61l7.557.896c.901.107.901 1.415 0 1.522l-7.557.896a21.263 21.263 0 0 0-18.61 18.61l-.896 7.557c-.107.901-1.415.901-1.522 0l-.896-7.557a21.263 21.263 0 0 0-18.61-18.61l-7.557-.896c-.901-.107-.901-1.415 0-1.522l7.557-.896a21.263 21.263 0 0 0 18.61-18.61l.896-7.557Z' />
    <circle cx={50.291} cy={5} r={5} />
  </svg>
);

const Dot = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={11}
    viewBox='0 0 11 11'
    fill='#F489A9'
    {...props}
  >
    <path d='M11 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z' />
  </svg>
);