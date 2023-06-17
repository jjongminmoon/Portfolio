type Props = {
  children: React.ReactNode;
};

export default function SubTitle({ children }: Props) {
  return <h3 className="text-xl font-bold">📌 {children}</h3>;
}
