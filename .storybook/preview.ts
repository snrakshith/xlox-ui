import type { Preview } from "@storybook/react";
import { DocsPage } from "@storybook/addon-docs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// Custom Viewport for better looking
const CUSTOM_VIEWPORTS = {
    iphoneX: {
        name: "Laptop",
        styles: {
            width: "1440px",
            height: "1440px",
        },
    },
    ...INITIAL_VIEWPORTS,
};

const preview: Preview = {
    globalTypes: {
        theme: {
            description: "Global theme for components",
            defaultValue: "light",
            // toolbar: {
            //         // The label to show for this toolbar item
            //         title: "Theme",
            //         icon: "circlehollow",
            //         // Array of plain string values or MenuItem shape (see below)
            //         items: ["light", "dark"],
            //         // Change title based on selected value
            //         dynamicTitle: true,
            // },
        },
    },
    parameters: {
        layout: "fullscreen",
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: CUSTOM_VIEWPORTS,
            defaultViewport: "iphoneX",
        },
        // viewMode: "docs",
        // page: DocsPage,
        // previewTabs: {
        //         "storybook/docs/panel": {
        //                 index: -1,
        //         },
        //         canvas: { title: "Playground" },
        // },
    },
};

export default preview;
