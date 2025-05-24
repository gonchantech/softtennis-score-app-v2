import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../button/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No items found",
  },
};

export const WithDescription: Story = {
  args: {
    title: "No matches yet",
    description: "Start recording your matches to see them here",
  },
};

export const WithIcon: Story = {
  args: {
    title: "No matches yet",
    description: "Start recording your matches to see them here",
    icon: "🏆",
  },
};

export const WithAction: Story = {
  args: {
    title: "No matches yet",
    description: "Start recording your matches to see them here",
    icon: "🏆",
    action: <Button>Create New Match</Button>,
  },
};

export const Complete: Story = {
  args: {
    title: "No matches yet",
    description: "Start recording your matches to see them here",
    icon: "🏆",
    action: <Button>Create New Match</Button>,
  },
};
