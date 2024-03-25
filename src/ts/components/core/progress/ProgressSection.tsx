import { MantineColor, Progress } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** Value of the section in 0–100 range  */
    value: number;
    /** Determines whether `aria-*` props should be added to the root element, `true` by default */
    withAria?: boolean;
    /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Determines whether the section should have stipes, `false` by default */
    striped?: boolean;
    /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
    animated?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** ProgressSection */
const ProgressSection = (props: Props) => {
    const { setProps, ...others } = props;

    return <Progress.Section {...others} />;
};

ProgressSection.defaultProps = {};

export default ProgressSection;
