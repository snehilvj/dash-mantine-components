import {
    CodeHighlightTabs as MantineCodeHighlightTabs,
} from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";

import React from "react";
import { getLoadingState, newRenderDashComponents, getContextPath } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlightTabs"

/** CodeHighlightTabs */
const CodeHighlightTabs = (props: Props) => {
    const { setProps, loading_state, code, ...others } = props;
    const componentPath = getContextPath();
    const renderedCode = [];

    if (Array.isArray(code)) {
        code.forEach((item, index) => {
            renderedCode.push(
                newRenderDashComponents(item, ["icon"], componentPath ? [...componentPath, 'props', 'code', index] : [])
            );
        });
    } else {
        renderedCode.push(
            newRenderDashComponents(code, ["icon"], componentPath ? [...componentPath, 'props', 'code'] : [])
        );
    }

    return (
        <MantineCodeHighlightTabs
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            code={renderedCode}
            {...others}
        />
    );
};

CodeHighlightTabs.dashChildrenUpdate = true

export default CodeHighlightTabs;