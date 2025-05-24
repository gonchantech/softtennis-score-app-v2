import type { Meta, StoryObj } from "@storybook/react";

import { NotificationProvider } from "@/context/notifications/NotificationProvider";
import { useNotification } from "@/context/notifications";
import { Notifications } from "./Notifications";

const meta = {
  title: "Components/Notifications",
  component: Notifications,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof Notifications>;

// 通知を表示するためのコンポーネント
const NotificationDemo = ({
  type,
  message,
  title,
}: {
  type: "success" | "error" | "warning" | "info";
  message: string;
  title: string;
}) => {
  const { showNotification } = useNotification();
  return (
    <div>
      <button
        onClick={() =>
          showNotification({
            type,
            message,
            title,
          })
        }
      >
        {title}通知を表示
      </button>
      <Notifications />
    </div>
  );
};

// 複数の通知を表示するコンポーネント
const MultipleNotificationsDemo = () => {
  const { showNotification } = useNotification();
  return (
    <div>
      <button
        onClick={() => {
          showNotification({
            type: "success",
            message: "操作が成功しました",
            title: "成功",
          });
          showNotification({
            type: "error",
            message: "エラーが発生しました",
            title: "エラー",
          });
          showNotification({
            type: "warning",
            message: "警告メッセージです",
            title: "警告",
          });
          showNotification({
            type: "info",
            message: "情報メッセージです",
            title: "情報",
          });
        }}
      >
        すべての通知を表示
      </button>
      <Notifications />
    </div>
  );
};

// 各通知タイプのストーリー
export const Success: Story = {
  args: {},
  render: () => (
    <NotificationDemo
      type="success"
      message="操作が成功しました"
      title="成功"
    />
  ),
};

export const Error: Story = {
  render: () => (
    <NotificationDemo
      type="error"
      message="エラーが発生しました"
      title="エラー"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <NotificationDemo
      type="warning"
      message="警告メッセージです"
      title="警告"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <NotificationDemo type="info" message="情報メッセージです" title="情報" />
  ),
};

// 複数の通知を同時に表示
export const Multiple: Story = {
  render: () => <MultipleNotificationsDemo />,
};
