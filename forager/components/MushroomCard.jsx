export default function MushroomCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <img
        src="/DeathCap.jpg"
        alt="Death Cap"
        className="w-full rounded-xl mb-3 shadow-md"
      />
      <h2 className="text-xl font-bold">Death Cap</h2>
      <ul className="text-sm list-disc ml-5 my-3">
        <li>Cap Surface: Slimy</li>
        <li>Gill Color: White</li>
        <li>Stipe Type: Ring</li>
        <li>Habitat: Temperate regions</li>
      </ul>
      <p className="text-xs text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
    </div>
  );
}
