import { CSSProperties } from "react";
import { CircleLoader } from "react-spinners";

interface LoadingProps {
  color?: string;
  text?: string;
  hideText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ color, text, hideText }) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <CircleLoader
        color={color || "#33C896"}
        loading
        cssOverride={override}
        size={32}
        aria-label="Loading Spinner"
        data-testid="loader"
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
