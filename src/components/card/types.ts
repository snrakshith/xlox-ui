import { ReactNode } from "react";

export interface Card {
    id?: number;
    title?: string;
    description?: string;
    action?: string;
}
export interface CardProps {
    card: Card;
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}
