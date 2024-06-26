import styles from './Loader.module.scss';
import type { LoaderTypes } from './Loader.types';

export default function Loader({ loading }: LoaderTypes) {
  return (
    loading && (
      <div className={styles['Loader']}>
        <CircleLoaderIcon className={styles.CircleLoaderIcon} />
      </div>
    )
  );
}

const CircleLoaderIcon = ({ ...props }) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox='25 25 50 50'
      {...props}
    >
      <circle
        cx='50'
        cy='50'
        r='20'
        fill='none'
        stroke='currentColor'
        strokeWidth='5'
      />
    </svg>
  );
};
