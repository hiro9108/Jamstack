import { Button } from ".";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // decorators: [
  //   (Story: Story) => (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;
