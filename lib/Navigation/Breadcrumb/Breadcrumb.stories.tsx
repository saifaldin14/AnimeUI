import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: "Navigation/Breadcrumb",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-950 p-8 text-white">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Favorites", active: true },
    ],
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Anime", href: "#" },
      { label: "Trending", href: "#" },
      { label: "Spring 2024", active: true },
    ],
    separator: "✦",
  },
};

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Settings", href: "#" },
      { label: "Profile", active: true },
    ],
    separator: "›",
  },
};

export const CustomColors: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Details", active: true },
    ],
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Home", active: true }],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Anime", href: "#" },
      { label: "Action", href: "#" },
      { label: "Top Rated", href: "#" },
      { label: "Episode 12", active: true },
    ],
  },
};
