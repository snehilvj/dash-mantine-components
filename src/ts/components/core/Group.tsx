import { Group as MantineGroup, MantineSpacing } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Controls `justify-content` CSS property, `'flex-start'` by default */
    justify?: React.CSSProperties["justifyContent"];
    /** Controls `align-items` CSS property, `'center'` by default */
    align?: React.CSSProperties["alignItems"];
    /** Controls `flex-wrap` CSS property, `'wrap'` by default */
    wrap?: React.CSSProperties["flexWrap"];
    /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem, `'md'` by default */
    gap?: MantineSpacing;
    /** Determines whether each child element should have `flex-grow: 1` style, `false` by default */
    grow?: boolean;
    /** Determines whether children should take only dedicated amount of space (`max-width` style is set based on the number of children), `true` by default */
    preventGrowOverflow?: boolean;
}

/** Group */
const Group = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <MantineGroup {...others}>{children}</MantineGroup>;
};

Group.defaultProps = {};

export default Group;
