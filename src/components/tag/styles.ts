/* Styles */

import { styled } from "styled-components";
import { TagProps } from "./types";
import { mainColors } from "../../primitives";

export const TagContainer = styled.div<TagProps>`
    width: 50%;
    padding: 15px 0px 15px 0px;
    background-color: ${({ color }) => color ?? mainColors.blue};
`;

export const TagText = styled.p`
    font-size: medium;
    font-weight: 200;
    color: ${mainColors.white};
`;
