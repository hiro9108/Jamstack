import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

type TextareaProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

/**
 * Additional Docs
 */
export const Textarea: FC<TextareaProps> = ({
  register,
  name,
  required,
  placeholder,
  defaultValue,
}) => (
  <textarea
    placeholder={placeholder}
    defaultValue={defaultValue}
    className="border shadow-md resize-none h-60 w-3/4 p-4"
    {...register(name, { required })}
  />
);
