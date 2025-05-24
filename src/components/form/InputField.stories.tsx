import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "入力フィールドのラベル",
    },
    helperText: {
      control: "text",
      description: "ヘルパーテキスト",
    },
    error: {
      control: "text",
      description: "エラーメッセージ",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "入力フィールドのサイズ",
    },
    required: {
      control: "boolean",
      description: "必須入力かどうか",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "入力フィールドのタイプ",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "ラベル",
    placeholder: "プレースホルダー",
    size: "md",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "ラベル",
    helperText: "ヘルパーテキストがここに表示されます",
    placeholder: "プレースホルダー",
    size: "md",
  },
};

export const WithError: Story = {
  args: {
    label: "ラベル",
    error: "エラーメッセージがここに表示されます",
    placeholder: "プレースホルダー",
    size: "md",
  },
};

export const Required: Story = {
  args: {
    label: "ラベル",
    required: true,
    placeholder: "プレースホルダー",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "ラベル",
    disabled: true,
    placeholder: "プレースホルダー",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    label: "ラベル",
    placeholder: "プレースホルダー",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "ラベル",
    placeholder: "プレースホルダー",
    size: "lg",
  },
};

export const Email: Story = {
  args: {
    label: "メールアドレス",
    type: "email",
    placeholder: "example@example.com",
    size: "md",
  },
};

export const Password: Story = {
  args: {
    label: "パスワード",
    type: "password",
    placeholder: "パスワードを入力",
    size: "md",
  },
};

export const Number: Story = {
  args: {
    label: "数値",
    type: "number",
    placeholder: "数値を入力",
    size: "md",
  },
};
