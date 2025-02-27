import {
    Alert as MantineAlert,
    MantineColor,
    MantineRadius,
} from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import { StylesApiProps } from "props/styles";
import React, { useEffect, useRef } from "react";
import { getLoadingState } from "../../utils/dash3";

interface Props extends BoxProps, StylesApiProps, DashBaseProps {
    /* Content */
    children?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: MantineColor;
    /** Alert title */
    title?: React.ReactNode;
    /** Icon displayed next to the title */
    icon?: React.ReactNode;
    /** Determines whether close button should be displayed, `false` by default */
    withCloseButton?: boolean;
    /** Close button `aria-label` */
    closeButtonLabel?: string;
    /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Duration in milliseconds after which the Alert dismisses itself. */
    duration?: number;
    /** Whether to hide the alert */
    hide?: boolean;
}

/** Alert */
const Alert = ({ children, setProps, loading_state, duration, hide = false, ...others }: Props) => {
    const ref = useRef(null);
    const isLoading = getLoadingState(loading_state)

    useEffect(() => {
        if (duration) {
            ref.current = setTimeout(() => setProps({ hide: true }), duration);
        }
        return () => {
            if (ref.current) {
                clearTimeout(ref.current);
            }
        };
    }, [hide]);

    const onClose = () => {
        setProps({ hide: true });
    };

    return hide ? null : (
        <MantineAlert
            {...others}
            onClose={onClose}
            data-dash-is-loading={isLoading || undefined}
        >
            {children}
        </MantineAlert>
    );
};

export default Alert;
