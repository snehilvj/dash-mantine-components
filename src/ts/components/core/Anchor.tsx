import { sanitizeUrl } from '@braintree/sanitize-url';
import { Anchor as MantineAnchor } from '@mantine/core';
import { DashBaseProps } from 'props/dash';
import { TextProps } from 'props/text';
import React, { MouseEvent, useMemo } from 'react';
import { TargetProps, onClick } from '../../utils/anchor';
import { getLoadingState } from '../../utils/dash3';

interface Props extends Omit<TextProps, 'span'>, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
    /** Target */
    target?: TargetProps;
    /** href */
    href: string;
    /** Whether to refresh the page */
    refresh?: boolean;
    /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
    underline?: 'always' | 'hover' | 'never';
    /** Props passed down to the `Anchor` component */
    anchorProps?: Record<string, any>;
}

/** Anchor */
const Anchor = (props: Props) => {
    const {
        href,
        target,
        refresh,
        children,
        setProps,
        loading_state,
        anchorProps,
        ...others
    } = props;

    const sanitizedHref = useMemo(() => sanitizeUrl(href), [href]);

    return (
        <MantineAnchor
            {...anchorProps}
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
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
