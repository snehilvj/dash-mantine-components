import React, { MouseEvent } from "react";
import { DefaultProps, TargetProps, TextProps } from "../../props";
import { Anchor as MantineAnchor } from "@mantine/core";
import { onClick } from "../../utils";

type Props = {
    /** Target */
    target?: TargetProps;
    /** href */
    href: string;
    /** Whether to refresh the page */
    refresh?: boolean;
} & TextProps &
    DefaultProps;

/**
 * Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
 */
const Anchor = (props: Props) => {
    const { href, target, refresh, children, setProps, ...others } = props;

    return (
        <MantineAnchor
            onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                onClick(ev, href, target, refresh)
            }
            href={href}
            target={target}
            {...others}
        >
            {children}
        </MantineAnchor>
    );
};
Anchor.defaultProps = {};

export default Anchor;
