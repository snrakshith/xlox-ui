import React from "react";

// export interface ImageProps extends React.SVGProps<SVGImageElement> {
export interface ImageProps extends React.HTMLProps<HTMLImageElement> {
    alt: string;
    url: string;
    width: string;
    height: string;
}
