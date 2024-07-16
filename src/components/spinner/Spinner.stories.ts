import type { Meta, StoryObj } from "@storybook/react";

import { mainColors } from "../../primitives";

import Spinner from "./index";

const meta: Meta<typeof Spinner> = {
    title: "Components/Spinner",
    component: Spinner,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Small: Story = {
    args: {
        color: mainColors.blue,
        thickness: "20px",
    },
};
export const Medium: Story = {};
export const Large: Story = {};
