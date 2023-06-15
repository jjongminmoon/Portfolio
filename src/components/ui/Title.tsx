type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return (
    <>
      <h1 className="text-center text-5xl font-bold mb-10 lg:text-4xl md:text-3xl sm:text-2xl">
        {children}
      </h1>
    </>
  );
}
