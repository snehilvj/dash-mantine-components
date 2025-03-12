import { InlineCodeHighlight as MantineInlineCodeHighlight } from "@mantine/code-highlight";
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../InlineCodeHighlight"


/** InlineCodeHighlight */
const InlineCodeHighlight = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineInlineCodeHighlight
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default InlineCodeHighlight;
