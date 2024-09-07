import {
    ChipFactory,
    Chip as MantineChip,
    MantineColor,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesAPIProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesAPIProps<ChipFactory["stylesNames"], ChipFactory["variant"]>,
        DashBaseProps,
        PersistenceProps {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: MantineRadius;
    /** Controls various properties related to component size, `'sm'` by default */
    size?: MantineSize;
    /** Chip input type, `'checkbox'` by default */
    type?: "radio" | "checkbox";
    /** `label` element associated with the input */
    children: React.ReactNode;
    /** Checked state for controlled component */
    checked?: boolean;
    /** Controls components colors based on `variant` prop. Key of `theme.colors` or any valid CSS color. `theme.primaryColor` by default */
    color?: MantineColor;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Any element or component to replace default icon */
    icon?: React.ReactNode;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** whether the component is disabled */
    disabled?: boolean;
    /** To be used with chip group */
    value?: string;
}

/** Chip */
const Chip = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const onChange = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <MantineChip onChange={onChange} {...others}>
            {children}
        </MantineChip>
    );
};

Chip.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Chip;
