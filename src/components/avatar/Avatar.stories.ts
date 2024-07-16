import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {};
export const Large: Story = {};
