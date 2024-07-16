// A native input field for data capturing

import * as React from "react";

// Component styles
import { Container, Input, Label } from "./styles";

// Component prop types
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = (props) => {
    const { placeholder, label, value, isDisabled, ...propsToFwd } = props;
    return (
        <Container>
            {label ? <Label /> : ""}
            <Input
                value={value}
                disabled={isDisabled}
                placeholder={placeholder}
                {...propsToFwd}
            />
        </Container>
    );
};

export default InputField;

InputField.displayName = "InputField";
