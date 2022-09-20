import React from "react";
import { DashComponentProps } from "../../props";
import { Space as MantineSpace } from "@mantine/core";
import { MantineSize } from "@mantine/styles";

type Props = {
    /** Width, set to add horizontal spacing */
    w?: MantineSize;
    /** Height, set to add vertical spacing */
    h?: MantineSize;
    /** Content */
    children?: React.ReactNode;
} & DashComponentProps;

/**
 * Add horizontal or vertical spacing from theme. For more information, see: https://mantine.dev/core/space/
 */
const Space = (props: Props) => {
    const { setProps, children, ...other } = props;

    return <MantineSpace {...other}>{children}</MantineSpace>;
};

Space.defaultProps = {};

export default Space;
