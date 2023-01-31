interface InputProps {
  cols: string;
  placeholder: string;
  optional?: boolean;
}

export function Input({ cols, placeholder, optional = false }: InputProps) {
  return (
    <div className={`${cols} relative`}>
      <input
        type="text"
        id={placeholder}
        placeholder={placeholder}
        className={`w-full p-3 bg-base-200 border border-base-300 rounded text-base-600 placeholder:text-base-500 focus:border-yellow-700 focus:outline-none`}
      />

      {optional && (
        <label
          htmlFor={placeholder}
          className="absolute right-3 top-1/2 -translate-y-1/2 italic text-base-500 text-xs"
        >
          Opcional
        </label>
      )}
    </div>
  );
}
