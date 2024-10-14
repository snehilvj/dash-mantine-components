import React, { createContext } from "react";

interface ChipGroupContextProps {
    chipOnClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const ChipGroupContext = createContext<ChipGroupContextProps | null>(null);

export default ChipGroupContext;
