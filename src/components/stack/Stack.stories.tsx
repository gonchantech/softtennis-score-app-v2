import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
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

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    gap: "md",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    gap: "md",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const SmallGap: Story = {
  args: {
    direction: "horizontal",
    gap: "sm",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    direction: "horizontal",
    gap: "lg",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    direction: "horizontal",
    gap: "md",
    className: "custom-stack",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};
