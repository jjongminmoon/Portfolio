import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  image: StaticImageData;
  alt: string;
};

export default function SolveItem({ children, image, alt }: Props) {
  return (
    <div className="flex flex-col justify-center gap-5 bg-red-500 p-10 rounded-xl">
      {children}
      <Image src={image} alt={alt} priority />
    </div>
  );
}
