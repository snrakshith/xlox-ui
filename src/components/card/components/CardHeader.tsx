// A card

import * as React from "react";
// import { clsx } from "clsx";

// Component styles
import "../styles.css";

import { useCardContext } from "../CardContext";

const CardHeader: React.FC = () => {
    const { card } = useCardContext();
    return <section className="ik_card">{card?.title}</section>;
};

export default CardHeader;
