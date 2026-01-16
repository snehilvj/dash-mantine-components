import { BoxProps as MantineBoxProps } from '@mantine/core';

export interface BoxProps extends Omit<MantineBoxProps, '__vars' | '__size'> {
    /** Breakpoint above which the component is hidden with `display: none` */
    hiddenFrom?: string;
    /** Breakpoint below which the component is hidden with `display: none` */
    visibleFrom?: string;
    /**
     * Element modifiers transformed into `data-` attributes.
     * For example: "xl" or {"data-size": "xl"}.
     * Can also be a list of strings or dicts for multiple modifiers.
     * Falsy values are removed.
     */
    mod?: string | object | Array<string | object>;

    /* Spacing */

    /** Margin – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    m?: string | number | object;
    /** Margin block – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    my?: string | number | object;
    /** Margin inline – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mx?: string | number | object;
    /** Margin top – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mt?: string | number | object;
    /** Margin bottom – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mb?: string | number | object;
    /** Margin inline start – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    ms?: string | number | object;
    /** Margin inline end – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    me?: string | number | object;
    /** Margin left – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    ml?: string | number | object;
    /** Margin right – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mr?: string | number | object;

    /** Padding – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    p?: string | number | object;
    /** Padding block – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    py?: string | number | object;
    /** Padding inline – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    px?: string | number | object;
    /** Padding top – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    pt?: string | number | object;
    /** Padding bottom – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    pb?: string | number | object;
    /** Padding inline start – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    ps?: string | number | object;
    /** Padding inline end – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    pe?: string | number | object;
    /** Padding left – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    pl?: string | number | object;
    /** Padding right – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    pr?: string | number | object;

    /* Colors / borders */

    /** Border – Accepts CSS values or a dict for responsive styles. */
    bd?: React.CSSProperties['border'] | object;
    /** Border radius – Accepts theme radius keys, CSS values, or a dict for responsive styles. */
    bdrs?: string | number | object;
    /** Background – Accepts theme color keys, CSS values, or a dict for responsive styles. */
    bg?: string | object;
    /** Color – Accepts theme color keys, CSS values, or a dict for responsive styles. */
    c?: string | object;
    /** Opacity – Accepts CSS values or a dict for responsive styles. */
    opacity?: string | number | object;

    /* Typography */

    /** Font family – Accepts CSS values or a dict for responsive styles. */
    ff?: string | object;
    /** Font size – Accepts theme font size keys, CSS values, or a dict for responsive styles. */
    fz?: string | number | object;
    /** Font weight – Accepts CSS values or a dict for responsive styles. */
    fw?: React.CSSProperties['fontWeight'] | number | object;
    /** Letter spacing – Accepts CSS values or a dict for responsive styles. */
    lts?: React.CSSProperties['letterSpacing'] | object;
    /** Text align – Accepts CSS values or a dict for responsive styles. */
    ta?: React.CSSProperties['textAlign'] | object;
    /** Line height – Accepts theme line height keys, CSS values, or a dict for responsive styles. */
    lh?: string | number | object;
    /** Font style – Accepts CSS values or a dict for responsive styles. */
    fs?: React.CSSProperties['fontStyle'] | object;
    /** Text transform – Accepts CSS values or a dict for responsive styles. */
    tt?: React.CSSProperties['textTransform'] | object;
    /** Text decoration – Accepts CSS values or a dict for responsive styles. */
    td?: React.CSSProperties['textDecoration'] | object;

    /* Sizing */

    /** Width – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    w?: string | number | object;
    /** Minimum width – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    miw?: string | number | object;
    /** Maximum width – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    maw?: string | number | object;
    /** Height – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    h?: string | number | object;
    /** Minimum height – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mih?: string | number | object;
    /** Maximum height – Accepts theme spacing keys, CSS values, or a dict for responsive styles. */
    mah?: string | number | object;

    /* Background */

    /** Background size – Accepts CSS values or a dict for responsive styles. */
    bgsz?: React.CSSProperties['backgroundSize'] | object;
    /** Background position – Accepts CSS values or a dict for responsive styles. */
    bgp?: React.CSSProperties['backgroundPosition'] | object;
    /** Background repeat – Accepts CSS values or a dict for responsive styles. */
    bgr?: React.CSSProperties['backgroundRepeat'] | object;
    /** Background attachment – Accepts CSS values or a dict for responsive styles. */
    bga?: React.CSSProperties['backgroundAttachment'] | object;

    /* Layout */

    /** Position – Accepts CSS values or a dict for responsive styles. */
    pos?: React.CSSProperties['position'] | object;
    /** Top offset – Accepts CSS values or a dict for responsive styles. */
    top?: React.CSSProperties['top'] | object;
    /** Left offset – Accepts CSS values or a dict for responsive styles. */
    left?: React.CSSProperties['left'] | object;
    /** Bottom offset – Accepts CSS values or a dict for responsive styles. */
    bottom?: React.CSSProperties['bottom'] | object;
    /** Right offset – Accepts CSS values or a dict for responsive styles. */
    right?: React.CSSProperties['right'] | object;
    /** Inset – Accepts CSS values or a dict for responsive styles. */
    inset?: React.CSSProperties['inset'] | object;

    /** Display – Accepts CSS values or a dict for responsive styles. */
    display?: React.CSSProperties['display'] | object;
    /** Flex – Accepts CSS values or a dict for responsive styles. */
    flex?: React.CSSProperties['flex'] | object;
}

export interface BoxComponentProps extends BoxProps {
    /** Variant passed from parent component */
    variant?: string;

    /** Size passed from parent component */
    size?: string | number;
}
