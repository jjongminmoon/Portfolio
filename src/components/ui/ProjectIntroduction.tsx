type Props = {
  children: React.ReactNode;
};

export default function ProjectIntroduction({ children }: Props) {
  return <div className="p-2">{children}</div>;
}
