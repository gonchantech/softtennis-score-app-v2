import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "boolean",
      description: "トグルボタンの状態",
    },
    onChange: {
      action: "changed",
      description: "トグルボタンの状態が変更された時のコールバック",
    },
    trueLabel: {
      control: "text",
      description: "trueの時のラベル",
    },
    falseLabel: {
      control: "text",
      description: "falseの時のラベル",
    },
    trueVariant: {
      control: "select",
      options: ["primary", "success", "danger"],
      description: "trueの時のボタンのバリアント",
    },
    falseVariant: {
      control: "select",
      options: ["primary", "success", "danger"],
      description: "falseの時のボタンのバリアント",
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: true,
    trueLabel: "オン",
    falseLabel: "オフ",
    trueVariant: "primary",
    falseVariant: "primary",
    onChange: () => {},
  },
};

export const Success: Story = {
  args: {
    value: true,
    trueLabel: "イン",
    falseLabel: "フォルト",
    trueVariant: "success",
    falseVariant: "danger",
    onChange: () => {},
  },
};

export const Danger: Story = {
  args: {
    value: false,
    trueLabel: "得点",
    falseLabel: "ミス",
    trueVariant: "success",
    falseVariant: "danger",
    onChange: () => {},
  },
};

export const CrossStraight: Story = {
  args: {
    value: true,
    trueLabel: "クロス",
    falseLabel: "ストレート",
    trueVariant: "primary",
    falseVariant: "primary",
    onChange: () => {},
  },
};

export const RallyLength: Story = {
  args: {
    value: true,
    trueLabel: "4本以内",
    falseLabel: "5本以上",
    trueVariant: "primary",
    falseVariant: "primary",
    onChange: () => {},
  },
};
