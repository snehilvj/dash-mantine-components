import { CodeHighlight as MantineCodeHighlight } from "@mantine/code-highlight";
import '@mantine/code-highlight/styles.css';
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlight"


/** CodeHighlight */
const CodeHighlight = (props: Props) => {
    const { setProps, loading_state, ...others } = props;

    return (
        <MantineCodeHighlight
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            {...others}
        />
    );
};

export default CodeHighlight;
