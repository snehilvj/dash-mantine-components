import { DashBaseProps } from "props/dash";
import { MantineStylesAPIProps, MantineStyleSystemProps } from "props/mantine";
import React from "react";

type Props = {
    /** Card children */
    children?: React.ReactNode;
    /** Determines whether section should have border */
    withBorder?: boolean;
    /** Determines whether section from inherit padding from Card */
    inheritPadding?: boolean;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Renders white or dark background depending on color scheme */
const CardSection = (props: Props) => {
    return <> {props.children}</>;
};

CardSection.defaultProps = {};

export default CardSection;
