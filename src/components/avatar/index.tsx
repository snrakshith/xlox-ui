// A simple identifer

import * as React from "react";
// import { clsx } from "clsx";
import SampleImage from "../../assets/sample.png";
// import SampleImage from "@assets/sample.png";

// Component styles
import "./styles.css";

// Component prop types
import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({
    url = SampleImage,
    alt,
    shape = "circle",
    variants = "small",
    ...restProps
}) => {
    const avatarShape = shape === "circle" ? "50%" : "25%";
    const avatarSize =
        variants === "small"
            ? {
                  width: "25px",
                  height: "25px",
              }
            : variants === "medium"
            ? {
                  width: "35px",
                  height: "35px",
              }
            : {
                  width: "50px",
                  height: "50px",
              };
    return (
        <img
            src={url}
            alt={alt}
            style={{
                // Size
                width: avatarSize?.width,
                height: avatarSize.height,
                // Shape
                borderRadius: avatarShape,
            }}
            {...restProps}
        />
    );
};

export default Avatar;

Avatar.displayName = "Avatar";
