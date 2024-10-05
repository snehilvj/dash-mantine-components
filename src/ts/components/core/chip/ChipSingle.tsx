import {
    Chip as MantineChip,
    MantineColor,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";

interface Props
    extends BoxProps,
        StylesApiProps,
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
    /** Static id to connect input with the label, by default `id` is randomly generated */
    id?: string;
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

/** ChipSingle - use as a stand-alone chip only.  Use Chip with ChipGroup */
const ChipSingle = (props: Props) => {
    const {
        children,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        checked,
        ...others
    } = props;

    return (
        <MantineChip
            checked={checked}
            onChange={() => setProps({ checked: !checked })}
            {...others}
        >
            {children}
        </MantineChip>
    );
};

ChipSingle.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default ChipSingle;
