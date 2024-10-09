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
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineSpace
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        >
            {children}
        </MantineSpace>
    );
};

Space.defaultProps = {};

export default Space;
