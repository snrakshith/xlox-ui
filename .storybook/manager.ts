import { addons } from "@storybook/manager-api";
import { themes, create, ThemeVars } from "@storybook/theming";
import { DocsPage } from "@storybook/addon-docs";

const theme: ThemeVars = create({
    base: "dark",

    // appBg: "#161616",
    // appContentBg: "#0d0d0d", //TBD
    // appBorderRadius: 0,
    // textColor: "rgba(255,255,255,0`.9)", //TBD

    // colorPrimary: "#fff",
    // colorSecondary: "#fff", // TBD icon and highlight
    // textInverseColor: "#1b1b1b",

    // barBg: "#0d0d0d",
    // barTextColor: "#d2d2d2",
    // barSelectedColor: "#fbfbfb",

    // inputTextColor: "#fff",
    // inputBg: "#161616",
    // inputBorderRadius: 0,

    brandTitle: "xloxui",
    brandUrl: "https://xlox.in",
    brandImage:
        "https://dhcoreclientimages.s3.ap-south-1.amazonaws.com/acc-be/organization/logo1661582768033ZkFc3.png",
    brandTarget: "_self",
});

addons.setConfig({
    // Todo
    // viewMode: "docs",
    // page: DocsPage,
    // previewTabs: {
    //         "storybook/docs/panel": {
    //                 index: -1,
    //         },
    //         canvas: { title: "Playground" },
    // },
    theme,
    sidebar: {
        showRoots: false,
        collapsedRoots: ["other"],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: true },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});

// addons.setConfig({
//         isFullscreen: false,
//         showNav: true,
//         showPanel: true,
//         panelPosition: "bottom",
//         enableShortcuts: true,
//         showToolbar: true,
//         theme: themes.dark,
//         selectedPanel: undefined,
//         initialActive: "sidebar",
// });
