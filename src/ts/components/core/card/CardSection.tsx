import { Card } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

export interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Determines whether the section should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
    inheritPadding?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** CardSection */
const CardSection = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <Card.Section
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </Card.Section>
    );
};

CardSection.defaultProps = {};

export default CardSection;
