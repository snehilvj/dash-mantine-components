import { sanitizeUrl } from "@braintree/sanitize-url";
import { Anchor as MantineAnchor } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React, { MouseEvent, useMemo } from "react";
import { TargetProps, onClick } from "../../utils/anchor";

interface Props extends Omit<TextProps, "span">, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
    /** Target */
    target?: TargetProps;
    /** href */
    href: string;
    /** Whether to refresh the page */
    refresh?: boolean;
    /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
    underline?: "always" | "hover" | "never";
}

/** Anchor */
const Anchor = (props: Props) => {
    const {
        href,
        target,
        refresh,
        children,
        setProps,
        ...others
    } = props;

    const sanitizedHref = useMemo(() => sanitizeUrl(href), [href]);

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineAnchor
            data-dash-is-loading={loading || undefined}
            onClick={(ev: MouseEvent<HTMLAnchorElement>) =>
                onClick(ev, sanitizedHref, target, refresh)
            }
            href={sanitizedHref}
            target={target}
            {...others}
        >
            {children}
        </MantineAnchor>
    );
};

export default Anchor;
