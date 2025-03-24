import Pill from "./Pill";

export default function PillList({ title, items = [], color = "gray" }) {
  return (
    <div className="mb-3">
      <h4 className="text-sm font-semibold mb-1">{title}</h4>
      <div className="flex gap-2 flex-wrap">
        {items.map((item, i) => (
          <Pill key={i} label={item} color={color} />
        ))}
      </div>
    </div>
  );
}
