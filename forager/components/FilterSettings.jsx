import PillList from './PillList';

export default function FilterSettings() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Filter</h2>
      <PillList title="Tags" />
      <PillList title="Regions" />
      <PillList title="Category" />
    </div>
  );
}
