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
      <Image
        className="w-[500px] h-[600px] rounded-xl sm:w-4/5"
        src={expandMe}
        alt="Profile Image"
        width={2000}
        height={2000}
      />
    </section>
  );
}
