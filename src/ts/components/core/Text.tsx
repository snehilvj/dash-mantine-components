import { Text as MantineText } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { TextProps } from "props/text";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends TextProps, DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** Text */
const Text = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantineText
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantineText>
    );
};

Text.defaultProps = {};

export default Text;
