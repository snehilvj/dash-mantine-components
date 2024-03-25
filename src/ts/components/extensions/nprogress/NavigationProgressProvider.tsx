import { MantineColor } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends DashBaseProps {
    /** Initial progress value, `0` by default */
    initialProgress?: number;
    /** Key of `theme.colors` of any other valid CSS color, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls height of the progress bar */
    size?: number;
    /** Step interval in ms, `500` by default */
    stepInterval?: number;
    /** Determines whether the progress bar should be rendered within `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Progressbar z-index, `9999` by default */
    zIndex?: React.CSSProperties["zIndex"];
}

/** NavigationProgressProvider */
const NavigationProgressProvider = (props: Props) => {
    const { setProps, ...others } = props;

    return <NavigationProgress {...others} />;
};

NavigationProgressProvider.defaultProps = {};

export default NavigationProgressProvider;
