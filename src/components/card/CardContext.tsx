import { createContext, useContext } from "react";
import { Card } from "./types";

const CardContext = createContext<{ card: Card } | null>(null);

export function useCardContext() {
    const ctx = useContext(CardContext);
    if (!ctx) {
        throw new Error(
            `Card.* component must be rendered as a child of Card component`
        );
    }
    return ctx;
}

export default CardContext;
