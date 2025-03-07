import {
    CodeHighlightTabs as MantineCodeHighlightTabs,
} from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";
import { renderDashComponents } from "dash-extensions-js";
import React from "react";
import { getLoadingState } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlightTabs"


/** CodeHighlightTabs */
const CodeHighlightTabs = (props: Props) => {
    const { setProps, loading_state, code, ...others } = props;
    const renderedCode = [];
    if (Array.isArray(code)) {
        code.forEach((item, index) => {
            renderedCode.push(renderDashComponents(item, ["icon"]));
        });
    } else {
        renderedCode.push(renderDashComponents(code, ["icon"]));
    }

    return (
        <MantineCodeHighlightTabs
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            code={renderedCode}
            {...others}
        />
    );
};

export default CodeHighlightTabs;
