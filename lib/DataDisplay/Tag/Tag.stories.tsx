import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "DataDisplay/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Anime",
  },
};

export const Removable: Story = {
  args: {
    children: "Removable",
    onRemove: () => alert("Removed!"),
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Tag",
    size: "lg",
  },
};

export const CustomColors: Story = {
  args: {
    children: "Custom",
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const TagGroup: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["React", "TypeScript", "Anime", "Kawaii"]);
    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Tag key={tag} onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};
