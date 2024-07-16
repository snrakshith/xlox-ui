import * as React from "react";

// Component styles
import "../styles.css";

import { useCardContext } from "../CardContext";

const CardBody: React.FC = () => {
    const { card } = useCardContext();
    return <section className="ik_card">{card?.description}</section>;
};

export default CardBody;
