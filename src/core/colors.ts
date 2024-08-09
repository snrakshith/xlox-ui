export const mainColors = Object.freeze({
    black: "#0d0d0d",
    white: "#ffffff",
    red: "#EE4D37",
    yellow: "#F08D32",
    blue: "#144CC7",
    green: "#06C270",
});

export const colorPalette = Object.freeze({
    white: {
        50: "#E0E0E0",
        70: "#EFEFEF",
        90: "#FBFBFB",
    },
});

const getDarkThemedColors = () => ({
    button: {
        primary: {
            backgroundColor: mainColors.black,
        },
    },
});
const getLightThemedColors = () => ({});

const getColorGuide = () => {
    lightComponents: getLightThemedColors();
    darkComponents: getDarkThemedColors();
};

const colorGuide = getColorGuide();

export interface UserTheme {
    colorGuide?: typeof colorGuide;
    mainColors: typeof mainColors;
    colorPalette: typeof colorPalette;
}
