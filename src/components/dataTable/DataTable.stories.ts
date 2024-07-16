import type { Meta, StoryObj } from "@storybook/react";

import DataTable from "./index";

const meta: Meta<typeof DataTable> = {
    title: "Components/DataTable",
    component: DataTable,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Table: Story = {};
