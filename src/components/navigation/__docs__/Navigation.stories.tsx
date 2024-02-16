import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Navigation",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NoColors: Story = {
  args: {
    logo: `http://placekitten.com/100/50`,
  },
};
export const Colors: Story = {
  args: {
    logo: `http://placekitten.com/200/100`,
    backgroundColor: "#333",
    textColor: "#eee",
  },
};
