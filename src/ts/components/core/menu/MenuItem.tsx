import { MantineColor, Menu } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { MouseEvent } from "react";
import { TargetProps, onClick } from "../../../utils/anchor";

interface Props extends BoxProps, DashBaseProps, StylesApiProps {
    /** Item label */
    children?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color */
    color?: MantineColor;
    /** Determines whether the menu should be closed when the item is clicked, overrides `closeOnItemClick` prop on the `Menu` component */
    closeMenuOnClick?: boolean;
    /** Section displayed on the left side of the label */
    leftSection?: React.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React.ReactNode;
    /** Disables item */
    disabled?: boolean;
    /** href if MenuItem is supposed to be used as a link */
    href?: string;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Target if MenuItem is supposed to be used as a link */
    target?: TargetProps;
    /** Whether to refresh the page */
    refresh?: boolean;
}

/** MenuItem */
const MenuItem = (props: Props) => {
    const {
        children,
        disabled,
        href,
        target,
        refresh,
        n_clicks,
        setProps,
        ...others
    } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    if (href) {
        return (
            <Menu.Item
                component="a"
                onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                    onClick(ev, href, target, refresh)
                }
                href={href}
                target={target}
                disabled={disabled}
                {...others}
            >
                {children}
            </Menu.Item>
        );
    } else {
        return (
            <Menu.Item onClick={increment} disabled={disabled} {...others}>
                {children}
            </Menu.Item>
        );
    }
};

MenuItem.defaultProps = { n_clicks: 0 };

export default MenuItem;
