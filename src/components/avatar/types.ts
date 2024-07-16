export type AvatarShapeOptions = "circle" | "rounded";
export type AvatarSizeOptions = "small" | "medium" | "large";

export interface AvatarProps extends React.HTMLProps<HTMLImageElement> {
    url: string;
    alt: string;
    shape?: AvatarShapeOptions;
    variants?: AvatarSizeOptions;
}
