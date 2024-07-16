import * as React from "react";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({ children, as, ...rest }) => {
    const Tag = as || "h1";

    return <Tag {...rest}>{children}</Tag>;
};

export default Text;

Text.displayName = "Text";

// {/* <Text as={"h2"}>Hi</Text>; */}
