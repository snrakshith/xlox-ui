import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./index";

const meta: Meta<typeof Tag> = {
    title: "Components/Tag",
    component: Tag,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Success: Story = {};
export const Error: Story = {};
export const Primary: Story = {};
