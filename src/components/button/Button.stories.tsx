import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      description: "ボタンのスタイルバリアント",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
      description: "ボタンのカラー",
    },
    isLoading: {
      control: "boolean",
      description: "ローディング状態",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
    children: {
      control: "text",
      description: "ボタンのテキスト",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "secondary",
    size: "md",
  },
};

export const Gray: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "gray",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "danger",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "ボタン",
    variant: "outline",
    color: "primary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "ボタン",
    variant: "ghost",
    color: "primary",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "primary",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "primary",
    size: "md",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "ボタン",
    variant: "solid",
    color: "primary",
    size: "md",
    disabled: true,
  },
};
