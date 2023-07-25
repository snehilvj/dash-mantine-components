import React, { MouseEvent } from "react";
import { NavLink as MantineNavLink } from "@mantine/core";
import { DashBaseProps, PersistenceProps } from "props/dash";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { TargetProps } from "props/html";
import { onClick } from "../../utils/anchor";

type Props = {
    /** Main link content */
    label?: React.ReactNode;
    /** Secondary link description */
    description?: React.ReactNode;
    /** Icon displayed on the left side of the label */
    icon?: React.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React.ReactNode;
    /** Determines whether link should have active styles */
    active?: boolean;
    /** Key of theme.colors, active link color */
    color?: MantineColor;
    /** Active link variant */
    variant?: "filled" | "light" | "subtle";
    /** If prop is set then label and description will not wrap on the next line */
    noWrap?: boolean;
    /** Child links */
    children?: React.ReactNode;
    /** If set to true, right section will not rotate when collapse is opened */
    disableRightSectionRotation?: boolean;
    /** Key of theme.spacing or number to set collapsed links padding-left in px */
    childrenOffset?: MantineNumberSize;
    /** Controlled nested items collapse state */
    opened?: boolean;
    /** Adds disabled styles to root element */
    disabled?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Target */
    target?: TargetProps;
    /** href */
    href?: string;
    /** Whether to refresh the page */
    refresh?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Navigation link */
const NavLink = (props: Props) => {
    const {
        disabled,
        href,
        target,
        refresh,
        n_clicks,
        children,
        setProps,
        ...other
    } = props;

    const onChange = (state: boolean) => {
        setProps({ opened: state });
    };

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    if (href) {
        return (
            <MantineNavLink
                component="a"
                onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                    onClick(ev, href, target, refresh)
                }
                href={href}
                target={target}
                onChange={onChange}
                disabled={disabled}
                {...other}
            >
                {children}
            </MantineNavLink>
        );
    } else {
        return (
            <MantineNavLink
                disabled={disabled}
                onChange={onChange}
                onClick={increment}
                {...other}
            >
                {children}
            </MantineNavLink>
        );
    }
};

NavLink.defaultProps = {
    n_clicks: 0,
};

export default NavLink;
