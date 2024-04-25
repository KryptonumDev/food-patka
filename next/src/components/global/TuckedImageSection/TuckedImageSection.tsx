import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './TuckedImageSection.module.scss';
import type { TuckedImageSectionTypes } from './TuckedImageSection.types';

export default function TuckedImageSection({ index, heading, paragraph, cta, img }: TuckedImageSectionTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles['TuckedImageSection']}>
      <header>
        <Heading>{heading}</Heading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        {cta && <Button data={cta} className={styles.cta} />}
      </header>
      <div className={styles.img}>
        <Img
          data={img}
          sizes='(max-width: 420px) 282px, (max-width: 767px) 66vw, 520px'
          priority={index === 0}
        />
        <Line className={styles.Line} />
        <Brushes className={styles.Brushes} />
        <Sygnet className={styles.Sygnet} />
      </div>
    </section>
  );
}

const Line = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={637}
    height={410}
    viewBox='0 0 637 410'
    fill='none'
    {...props}
  >
    <path
      d='M-24.419 217.168c-24.791-120.2 37.612-330.691 237.77-135.224 48.08 46.953 169.031 138.154 268.195 127.336C605.502 195.758 659 267.9 625.786 306.191 590.315 347.086 519 315.9 443 407.9'
      stroke='#FFD7E4'
      strokeWidth={3}
      strokeLinecap='round'
    />
  </svg>
);

const Brushes = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={99}
    height={145}
    viewBox='0 0 99 145'
    fill='#FFD7E4'
    {...props}
  >
    <path d='M25.526 22.444c-6.595 1.743-7.315 3.444-9.985 23.49-2.774 20.703-2.73 24.551.122 25.224 5.178 1.19 7.224-4.133 11.608-29.625 3.226-18.81 3.123-20.376-1.745-19.09Z' />
    <path d='M64.93 45.018c-4.67 1.146-6.264 2.798-11.139 11.433-14.39 25.678-26.12 42.688-17.048 40.22 3.705-.973 6.731-5.425 24.275-34.809C70.662 45.565 71.18 43.54 64.93 45.018Z' />
    <path d='M49.407 123.182c.09 2.863 5.098 1.833 21.35-4.302 17.2-6.507 20.87-8.751 19.875-11.829-1.409-4.205-41.278 11.487-41.225 16.131Z' />
  </svg>
);

