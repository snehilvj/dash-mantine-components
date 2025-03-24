import {
    CodeHighlightTabs as MantineCodeHighlightTabs,
} from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";

import React, {useMemo} from "react";
import { getLoadingState, newRenderDashComponents, getContextPath } from "../../../../utils/dash3";
import { Props }  from "../CodeHighlightTabs"


/** CodeHighlightTabs */
const CodeHighlightTabs = (props: Props) => {
    const { setProps, loading_state, code, ...others } = props;
    const componentPath = getContextPath()
    const renderedCode = [];
    if (Array.isArray(code)) {
        code.forEach((item, index) => {
            renderedCode.push(
                useMemo(() => {
                    return newRenderDashComponents(item, ["icon"], componentPath ? [...componentPath, index] : [])
                    }, [item, componentPath, index]
                )
            );
        });
    } else {
        renderedCode.push(
            useMemo(() => {
                return newRenderDashComponents(code, ["icon"], componentPath ? [...componentPath, 0] : [])
                }, [code, componentPath]
            )
        )
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
