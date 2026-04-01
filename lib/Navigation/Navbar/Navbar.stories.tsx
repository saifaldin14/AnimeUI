import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navigation/Navbar",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-950 min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const defaultItems = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

export const Default: Story = {
  args: {
    brand: "AnimeUI",
    items: defaultItems,
  },
};

export const WithActions: Story = {
  args: {
    brand: "✨ AnimeUI",
    items: defaultItems,
    actions: (
      <button
        className="px-4 py-1.5 text-sm font-medium text-white rounded-lg"
        style={{
          background: "linear-gradient(135deg, #ec4899, #a855f7)",
        }}
      >
        Sign In
      </button>
    ),
  },
};

export const Fixed: Story = {
  args: {
    brand: "AnimeUI",
    items: defaultItems,
    fixed: true,
  },
};

export const CustomColors: Story = {
  args: {
    brand: "CyberUI",
    items: [
      { label: "Dashboard", href: "#", active: true },
      { label: "Projects", href: "#" },
      { label: "Settings", href: "#" },
    ],
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const MinimalBrand: Story = {
  args: {
    brand: "🌸",
    items: [
      { label: "Explore", href: "#", active: true },
      { label: "Trending", href: "#" },
      { label: "New", href: "#" },
    ],
  },
};
