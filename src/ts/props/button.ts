import { MantineRadius, MantineSize } from '@mantine/core';
import React from 'react';

export interface __BaseButtonProps {
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: MantineRadius;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** `X` icon `width` and `height`, `80%` by default */
    iconSize?: number | string;
    /** Content rendered inside the button, for example `VisuallyHidden` with label for screen readers */
    children?: React.ReactNode;
    /** Replaces default close icon. If set, `iconSize` prop is ignored. */
    icon?: React.ReactNode;
}

export interface __CloseButtonProps extends __BaseButtonProps {
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: MantineSize | (string & {}) | number;
}

export interface __ClearButtonProps extends __BaseButtonProps {
    /** Size of the button, by default value is based on input context */
    size?: MantineSize | (string & {});
}
