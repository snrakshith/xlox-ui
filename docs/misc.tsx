// import { styled } from "styled-components";
// import { mainColors } from "../src/primitives/colors";

// export const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   &.h-center {
//     align-items: center;
//   }
//   &.v-center {
//     justify-content: center;
//   }
//   &.v-justify {
//     justify-content: space-between;
//   }
// `;

// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const PageContainer = styled.div`
//   background-color: ${mainColors.white};
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   padding: 5px;
// `;

// interface HorizontalDividerType {
//   color?: string;
// }

// export const HorizontalDivider = styled.div<HorizontalDividerType>`
//   /* background-color: ${({ color }) => color ?? mainColors.black}; */
//   /* background-color: ${mainColors.black}; */
//   background-color: ${(props) => props.color || "black"};
//   margin: 0px;
//   width: 100%;
//   height: 1px;
//   position: relative;
// `;

// HorizontalDivider.defaultProps = {
//   color: "red",
// };

// interface SpacerType {
//   n: number;
// }
// export const HorizontalSpacer = styled.div<SpacerType>`
//   margin-bottom: ${({ n }: SpacerType) => `calc(${n} * 5px)`};
// `;

// export const VerticalSpacer = styled.div<SpacerType>`
//   margin-right: ${({ n }: SpacerType) => `calc(${n} * 5px)`};
// `;
export {};
