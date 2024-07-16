// A wrapper element

import * as React from "react";
// import { clsx } from "clsx";

// Component styles
import "./styles.css";

// Component prop types
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({ children, as, ...rest }) => {
    const Component = as || "div";
    return (
        <Component {...rest} className="container_ele">
            {children}
        </Component>
    );
};

export default Container;

Container.displayName = "Container";
