import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "200px",
      height: "200px",
      backgroundColor: "var(--color-primary)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
    }}
  >
    {children}
  </div>
);

export const CenterFull: Story = {
  args: {
    variant: "center",
    height: "full",
    children: <Box>Center Full Height</Box>,
  },
};

export const StartAuto: Story = {
  args: {
    variant: "start",
    height: "auto",
    children: <Box>Start Auto Height</Box>,
  },
};

export const EndHalf: Story = {
  args: {
    variant: "end",
    height: "half",
    children: <Box>End Half Height</Box>,
  },
};

export const WithCustomClass: Story = {
  args: {
    variant: "center",
    height: "full",
    className: "custom-container",
    children: <Box>With Custom Class</Box>,
  },
};

// 複数の要素を含む例
export const MultipleItems: Story = {
  args: {
    variant: "center",
    height: "full",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};
