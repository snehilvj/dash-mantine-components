import React, { MouseEvent } from "react";
import { DefaultProps, TargetProps } from "../../../props";
import { Menu, Box } from "@mantine/core";
import { MantineColor } from "@mantine/styles";
import { onClick } from "../../../utils"

type Props = {
    /** Item label */
    children?: React.ReactNode;
    /** Key of theme.colors */
    color?: MantineColor;
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
    target?: TargetProps;
    /** Whether to refresh the page */
    refresh?: boolean;
} & DefaultProps;

/**
 * Combine a list of secondary actions into single interactive area. For more information, see: https://mantine.dev/core/menu/
 */
const MenuItem = (props: Props) => {
    const { children, disabled, href, target, refresh, n_clicks, setProps, ...other } =
        props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    if (href) {
        return (
            <Menu.Item component="a" onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                onClick(ev, href, target, refresh)
            }
                href={href} target={target} {...other}>
                <Box style={{ width: "fit-content" }}>{children}</Box>
            </Menu.Item>
        );
    } else {
        return (
            <Menu.Item onClick={increment} {...other}>
                <Box style={{ width: "fit-content" }}>{children}</Box>
            </Menu.Item>
        );
    }

};

MenuItem.defaultProps = { n_clicks: 0 };

export default MenuItem;
