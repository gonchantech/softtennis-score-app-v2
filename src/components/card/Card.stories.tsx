import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card Content",
  },
};

export const Clickable: Story = {
  args: {
    children: "Clickable Card",
    onClick: () => console.log("Card clicked"),
  },
};

export const WithCustomClassName: Story = {
  args: {
    children: "Custom Styled Card",
    className: "custom-class",
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Some description text</p>
        <button>Action Button</button>
      </div>
    ),
  },
};
