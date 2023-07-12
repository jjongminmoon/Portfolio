import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function TroubleShootingItem({ children, href }: Props) {
  return (
    <div className="flex gap-2 items-baseline p-2 mb-2">
      <p>🔥 {children} :</p>
      <Link href={href} className="text-xl font-bold text-blue-400 cursor-pointer">
        🔎 자세히보기
      </Link>
    </div>
  );
}
