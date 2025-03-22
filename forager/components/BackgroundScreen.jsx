export default function BackgroundScreen() {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <img src="/camera-overlay.png" alt="Camera Overlay" className="absolute bottom-10" />
      </div>
    );
  }
  