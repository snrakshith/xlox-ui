export interface SpinnerProps {
    /**
     * The color of the spinner
     */
    color?: string;
    /**
     * The thickness of the spinner
     * @default "2px"
     * @example
     * ```jsx
     * <Spinner thickness="4px"/>
     * ```
     */
    thickness?: string;
    /**
     * The speed of the spinner.
     * @default "0.45s"
     * @example
     * ```jsx
     * <Spinner speed="0.2s"/>
     * ```
     */
    speed?: string;
}
