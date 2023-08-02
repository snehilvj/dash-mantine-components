import React from "react";
import { Card as MantineCard, CardSection } from "@mantine/core";
import {
    MantineNumberSize,
    MantineShadow,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: MantineShadow;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: MantineNumberSize;
    /** Adds border styles */
    withBorder?: boolean;
    /** Card children */
    children?: React.ReactNode;
} & DashBaseProps &
    MantineStylesAPIProps &
    MantineStyleSystemProps;

/** Renders white or dark background depending on color scheme */
const Card = (props: Props) => {
    const { children, setProps, ...other } = props;

    return (
        <MantineCard {...other}>
            {React.Children.map(children, (child: any, index) => {
                const childProps = child.props._dashprivate_layout.props;
                const childType = child.props._dashprivate_layout.type;

                if (childType === "CardSection") {
                    return (
                        <CardSection {...childProps} key={index}>
                            {child}
                        </CardSection>
                    );
                } else {
                    return child;
                }
            })}
        </MantineCard>
    );
};

Card.defaultProps = {};

export default Card;
