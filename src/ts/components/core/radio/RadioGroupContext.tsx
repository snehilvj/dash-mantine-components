import React, { createContext } from "react";

interface RadioGroupContextProps {
    radioOnClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export default RadioGroupContext;
