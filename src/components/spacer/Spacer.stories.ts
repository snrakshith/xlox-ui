import type { Meta, StoryObj } from "@storybook/react";

import Spacer from "./index";

const meta: Meta<typeof Spacer> = {
    title: "Components/Spacer",
    component: Spacer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        as: {
            type: "symbol",
            description: "A component used for drawing line",
        },
        width: { type: "string" },
        oreintation: { description: "A prop usefull to rotate the angle" },
    },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Hr: Story = {
    args: {
        as: "hr",
        // width: "350px",
        oreintation: "180",
    },
};
export const Vr: Story = {
    args: {
        as: "hr",
        width: "50px",
        oreintation: "90",
    },
};
