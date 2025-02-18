import React, { createContext } from "react";

interface RadioGroupContextProps {
    radioOnClick?: (val?: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export default RadioGroupContext;
