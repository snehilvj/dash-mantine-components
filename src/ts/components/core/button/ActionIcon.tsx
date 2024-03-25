import {
    ActionIcon as MantineActionIcon,
    MantineColor,
    MantineGradient,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { LoaderProps } from "props/loader";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: MantineSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: MantineColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: MantineRadius;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** Icon displayed inside the button */
    children?: React.ReactNode;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}

/** ActionIcon */
const ActionIcon = (props: Props) => {
    const { children, setProps, disabled, n_clicks, ...others } = props;

    const increment = () => {
        if (!disabled) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <MantineActionIcon disabled={disabled} onClick={increment} {...others}>
            {children}
        </MantineActionIcon>
    );
};

ActionIcon.defaultProps = {
    n_clicks: 0,
};

export default ActionIcon;
