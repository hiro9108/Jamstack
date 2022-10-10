import { Textarea } from ".";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { useForm } from "react-hook-form";

export default {
  title: "Common/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const HelloTextArea = () => {
  const { register } = useForm();
  return <Textarea register={register} name="example-textarea" />;
};
