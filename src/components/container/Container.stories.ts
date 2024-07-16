import type { Meta, StoryObj } from "@storybook/react";

import Container from "./index";

const meta: Meta<typeof Container> = {
    title: "Components/Container",
    component: Container,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Div: Story = {};
export const Span: Story = {};
