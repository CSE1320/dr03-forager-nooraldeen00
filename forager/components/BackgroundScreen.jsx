export default function BackgroundScreen() {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <img
        src="/camerav.png"
        alt="Camera Preview"
        className="w-full h-full object-cover opacity-60"
      />
    </div>
  );
}
