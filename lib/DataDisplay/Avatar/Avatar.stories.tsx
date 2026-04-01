import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "DataDisplay/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "select", options: ["circle", "square"] },
    status: { control: "select", options: [undefined, "online", "offline", "busy"] },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "Sakura Haruno",
    alt: "Sakura Haruno",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=5",
    alt: "User avatar",
    name: "Sakura",
  },
};

export const WithStatus: Story = {
  args: {
    name: "Naruto Uzumaki",
    status: "online",
  },
};

export const SquareShape: Story = {
  args: {
    name: "Hinata",
    shape: "square",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar size="xs" name="XS" />
      <Avatar size="sm" name="SM" />
      <Avatar size="md" name="MD" />
      <Avatar size="lg" name="LG" />
      <Avatar size="xl" name="XL" />
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar name="Online" status="online" />
      <Avatar name="Offline" status="offline" />
      <Avatar name="Busy" status="busy" />
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    name: "Custom",
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const FallbackInitials: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar name="Sakura Haruno" />
      <Avatar name="Naruto" />
      <Avatar />
    </div>
  ),
};
