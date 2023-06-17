type Props = {
  children: React.ReactNode;
  text_color?: string;
};

export default function Title({ children, text_color }: Props) {
  return (
    <>
      <h1
        className={`text-center text-5xl font-bold mb-10 lg:text-4xl md:text-3xl sm:text-2xl ${text_color}`}
      >
        {children}
      </h1>
    </>
  );
}
