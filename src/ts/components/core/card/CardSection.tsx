import React from "react";
import { DefaultProps } from "../../../props";

type Props = {
    /** Card children */
    children?: React.ReactNode;
    /** Determines whether section from inherit padding from Card */
    inheritPadding?: boolean;
    /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
    withBorder?: boolean;
} & DefaultProps;

/**
 * Renders white or dark background depending on color scheme. For more information, see: https://mantine.dev/core/card/
 */
const CardSection = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <> {children}</>;
};

CardSection.defaultProps = {};

export default CardSection;
