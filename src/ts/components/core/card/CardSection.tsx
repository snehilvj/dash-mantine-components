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
    const { children, setProps, ...others } = props;

    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <Card.Section
            data-dash-is-loading={loading || undefined}
            {...others}
        >
            {children}
        </Card.Section>
    );
};

export default CardSection;
