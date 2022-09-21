import React from "react";
import { DashComponentProps, MantineColors } from "../../../props";
import { Menu, Box } from "@mantine/core";

type Props = {
    /** Item label */
    children?: React.ReactNode;
    /** Key of theme.colors */
    color?: MantineColors;
    /** Determines whether menu should be closed when item is clicked, overrides closeOnItemClick prop on Menu component */
    closeMenuOnClick?: boolean;
    /** Icon rendered on the left side of the label */
    icon?: React.ReactNode;
    /** Section rendered on the right side of the label */
    rightSection?: React.ReactNode;
    /** Is item disabled */
    disabled?: boolean;
    /** href if MenuItem is supposed to be used as a link */
    href?: string;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Target if MenuItem is supposed to be used as a link */
    target?: "_blank" | "_self";
} & DashComponentProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuItem = (props: Props) => {
    const {
        children,
        disabled,
        href,
        target,
        n_clicks,
        setProps,
        ...other
    } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    let component: React.ReactNode;

    if (href) {
        component = (
            <Menu.Item component="a" href={href} target={target} {...other}>
                <Box>{children}</Box>
            </Menu.Item>
        );
    } else {
        component = (
            <Menu.Item onClick={increment} {...other}>
                <Box>{children}</Box>
            </Menu.Item>
        );
    }

    return component;
};

MenuItem.defaultProps = { n_clicks: 0 };

export default MenuItem;
