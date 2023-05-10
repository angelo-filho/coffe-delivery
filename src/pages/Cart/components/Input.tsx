import { UseFormRegister, useFormContext } from "react-hook-form";
import { AddressFormType } from "..";

interface InputProps {
  cols: string;
  placeholder: string;
  optional?: boolean;
  name: keyof AddressFormType;
}

export function Input({
  cols,
  placeholder,
  optional = false,
  name,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormType>();

  return (
    <div className={`${cols} relative`}>
      <input
        id={placeholder}
        placeholder={placeholder}
        className={`w-full p-3 bg-base-200 border border-base-300 rounded text-base-600 placeholder:text-base-500 focus:border-yellow-700 focus:outline-none`}
        {...register(name)}
      />

      {optional && (
        <label
          htmlFor={placeholder}
          className="absolute right-3 top-1/2 -translate-y-1/2 italic text-base-500 text-xs"
        >
          Opcional
        </label>
      )}
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
}
