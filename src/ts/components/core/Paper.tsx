import { Paper as MantinePaper, PaperBaseProps } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props
    extends BoxProps,
        PaperBaseProps,
        StylesApiProps,
        DashBaseProps {
    /** Content */
    children?: React.ReactNode;
}

/** Paper */
const Paper = (props: Props) => {
    const { children, setProps, loading_state, ...others } = props;

    return (
        <MantinePaper
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        >
            {children}
        </MantinePaper>
    );
};

export default Paper;
