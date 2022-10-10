import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

/**
 * Additional Docs
 */
export const Input: FC<InputProps> = ({
  register,
  name,
  required,
  placeholder,
  defaultValue,
}) => (
  <input
    type="text"
    className="border shadow-md h-12 w-3/4 p-4"
    placeholder={placeholder}
    defaultValue={defaultValue}
    {...register(name, { required })}
  />
);
