import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  image?: StaticImageData;
  alt?: string;
};

export default function SolveItem({ children, image, alt }: Props) {
  return (
    <div className="flex flex-col justify-center gap-5 bg-gray-300 p-10 rounded-xl">
      {children}
      {image && alt && <Image src={image} alt={alt} />}
    </div>
  );
}
