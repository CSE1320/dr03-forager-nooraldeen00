export default function MushroomCard() {
    return (
      <div className="bg-white rounded-xl shadow-md p-4">
        <img src="/death-cap.jpg" alt="Death Cap" className="w-full rounded-md" />
        <h2 className="text-lg font-bold mt-2">Death Cap</h2>
        <ul className="text-sm list-disc ml-5 my-2">
          <li>Cap Surface: Slimy</li>
          <li>Gill Color: White</li>
          <li>Stipe Type: Ring</li>
          <li>Habitat: Temperate regions</li>
        </ul>
        <p className="text-xs text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    );
  }
  