import { BoxProps } from "props/box";
import { StylesApiProps } from "props/styles";
import React from "react";

export interface ScrollAreaProps extends BoxProps, StylesApiProps {
    /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
    scrollbarSize?: number | string;
    /**
     * Defines scrollbars behavior, `hover` by default
     * - `hover` – scrollbars are visible when mouse is over the scroll area
     * - `scroll` – scrollbars are visible when the scroll area is scrolled
     * - `always` – scrollbars are always visible
     * - `never` – scrollbars are always hidden
     * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
     * */
    type?: "auto" | "always" | "scroll" | "hover" | "never";
    /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
    scrollHideDelay?: number;
    /** Axis at which scrollbars must be rendered, `'xy'` by default */
    scrollbars?: "x" | "y" | "xy" | false;
    /** Determines whether scrollbars should be offset with padding on given axis, `false` by default */
    offsetScrollbars?: boolean | "x" | "y";
    /** Defines `overscroll-behavior` of the viewport. https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior */
    overscrollBehavior?: React.CSSProperties['overscrollBehavior'];
}
