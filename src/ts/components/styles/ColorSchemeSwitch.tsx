import {
    useComputedColorScheme,
    useMantineColorScheme,
    ActionIcon as MantineActionIcon,
} from "@mantine/core";
import { ActionIconProps } from "props/actionicon";
import { DashBaseProps } from "props/dash";
import React, { useEffect } from "react";

interface Props extends ActionIconProps, DashBaseProps {
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Current color schem  "light" | "dark" */
    color_scheme?: "light" | "dark";
    /** The icon to display when the application is in light mode. This icon represents the action to switch to dark mode.  Default: moon icon */
    iconForLightMode: React.ReactNode;
    /** The icon to display when the application is in dark mode. This icon represents the action to switch to light mode.  Default: sun icon */
    iconForDarkMode: React.ReactNode;
}

/** A toggle switch component for changing between light and dark color schemes. */
const ColorSchemeSwitch = (props: Props) => {
    const {
        children,
        setProps,
        loading_state,
        disabled,
        n_clicks = 0,
        variant = "transparent",
        iconForDarkMode,
        iconForLightMode,
        color_scheme,
        ...others
    } = props;

    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    useEffect(() => {
        if (color_scheme && color_scheme !== computedColorScheme) {
            setColorScheme(color_scheme);
        }
    }, [color_scheme]);

    const toggle = () => {
        if (disabled) return;

        const newColorScheme =
            computedColorScheme === "light" ? "dark" : "light";

        setColorScheme(newColorScheme);
        setProps({
            n_clicks: n_clicks + 1,
            color_scheme: newColorScheme,
        });
    };

    return (
        <MantineActionIcon
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            disabled={disabled}
            onClick={toggle}
            variant={variant}
            aria-label="Toggle color scheme"
            {...others}
        >
            {computedColorScheme === "light"
                ? iconForLightMode
                : iconForDarkMode}
        </MantineActionIcon>
    );
};

export default ColorSchemeSwitch;
