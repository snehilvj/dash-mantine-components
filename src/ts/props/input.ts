import { MantineRadius, MantineSize } from "@mantine/core";
import { BoxProps } from "./box";
import { StylesApiProps } from "./styles";

export interface __InputWrapperProps {
    /** Contents of `Input.Label` component. If not set, label is not rendered. */
    label?: React.ReactNode;
    /** Contents of `Input.Description` component. If not set, description is not rendered. */
    description?: React.ReactNode;
    /** Contents of `Input.Error` component. If not set, error is not rendered. */
    error?: React.ReactNode;
    /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
    required?: boolean;
    /** Determines whether the required asterisk should be displayed. Overrides `required` prop. Does not add required attribute to the input. `false` by default */
    withAsterisk?: boolean;
    /** Props passed down to the `Input.Label` component */
    labelProps?: Record<string, any>;
    /** Props passed down to the `Input.Description` component */
    descriptionProps?: Record<string, any>;
    /** Props passed down to the `Input.Error` component */
    errorProps?: Record<string, any>;
    /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
}

export interface InputWrapperProps
    extends __InputWrapperProps,
        BoxProps,
        StylesApiProps {
    /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
    size?: MantineSize | (string & {});
    /** `Input.Label` root element, `'label'` by default */
    labelElement?: "label" | "div";
}

export interface __InputProps {
    /** Content section rendered on the left side of the input */
    leftSection?: React.ReactNode;
    /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
    leftSectionWidth?: React.CSSProperties["width"];
    /** Props passed down to the `leftSection` element */
    leftSectionProps?: object;
    /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
    leftSectionPointerEvents?: React.CSSProperties["pointerEvents"];
    /** Content section rendered on the right side of the input */
    rightSection?: React.ReactNode;
    /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
    rightSectionWidth?: React.CSSProperties["width"];
    /** Props passed down to the `rightSection` element */
    rightSectionProps?: object;
    /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
    rightSectionPointerEvents?: React.CSSProperties["pointerEvents"];
    /** Props passed down to the root element of the `Input` component */
    wrapperProps?: Record<string, any>;
    /** Sets `required` attribute on the `input` element */
    required?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: MantineRadius;
    /** Sets `disabled` attribute on the `input` element */
    disabled?: boolean;
    /** Controls input `height` and horizontal `padding`, `'sm'` by default */
    size?: MantineSize | (string & {});
    /** Determines whether the input should have `cursor: pointer` style, `false` by default */
    pointer?: boolean;
    /** Determines whether the input should have red border and red text color when the `error` prop is set, `true` by default */
    withErrorStyles?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Name prop */
    name?: string;
    /** Props passed down to the `Input` component */
    inputProps?: Record<string, any>;
}

export interface InputProps extends BoxProps, __InputProps, StylesApiProps {
    /** Determines whether the input should have error styles and `aria-invalid` attribute */
    error?: React.ReactNode;
    /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
    multiline?: boolean;
    /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
    withAria?: boolean;
}

export interface __BaseInputProps
    extends __InputWrapperProps,
        Omit<__InputProps, "wrapperProps"> {
    /** Props passed down to the root element */
    wrapperProps?: Record<string, any>;
    /** Readonly */
    readOnly?: boolean;
}
