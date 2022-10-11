import { ComponentStory } from "@storybook/react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { TextLink } from ".";

export default {
  title: "Common/TextLink",
  component: TextLink,
  parameters: {
    layout: "centered",
  },
};

const Template: ComponentStory<typeof TextLink> = (args) => (
  <TextLink {...args} />
);

export const NavTextLink = () => (
  <TextLink
    href="/"
    addRightIcon={faAngleRight}
    iconStyle="ml-2"
    iconColor="red"
  >
    Hello Link!
  </TextLink>
);
