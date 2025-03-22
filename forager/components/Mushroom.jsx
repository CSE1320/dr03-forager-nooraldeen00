export default function Mushroom({ name, src }) {
    return (
      <div className="flex flex-col items-center">
        <img src={src} alt={name} className="w-24 h-24 object-cover rounded-lg" />
        <p className="text-sm mt-2 font-medium">{name}</p>
      </div>
    );
  }
  