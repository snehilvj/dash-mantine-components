import React, { MouseEvent } from "react";
import { Anchor as MantineAnchor } from "@mantine/core";
import { TargetProps } from "props/html";
import {
    MantineStylesAPIProps,
    MantineStyleSystemProps,
    TextProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";
import { onClick } from "../../utils/anchor";

type Props = {
    /** Target */
    target?: TargetProps;
    /** href */
    href: string;
    /** Whether to refresh the page */
    refresh?: boolean;
} & TextProps &
    DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Display links with theme styles */
const Anchor = (props: Props) => {
    const { href, target, refresh, children, setProps, ...other } = props;

    return (
        <MantineAnchor
            onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                onClick(ev, href, target, refresh)
            }
            href={href}
            target={target}
            {...other}
        >
            {children}
        </MantineAnchor>
    );
};

Anchor.defaultProps = {};

export default Anchor;
