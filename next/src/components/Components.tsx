import HeroHeaderAndImage, { type HeroHeaderAndImageTypes, HeroHeaderAndImage_Query } from './global/HeroHeaderAndImage';

type componentsMapTypes = {
  HeroHeaderAndImage: HeroHeaderAndImageTypes;
};

export type ComponentTypes = componentsMapTypes[keyof componentsMapTypes] & { _type: string };

export default function Components({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    const componentType = item._type as keyof componentsMapTypes;
    const componentsMapTypes: Record<string, React.ReactNode> = {
      HeroHeaderAndImage: <HeroHeaderAndImage {...(item as HeroHeaderAndImageTypes)} index={index} />,
    };
    const DynamicComponent = componentsMapTypes[componentType];
    if (!DynamicComponent) return null;
    return componentsMapTypes[componentType];
  });
}

export const Components_Query = /* groq */ `
  content[] {
    _type,
    ${HeroHeaderAndImage_Query}
  },
`;