import {
    MantineColor,
    NavLink as MantineNavLink,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { MouseEvent, useState, useEffect } from "react";
import { TargetProps, onClick } from "../../utils/anchor";
import { History } from '@plotly/dash-component-plugins';
import { setPersistence, getLoadingState } from "../../utils/dash3";


interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Main link label */
    label?: React.ReactNode;
    /** Link description, displayed below the label */
    description?: React.ReactNode;
    /** Section displayed on the left side of the label */
    leftSection?: React.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React.ReactNode;
    /**
     * Controls whether the link is styled as active (default: `false`).
     * - `exact`: Active if `pathname` matches `href` exactly.
     * - `partial`: Active if `pathname` starts with `href` (for subpages).
     */
    active?: boolean | 'exact' | 'partial';
    /** Key of `theme.colors` of any valid CSS color to control active styles, `theme.primaryColor` by default */
    color?: MantineColor;
    /** href */
    href?: string;
    /** Target */
    target?: TargetProps;
    /** If set, label and description will not wrap to the next line, `false` by default */
    noWrap?: boolean;
    /** Child `NavLink` components */
    children?: React.ReactNode;
    /** Controlled nested items collapse state */
    opened?: boolean;
    /** If set, right section will not be rotated when collapse is opened, `false` by default */
    disableRightSectionRotation?: boolean;
    /** Key of `theme.spacing` or any valid CSS value to set collapsed links `padding-left`, `'lg'` by default */
    childrenOffset?: MantineSize | (string & {}) | number;
    /** If set, disabled styles will be added to the root element, `false` by default */
    disabled?: boolean;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Whether to refresh the page */
    refresh?: boolean;
}

/** NavLink */
const NavLink = ({
    disabled,
    href,
    target,
    refresh,
    n_clicks = 0,
    children,
    persistence,
    persisted_props,
    persistence_type,
    setProps,
    loading_state,
    active = false,
    ...others
}: Props) => {
    const [linkActive, setLinkActive] = useState(false);

    const pathnameToActive = pathname => {
        setLinkActive(
          active === true ||
            (active === 'exact' && pathname === href) ||
            (active === 'partial' && (pathname.startsWith(href + '/') || pathname === href))
        );
    };

    useEffect(() => {
        pathnameToActive(window.location.pathname);

        if (typeof active === 'string') {
          History.onChange(() => {
            pathnameToActive(window.location.pathname);
          });
        }
    }, [active]);

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

    return (
        <MantineNavLink
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            component="a"
            onClick={(ev: MouseEvent<HTMLAnchorElement>) => {
                increment();
                onClick(ev, href, target, refresh);
            }}
            href={href}
            target={target}
            onChange={onChange}
            disabled={disabled}
            active={linkActive}
            {...others}
        >
            {children}
        </MantineNavLink>
    );
};

setPersistence(NavLink, ["opened"])

export default NavLink;
