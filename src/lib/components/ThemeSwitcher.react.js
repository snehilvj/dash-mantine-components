import React, { useEffect } from "react";
import { ActionIcon, ThemeIcon, Tooltip } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

/**
 * Theme switcher for dmc-docs. For more information, see: https://mantine.dev/core/action-icon/
 */
const ThemeSwitcher = (props) => {
    const { style, setProps } = props;
    const [colorScheme, setColorScheme] = useLocalStorage({
        key: "color-scheme",
        defaultValue: "light",
    });

    const onClick = () =>
        setColorScheme((current) => (current === "dark" ? "light" : "dark"));

    useEffect(() => {
        setProps({ value: colorScheme });
    }, [colorScheme]);

    return (
        <Tooltip label="Change Theme">
            <ThemeIcon
                size={36}
                radius={30}
                style={style}
                variant="outline"
                onClick={onClick}
                color={colorScheme === "dark" ? "yellow" : "indigo"}
            >
                {colorScheme === "dark" ? (
                    <SunIcon size={22} />
                ) : (
                    <MoonIcon size={22} />
                )}
            </ThemeIcon>
        </Tooltip>
    );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

ThemeSwitcher.defaultProps = {
    value: "light",
};

ThemeSwitcher.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Tells dash if any prop has changed its value
     */
    setProps: PropTypes.func,

    /**
     * Inline style override
     */
    style: PropTypes.object,

    /**
     * color scheme
     */
    value: PropTypes.oneOf(["dark", "light"]),
};

export default ThemeSwitcher;
