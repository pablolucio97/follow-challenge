import { InputHTMLAttributes, forwardRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ inputLabel, ...rest }, ref) => {
    return (
      <div className="mb-2 w-full">
        <span className="text-gray-800 text-sm">
          {inputLabel}
        </span>
        <input
          className="w-full h-[52px] p-4 border-1 rounded-lg text-gray-700  border-gray-200 focus:border-secondary focus:border-2 focus:outline-none focus:text-gray-500 bg-white placeholder-custom text-sm md:text-md"
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
