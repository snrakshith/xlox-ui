import React from "react";

type ContainerTags = "div" | "span";

// export interface ContainerProps extends React.HTMLProps<HTMLDivElement>, React.HTMLProps<HTMLSpanElement> {
export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    as: ContainerTags;
}
