import Image, { StaticImageData } from "next/image";

type Props = {
  className?: string;
  image: StaticImageData;
  altMessage: string;
  width: number;
  height: number;
};

export default function CircleImage({ className, image, altMessage, width, height }: Props) {
  return <Image className={className} src={image} alt={altMessage} width={width} height={height} />;
}
