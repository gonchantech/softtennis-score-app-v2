import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "タグのサイズ",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "purple"],
      description: "タグの色",
    },
    children: {
      control: "text",
      description: "タグの内容",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// サイズバリエーション
export const Small: Story = {
  args: {
    size: "sm",
    children: "1stサーブ: イン",
    color: "primary",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "ラリー: 4本以内",
    color: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "スマッシュ",
    color: "purple",
  },
};

// 色バリエーション
export const Primary: Story = {
  args: {
    children: "Primary Tag",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Tag",
    color: "secondary",
  },
};

export const Purple: Story = {
  args: {
    children: "Purple Tag",
    color: "purple",
  },
};

// 実際の使用例
export const ServeTag: Story = {
  args: {
    size: "sm",
    color: "primary",
    children: "1stサーブ: イン",
  },
};

export const RallyTag: Story = {
  args: {
    size: "sm",
    color: "secondary",
    children: "ラリー: 4本以内",
  },
};
