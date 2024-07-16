// A highlighted element

import * as React from "react";

// Component styles
import { TagContainer, TagText } from "./styles";

// Component prop types
import { TagProps } from "./types";

const Tag: React.FC<TagProps> = ({ color, children, ...restProps }) => {
    return (
        <TagContainer color={color} {...restProps}>
            <TagText>{children}</TagText>
        </TagContainer>
    );
};

export default Tag;

Tag.displayName = "Tag";
