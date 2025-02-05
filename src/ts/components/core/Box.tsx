import { Box as MantineBox } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Box */
const Box = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineBox
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineBox>
    );
};

Box.defaultProps = {};

export default Box;
