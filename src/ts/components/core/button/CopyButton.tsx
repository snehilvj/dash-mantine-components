import {
    CopyButton as MantineCopyButton,
    Button as MantineButton,
    MantineColor,
    MantineGradient,
    MantineRadius,
    MantineSize,
} from '@mantine/core';
import { BoxProps } from 'props/box';
import { DashBaseProps } from 'props/dash';
import { StylesApiProps } from 'props/styles';
import React, { useRef, useEffect, useState } from 'react';
import { getTargetText } from '../../../utils/dash3';

interface Props extends DashBaseProps, BoxProps, StylesApiProps {
    /** Value to be copied to clipboard */
    value: string;
    /** Copied status timeout in ms, `1000` by default */
    timeout?: number;
    /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
    size?: MantineSize | `compact-${MantineSize}` | (string);
    /** Key of `theme.colors` or any valid CSS color, used when the value has not been copied yet */
    color?: MantineColor;
    /** Key of `theme.colors` or any valid CSS color, used after the value has been copied to clipboard */
    copiedColor?: MantineColor;
    /** Determines whether button should take 100% width of its parent container, `false` by default */
    fullWidth?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: MantineGradient;
    /** Indicates disabled state */
    disabled?: boolean;
    /** Button content displayed before copying */
    children?: React.ReactNode;
    /** Button content displayed after the value has been copied to clipboard */
    copiedChildren?: React.ReactNode;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** An integer that represents the number of times that this element has been clicked on */
    n_clicks?: number;
    /** Set to true to trigger copy in a callback - will auto-reset to false after copy */
    triggerCopy?: boolean;
    /**
     * The id of target component containing text to copy to the clipboard.
     * The inner text of the `children` prop will be copied to the clipboard.  If none, then the text from the
     *  `value` prop will be copied.
     */
    target_id?: string;
}
/** CopyButton - Button component with copy to clipboard functionality */
const CopyButton = ({
    value = '',
    timeout = 1000,
    triggerCopy = false,
    children,
    copiedChildren,
    color,
    copiedColor,
    setProps,
    disabled,
    n_clicks = 0,
    target_id,
    ...others
}: Props) => {
    const copyFnRef = useRef<(() => void) | null>(null);
    const prevTriggerRef = useRef(triggerCopy);

    useEffect(() => {
        if (triggerCopy && !prevTriggerRef.current && copyFnRef.current) {
            copyFnRef.current();
            setProps({ triggerCopy: false });
        }
        prevTriggerRef.current = triggerCopy;
    }, [triggerCopy]);

    const handleClick = (copy: () => void) => {
        if (!disabled) {
            if (target_id) {
                // Update the value state, then trigger copy
                const textToCopy = getTargetText(target_id);
                setProps({
                    value: textToCopy,
                    n_clicks: n_clicks + 1,
                    triggerCopy: true,
                });
            } else {
                copy();
                setProps({
                    n_clicks: n_clicks + 1,
                });
            }
        }
    };

    return (
        <MantineCopyButton value={value} timeout={timeout}>
            {({ copied, copy }) => {
                copyFnRef.current = copy;
                return (
                    <MantineButton
                        onClick={() => handleClick(copy)}
                        disabled={disabled}
                        color={copied ? copiedColor || color : color}
                        {...others}
                    >
                        {copied ? copiedChildren || children : children}
                    </MantineButton>
                );
            }}
        </MantineCopyButton>
    );
};

export default CopyButton;
