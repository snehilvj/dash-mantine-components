import { MantineColor, Progress as MantineProgress } from "@mantine/core";
import { DashBaseProps } from "props/dash";
import { __ProgressRootProps } from "props/progress";
import { StylesApiProps } from "props/styles";
import React from "react";

export interface Props
    extends __ProgressRootProps,
        DashBaseProps,
        StylesApiProps {
    /** Value of the progress */
    value: number;
    /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether the section should have stipes, `false` by default */
    striped?: boolean;
    /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
    animated?: boolean;
}

/** Progress */
const Progress = (props: Props) => {
    const { setProps, ...others } = props;
    const ctx = (window as any).dash_component_api.useDashContext();
    const loading = ctx.useLoading();

    return (
        <MantineProgress
            data-dash-is-loading={loading || undefined}
            {...others}
        />
    );
};

export default Progress;
