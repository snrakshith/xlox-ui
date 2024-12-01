import { roundedStyles } from "../../src/core/all";

export const tooltipStyles = {
  base: "text-center z-[9999] min-w-max",
  shadow: {
    sm: "drop-shadow-md",
    md: "drop-shadow-lg",
    lg: "drop-shadow-xl",
    xl: "drop-shadow-2xl",
  },
  size: {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-3.5 py-2 text-base",
    xl: "px-4 py-2.5 text-base",
  },
  rounded: roundedStyles,
  arrow: {
    color: {
      primary: "fill-primary",
      invert:
        "fill-background dark:fill-muted/80 [&>path]:stroke-muted dark:backdrop-blur-3xl",
      secondary: "fill-secondary",
      danger: "fill-red",
      info: "fill-blue",
      success: "fill-green",
      warning: "fill-orange",
    },
  },
  variant: {
    solid: {
      base: "",
      color: {
        primary: "text-primary-foreground bg-primary",
        invert:
          "bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border border-muted",
        secondary: "text-secondary-foreground bg-secondary",
        danger: "text-white bg-red",
        info: "text-white bg-blue",
        success: "text-white bg-green",
        warning: "text-white bg-orange",
      },
    },
  },
};

export const tooltipAnimation = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    close: {
      opacity: 0,
    },
  },
  zoomIn: {
    initial: {
      opacity: 0,
      transform: "scale(0.96)",
    },
    close: {
      opacity: 0,
      transform: "scale(0.96)",
    },
  },
  slideIn: {
    initial: {
      opacity: 0,
      transform: "translateY(4px)",
    },
    close: {
      opacity: 0,
      transform: "translateY(4px)",
    },
  },
};
