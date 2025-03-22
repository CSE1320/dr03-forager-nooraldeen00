export default function ComparisonTable() {
    return (
      <table className="table-auto border w-full text-sm">
        <thead>
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">Your Photo</th>
            <th className="border p-2">Death Cap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Cap Shape</td><td className="border p-2">Flat</td><td className="border p-2">Dome</td></tr>
          <tr><td className="border p-2">Gill Type</td><td className="border p-2">Free</td><td className="border p-2">Adnate</td></tr>
          <tr><td className="border p-2">Stipe Ring</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td></tr>
        </tbody>
      </table>
    );
  }
  