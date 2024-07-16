/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { mainColors } from "../../primitives";
// import { InputConfig } from "./types";

export const Container = styled.div``;

export const Label = styled.label`
    text-align: left;
    margin-bottom: 10px;
    display: block;
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    border: none;
    outline: none;
    padding: 0px;
    background-color: transparent;
    ::placeholder {
        color: ${({ placeholderColor }: any) =>
            placeholderColor ?? mainColors.black};
    }
`;
/* color: ${({ placeholderColor }: InputConfig) => */