const Sygnet = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={163}
    height={163}
    viewBox='0 0 163 163'
    fill='none'
    {...props}
  >
    <path
      d='M79.255 25.381c-1.548-6.06-7.715-9.717-13.775-8.17-6.061 1.549-9.72 7.716-8.172 13.776l3.071 12.029-8.614-8.94c-4.34-4.504-11.51-4.637-16.014-.297s-4.638 11.51-.298 16.013l9.802 10.173-13.629-3.722c-6.034-1.648-12.262 1.907-13.91 7.94-1.65 6.034 1.905 12.26 7.939 13.909l11.976 3.271-12.03 3.073c-6.06 1.548-9.719 7.716-8.171 13.776 1.547 6.06 7.714 9.717 13.775 8.169l12.03-3.073-8.942 8.615c-4.505 4.34-4.638 11.509-.299 16.013 4.34 4.504 11.51 4.637 16.014.297l10.175-9.803-3.724 13.628c-1.65 6.033 1.905 12.261 7.939 13.909s12.261-1.907 13.91-7.941l3.274-11.976 3.071 12.029c1.547 6.06 7.715 9.717 13.775 8.169s9.72-7.715 8.172-13.775l-3.071-12.029 8.614 8.94c4.339 4.504 11.509 4.636 16.014.297s4.638-11.51.298-16.014l-9.802-10.173 13.629 3.723c6.033 1.648 12.261-1.907 13.91-7.94s-1.905-12.261-7.939-13.91l-11.976-3.27 12.03-3.073c6.06-1.548 9.719-7.716 8.171-13.776-1.547-6.06-7.714-9.717-13.775-8.17l-12.03 3.074 8.942-8.615c4.504-4.34 4.638-11.51.298-16.013s-11.509-4.637-16.014-.297l-10.174 9.803 3.724-13.628c1.649-6.034-1.905-12.26-7.939-13.909-6.034-1.648-12.262 1.907-13.91 7.94L82.325 37.41l-3.07-12.03Z'
      fill='#FFD7E4'
    />
    <mask
      id='SygnetMask'
      maskUnits='userSpaceOnUse'
      x={17}
      y={16}
      width={130}
      height={131}
    >
      <path
        d='M79.255 25.381c-1.548-6.06-7.715-9.717-13.775-8.17-6.061 1.549-9.72 7.716-8.172 13.776l3.071 12.029-8.614-8.94c-4.34-4.504-11.51-4.637-16.014-.297s-4.638 11.51-.298 16.013l9.802 10.173-13.629-3.722c-6.034-1.648-12.262 1.907-13.91 7.94-1.65 6.034 1.905 12.26 7.939 13.909l11.976 3.271-12.03 3.073c-6.06 1.548-9.719 7.716-8.171 13.776 1.547 6.06 7.714 9.717 13.775 8.169l12.03-3.073-8.942 8.615c-4.505 4.34-4.638 11.509-.299 16.013 4.34 4.504 11.51 4.637 16.014.297l10.175-9.803-3.724 13.628c-1.65 6.033 1.905 12.261 7.939 13.909s12.261-1.907 13.91-7.941l3.274-11.976 3.071 12.029c1.547 6.06 7.715 9.717 13.775 8.169s9.72-7.715 8.172-13.775l-3.071-12.029 8.614 8.94c4.339 4.504 11.509 4.636 16.014.297s4.638-11.51.298-16.014l-9.802-10.173 13.629 3.723c6.033 1.648 12.261-1.907 13.91-7.94s-1.905-12.261-7.939-13.91l-11.976-3.27 12.03-3.073c6.06-1.548 9.719-7.716 8.171-13.776-1.547-6.06-7.714-9.717-13.775-8.17l-12.03 3.074 8.942-8.615c4.504-4.34 4.638-11.51.298-16.013s-11.509-4.637-16.014-.297l-10.174 9.803 3.724-13.628c1.649-6.034-1.905-12.26-7.939-13.909-6.034-1.648-12.262 1.907-13.91 7.94L82.325 37.41l-3.07-12.03Z'
        fill='#FFD7E4'
      />
    </mask>
    <g mask='url(#SygnetMask)'>
      <path
        d='m51.828 101.207 19.17-14.986a.84.84 0 0 1 1.08 1.282L56.994 101.18a.955.955 0 0 0 1.24 1.453L74.14 89.868a.842.842 0 0 1 1.107 1.266l-14.823 14.128a.897.897 0 0 0 1.19 1.34l15.78-13.03a.793.793 0 0 1 1.054 1.184l-17.606 16.859c-.833.721-2.694 2.874-5.238 2.246-2.543-.629-3.935-1.276-6.005.516l-34.426 32.722c-1.65 1.429-4.292 1.895-6.045-.49-1.719-2.337-.56-4.432.842-5.517l37.465-29.212c2.04-1.767 1.547-2.589 1.627-5.573.081-2.983 1.814-4.276 2.766-5.1'
        fill='#97879D'
      />
      <path
        d='M59.44 90.96c-6.29-13.323 4.217-28.611 21.974-24.638 22.196 4.967 26.075 23.95 20.187 29.716s-24.5-1.402-26.825-18.074 11.687-27.95 25.971-21.229c1.474.886 5.22 3.154 6.195 6.063'
        stroke='#F489A9'
        strokeWidth={0.851}
        strokeLinecap='round'
      />
      <path
        d='M110.797 67.468c.041-.206.342-.182.351.027l.072 1.76a4.92 4.92 0 0 0 3.964 4.625l1.727.341c.206.04.183.342-.027.351l-1.759.073a4.92 4.92 0 0 0-4.626 3.962l-.341 1.728c-.041.206-.342.183-.351-.027l-.072-1.76a4.92 4.92 0 0 0-3.964-4.624l-1.727-.342c-.206-.04-.183-.342.027-.35l1.759-.073a4.92 4.92 0 0 0 4.626-3.963zM69.446 52.097c.03-.148.247-.132.254.02l.052 1.27a3.554 3.554 0 0 0 2.862 3.34l1.248.247c.149.03.132.248-.02.254l-1.27.052a3.554 3.554 0 0 0-3.34 2.862l-.247 1.248c-.03.149-.248.132-.254-.02l-.052-1.27a3.554 3.554 0 0 0-2.862-3.34l-1.248-.247c-.149-.03-.132-.247.02-.253l1.27-.053a3.554 3.554 0 0 0 3.34-2.862z'
        fill='#fff'
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        transform='rotate(4.41 -1273.267 1064.006)skewX(-.001)'
        fill='#fff'
      />
      <path
        d='M83.87 75.067c.022-.114.19-.101.195.015l.04.978a2.734 2.734 0 0 0 2.202 2.569l.96.19c.114.022.101.19-.016.194l-.977.04a2.734 2.734 0 0 0-2.57 2.202l-.19.96c-.022.115-.19.102-.194-.015l-.04-.977a2.734 2.734 0 0 0-2.202-2.57l-.96-.19c-.115-.022-.102-.19.015-.194l.977-.04a2.734 2.734 0 0 0 2.57-2.202z'
        fill='#fff'
      />
      <circle
        cx={1.5}
        cy={1.5}
        r={1.5}
        transform='rotate(4.41 -735.527 1511.74)skewX(-.001)'
        fill='#fff'
      />
    </g>
  </svg>
);