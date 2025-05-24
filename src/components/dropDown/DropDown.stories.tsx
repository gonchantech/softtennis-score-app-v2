import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./DropDown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "選択された値",
    },
    onChange: {
      action: "changed",
      description: "値が変更された時のコールバック",
    },
    options: {
      control: "object",
      description: "ドロップダウンの選択肢",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1",
    options: [
      { value: "1", label: "オプション1" },
      { value: "2", label: "オプション2" },
      { value: "3", label: "オプション3" },
    ],
    onChange: () => {},
  },
};

export const PlayerSelect: Story = {
  args: {
    value: "A1",
    options: [
      { value: "A1", label: "プレイヤーA1" },
      { value: "A2", label: "プレイヤーA2" },
      { value: "B1", label: "プレイヤーB1" },
      { value: "B2", label: "プレイヤーB2" },
    ],
    onChange: () => {},
  },
};

export const ShotType: Story = {
  args: {
    value: "forehandstroke",
    options: [
      { value: "forehandstroke", label: "フォアハンドストローク" },
      { value: "backhandstroke", label: "バックハンドストローク" },
      { value: "serve", label: "サーブ" },
      { value: "volley", label: "ボレー" },
    ],
    onChange: () => {},
  },
};
