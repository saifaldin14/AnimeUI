import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "DataDisplay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: { control: "select", options: ["top", "bottom", "left", "right"] },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "80px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Hello from AnimeUI! ✨",
    children: <button style={{ color: "white", padding: "8px 16px", borderRadius: "8px", background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Tooltip below",
    position: "bottom",
    children: <button style={{ color: "white", padding: "8px 16px", borderRadius: "8px", background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: "Left tooltip",
    position: "left",
    children: <button style={{ color: "white", padding: "8px 16px", borderRadius: "8px", background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: "Right tooltip",
    position: "right",
    children: <button style={{ color: "white", padding: "8px 16px", borderRadius: "8px", background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>Right</button>,
  },
};

export const CustomColors: Story = {
  args: {
    content: "Cyan themed ✨",
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
    children: <button style={{ color: "white", padding: "8px 16px", borderRadius: "8px", background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}>Custom</button>,
  },
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <Tooltip content="Top" position="top">
        <span style={{ color: "white", cursor: "pointer" }}>⬆ Top</span>
      </Tooltip>
      <Tooltip content="Bottom" position="bottom">
        <span style={{ color: "white", cursor: "pointer" }}>⬇ Bottom</span>
      </Tooltip>
      <Tooltip content="Left" position="left">
        <span style={{ color: "white", cursor: "pointer" }}>⬅ Left</span>
      </Tooltip>
      <Tooltip content="Right" position="right">
        <span style={{ color: "white", cursor: "pointer" }}>➡ Right</span>
      </Tooltip>
    </div>
  ),
};
