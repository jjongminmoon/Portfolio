import Image from "next/image";
import expandMe from "../../public/images/expandMe.webp";

type Props = {
  onClick: () => void;
};

export default function ImageExpanding({ onClick }: Props) {
  return (
    <section
      className="fixed top-0 left-0 bg-neutral-900/70 w-full h-full flex justify-center items-center pt-16 z-9999 cursor-pointer"
      onClick={onClick}
    >
      <Image className="w-2/5 h-4/5 rounded-full" src={expandMe} alt="Profile Image" />
    </section>
  );
}
