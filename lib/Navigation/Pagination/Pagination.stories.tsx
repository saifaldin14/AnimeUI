import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Navigation/Pagination",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-950 p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page: number) => console.log("Page:", page),
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) => console.log("Page:", page),
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page: number) => console.log("Page:", page),
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page: number) => console.log("Page:", page),
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 25,
    totalPages: 50,
    onPageChange: (page: number) => console.log("Page:", page),
    siblingCount: 2,
  },
};

export const CustomColors: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    onPageChange: (page: number) => console.log("Page:", page),
    fromColor: "#06b6d4",
    toColor: "#3b82f6",
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    onPageChange: (page: number) => console.log("Page:", page),
  },
};
