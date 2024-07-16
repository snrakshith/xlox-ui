import * as React from "react";

import { useCardContext } from "../CardContext";

const CardFooter: React.FC = () => {
    const { card } = useCardContext();
    return <footer className="ik_footer">{card?.action}</footer>;
};

export default CardFooter;
