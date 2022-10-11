import { Card } from ".";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BlogCard = () => (
  <Card
    title="title"
    content="content"
    onClick={() => console.log("Clicked")}
  />
);
