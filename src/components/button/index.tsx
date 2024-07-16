import * as React from "react";
import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
    return <button>{props.children}</button>;
}

Button.displayName = "Button";
