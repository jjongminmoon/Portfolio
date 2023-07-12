type Props = {
  children: React.ReactNode;
};

export default function Flex({ children }: Props) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
