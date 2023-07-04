import isAbsoluteUrl from "is-absolute-url";
import { TargetProps } from "props/html";
import { isNil } from "ramda";
import { MouseEvent } from "react";

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

export const onClick = (
    ev: MouseEvent<HTMLAnchorElement>,
    href: string,
    target: TargetProps,
    refresh: boolean
) => {
    const hasModifiers = ev.metaKey || ev.shiftKey || ev.altKey || ev.ctrlKey;

    if (hasModifiers) {
        return;
    }

    if (href && isAbsoluteUrl(href)) {
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
        window.dispatchEvent(CustomEvent("_dashprivate_pushstate", undefined));
    }
    // scroll back to top
    win.scrollTo(0, 0);
};
