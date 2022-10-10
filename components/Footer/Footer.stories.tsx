import { Footer } from ".";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

export default {
  title: "Common/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
};

// const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const HelloButton = () => <Footer />;
