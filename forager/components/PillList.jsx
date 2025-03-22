import Pill from './Pill';

export default function PillList({ title }) {
  const pills = ['Red', 'White', 'Spotted'];

  return (
    <div className="mb-3">
      <h4 className="text-sm font-semibold mb-1">{title}</h4>
      <div className="flex gap-2 flex-wrap">
        {pills.map((p, i) => (
          <Pill key={i} label={p} />
        ))}
      </div>
    </div>
  );
}
