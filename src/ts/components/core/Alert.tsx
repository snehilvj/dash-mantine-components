import React, { useRef, useEffect } from "react";
import { Alert as MantineAlert } from "@mantine/core";
import { AlertVariant } from "@mantine/core/lib/Alert/Alert.styles";
import {
    MantineColor,
    MantineNumberSize,
    MantineStylesAPIProps,
    MantineStyleSystemProps,
} from "props/mantine";
import { DashBaseProps } from "props/dash";

type Props = {
    /** Alert title */
    title?: React.ReactNode;
    /** Controls Alert background, color and border styles, defaults to light */
    variant?: AlertVariant;
    /** Alert message */
    children?: React.ReactNode;
    /** Color from theme.colors */
    color?: MantineColor;
    /** Icon displayed next to title */
    icon?: React.ReactNode;
    /** True to display close button */
    withCloseButton?: boolean;
    /** Radius from theme.radius, or number to set border-radius in px, defaults to theme.defaultRadius */
    radius?: MantineNumberSize;
    /** Duration in milliseconds after which the Alert dismisses itself. */
    duration?: number;
    /** Whether to hide the alert */
    hide?: boolean;
    /** Close button aria-label */
    closeButtonLabel?: string;
} & DashBaseProps &
    MantineStyleSystemProps &
    MantineStylesAPIProps;

/** Attract user attention with important static message */
const Alert = (props: Props) => {
    const { children, setProps, duration, hide, ...other } = props;
    const ref = useRef(null);

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
        <MantineAlert {...other} onClose={onClose}>
            {children}
        </MantineAlert>
    );
};

Alert.defaultProps = {
    hide: false,
};

export default Alert;
