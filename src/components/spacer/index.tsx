/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { clsx } from "clsx";
import "./styles.css";

import { SpacerProps } from "./types";

const Spacer: React.FC<SpacerProps> = ({
    as = "hr",
    width = "350px",
    height = "2px",
    color = "black",
    oreintation = "180",
    ...rest
}) => {
    const Component = as || "hr";
    const hrClass = oreintation === "90" ? "hr-90deg" : "hr-180deg";

    // Use default values if the user didn't provide any
    const defaultWidth = "350px";
    const defaultHeight = "2px";
    const defaultColor = "black";

    const SpacerStyles = clsx({
        backgroundColor: color || defaultColor,
        width: width || defaultWidth,
        height: height || defaultHeight,
    });

    // console.log("styles=>>", SpacerStyles);
    // return <Component {...rest} className={SpacerStyles} />;
    return (
        <Component
            {...rest}
            className={hrClass}
            style={{ backgroundColor: color, width, height }}
        />
    );
};

export default Spacer;

Spacer.displayName = "Spacer";

/**
 *  Usage
 *  @example <Spacer as="hr" />
 */
