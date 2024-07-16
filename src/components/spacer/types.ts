// import React from "react";

type SpacerTag = "hr";

export interface SpacerProps extends React.HTMLProps<HTMLHRElement> {
    as?: SpacerTag;
    color?: string;
    width?: string;
    height?: string;
    oreintation?: "90" | "180";
}
