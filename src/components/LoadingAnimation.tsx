import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Waveform size="150" stroke="3.5" speed="1.5" color="indigo" />
    </div>
  )
}

export default LoadingAnimation
