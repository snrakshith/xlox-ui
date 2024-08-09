export const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  pill: "rounded-full",
} as const;

export const fontWeightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

export const labelStyles = {
  weight: fontWeightStyles,
  size: {
    sm: "text-xs mb-1",
    md: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  },
} as const;

export function makeClassName(kind: string) {
  return `rizzui-${kind}`;
}
