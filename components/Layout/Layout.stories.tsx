import { Layout } from ".";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Common/Card",
  component: Layout,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const CommonLayout = () => (
  <Layout title="title" h1="h1">
    Children
  </Layout>
);
