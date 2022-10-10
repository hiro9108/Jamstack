import { Button } from ".";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloButton = () => (
  <Button type="button" onClick={() => console.log("Clicked_001")}>
    Hello World!
  </Button>
);
