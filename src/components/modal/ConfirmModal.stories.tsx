import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from "./ConfirmModal";
import { useState } from "react";
import type { ConfirmModalProps } from "./ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
  title: "Components/Modal/ConfirmModal",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "double"],
      description: "モーダルのタイプ (1ボタン or 2ボタン)",
    },
    confirmText: {
      control: "text",
      description: "確認ボタンのテキスト",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

// モーダルの状態を管理するラッパーコンポーネント
const ModalWrapper = (args: ConfirmModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <ConfirmModal
        {...args}
        isOpen={isOpen}
        onConfirm={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

// 2ボタンのストーリー
export const DoubleButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    message: "本当に削除しますか？",
    type: "double",
    confirmText: "はい",
  },
};

// 1ボタンのストーリー
export const SingleButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    message: "処理が完了しました",
    type: "single",
    confirmText: "OK",
  },
};

// エラーメッセージのストーリー
export const ErrorMessage: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    message: "エラーが発生しました",
    type: "single",
    confirmText: "閉じる",
  },
};
