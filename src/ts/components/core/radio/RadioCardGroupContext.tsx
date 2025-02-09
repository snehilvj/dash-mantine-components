import React, { createContext } from "react";

interface RadioCardGroupContextProps {
    radioOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RadioCardGroupContext = createContext<RadioCardGroupContextProps | null>(null);

export default RadioCardGroupContext;
