import { Loading } from ".";

export default {
  title: "Common/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
};

// const Template: ComponentStory<typeof Loading> = (args) => (
//   <Loading {...args} />
// );

export const HelloLoading = () => <Loading />;
