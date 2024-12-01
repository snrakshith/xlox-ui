import React, { RefObject } from "react";
import { tooltipAnimation, tooltipStyles } from "./styles";

export type TooltipProps = {
  /** Pass children which will have tooltip */
  children: JSX.Element & { ref?: RefObject<any> };
  /** Content for tooltip */
  // content: ({ open, setOpen }: Content) => React.ReactNode;
  content: React.ReactNode;
  /** Change Tooltip color */
  color?: keyof typeof tooltipStyles.variant.solid.color;
  /** Supported Tooltip sizes are: */
  size?: keyof typeof tooltipStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof tooltipStyles.rounded;
  /** Supported tooltip shadows are: */
  shadow?: keyof typeof tooltipStyles.shadow;
  /** Supported Tooltip Placements are: */
  //   placement?: Placement;
  /** Set custom offset default is 8 */
  gap?: number;
  /** Supported Animations are: */
  animation?: keyof typeof tooltipAnimation;
  /** Add custom classes for Tooltip container or content */
  className?: string;
  /** Add custom classes for Tooltip arrow */
  arrowClassName?: string;
  /** Whether tooltip arrow should be shown or hidden */
  showArrow?: boolean;
  /** Whether the tooltip is used as a popover component or not */
  // isPopover?: boolean;
};
