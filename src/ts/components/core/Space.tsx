import { Space as MantineSpace } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
}

/** Space */
const Space = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineSpace
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineSpace>
    );
};

export default Space;
