import {
    Card as MantineCard,
    MantineRadius,
    MantineShadow,
    MantineSpacing,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: MantineShadow;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Determines whether the card should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
    /** Controls `padding`, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    padding?: MantineSpacing;
    /** Card content */
    children?: React.ReactNode;
}

/** Card */
const Card = (props: Props) => {
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineCard
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </MantineCard>
    );
};

Card.defaultProps = {};

export default Card;
