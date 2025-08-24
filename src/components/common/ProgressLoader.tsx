import chillLogo from "../../assets/chill-99-logo.png";

interface ProgressLoaderProps {
  progress?: number;
  loadedCount?: number;
  totalCount?: number;
  showProgress?: boolean;
}

export const ProgressLoader = ({ progress = 0, showProgress = true }: ProgressLoaderProps) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#261410] bg-opacity-90">
    <img
      src={chillLogo}
      alt="Loading..."
      className="w-[20rem] md:w-[25rem] animate-pulse mb-8"
      style={{ animation: "pulse 1.2s infinite" }}
    />

    {showProgress && (
      <div className="w-64 md:w-80">
        {/* Progress Bar */}
        <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
          <div
            className="bg-amber-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )}

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

// Keep the original Loader for backward compatibility
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
