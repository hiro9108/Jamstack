import { Input } from ".";
import { ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";

export default {
  title: "Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const HelloInput = () => {
  const { register } = useForm();
  return <Input register={register} name="example" />;
};
