import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "リンクのURL",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
      description: "リンクのスタイルバリアント",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "リンクのサイズ",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
    leftIcon: {
      control: "boolean",
      description: "左側にアイコンを表示",
    },
    rightIcon: {
      control: "boolean",
      description: "右側にアイコンを表示",
    },
    children: {
      control: "text",
      description: "リンクのテキスト",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "secondary",
    size: "md",
  },
};

export const Success: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "success",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "danger",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "md",
    leftIcon: true,
  },
};

export const WithRightIcon: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "md",
    rightIcon: true,
  },
};

export const WithBothIcons: Story = {
  args: {
    href: "#",
    children: "リンク",
    variant: "primary",
    size: "md",
    leftIcon: true,
    rightIcon: true,
  },
};
