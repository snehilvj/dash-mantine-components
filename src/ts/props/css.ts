export type FontWeight =
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit"
    | number;

export type LetterSpacing = "normal" | "initial" | "inherit" | string | number;

export type TextAlign =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "initial"
    | "inherit";

export type LineHeight = "normal" | "initial" | "inherit" | string | number;

export type FontStyle = "normal" | "italic" | "oblique" | "initial" | "inherit";

export type TextTransform =
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";

export type TopLeftRightBottom =
    | "auto"
    | "initial"
    | "inherit"
    | number
    | string;

export type Display =
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "list-item"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "table-cell"
    | "table-column"
    | "table-row"
    | "none"
    | "initial"
    | "inherit"
    | "inherit";

export type TextDecoration =
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "initial"
    | "inherit";

export type BackgroundColor = string | "transparent" | "initial" | "inherit";

export type BackgroundSize =
    | "auto"
    | "cover"
    | "contain"
    | "initial"
    | "inherit"
    | string
    | number;

export type BackgroundPosition =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center"
    | "initial"
    | "inherit"
    | string
    | number;

export type BackgroundRepeat =
    | "repeat"
    | "repeat-x"
    | "repeat-y"
    | "no-repeat"
    | "initial"
    | "inherit";

export type BackgroundAttachment =
    | "scroll"
    | "fixed"
    | "local"
    | "initial"
    | "inherit";

export type Position =
    | "static"
    | "absolute"
    | "fixed"
    | "relative"
    | "sticky"
    | "initial"
    | "inherit";

export type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";

export type AlignContent =
    | "left"
    | "right"
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "center"
    | "end"
    | "start"
    | "justify"
    | "match-parent";

export type AlignItems =
    | "normal"
    | "stretch"
    | "positional alignment"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";

export type FlexWrap =
    | "nowrap"
    | "wrap"
    | "wrap-reverse"
    | "initial"
    | "inherit";

export type FlexDirection =
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";

export type TransitionProperty =
    | "none"
    | "all"
    | "string"
    | "initial"
    | "inherit";

export type Order = number | "initial" | "inherit";

export type HTMLInputTypeAttribute =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | string;

export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

export type Margin = number | string | "auto" | "initial" | "inherit";

export type ListStyle =
    | "disc"
    | "circle"
    | "square"
    | "decimal"
    | "lower-roman"
    | "upper-roman"
    | "lower-greek"
    | "lower-latin"
    | "upper-latin"
    | "lower-alpha"
    | "upper-alpha"
    | "none"
    | "inherit";
