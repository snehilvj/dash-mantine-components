import { Card } from "@mantine/core";
import { CardSectionFactory } from "@mantine/core/lib/components/Card/CardSection/CardSection";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

export interface Props
    extends BoxProps,
        StylesAPIProps<CardSectionFactory["stylesNames"]>,
        DashBaseProps {
    /** Determines whether the section should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
    inheritPadding?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** CardSection */
const CardSection = (props: Props) => {
    const { children, setProps, ...others } = props;

    return <Card.Section {...others}>{children}</Card.Section>;
};

CardSection.defaultProps = {};

export default CardSection;
