import React, { cloneElement, useRef, useState } from "react";
import {
  Placement,
  FloatingArrow,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  arrow,
  useTransitionStyles,
  FloatingPortal,
} from "@floating-ui/react";
import { TooltipProps } from "./type";
import { cn } from "../../src/lib/cn";
import { tooltipStyles, tooltipAnimation } from "./styles";
import { makeClassName } from "../../src/core/all";

/**
 * Tooltip displays informative text when users hover, focus, or click an element.
 * Here is the API documentation of the Tooltip component.
 * You can use the following props to create a demo of tooltip.
 */
export function Tooltip({
  children,
  content,
  gap = 8,
  animation = "zoomIn",
  //   placement = "top",
  size = "md",
  rounded = "md",
  shadow = "md",
  color = "primary",
  className,
  arrowClassName,
  showArrow = true,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  const { x, y, refs, strategy, context } = useFloating({
    // placement,
    open: open,
    onOpenChange: setOpen,
    middleware: [
      arrow({ element: arrowRef }),
      offset(gap),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: { open: 150, close: 150 },
    ...tooltipAnimation[animation],
  });

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props })
      )}

      {(isMounted || open) && (
        <FloatingPortal>
          <div
            role="tooltip"
            ref={refs.setFloating}
            className={cn(
              makeClassName(`tooltip-content`),
              tooltipStyles.base,
              tooltipStyles.size[size],
              tooltipStyles.rounded[rounded],
              tooltipStyles.variant.solid.base,
              tooltipStyles.variant.solid.color[color],
              tooltipStyles.shadow[shadow],
              className
            )}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            {...getFloatingProps()}
          >
            {content}

            {showArrow && (
              <>
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  data-testid="tooltip-arrow"
                  className={cn(
                    makeClassName(`tooltip-arrow`),
                    tooltipStyles.arrow.color[color],
                    arrowClassName
                  )}
                  style={{ strokeDasharray: "0,14, 5" }}
                />
              </>
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

Tooltip.displayName = "Tooltip";
