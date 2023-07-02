import { MantineSize } from "@mantine/core";
import {
    BackgroundAttachment,
    BackgroundPosition,
    BackgroundRepeat,
    BackgroundSize,
    Display,
    FontStyle,
    FontWeight,
    LetterSpacing,
    LineHeight,
    Position,
    TextAlign,
    TextDecoration,
    TextTransform,
    TopLeftRightBottom,
} from "./css";

import { MantineTheme } from "@mantine/styles";
import { DashBaseProps } from "./dash";

export type MantineNumberSize = MantineSize | number | string;

export type MantineColor = DefaultMantineColor | string;

export type DefaultMantineColor =
    | "dark"
    | "gray"
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "green"
    | "lime"
    | "yellow"
    | "orange"
    | "teal";

export type MantineStyleSystemProps = {
    /** margin */
    m?: MantineNumberSize;
    /** marginTop, marginBottom */
    my?: MantineNumberSize;
    /** marginRight, marginLeft */
    mx?: MantineNumberSize;
    /** marginTop */
    mt?: MantineNumberSize;
    /** marginBottom */
    mb?: MantineNumberSize;
    /** marginLeft */
    ml?: MantineNumberSize;
    /** marginRight */
    mr?: MantineNumberSize;
    /** padding */
    p?: MantineNumberSize;
    /** paddingTop, paddingBottom */
    py?: MantineNumberSize;
    /** paddingRight, paddingLeft */
    px?: MantineNumberSize;
    /** paddingTop */
    pt?: MantineNumberSize;
    /** paddingBottom */
    pb?: MantineNumberSize;
    /** paddingLeft */
    pl?: MantineNumberSize;
    /** paddingRight */
    pr?: MantineNumberSize;
    /** background */
    bg?: MantineColor;
    /** color */
    c?: MantineColor;
    /** opacity */
    opacity?: number;
    /** fontFamily */
    ff?: "initial" | "inherit" | string;
    /** fontSize */
    fz?: MantineNumberSize;
    /** fontWeight */
    fw?: FontWeight;
    /** letterSpacing */
    lts?: LetterSpacing;
    /** textAlign */
    ta?: TextAlign;
    /** lineHeight */
    lh?: LineHeight;
    /** fontStyle */
    fs?: FontStyle;
    /** textTransform */
    tt?: TextTransform;
    /** textDecoration */
    td?: TextDecoration;
    /** width */
    w?: MantineNumberSize;
    /** minWidth */
    miw?: MantineNumberSize;
    /** maxWidth */
    maw?: MantineNumberSize;
    /** height */
    h?: MantineNumberSize;
    /** minHeight */
    mih?: MantineNumberSize;
    /** minHeight */
    mah?: MantineNumberSize;
    /** backgroundSize */
    bgsz?: BackgroundSize;
    /** backgroundPosition */
    bgp?: BackgroundPosition;
    /** backgroundRepeat */
    bgr?: BackgroundRepeat;
    /** backgroundAttachment */
    bga?: BackgroundAttachment;
    /** position */
    pos?: Position;
    /** top */
    top?: TopLeftRightBottom;
    /** left */
    left?: TopLeftRightBottom;
    /** bottom */
    bottom?: TopLeftRightBottom;
    /** right */
    right?: TopLeftRightBottom;
    /** inset */
    inset?: TopLeftRightBottom;
    /** display */
    display?: Display;
};

export type MantineStylesAPIProps = {
    /** add class names to Mantine components */
    classNames?: object;
    /** Mantine styles API  */
    styles?: any;
    /** Remove all Mantine styling from the component */
    unstyled?: boolean;
    /** custom variant if created using MantineProvider */
    variant?: string;
    /** With sx you can add styles to component root element. If you need to customize styles of other elements within component use styles prop */
    sx?: any;
};

export type LoaderProps = {
    /** Defines width of loader */
    size?: MantineNumberSize;
    /** Loader color from theme */
    color?: MantineColor;
    /** Loader appearance */
    variant?: MantineTheme["loader"];
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;
