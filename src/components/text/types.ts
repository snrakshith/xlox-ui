import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps extends React.HTMLProps<HTMLHeadingElement> {
    as: HeadingTag;
}
