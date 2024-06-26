import type { ImgDataTypes } from '@/components/ui/image';

export type ContactFormTypes = {
  index: number;
  isHighlighted: boolean;
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
};

export type FormTypes = {
  privacyPolicyLink: string;
};