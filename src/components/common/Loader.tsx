import chillLogo from "../../assets/chill-99-logo.png";

export const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#261410] bg-opacity-80">
    <img
      src={chillLogo}
      alt="Loading..."
      className="w-[25rem] animate-pulse"
      style={{ animation: "pulse 1.2s infinite" }}
    />
    <style>{`
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-pulse {
        animation: pulse 1.2s infinite;
      }
    `}</style>
  </div>
);
