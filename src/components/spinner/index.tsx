import * as React from "react";

// Component styles
import { Container } from "./styles";

// Component prop types
import { SpinnerProps } from "./types";

const Spinner: React.FC<SpinnerProps> = (restProps) => {
    return <Container {...restProps} />;
};

export default Spinner;

Spinner.displayName = "Spinner";
