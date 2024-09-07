import {
    Checkbox,
    CheckboxIndicatorFactory,
    MantineColor,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { InputWrapperProps } from "props/input";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<
            CheckboxIndicatorFactory["stylesNames"],
            CheckboxIndicatorFactory["variant"]
        >,
        DashBaseProps,
        InputWrapperProps {
    /** Key of `theme.colors` or any valid CSS color to set input background color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the component, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
    iconColor?: MantineColor;
    /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Indeterminate state of the checkbox. If set, `checked` prop is ignored. */
    indeterminate?: boolean;
    /** Icon */
    icon?: React.ReactNode;
    /** Indeterminate icon */
    indeterminateIcon?: React.ReactNode;
    /** Determines whether the component should have checked styles */
    checked?: boolean;
    /** Determines whether the component should have disabled styles */
    disabled?: boolean;
}

/** CheckboxIndicator */
const CheckboxIndicator = (props: Props) => {
    const { icon, indeterminateIcon, ...others } = props;

    const iconFunc = ({ indeterminate, ...others }) => {
        const selected: any = indeterminate ? indeterminateIcon : icon;
        Object.assign(selected.props._dashprivate_layout.props, others);
        return selected;
    };

    return (
        <Checkbox.Indicator
            icon={icon || indeterminateIcon ? iconFunc : undefined}
            {...others}
        />
    );
};

CheckboxIndicator.defaultProps = {};

export default CheckboxIndicator;
