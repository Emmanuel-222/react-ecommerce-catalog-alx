import { Waveform, LineSpinner } from "ldrs/react";
import "ldrs/react/Waveform.css";
import "ldrs/react/LineSpinner.css";

export const ReloadAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Waveform size="150" stroke="3.5" speed="1.5" color="indigo" />
    </div>
  );
};

export const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-4 text-center">
      <LineSpinner size="40" stroke="3" speed="1" color="indigo" />
    </div>
  );
};
