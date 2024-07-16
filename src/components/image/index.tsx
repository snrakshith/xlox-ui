// A image

import * as React from "react";
import SampleImage from "../../assets/sample.png";

// Component prop types
import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({
    url = SampleImage,
    alt = "text",
    height,
    width,
    ...rest
}) => {
    return <img src={url} alt={alt} height={height} width={width} {...rest} />;
};

export default Image;

Image.displayName = "Image";
