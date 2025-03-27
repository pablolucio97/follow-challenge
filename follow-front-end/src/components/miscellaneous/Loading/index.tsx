import { CSSProperties } from "react";
import { ScaleLoader } from "react-spinners";

interface LoadingProps {
  color?: string;
  text?: string;
  hideText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ color, text, hideText }) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0.5 auto",
  };
  return (
    <div className="w-full flex flex-col items-center justify-center"  data-testid="loading-indicator">
      <ScaleLoader
        color={color || "#33C896"}
        loading
        cssOverride={override}
        height={16}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-2"
      />
      {!hideText && (
        <span className="text-gray-800 text-[11px] lg:text-sm font-secondary mt-3">
          {text ? text : "Carregando dados..."}
        </span>
      )}
    </div>
  );
};

export default Loading;
