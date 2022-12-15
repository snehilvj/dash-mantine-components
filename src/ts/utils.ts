import dayjs from "dayjs";
import { TargetProps } from "./props";
import { isNil } from "ramda";
import isAbsoluteUrl from "is-absolute-url";
import { MouseEvent } from "react";

// checks for a date against a list of dates
export const isDateInList = (value: Date, array: Date[]) => {
    return !!array.find((item) => {
        return item.getTime() === value.getTime();
    });
};

// check if all the elements in the array are string
export const isStringsArray = (arr: any[]) =>
    arr.every((i) => typeof i === "string");

// convert to dayjs Date
export const stringToDayjs = (d: string | null) => {
    return d ? dayjs(d).toDate() : undefined;
};

// convert to date string for dash
export const dayjsToString = (d: Date | null) => {
    return d ? dayjs(d).format("YYYY-MM-DD") : undefined;
};

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
