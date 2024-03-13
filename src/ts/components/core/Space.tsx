import { Space as MantineSpace } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends BoxProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Space */
const Space = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <MantineSpace {...other}>{children}</MantineSpace>;
};

Space.defaultProps = {};

export default Space;
