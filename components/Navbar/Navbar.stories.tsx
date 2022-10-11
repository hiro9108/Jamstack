import { Navbar } from ".";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Common/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
};

const navContents = Array(5)
  .fill(0)
  .map((_, id) => ({
    id,
    content: `Trips by ${id}`,
    href: "/",
  }));

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const CommonNavbar = () => <Navbar navContents={navContents} />;
