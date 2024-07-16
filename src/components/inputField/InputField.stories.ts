import type { Meta, StoryObj } from "@storybook/react";

import InputField from "./index";

const meta: Meta<typeof InputField> = {
    title: "Components/InputField",
    component: InputField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const No: Story = {};
