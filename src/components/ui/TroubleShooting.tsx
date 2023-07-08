type Props = {
  children: React.ReactNode;
};

export default function TroubleShooting({ children }: Props) {
  return (
    <article className="w-full bg-teal-400 p-10">
      <div className="flex flex-col gap-5 bg-white p-10 rounded-xl">{children}</div>
    </article>
  );
}
