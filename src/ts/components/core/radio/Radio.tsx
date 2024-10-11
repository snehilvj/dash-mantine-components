import {
    MantineColor,
    Radio as MantineRadio,
    MantineRadius,
    MantineSize,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps, PersistenceProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React from "react";
import RadioGroupContext from "./RadioGroupContext";

interface Props
    extends BoxProps,
        StylesApiProps,
        DashBaseProps,
        PersistenceProps {
    /** Content of the `label` associated with the radio */
    label?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
    color?: MantineColor;
    /** Controls size of the component, `'sm'` by default */
    size?: MantineSize;
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Position of the label relative to the input, `'right'` by default */
    labelPosition?: "left" | "right";
    /** Description displayed below the label */
    description?: React.ReactNode;
    /** Error displayed below the label */
    error?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color to set icon color, by default value depends on `theme.autoContrast` */
    iconColor?: MantineColor;
    /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** To be used with Radio group */
    value?: string;
}

/** Radio */
const Radio = (props: Props) => {
    const {
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const { radioOnClick } = React.useContext(RadioGroupContext);

    return (
        <MantineRadio
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            onChange={(ev) => setProps({ checked: ev.currentTarget.checked })}
            onClick={radioOnClick}
            {...others}
        />
    );
};

Radio.defaultProps = {
    persisted_props: ["checked"],
    persistence_type: "local",
};

export default Radio;
