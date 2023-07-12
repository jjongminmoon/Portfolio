type Props = {
  toggled: boolean;
  onToggle: (toggled: boolean) => void;
};

export default function ToggleButton({ toggled, onToggle }: Props) {
  return (
    <p
      className="mt-2 cursor-pointer p-3 bg-teal-400 text-center font-bold text-xl"
      onClick={() => onToggle(!toggled)}
    >
      {toggled ? "🔼 접기 🔼" : "🔽 자세히 보기 🔽"}{" "}
    </p>
  );
}
