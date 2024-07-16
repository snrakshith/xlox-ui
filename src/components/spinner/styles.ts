import { styled, keyframes } from "styled-components";
import { SpinnerProps } from "./types";

export const rotates = keyframes`
        0% {
    transform: rotate(0deg);
    }
        100% {
    transform: rotate(360deg);
    }
`;

export const Container = styled.div<SpinnerProps>`
    margin: 20px auto;
    width: 20px;
    height: ${({ thickness }) => thickness ?? "20px"};
    border-radius: 50%;
    border: 4px solid #f3f3f3; /* Light gray border */
    border-top: ${({ color }) =>
        `4px solid ${color ?? "#3498db"}`}; /* Blue border on top */
    animation: ${rotates} ${({ speed }) => `${speed ?? "2s"}`} linear infinite;
`;
