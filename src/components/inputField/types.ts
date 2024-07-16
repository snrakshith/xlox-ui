/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface InputConfig {
    placeholderColor?: string;
}

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    value?: any;
    isDisabled?: any;
}

export enum FontOverflowType {
    ELLIPSIS = "ellipsis",
    CLIP = "clip",
}
