import {
    MantineProvider as MantineMantineProvider,
    MantineProviderProps,
} from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";
import React from "react";

import "@mantine/core/styles.css";

interface Props extends MantineProviderProps {
    /** Unique ID to identify this component in Dash callbacks. */
    id?: string;
    /** Dictionary of colors, where each key is a color name and the value is a base color string.
     * Each base color is passed to the Mantine  `generateColors` function, which returns an array of 10 color shades.
     */
    colorsGenerator?: Record<string, string>;
}

/* MantineProvider */
const MantineProvider = ({ children, theme, colorsGenerator = {}, ...others }: Props) => {
    // Transform each color in colorsGenerator using generateColors
    const additionalColors = Object.fromEntries(
        Object.entries(colorsGenerator).map(([key, value]) => [
            key,
            typeof value === "string" ? generateColors(value) : [],
        ])
    );

    // Merge new colors with existing ones, preserving original colors
    const newTheme = {
        ...theme,
        colors: { ...theme?.colors, ...additionalColors },
    };

    return <MantineMantineProvider theme={newTheme} {...others}>{children}</MantineMantineProvider>;
};

export default MantineProvider;
