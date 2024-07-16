// A card

import * as React from "react";
// import { clsx } from "clsx";

// Component styles
import "../styles.css";

// Component prop types
import { CardProps } from "../types";
import CardContext from "../CardContext";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

// const Card: React.FC<CardProps> = ({ body, footer, header, card }) => {
function Card({ body, footer, header, card }: CardProps) {
    return (
        <CardContext.Provider value={{ card }}>
            <section className="ik_card">
                <div>{header}</div>
                <div>{body}</div>
                <div>{footer}</div>
            </section>
        </CardContext.Provider>
    );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

Card.displayName = "Card";
