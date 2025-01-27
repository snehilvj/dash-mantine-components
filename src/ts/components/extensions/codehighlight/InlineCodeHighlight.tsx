import { InlineCodeHighlight as MantineInlineCodeHighlight } from "@mantine/code-highlight";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language?: string;
}

/** InlineCodeHighlight */
const InlineCodeHighlight = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineInlineCodeHighlight
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...others}
        />
    );
};

InlineCodeHighlight.defaultProps = {};

export default InlineCodeHighlight;
