import type { Meta, StoryObj } from "@storybook/react";

import Image from "./index";

const meta: Meta<typeof Image> = {
    title: "Components/Image",
    component: Image,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

export const NetworkImage: Story = {};
