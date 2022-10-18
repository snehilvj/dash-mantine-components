import React, { MouseEvent } from "react";
import { DefaultProps, TextProps } from "../../props";
import { Anchor as MantineAnchor } from "@mantine/core";
import { isNil } from "ramda";

type Target = "_blank" | "_self";

type Props = {
    /** Target */
    target?: Target;
    /** href */
    href: string;
    /** Whether to refresh the page */
    refresh?: boolean;
} & TextProps &
    DefaultProps;

/*
 * event polyfill for IE
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
function CustomEvent(event, params) {
    // eslint-disable-next-line no-param-reassign
    params = params || {
        bubbles: false,
        cancelable: false,
        // eslint-disable-next-line no-undefined
        detail: undefined,
    };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
    );
    return evt;
}
CustomEvent.prototype = window.Event.prototype;

/**
 * Display links with theme styles. For more information, see: https://mantine.dev/core/anchor/
 */
const Anchor = (props: Props) => {
    const { href, target, refresh, children, setProps, ...others } = props;

    const onClick = (
        ev: MouseEvent<HTMLAnchorElement>,
        href: string,
        target: Target,
        refresh: boolean
    ) => {
        const hasModifiers =
            ev.metaKey || ev.shiftKey || ev.altKey || ev.ctrlKey;
        if (hasModifiers) {
            return;
        }

        if (target !== "_self" && !isNil(target)) {
            return;
        }

        const win: Window = window;

        // prevent anchor from updating location
        ev.preventDefault();

        if (refresh) {
            win.location = href;
        } else {
            win.history.pushState({}, "", href);
            window.dispatchEvent(
                CustomEvent("_dashprivate_pushstate", undefined)
            );
        }
        // scroll back to top
        win.scrollTo(0, 0);
    };

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
