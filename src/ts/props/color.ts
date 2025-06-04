import { MantineSize } from '@mantine/core';
import { ColorFormat } from '@mantine/core/lib/components/ColorPicker/ColorPicker.types';
import { BoxProps } from './box';
import { __BaseInputProps } from './input';
import { PopoverProps } from './popover';
import { StylesApiProps } from './styles';

export interface __ColorPickerProps {
    /** Controlled component value */
    value?: string;
    /** Color format, `'hex'` by default */
    format?: ColorFormat;
    /** Determines whether the color picker should be displayed, `true` by default */
    withPicker?: boolean;
    /** An array of colors in one of the supported formats. Used to render swatches list below the color picker. */
    swatches?: string[];
    /** Number of swatches per row, `7` by default */
    swatchesPerRow?: number;
    /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
    size?: MantineSize | (string & {});
}

export interface ColorPickerProps
    extends BoxProps,
        __ColorPickerProps,
        StylesApiProps {
    /** Determines whether the component should take 100% width of its container, `false` by default */
    fullWidth?: boolean;
    /** Determines whether interactive elements (sliders thumbs and swatches) should be focusable, `true` by default */
    focusable?: boolean;
    /** Saturation slider `aria-label` prop */
    saturationLabel?: string;
    /** Hue slider `aria-label` prop */
    hueLabel?: string;
    /** Alpha slider `aria-label` prop */
    alphaLabel?: string;
}

export interface ColorInputProps
    extends BoxProps,
        __BaseInputProps,
        __ColorPickerProps,
        StylesApiProps {
    /** If input is not allowed, the user can only pick value with color picker and swatches, `false` by default */
    disallowInput?: boolean;
    /** Determines whether the input value should be reset to the last known valid value when the input loses focus, `true` by default */
    fixOnBlur?: boolean;
    /** Props passed down to the `Popover` component */
    popoverProps?: PopoverProps;
    /** Determines whether the preview color swatch should be displayed in the left section of the input, `true` by default */
    withPreview?: boolean;
    /** Determines whether eye dropper button should be displayed in the right section, `true` by default */
    withEyeDropper?: boolean;
    /** An icon to replace the default eye dropper icon */
    eyeDropperIcon?: React.ReactNode;
    /** Determines whether the dropdown should be closed when one of the color swatches is clicked, `false` by default */
    closeOnColorSwatchClick?: boolean;
    /** Props passed down to the eye dropper button */
    eyeDropperButtonProps?: Record<string, any>;
}
