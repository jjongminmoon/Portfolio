type Props = {
  children: React.ReactNode;
};

export default function ProjectIntroduction({ children }: Props) {
  return <div className="mb-2 p-2">{children}</div>;
}
