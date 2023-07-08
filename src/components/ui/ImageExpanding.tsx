import Image from "next/image";
import expandMe from "../../../public/images/expandMe.webp";
import ExitIcon from "../icons/ExitIcon";

type Props = {
  onClick: () => void;
};

export default function ImageExpanding({ onClick }: Props) {
  return (
    <section className="fixed top-0 left-0 bg-neutral-900/70 w-full h-full flex flex-col items-center gap-5 pt-16 z-9999 cursor-pointer">
      <button onClick={onClick}>
        <ExitIcon />
      </button>
      <Image
        className="w-[500px] h-[550px] rounded-xl"
        src={expandMe}
        alt="Profile Image"
        width={2000}
        height={2000}
      />
    </section>
  );
}
