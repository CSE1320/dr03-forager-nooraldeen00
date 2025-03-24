import Mushroom from "./Mushroom";
import { mushrooms } from "../data/mushrooms";

export default function SimilarMatchList() {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x pb-4">
      {mushrooms.map((m, i) => (
        <div
          key={i}
          className="snap-start w-[120px] flex-shrink-0 text-center"
        >
          <Mushroom name={m.name} src={m.image} />
          <p className="text-xs mt-1">{m.name}</p>
        </div>
      ))}
    </div>
  );
}
